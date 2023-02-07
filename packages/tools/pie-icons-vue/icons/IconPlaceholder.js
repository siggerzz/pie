import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlaceholder',
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
            class: 'c-pieIcon c-pieIcon--placeholder'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M0.0827576 0H15.9172L16 0.0827576V15.9172L15.9172 16H0.0827576L0 15.9172V0.0827576L0.0827576 0ZM15.8338 15.8338V0.165503H0.165489V15.8338H15.8338ZM3.26852 1H12.7315C13.9844 1 15 2.01565 15 3.26852V12.7315C15 13.9844 13.9844 15 12.7315 15H3.26852C2.01565 15 1 13.9844 1 12.7315V3.26852C1 2.01565 2.01565 1 3.26852 1Z',
                fill: '#242E30'
            }
        })]);
    }
};