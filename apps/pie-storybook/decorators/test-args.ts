import { type TemplateResult } from 'lit';
import { type StoryContext } from '@storybook/web-components';

const READY_ATTR = 'data-pie-test-ready';
const ARGS_KEY = '__PIE_TEST_ARGS__';

type InjectedTestArgs = {
    id: string;
    args?: Record<string, unknown>;
};

declare global {
    interface Window { [ARGS_KEY]?: InjectedTestArgs; }
}

/**
 * Storybook decorator that lets Playwright tests inject typed prop overrides
 * via `window.__PIE_TEST_ARGS__` instead of through the URL `&args=` channel.
 *
 * Bypassing the URL avoids Storybook's XSS sanitization and the lossy
 * `key:value;...` flattening that can't represent objects, arrays, HTML, or
 * characters like `&`, `;`, `:`, `<`, `>`, newlines.
 *
 * Tests register the payload via `page.addInitScript` so it lands on `window`
 * before Storybook boots; this decorator merges it into `ctx.args` for the
 * matching story id only. After the story renders we set
 * `body[data-pie-test-ready="true"]` to signal Playwright that the DOM is ready.
 *
 * Gated on `BROWSER_TESTING`; in the regular docs build this decorator is
 * never registered, so it has zero impact on the developer-facing Storybook.
 */
export const TestArgs = (story: () => TemplateResult, ctx: StoryContext): TemplateResult => {
    if (typeof window !== 'undefined') {
        const injected = window[ARGS_KEY];
        if (injected && injected.id === ctx.id && injected.args) {
            ctx.args = { ...ctx.args, ...injected.args };
        }

        document.body.removeAttribute(READY_ATTR);
        queueMicrotask(() => {
            requestAnimationFrame(() => {
                document.body.setAttribute(READY_ATTR, 'true');
            });
        });
    }

    return story();
};
