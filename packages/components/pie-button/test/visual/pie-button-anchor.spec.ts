import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
import { variants } from '../../src/defs.ts';

variants.forEach((variant) => {
    test(`should render all size and variant variations for anchor tag for variant: ${variant}`, async ({ mountStoryById, page }) => {
        const { root } = await mountStoryById(`button--${variant}-anchor-variations`, { waitUntil: 'networkidle' });

        await expect.soft(root.locator('pie-button').first()).toBeVisible();
        await percySnapshot(page, `PIE Button Anchor Variants - ${variant}`, percyWidths);
    });
});
