import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLogoSkipLarge',
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
            class: 'c-pieIcon c-pieIcon--logoSkipLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M18.5355 14.0361C17.7247 13.0872 17.2026 12.4115 17.3241 11.6687C17.4729 10.7432 18.1165 9.8079 19.2462 9.8079C20.4867 9.8079 20.8076 10.0694 21.5027 10.4126C21.5825 10.4535 21.6707 10.4755 21.7604 10.4768C21.9998 10.4758 22.2101 10.3176 22.2776 10.0879L23.2984 6.45762L22.5926 6.11248L22.4886 6.06193L22.4555 6.04637C21.6202 5.67265 20.7134 5.48616 19.7984 5.49998C15.9542 5.49998 12.4572 8.39526 11.8806 11.9546C11.4781 14.4454 12.9948 16.2022 14.1022 17.4865L14.1994 17.5973C14.9995 18.5005 15.5605 19.2025 15.4234 20.0162C15.1949 21.4289 14.0924 21.8946 13.1708 21.8946C11.7124 21.8946 11.2876 21.6535 10.4826 21.2568C10.3698 21.2014 10.1579 21.0973 9.97702 21.1596C9.80411 21.2161 9.67023 21.3544 9.61925 21.529L8.64702 25.029L8.52161 25.4772C8.52161 25.4772 10.434 26.5 12.6467 26.5C15.9222 26.5 18.7542 25.1778 20.4352 21.984C20.856 21.1682 21.1052 20.2748 21.1673 19.359C21.2519 17.0266 19.534 15.195 18.5355 14.0361Z',
                fill: '#242E30'
            }
        })]);
    }
};