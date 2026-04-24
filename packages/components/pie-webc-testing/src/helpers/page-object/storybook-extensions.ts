import { getStorybookBaseUrl } from '../storybook-base-url';

export const buildUrl = (
    componentName: string,
    path: string,
    args: string,
    globals = '',
) => {
    let url = `${getStorybookBaseUrl()}/iframe.html?id=${componentName}${path || ''}`;

    if (args) {
        url += `&args=${args}`;
    }

    if (globals) {
        url += `&globals=${globals}`;
    }

    return url;
};
