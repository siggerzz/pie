const { isColorDark } = require('../../../../utilities/colors');
const { deindentHTML } = require('../../shortcode-utilities');

const createHighContrastName = tokenName => {
    const highContrast = '(High Contrast)';
    const hasShade = tokenName.includes('Light') || tokenName.includes('Dark');

    if (hasShade) {
        const tokenNameArray = tokenName.split(' ');
        const shade = tokenNameArray.pop();

        return `${shade} ${tokenNameArray.join(' ')} ${highContrast}`;
    }

    return `${tokenName} ${highContrast}`;
};

/**
 * Splits a color token into it's hexcode and opacity value (if one is provided)
 * @param {string} token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
 * @returns {object} an object containing a hexcode and opacity value (if opacity was provided)
 */
const splitColorToken = token => {
    const [hexcode, opacity] = token.split('|');

    return {
        hexcode,
        opacity
    };
};


const buildColorName = tokenName => {
    const highContrastSuffix = ' hc';

    if (tokenName.includes(highContrastSuffix)) {
        return createHighContrastName(tokenName.replace(highContrastSuffix, ''));
    }

    return tokenName;
};


/**
 * Builds the example color swatch to show on the token list item
 * @param {string} token - the token value i.e. #000, #ffffff, #000|0.85 or #000000|0.85
 * @returns {string} - the color swatch example HTML string
 */
const buildColorExample = token => {
    const tokenValues = splitColorToken(token);
    const classes = ['c-tokensTable-example'];

    if (tokenValues.opacity) {
        classes.push('c-tokensTable-example--checked');
    }

    if (!isColorDark(tokenValues.hexcode)) {
        classes.push('c-tokensTable-example--bordered');
    }

    const cssVariable = tokenValues.opacity
        ? `--example-checked-opacity: ${tokenValues.opacity}`
        : `--example-background-color: ${tokenValues.hexcode}`;

    return `<div class="${classes.join(' ')}" style="${cssVariable}";></div>`;
};

/**
 * Builds the overall token description element for global and alias Colour tokens.
 * @param {*} tokenMetadata the metadata for the token. data such as descriptions
 * @returns {string} - the description HTML string
 */
const buildColorDescription = tokenMetadata => {
    let description = '';

    // Alias tokens have a globalToken property that references the global token used by the alias
    if (tokenMetadata.globalToken) {
        // It's an alias colour token
        description = `
        <span class="c-tokensTable-tokenDescription u-spacing-b--bottom">
            ${tokenMetadata.description}
        </span>`;
    } else {
        // It's a global colour token
        description = `<span class="c-tokensTable-tokenDescription">${tokenMetadata.description}</span>`;
    }

    return deindentHTML(description);
};

module.exports = {
    buildColorName,
    buildColorExample,
    buildColorDescription
};
