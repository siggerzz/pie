import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGridView',
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
            class: 'c-pieIcon c-pieIcon--gridView'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.90625 6.90625H2.09375V2.09375H6.90625V6.90625ZM3.40625 5.59375H5.59375V3.40625H3.40625V5.59375ZM13.9062 6.90625H9.09375V2.09375H13.9062V6.90625ZM10.4062 5.59375H12.5938V3.40625H10.4062V5.59375ZM6.90625 13.9062H2.09375V9.09375H6.90625V13.9062ZM3.40625 12.5938H5.59375V10.4062H3.40625V12.5938ZM13.9062 13.9062H9.09375V9.09375H13.9062V13.9062ZM10.4062 12.5938H12.5938V10.4062H10.4062V12.5938Z',
                fill: '#242E30'
            }
        })]);
    }
};