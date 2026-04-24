import percySnapshot from '@percy/playwright';
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => {
    test(`should render all prop variations for Variant: ${variant}`, async ({ mountStoryById, page }) => {
        const { root } = await mountStoryById(`button--${variant}-variations`, { waitUntil: 'networkidle' });

        await expect.soft(root.locator('pie-button').first()).toBeVisible();
        await percySnapshot(page, `PIE Button - Variant: ${variant}`, { widths: [1280] });
    });
});

test('should render isFullWidth correctly in different layout contexts', async ({ mountStoryById, page }) => {
    const { root } = await mountStoryById('button--is-full-width-layout-variations', { waitUntil: 'networkidle' });

    await expect.soft(root.locator('pie-button').first()).toBeVisible();
    await percySnapshot(page, 'PIE Button - isFullWidth in different layouts', { widths: [1280] });
});
