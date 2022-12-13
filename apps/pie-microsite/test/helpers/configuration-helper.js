
/*
// This function is used to set the correct URL for WebDriverIO tests.
//
// local - http://localhost:8080/
// 'main' branch - Github Page - https://pie.design/
// Pull Request - GitHub Pages Preview URL - https://pie.design/pr-preview/pr-<pr-number>
// PIE_URL_PREFIX - Set in GitHub Actions config.
*/
exports.getBaseUrl = () => {
    if (!process.env.CI) {
        return 'http://localhost:8080/';
    }
    const baseUrl = 'https://pie.design/';
    const path = process.env.GITHUB_REF_NAME !== 'main' ? process.env.PIE_URL_PREFIX : '/';

    return baseUrl + path;
};