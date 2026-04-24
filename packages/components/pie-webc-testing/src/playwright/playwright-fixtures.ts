import {
    test as baseTest, expect as baseExpect, type Page, type Locator,
} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getStorybookBaseUrl } from '../helpers/storybook-base-url';
import { getStoryId, type StoryArgs } from '../helpers/story-id';

type StoriesModule = { default: { title: string } } & Record<string, unknown>;

type Globals = {
    writingDirection?: 'ltr' | 'rtl' | 'auto';
};

export type MountStoryOptions<TArgs> = {
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

interface ExtendedTestContext {
    page: Page;
    makeAxeBuilder: () => AxeBuilder;
    /**
     * Mounts a Storybook story by typed reference and returns a locator for
     * its rendered root.
     *
     * @example
     *   import * as ButtonStories from '.../pie-button.test.stories';
     *
     *   const { root } = await mountStory(ButtonStories, 'Primary', {
     *       args: { variant: 'secondary', slot: 'Hello & <world>' },
     *   });
     *   await expect(root.locator('pie-button')).toBeVisible();
     *
     * Renaming a story export (e.g. `Primary` → `Default`) becomes a TypeScript
     * error at the call site, so Storybook 404s caused by drift are caught at
     * build time. Prop overrides are injected via `window.__PIE_TEST_ARGS__`,
     * sidestepping Storybook's URL `&args=` channel and its sanitization.
     */
    mountStory: <
        M extends StoriesModule,
        K extends Exclude<keyof M, 'default'> & string,
    >(
        storiesModule: M,
        storyName: K,
        opts?: MountStoryOptions<StoryArgs<M[K]>>,
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
        const mount: ExtendedTestContext['mountStory'] = async (storiesModule, storyName, opts) => {
            const id = getStoryId(storiesModule, storyName);

            await page.addInitScript(({ id: injectedId, args }) => {
                (window as unknown as { __PIE_TEST_ARGS__?: unknown }).__PIE_TEST_ARGS__ = {
                    id: injectedId,
                    args,
                };
            }, { id, args: opts?.args ?? {} });

            await page.goto(buildIframeUrl(id, opts?.globals), {
                waitUntil: opts?.waitUntil ?? 'load',
            });

            await page.locator(READY_SELECTOR).waitFor({ state: 'attached' });

            return {
                root: page.locator(STORY_ROOT_SELECTOR),
                page,
            };
        };

        await use(mount);
    },
});

export const expect = baseExpect;
