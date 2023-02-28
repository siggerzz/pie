import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCutleryFilled',
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
            class: 'c-pieIcon c-pieIcon--cutleryFilled'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_6127_3639)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                d: 'M4.719 7.134l1.312-.018-.07-5.591-1.303.63.06 4.979z'
            }
        }), h('path', {
            attrs: {
                d: 'M11.133 11.701l2.135.333c-.018 1.216-.123 2.196-.184 2.966h1.321a91.89 91.89 0 00.166-12.031c-.087-.963-.323-1.479-.778-1.672a1.137 1.137 0 00-1.357.43 13.869 13.869 0 00-2.24 8.75 1.217 1.217 0 00.937 1.224z'
            }
        }), h('path', {
            attrs: {
                d: 'M3.336 1.525l-1.312.63v4.821a3.08 3.08 0 002.695 2.888V15H6.03V9.82a3.045 3.045 0 002.555-2.844V1.525l-1.312.63v4.821c0 1.164-1.391 1.636-1.969 1.636-.577 0-1.969-.472-1.969-1.636V1.525z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_6127_3639'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
