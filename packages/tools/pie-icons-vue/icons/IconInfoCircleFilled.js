import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconInfoCircleFilled',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--infoCircleFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.21875C6.6588 1.21875 5.34771 1.61646 4.23254 2.3616C3.11737 3.10673 2.2482 4.16582 1.73494 5.40493C1.22169 6.64404 1.0874 8.00752 1.34905 9.32296C1.61071 10.6384 2.25656 11.8467 3.20494 12.7951C4.15331 13.7434 5.36161 14.3893 6.67705 14.651C7.99248 14.9126 9.35596 14.7783 10.5951 14.2651C11.8342 13.7518 12.8933 12.8826 13.6384 11.7675C14.3835 10.6523 14.7813 9.3412 14.7813 8C14.7789 6.20221 14.0637 4.47872 12.7925 3.20749C11.5213 1.93626 9.79779 1.22107 8 1.21875ZM7.34375 7.29125H8.65625V10.625H7.34375V7.29125ZM8.875 5.375C8.875 5.54806 8.82369 5.71723 8.72754 5.86112C8.63139 6.00502 8.49474 6.11717 8.33485 6.18339C8.17497 6.24962 7.99903 6.26695 7.8293 6.23319C7.65957 6.19943 7.50366 6.11609 7.38129 5.99372C7.25891 5.87135 7.17558 5.71544 7.14182 5.5457C7.10805 5.37597 7.12538 5.20004 7.19161 5.04015C7.25784 4.88027 7.36999 4.74361 7.51388 4.64746C7.65777 4.55132 7.82694 4.5 8 4.5C8.23207 4.5 8.45463 4.59219 8.61872 4.75628C8.78282 4.92038 8.875 5.14294 8.875 5.375Z',
                fill: '#242E30'
            }
        })]);
    }
};