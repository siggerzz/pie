import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFoodReady',
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
            class: 'c-pieIcon c-pieIcon--foodReady'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.941 12.935v-2.923a5.95 5.95 0 00-5.25-5.897 1.278 1.278 0 10-1.347 0 5.95 5.95 0 00-5.25 5.897v2.923h-.656v1.313h13.124v-1.313h-.62zm-10.57-2.923a4.629 4.629 0 019.258 0v2.923H3.37v-2.923z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M7.151 10.152L5.944 8.937 4.98 9.9l2.17 2.17L11.02 8.2l-.963-.953-2.905 2.904z',
                fill: '#242E30'
            }
        })]);
    }
};
