import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDashboardLarge',
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
            class: 'c-pieIcon c-pieIcon--dashboardLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M29.073 18.625a13.003 13.003 0 01-1.112 5.25h-1.933a11.28 11.28 0 00-.184-10.832l1.207-1.374a13.02 13.02 0 012.022 6.956zM15.948 7.25a11.322 11.322 0 016.308 1.916l1.155-1.321a13.125 13.125 0 00-19.486 16.03H5.86A11.375 11.375 0 0115.948 7.25zm3.386 5.25l1.181-1.348a8.75 8.75 0 00-13.317 7.473h1.75A7 7 0 0119.334 12.5zm-.508 5.889a3.5 3.5 0 11-2.878-1.514 3.5 3.5 0 011.557.385l8.566-9.783 1.304 1.147-8.549 9.765zm-1.128 1.986a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0z',
                fill: '#242E30'
            }
        })]);
    }
};
