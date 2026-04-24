import type { Locator, Page } from '@playwright/test';
import type { PieButton } from '../../../src/index.ts';

export type FormInput = {
    userName: string;
    userEmail: string;
    userPassword: string;
    userPaymentCardType: 'visa' | 'mastercard' | 'amex';
    userPaymentCardNumber: string;
    userPaymentCardExpiration: string;
};

export type FormButtonType = 'pie-button-submit' | 'pie-button-reset' | 'native-reset';

const FORM_TEST_IDS = {
    container: 'testForm',
    name: 'name',
    email: 'usermail',
    password: 'password',
    cardType: 'usercard',
    cardNumber: 'card-number',
    cardExpiration: 'card-expiration',
    submittedFlag: 'formSubmittedFlag',
    pieButtonSubmit: 'pie-button-submit',
    pieButtonReset: 'pie-button-reset',
    nativeButtonReset: 'button-reset',
} as const;

const buttonTestIdFor = (type: FormButtonType): string => {
    switch (type) {
        case 'pie-button-submit': return FORM_TEST_IDS.pieButtonSubmit;
        case 'pie-button-reset': return FORM_TEST_IDS.pieButtonReset;
        case 'native-reset': return FORM_TEST_IDS.nativeButtonReset;
        default: throw new Error(`Invalid button type: ${type as string}`);
    }
};

/**
 * Drives the `button--form-integration` story. Replaces the old
 * `FormIntegrationPage` page-object — no `BasePage` ancestry, no story-id
 * constructor argument; it's a plain class wrapping the form locators.
 *
 * Tests construct it after calling `mountStory(ButtonStories, 'FormIntegration')`,
 * passing the page and the story root locator returned by the fixture.
 */
export class FormIntegrationHelper {
    readonly form: Locator;
    readonly userNameInput: Locator;
    readonly userEmailInput: Locator;
    readonly userPasswordInput: Locator;
    readonly userPaymentCardTypeSelect: Locator;
    readonly userPaymentCardNumberInput: Locator;
    readonly userPaymentCardExpirationInput: Locator;
    readonly resetPieButton: Locator;
    readonly resetNativeButton: Locator;
    readonly submitPieButton: Locator;
    readonly formSubmittedFlag: Locator;

    constructor (readonly page: Page, root: Locator) {
        this.form = root.getByTestId(FORM_TEST_IDS.container);
        this.userNameInput = this.form.getByTestId(FORM_TEST_IDS.name);
        this.userEmailInput = this.form.getByTestId(FORM_TEST_IDS.email);
        this.userPasswordInput = this.form.getByTestId(FORM_TEST_IDS.password);
        this.userPaymentCardTypeSelect = this.form.getByTestId(FORM_TEST_IDS.cardType);
        this.userPaymentCardNumberInput = this.form.getByTestId(FORM_TEST_IDS.cardNumber);
        this.userPaymentCardExpirationInput = this.form.getByTestId(FORM_TEST_IDS.cardExpiration);

        this.resetPieButton = this.form.getByTestId(FORM_TEST_IDS.pieButtonReset);
        this.resetNativeButton = this.form.getByTestId(FORM_TEST_IDS.nativeButtonReset);
        this.submitPieButton = this.form.getByTestId(FORM_TEST_IDS.pieButtonSubmit);

        this.formSubmittedFlag = page.getByTestId(FORM_TEST_IDS.submittedFlag);
    }

    async fillForm (inputData: FormInput): Promise<void> {
        await this.userNameInput.fill(inputData.userName);
        await this.userEmailInput.fill(inputData.userEmail);
        await this.userPasswordInput.fill(inputData.userPassword);
        await this.userPaymentCardTypeSelect.selectOption(inputData.userPaymentCardType);
        await this.userPaymentCardNumberInput.fill(inputData.userPaymentCardNumber);
        await this.userPaymentCardExpirationInput.fill(inputData.userPaymentCardExpiration);
    }

    async getFormFieldValues (): Promise<FormInput> {
        return {
            userName: await this.userNameInput.inputValue(),
            userEmail: await this.userEmailInput.inputValue(),
            userPassword: await this.userPasswordInput.inputValue(),
            userPaymentCardType: await this.userPaymentCardTypeSelect.inputValue() as FormInput['userPaymentCardType'],
            userPaymentCardNumber: await this.userPaymentCardNumberInput.inputValue(),
            userPaymentCardExpiration: await this.userPaymentCardExpirationInput.inputValue(),
        };
    }

    /**
     * Reads the runtime `form` association of the rendered pie-button. Used
     * to assert the component picks up its containing `<form>` and not any
     * sibling form rendered for negative-testing.
     */
    async getAssociatedFormIdForButton (buttonType: FormButtonType): Promise<string | null> {
        const testId = buttonTestIdFor(buttonType);
        await this.page.locator(`[data-test-id="${testId}"]`).waitFor({ state: 'attached' });

        return this.page.evaluate((selector) => {
            const button = document.querySelector(selector) as PieButton | null;
            return button?.form ? button.form.id : null;
        }, `[data-test-id="${testId}"]`);
    }
}
