import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';

test('should render all size variations', async ({ mountStoryById, page }) => {
    const { root } = await mountStoryById('button--responsive-button-variations', { waitUntil: 'networkidle' });

    await expect.soft(root.locator('pie-button').first()).toBeVisible();
    await percySnapshot(page, 'PIE Button - sizes/isResponsive/responsiveSize', { widths: [1280] });
});

test('should render all size variations, with larger button text string', async ({ mountStoryById, page }) => {
    const { root } = await mountStoryById('button--double-line-text-button-variations', { waitUntil: 'networkidle' });

    await expect.soft(root.locator('pie-button').first()).toBeVisible();
    await percySnapshot(page, 'PIE Button - sizes/isResponsive/responsiveSize - double line text', percyWidths);
});
