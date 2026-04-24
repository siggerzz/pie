/**
 * Mirrors Storybook's CSF id-derivation algorithm so we can derive a story's
 * runtime id from its title + export name without loading the full stories
 * module at runtime (those modules pull in `lit` / Storybook internals that
 * Node can't resolve cross-workspace).
 *
 * Algorithm (from `@storybook/csf`, stable across Storybook 6-10):
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

/**
 * Derives the Storybook story id for a given title + story export name.
 *
 * @example
 *   getStoryId({ title: 'Button' }, 'Primary');         // 'button--primary'
 *   getStoryId({ title: 'Button' }, 'FormIntegration'); // 'button--form-integration'
 *
 * Tests pass `meta = { title: 'Button' }` directly rather than importing the
 * stories module value, because that module pulls in browser-only deps that
 * Playwright's Node loader can't process.
 */
export const getStoryId = (meta: { title: string }, storyName: string): string => `${sanitize(meta.title)}--${sanitize(storyName)}`;
