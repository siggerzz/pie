import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRssLarge',
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
            class: 'c-pieIcon c-pieIcon--rssLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.762 21.355a1.312 1.312 0 101.853 1.86 1.312 1.312 0 00-1.853-1.86z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.5 7v1.5a15 15 0 0115 15H25A16.5 16.5 0 008.5 7z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.25 11.807v1.5a9.458 9.458 0 019.442 9.443h1.5A10.957 10.957 0 009.25 11.807z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10 16.615v1.5A3.893 3.893 0 0113.885 22h1.5A5.393 5.393 0 0010 16.615z',
                fill: '#242E30'
            }
        })]);
    }
};
