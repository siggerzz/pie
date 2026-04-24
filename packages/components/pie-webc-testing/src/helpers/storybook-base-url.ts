/**
 * Resolves the Storybook base URL for the current environment.
 *
 * - Local dev: the testing-only Storybook on port 6007
 * - CI on `main`: the published testing Storybook
 * - CI on a PR: the per-PR preview deploy
 */
export const getStorybookBaseUrl = (): string => {
    if (!process.env.CI) {
        return 'http://localhost:6007';
    }

    if (process.env.GITHUB_REF === 'refs/heads/main') {
        return 'https://webc-testing.pie.design';
    }

    return `https://pr${process.env.PR_NUMBER}-storybook-testing.pie.design`;
};
