import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNotificationFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--notificationFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 29.125a4.506 4.506 0 004.086-2.625h-8.172A4.507 4.507 0 0016 29.125z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.692 21.084a9.554 9.554 0 01-2.817-6.834v-.875a7.875 7.875 0 00-7-7.822V2.875h-1.75v2.678a8.137 8.137 0 00-7 8.146v.551a9.555 9.555 0 01-2.817 6.808l-.683.708v2.984h22.75v-2.984l-.683-.682z',
                fill: '#242E30'
            }
        })]);
    }
};
