import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAppSuccessLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--appSuccessLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.125 2.875H9.875C9.17881 2.875 8.51113 3.15156 8.01884 3.64384C7.52656 4.13613 7.25 4.80381 7.25 5.5V26.5C7.25 27.1962 7.52656 27.8639 8.01884 28.3562C8.51113 28.8484 9.17881 29.125 9.875 29.125H22.125C22.8212 29.125 23.4889 28.8484 23.9812 28.3562C24.4734 27.8639 24.75 27.1962 24.75 26.5V5.5C24.75 4.80381 24.4734 4.13613 23.9812 3.64384C23.4889 3.15156 22.8212 2.875 22.125 2.875ZM23 26.5C23 26.7321 22.9078 26.9546 22.7437 27.1187C22.5796 27.2828 22.3571 27.375 22.125 27.375H9.875C9.64294 27.375 9.42038 27.2828 9.25628 27.1187C9.09219 26.9546 9 26.7321 9 26.5V5.5C9 5.26794 9.09219 5.04538 9.25628 4.88128C9.42038 4.71719 9.64294 4.625 9.875 4.625H12.6137L13.305 6.375H18.695L19.3863 4.625H22.125C22.3571 4.625 22.5796 4.71719 22.7437 4.88128C22.9078 5.04538 23 5.26794 23 5.5V26.5ZM19.3163 11.8787L20.5587 13.1213L15.3088 18.3712C15.2274 18.4533 15.1306 18.5184 15.024 18.5628C14.9174 18.6072 14.803 18.6301 14.6875 18.6301C14.572 18.6301 14.4576 18.6072 14.351 18.5628C14.2444 18.5184 14.1476 18.4533 14.0662 18.3712L11.4412 15.7463L12.6838 14.5037L14.6875 16.5163L19.3163 11.8787Z',
                fill: '#242E30'
            }
        })]);
    }
};