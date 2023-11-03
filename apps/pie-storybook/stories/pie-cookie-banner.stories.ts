import { html, TemplateResult } from 'lit';
import { PieCookieBanner, CookieBannerProps } from '@justeattakeaway/pie-cookie-banner';
import pieCookieBannerLocales from '@justeattakeaway/pie-cookie-banner/locales';
import { PieButton } from '@justeattakeaway/pie-button';
import { PieLink } from '@justeattakeaway/pie-link';
import { PieModal } from '@justeattakeaway/pie-modal';
import { PieIconButton } from '@justeattakeaway/pie-icon-button';
import { PieSwitch } from '@justeattakeaway/pie-switch';
import { action } from '@storybook/addon-actions';

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [
    PieCookieBanner,
    PieButton,
    PieLink,
    PieModal,
    PieIconButton,
    PieSwitch
];

type CookieBannerStoryMeta = StoryMeta<CookieBannerProps>;

const defaultArgs: CookieBannerProps = {
    hasPrimaryActionsOnly: false,
    locale: pieCookieBannerLocales.enGB,
};

const cookieBannerStoryMeta: CookieBannerStoryMeta = {
    title: 'Cookie Banner',
    component: 'pie-cookie-banner',
    argTypes: {
        hasPrimaryActionsOnly: {
            description: 'When true, sets the variant to "primary" for the button which accepts necessary cookies only.',
            control: 'boolean',
        },
        locale: {
            options: Object.keys(pieCookieBannerLocales),
            mapping: pieCookieBannerLocales,
            description: 'Assigns the data for localising the component strings',
            defaultValue: {
                summary: 'enGB',
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default cookieBannerStoryMeta;

const necessaryOnlyAction = action('necessary-only');
const acceptAllAction = action('accept-all');
const managePrefsAction = action('manage-prefs');
const prefsSavedAction = action('prefs-saved');

const BaseStoryTemplate = (props: CookieBannerProps) : TemplateResult => {
    const { hasPrimaryActionsOnly, locale } = props;

    return html`
        <pie-cookie-banner
            .locale=${locale}
            ?hasPrimaryActionsOnly="${hasPrimaryActionsOnly}"
            @pie-cookie-banner-necessary-only="${necessaryOnlyAction}"
            @pie-cookie-banner-accept-all="${acceptAllAction}"
            @pie-cookie-banner-manage-prefs="${managePrefsAction}"
            @pie-cookie-banner-prefs-saved="${prefsSavedAction}"></pie-cookie-banner>`;
};

/**
 * Creates a 'page' of scrollable HTML. Useful for testing scroll behaviours in a Story.
 */
const createScrollablePageHTML = () : TemplateResult => {
    const items = [];
    for (let i = 0; i < 200; i++) {
        items.push(html`<li>Item ${i}</li>`);
    }

    return html`
        <h1>Test Page</h1>
        <p>Test copy</p>
        <ul>${items}</ul>`;
};

const ScrollablePageStoryTemplate = (props: CookieBannerProps) : TemplateResult => html`
    ${BaseStoryTemplate(props)}
    ${createScrollablePageHTML()}`;

export const Default = createStory<CookieBannerProps>(BaseStoryTemplate, defaultArgs)();
export const ScrollablePage = createStory<CookieBannerProps>(ScrollablePageStoryTemplate, defaultArgs)();
