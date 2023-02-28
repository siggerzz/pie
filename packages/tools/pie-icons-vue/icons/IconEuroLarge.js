import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEuroLarge',
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
            class: 'c-pieIcon c-pieIcon--euroLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.894 19.5l1.356 1.12a5.73 5.73 0 01-4.419 1.951 5.95 5.95 0 01-5.748-3.946H9v-1.75h1.636a7.338 7.338 0 01-.061-.875c.003-.293.023-.585.061-.875H9v-1.75h2.056a5.906 5.906 0 015.732-3.946 5.845 5.845 0 014.375 1.942l-1.296 1.181a4.068 4.068 0 00-3.114-1.373 4.103 4.103 0 00-3.745 2.196h3.867v1.75h-4.471a4.896 4.896 0 000 1.75h4.471v1.75h-3.867a4.104 4.104 0 003.78 2.196 3.974 3.974 0 003.106-1.321zM28.25 16a12.25 12.25 0 11-24.499 0 12.25 12.25 0 0124.499 0zm-1.75 0a10.5 10.5 0 10-21 0 10.5 10.5 0 0021 0z',
                fill: '#242E30'
            }
        })]);
    }
};
