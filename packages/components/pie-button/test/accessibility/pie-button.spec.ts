import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => {
    test(`should test a11y for Variant: ${variant}`, async ({ makeAxeBuilder, mountStoryById }) => {
        const { root } = await mountStoryById(`button--${variant}-variations`);
        await expect.soft(root.locator('pie-button').first()).toBeVisible();

        const results = await makeAxeBuilder().analyze();

        expect(results.violations).toEqual([]);
    });
});
