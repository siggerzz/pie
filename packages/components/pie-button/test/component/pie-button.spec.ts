import { type Page } from '@playwright/test';
import { test, expect } from '@justeattakeaway/pie-webc-testing/src/playwright/playwright-fixtures.ts';
// `import type *` is erased at runtime, so Playwright never tries to load the
// stories file (which imports `lit`, `@storybook/web-components`, etc.). The
// `typeof ButtonStoriesNS` generic still lets TS check that a story name is a
// real export — renaming `Primary` to `Default` becomes a compile error here.
// `ButtonStoryProps` is the args type the test stories template uses; it
// extends `ButtonProps` with story-only flags (e.g. `showSubmitButton`).
// eslint-disable-next-line import/no-relative-packages
import type * as ButtonStoriesNS from '../../../../../apps/pie-storybook/stories/testing/pie-button.test.stories.ts';
import { FormIntegrationHelper, type FormInput } from '../helpers/test-helpers/form-integration-helper.ts';
import type { ButtonProps } from '../../src/index.ts';

type ButtonStories = typeof ButtonStoriesNS;
type ButtonStoryProps = ButtonStoriesNS.ButtonProps;

const buttonMeta = { title: 'Button' };

const formInputData: FormInput = {
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
    userPassword: 'password',
    userPaymentCardType: 'mastercard',
    userPaymentCardNumber: '4921111111111111',
    userPaymentCardExpiration: '12/24',
};

const clickButton = (page: Page, label: string) => page.locator('pie-button', { hasText: label }).click();

test('should correctly work with native click events', async ({ mountStory, page }) => {
    const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'Primary');

    const consoleMessages: string[] = [];
    page.on('console', (message) => {
        if (message.type() === 'info') consoleMessages.push(message.text());
    });

    await root.locator('pie-button', { hasText: 'Label' }).click();

    expect(consoleMessages).toContain('Button clicked!');
});

test.describe('Form Actions', () => {
    test.describe('Submit', () => {
        test('should correctly submit an HTML form when type is `submit`', async ({ mountStory, page }) => {
            const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration');
            const form = new FormIntegrationHelper(page, root);

            await form.fillForm(formInputData);
            await clickButton(page, 'Submit');

            await expect(form.formSubmittedFlag).toHaveCount(1);
            await expect(form.formSubmittedFlag).toBeHidden();
        });

        test('should trigger native HTML form validation for required fields and submit after correcting when type is `submit`', async ({ mountStory, page }) => {
            const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration');
            const form = new FormIntegrationHelper(page, root);

            await clickButton(page, 'Submit');

            await expect.soft(form.formSubmittedFlag).toHaveCount(0);

            await form.fillForm(formInputData);
            await clickButton(page, 'Submit');

            await expect(form.formSubmittedFlag).toHaveCount(1);
        });

        test('should not submit the form when button is disabled and type is `submit`', async ({ mountStory, page }) => {
            const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration', { args: { disabled: true } });
            const form = new FormIntegrationHelper(page, root);

            await clickButton(page, 'Submit');

            await expect(form.formSubmittedFlag).toHaveCount(0);
        });

        test('should not submit the form when button has isLoading set and type is `submit`', async ({ mountStory, page }) => {
            const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration', { args: { isLoading: true } });
            const form = new FormIntegrationHelper(page, root);

            await clickButton(page, 'Submit');

            await expect(form.formSubmittedFlag).toHaveCount(0);
        });

        test('should include pie-button\'s name and value in the form submission data when it triggers submission', async ({ mountStory, page }) => {
            await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormSubmission');

            const requestPromise = page.waitForRequest(/submit-endpoint/);
            await page.fill('input[name="username"]', 'testUser');

            await clickButton(page, 'Submit');

            const request = await requestPromise;
            const formData = request.postData();

            expect(formData).toContain('submitButton=submitValue');
        });

        test('should respect all form-related attributes on the pie-button', async ({ mountStory, page }) => {
            await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormWithAllAttributes');

            const requestPromise = page.waitForRequest(/custom-endpoint/);
            await page.fill('input[name="username"]', 'testUser');
            await clickButton(page, 'Submit');

            const request = await requestPromise;
            const postData = request.postData();
            const method = request.method();
            const headers = request.headers();

            expect(postData).not.toBeNull();
            const submitButtonDisposition = 'Content-Disposition: form-data; name="submitButton"';
            const submitButtonValuePosition = (postData as string).indexOf(submitButtonDisposition) + submitButtonDisposition.length;
            expect((postData as string).includes(submitButtonDisposition)).toBeTruthy();
            expect((postData as string).substring(submitButtonValuePosition)).toContain('submitValue');
            expect(headers['content-type']).toMatch(/^multipart\/form-data;/);
            expect(method).toBe('POST');
        });

        const submitTestCases = [
            { titlePrefix: 'should submit', showSubmitButton: true, expectedFormSubmittedFlagCount: 1 },
            { titlePrefix: 'should not submit', showSubmitButton: false, expectedFormSubmittedFlagCount: 0 },
        ];

        submitTestCases.forEach((testCase) => {
            test(` ${testCase.titlePrefix} the form when pressing Enter with pie-button type 'submit': ${testCase.showSubmitButton}`, async ({ mountStory, page }) => {
                const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration', { args: { showSubmitButton: testCase.showSubmitButton } });
                const form = new FormIntegrationHelper(page, root);

                await form.fillForm(formInputData);
                await form.userPasswordInput.focus();
                await form.userPasswordInput.press('Enter');

                await expect(form.formSubmittedFlag).toHaveCount(testCase.expectedFormSubmittedFlagCount);
            });
        });

        test('should NOT submit the form when pressing Enter on a pie-button that is not type of submit', async ({ mountStory, page }) => {
            const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration');
            const form = new FormIntegrationHelper(page, root);

            await form.fillForm(formInputData);

            await page.keyboard.press('Tab');
            await page.keyboard.press('Enter');

            await expect(form.formSubmittedFlag).toHaveCount(0);
        });

        test('should NOT submit the form when pressing Enter on a native non-submit button', async ({ mountStory, page }) => {
            const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration', { args: { showNativeResetButton: true } });
            const form = new FormIntegrationHelper(page, root);

            await form.fillForm(formInputData);

            await form.resetNativeButton.focus();
            await form.resetNativeButton.press('Enter');

            await expect(form.formSubmittedFlag).toHaveCount(0);
        });
    });

    test.describe('Reset', () => {
        test('should reset the form by clicking the reset button when type is `reset`', async ({ mountStory, page }) => {
            const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration');
            const form = new FormIntegrationHelper(page, root);

            await form.fillForm(formInputData);

            await clickButton(page, 'Reset');

            const formFieldValues = await form.getFormFieldValues();
            const expectedFormFieldValues: FormInput = {
                userName: '',
                userEmail: '',
                userPassword: '',
                userPaymentCardType: 'visa',
                userPaymentCardNumber: '',
                userPaymentCardExpiration: '',
            };

            expect(formFieldValues).toEqual(expectedFormFieldValues);
        });

        test('should not reset the form when button is disabled and type is `reset`', async ({ mountStory, page }) => {
            const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration', { args: { disabled: true } });
            const form = new FormIntegrationHelper(page, root);

            await form.fillForm(formInputData);

            await clickButton(page, 'Reset');

            expect(await form.getFormFieldValues()).toEqual(formInputData);
        });

        test('should not reset the form when button has `isLoading` set and type is `reset`', async ({ mountStory, page }) => {
            const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration', { args: { isLoading: true } });
            const form = new FormIntegrationHelper(page, root);

            await form.fillForm(formInputData);

            await clickButton(page, 'Reset');

            expect(await form.getFormFieldValues()).toEqual(formInputData);
        });
    });

    test.describe('Association', () => {
        test('should correctly associate with its containing form and not with other forms', async ({ mountStory, page }) => {
            const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'FormIntegration', { args: { renderIncorrectForm: true } });
            const form = new FormIntegrationHelper(page, root);

            // Wait for the submit button to upgrade before evaluating .form
            await form.submitPieButton.waitFor({ state: 'visible' });

            const associatedFormId = await form.getAssociatedFormIdForButton('pie-button-submit');

            expect(associatedFormId).toBe('testForm');
        });
    });
});

test.describe('props', () => {
    test.describe('tag', () => {
        test.describe('when set to "button"', () => {
            test('should render a button element', async ({ mountStory }) => {
                const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'Primary', { args: { tag: 'button' } });

                await expect(root.locator('pie-button').locator('button')).toBeVisible();
            });

            test('should not render anchor-specific attributes', async ({ mountStory }) => {
                const props: Partial<ButtonProps> = {
                    tag: 'button',
                    href: '/test',
                    rel: 'noopener noreferrer',
                    target: '_blank',
                };
                const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'Primary', { args: props });

                const buttonShadowElement = root.locator('pie-button').locator('button');

                await expect(buttonShadowElement).not.toHaveAttribute('rel', props.rel as string);
                await expect(buttonShadowElement).not.toHaveAttribute('target', props.target as string);
                await expect(buttonShadowElement).not.toHaveAttribute('href', props.href as string);
            });
        });

        test.describe('when set to "a"', () => {
            test('should render an anchor element', async ({ mountStory }) => {
                const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'Anchor');

                await expect(root.locator('pie-button').locator('a')).toBeVisible();
            });

            test('should not render button-specific attributes', async ({ mountStory }) => {
                const props: Partial<ButtonProps> = {
                    tag: 'a',
                    disabled: true,
                    isLoading: true,
                    type: 'submit',
                };

                const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'Anchor', { args: props });

                const anchor = root.locator('pie-button').locator('a');
                const spinner = anchor.locator('pie-spinner');

                await expect.soft(anchor).not.toHaveClass(/is-loading/);
                await expect.soft(anchor).not.toHaveAttribute('disabled');
                await expect.soft(anchor).not.toHaveAttribute('type');
                await expect(spinner).not.toBeVisible();
            });

            test('should correctly download files when download is an empty string', async ({ mountStory, page }) => {
                const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'AnchorWithDownload');

                const anchor = root.locator('pie-button');
                const downloadPromise = page.waitForEvent('download');
                await anchor.click();
                const download = await downloadPromise;

                expect(download.suggestedFilename()).toBe('logo--pie--dark.svg');
                expect(download.url()).toContain('/static/images/logo--pie--dark.svg');
            });

            test('should correctly download files with custom filename when download is a non-empty string', async ({ mountStory, page }) => {
                const { root } = await mountStory<ButtonStories, ButtonStoryProps>(buttonMeta, 'AnchorWithDownloadFilename');

                const anchor = root.locator('pie-button');
                const downloadPromise = page.waitForEvent('download');
                await anchor.click();
                const download = await downloadPromise;

                expect(download.suggestedFilename()).toBe('pie-logo.svg');
                expect(download.url()).toContain('/static/images/logo--pie--dark.svg');
            });
        });
    });
});
