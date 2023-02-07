import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPieChartLarge',
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
            class: 'c-pieIcon c-pieIcon--pieChartLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16.875 2.875H16C12.519 2.875 9.18064 4.25781 6.71922 6.71922C4.25781 9.18064 2.875 12.519 2.875 16V16.875H16.875V2.875ZM15.125 15.125H4.625C4.82713 12.4072 5.99828 9.85238 7.92533 7.92533C9.85238 5.99828 12.4072 4.82713 15.125 4.625V15.125ZM15.195 26.5L15.055 28.25C12.43 28.0372 9.94273 26.9871 7.95948 25.2543C5.97623 23.5216 4.60185 21.1977 4.03875 18.625H5.8325C6.38161 20.7476 7.57823 22.6464 9.25608 24.0577C10.9339 25.469 13.0097 26.3226 15.195 26.5ZM28.25 16C28.249 19.0887 27.0854 22.0638 24.9907 24.3336C22.896 26.6034 20.0237 28.0016 16.945 28.25L16.805 26.5C19.3027 26.3314 21.658 25.2759 23.4462 23.5239C25.2344 21.7719 26.3378 19.4387 26.5574 16.9449C26.777 14.4512 26.0983 11.961 24.6439 9.92343C23.1894 7.88588 21.0548 6.43503 18.625 5.8325V4.03C21.3538 4.62864 23.7959 6.142 25.5466 8.31913C27.2972 10.4963 28.251 13.2063 28.25 16Z',
                fill: '#242E30'
            }
        })]);
    }
};