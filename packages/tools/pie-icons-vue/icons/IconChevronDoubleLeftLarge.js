import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronDoubleLeftLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronDoubleLeftLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.0213 5.87625L7.53877 16C7.52659 16.0309 7.52659 16.0653 7.53877 16.0963L18.0388 26.1588L16.8138 27.375L6.37502 17.33C6.039 16.9756 5.85168 16.5059 5.85168 16.0175C5.85168 15.5291 6.039 15.0594 6.37502 14.705L16.8225 4.625L18.0213 5.87625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.1938 5.87625L15.7025 16C15.6903 16.0309 15.6903 16.0653 15.7025 16.0963L26.2025 26.1588L24.9775 27.375L14.4775 17.3125C14.1415 16.9581 13.9542 16.4884 13.9542 16C13.9542 15.5116 14.1415 15.0419 14.4775 14.6875L24.995 4.625L26.1938 5.87625Z',
                fill: '#242E30'
            }
        })]);
    }
};