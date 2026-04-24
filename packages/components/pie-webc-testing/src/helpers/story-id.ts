/**
 * Mirrors Storybook's CSF id-derivation algorithm so we can derive a story's
 * runtime id from its export name without a build-time codegen step.
 *
 * The algorithm (from `@storybook/csf`, stable across Storybook 6-10):
 *   1. Split a camelCase export name into space-separated words.
 *   2. Lowercase, replace each non-alphanumeric character with `-`, collapse
 *      runs of `-`, trim leading/trailing `-`.
 *   3. id = sanitize(meta.title) + '--' + sanitize(words(exportName))
 */
const splitCamelCase = (input: string): string => input
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');

const sanitize = (input: string): string => splitCamelCase(input)
    .toLowerCase()
    // eslint-disable-next-line no-useless-escape
    .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

const toStoryId = (kind: string, name: string): string => `${sanitize(kind)}--${sanitize(name)}`;

type Meta = { title: string };
type StoriesModule = { default: Meta } & Record<string, unknown>;

/**
 * Derives the Storybook story id from a stories module and an exported story name.
 *
 * @example
 *   import * as ButtonStories from '.../pie-button.test.stories';
 *   getStoryId(ButtonStories, 'Primary');         // 'button--primary'
 *   getStoryId(ButtonStories, 'FormIntegration'); // 'button--form-integration'
 *
 * `storyName` is constrained to actual exports of the module, so renaming a
 * story breaks tests at build time rather than at runtime via a Storybook 404.
 */
export const getStoryId = <
    M extends StoriesModule,
    K extends Exclude<keyof M, 'default'> & string,
>(storiesModule: M, storyName: K): string => toStoryId(storiesModule.default.title, storyName);

/**
 * Extracts the args type from a CSF story export so callers can pass typed
 * `args` overrides to `mountStory` without restating the prop interface.
 */
export type StoryArgs<S> = S extends { args: infer A } ? A : never;
