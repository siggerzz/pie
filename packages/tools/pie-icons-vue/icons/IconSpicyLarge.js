import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSpicyLarge',
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
            class: 'c-pieIcon c-pieIcon--spicyLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.37 26.106c-3.168 0-4.375-1.829-4.48-1.934l-.586-.875 1.006-.385c4.279-1.662 6.44-6.037 8.4-9.843a23.407 23.407 0 013.5-5.67 6.126 6.126 0 018.794 0 6.44 6.44 0 010 8.942c-3.29 3.378-9.302 7.875-12.994 9.091a11.28 11.28 0 01-3.64.674zm-2.118-2.231c.875.446 2.512.779 5.198-.131 3.404-1.164 9.222-5.495 12.311-8.663a4.672 4.672 0 000-6.492 4.376 4.376 0 00-6.282 0 22.226 22.226 0 00-3.212 5.25c-1.872 3.745-3.98 7.918-8.015 10.036z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.921 11.109l-1.592-.718c2.87-6.44 6.755-6.51 6.921-6.51v1.75c-.105 0-2.957.167-5.329 5.478z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M25.056 12.806a6.011 6.011 0 01-6.002-6.002 2.77 2.77 0 01.052-.63l1.706.385a2.003 2.003 0 000 .245 4.261 4.261 0 004.253 4.252c.277.004.553-.025.822-.087l.386 1.706a5.25 5.25 0 01-1.217.131z',
                fill: '#242E30'
            }
        })]);
    }
};
