import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconStarLarge',
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
            class: 'c-pieIcon c-pieIcon--starLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.601 29.029l-8.199-4.279a.874.874 0 00-.813 0l-8.19 4.279 1.6-9.126a.875.875 0 00-.253-.77l-6.659-6.467 9.162-1.33a.875.875 0 00.656-.48L16 2.56l4.095 8.295a.875.875 0 00.656.481l9.161 1.33-6.623 6.467a.874.874 0 00-.254.77l1.566 9.126zM16 22.904c.426-.002.847.1 1.225.297l5.049 2.625-.963-5.626a2.624 2.624 0 01.753-2.327l4.086-3.982-5.644-.822a2.624 2.624 0 01-1.977-1.444l-2.53-5.11-2.528 5.11a2.625 2.625 0 01-1.977 1.435l-5.644.823 4.086 3.98a2.625 2.625 0 01.753 2.328l-.963 5.627 5.049-2.625A2.625 2.625 0 0116 22.869v.035z',
                fill: '#242E30'
            }
        })]);
    }
};
