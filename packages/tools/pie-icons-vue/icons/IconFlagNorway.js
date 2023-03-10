import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFlagNorway',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16',
            },
            class: 'c-pieIcon c-pieIcon--norway',
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15A7 7 0 108 1a7 7 0 000 14z',
                fill: '#EEE',
            },
        }), h('path', {
            attrs: {
                d: 'M1.241 9.827a7.006 7.006 0 002.5 3.724V9.827h-2.5zm6.152 5.146a7 7 0 007.366-5.146H7.392v5.146h.002zm7.367-8.8a7 7 0 00-7.37-5.146v5.146h7.37zM3.74 2.45a7.005 7.005 0 00-2.499 3.724h2.5V2.45z',
                fill: '#D80027',
            },
        }), h('path', {
            attrs: {
                d: 'M14.94 7.087H6.477v-5.92a6.954 6.954 0 00-1.823.683v5.237H1.06a7.06 7.06 0 000 1.826h3.593v5.237a6.951 6.951 0 001.823.683v-5.92h8.463a7.077 7.077 0 000-1.826z',
                fill: '#0052B4',
            },
        })]);
    },
};