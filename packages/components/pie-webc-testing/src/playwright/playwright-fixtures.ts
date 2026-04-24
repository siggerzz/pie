import {
    test as baseTest, expect as baseExpect, type Page, type Locator,
} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getStorybookBaseUrl } from '../helpers/storybook-base-url';
import { getStoryId } from '../helpers/story-id';

type Globals = {
    writingDirection?: 'ltr' | 'rtl' | 'auto';
};

export type MountStoryOptions<TArgs = Record<string, unknown>> = {
    args?: Partial<TArgs>;
    globals?: Globals;
    waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
};

export type MountedStory = {
    /** The Storybook story root inside the iframe (`#storybook-root`). */
    root: Locator;
    /** The same Playwright `Page` the test received, returned for convenience. */
    page: Page;
};

/** Names of all stories exported by a CSF module (everything except `default`). */
export type StoryName<S> = Exclude<keyof S, 'default'> & string;

const READY_SELECTOR = 'body[data-pie-test-ready="true"]';
const STORY_ROOT_SELECTOR = '#storybook-root';

const buildIframeUrl = (storyId: string, globals?: Globals): string => {
    const url = new URL('/iframe.html', getStorybookBaseUrl());
    url.searchParams.set('id', storyId);
    url.searchParams.set('viewMode', 'story');

    if (globals && Object.keys(globals).length > 0) {
        url.searchParams.set(
            'globals',
            Object.entries(globals)
                .map(([k, v]) => `${k}:${v}`)
                .join(';'),
        );
    }

    return url.toString();
};

const navigateToStory = async (
    page: Page,
    storyId: string,
    args: Record<string, unknown> | undefined,
    globals: Globals | undefined,
    waitUntil: 'load' | 'domcontentloaded' | 'networkidle' | undefined,
): Promise<MountedStory> => {
    await page.addInitScript(({ id: injectedId, args: injectedArgs }) => {
        (window as unknown as { __PIE_TEST_ARGS__?: unknown }).__PIE_TEST_ARGS__ = {
            id: injectedId,
            args: injectedArgs,
        };
    }, { id: storyId, args: args ?? {} });

    await page.goto(buildIframeUrl(storyId, globals), {
        waitUntil: waitUntil ?? 'load',
    });

    await page.locator(READY_SELECTOR).waitFor({ state: 'attached' });

    return {
        root: page.locator(STORY_ROOT_SELECTOR),
        page,
    };
};

interface ExtendedTestContext {
    page: Page;
    makeAxeBuilder: () => AxeBuilder;
    /**
     * Mounts a Storybook story by typed reference and returns a locator for
     * its rendered root.
     *
     * The stories module is referenced as a TYPE only (`import type * as ...`)
     * so Playwright doesn't load the file at runtime — that file pulls in
     * `lit`, `@storybook/web-components`, and other browser-only packages
     * which Node's loader can't resolve cross-workspace. The `meta` object
     * carries the title at runtime; the `S` generic carries the export names
     * at compile time.
     *
     * @example
     *   import type * as ButtonStories from '.../pie-button.test.stories';
     *
     *   const { root } = await mountStory<typeof ButtonStories, ButtonProps>(
     *       { title: 'Button' },
     *       'Primary',
     *       { args: { variant: 'secondary', slot: 'Hello & <world>' } },
     *   );
     *
     * Renaming a story export (e.g. `Primary` → `Default`) becomes a TypeScript
     * error at the `'Primary'` call site, so Storybook 404s caused by drift are
     * caught at build time. Prop overrides flow via `window.__PIE_TEST_ARGS__`,
     * sidestepping Storybook's URL `&args=` channel and its sanitization.
     */
    mountStory: <S, TArgs = Record<string, unknown>>(
        meta: { title: string },
        storyName: StoryName<S>,
        opts?: MountStoryOptions<TArgs>,
    ) => Promise<MountedStory>;
    /**
     * Mounts a Storybook story by raw id. Use this when the id is built
     * dynamically (e.g. visual specs iterating over a `variants` array) and
     * a typed `mountStory<typeof Stories>(meta, name)` reference isn't
     * practical. Args cannot be injected through this entrypoint — for
     * prop-driven tests use the typed `mountStory` instead.
     */
    mountStoryById: (
        storyId: string,
        opts?: Omit<MountStoryOptions, 'args'>,
    ) => Promise<MountedStory>;
}

export const test = baseTest.extend<ExtendedTestContext>({
    makeAxeBuilder: [async ({ page }, use) => {
        const makeAxeBuilder = () => new AxeBuilder({ page })
            .withTags(['wcag21a', 'wcag21aa', 'wcag143', 'cat.color', 'cat.aria'])
            .disableRules(['color-contrast-enhanced']);

        await use(makeAxeBuilder);
    }, { timeout: 60000 }],

    mountStory: async ({ page }, use) => {
        const mount: ExtendedTestContext['mountStory'] = (meta, storyName, opts) => {
            const id = getStoryId(meta, storyName);
            return navigateToStory(page, id, opts?.args as Record<string, unknown> | undefined, opts?.globals, opts?.waitUntil);
        };

        await use(mount);
    },

    mountStoryById: async ({ page }, use) => {
        const mount: ExtendedTestContext['mountStoryById'] = (storyId, opts) => navigateToStory(page, storyId, undefined, opts?.globals, opts?.waitUntil);
        await use(mount);
    },
});

export const expect = baseExpect;
