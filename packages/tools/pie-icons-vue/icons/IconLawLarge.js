import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLawLarge',
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
            class: 'c-pieIcon c-pieIcon--lawLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M19.21 19.255l-1.233-1.234v-.009l.849-.848-1.908-1.908L6.103 26.071 4.87 24.837l10.806-10.814-1.881-1.882-.85.849-1.233-1.234 6.921-6.921 1.234 1.234-.849.848 5.032 5.032.848-.849 1.234 1.234-6.921 6.921zM17.786 8.16l-2.757 2.756 5.032 5.023 2.747-2.748-5.022-5.031z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.08 23.14l-.472-1.741h-8.506l-.472 1.741h9.45z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.692 25.476H16.01l-.464 1.75h11.62l-.473-1.75z',
                fill: '#242E30'
            }
        })]);
    }
};
