import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconIdCard',
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
            class: 'c-pieIcon c-pieIcon--idCard'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.813 9.094h-.875a1.54 1.54 0 01-1.532-1.531v-.875a1.54 1.54 0 011.531-1.532h.875a1.54 1.54 0 011.532 1.532v.875a1.54 1.54 0 01-1.532 1.53zm-.875-2.625a.219.219 0 00-.22.218v.875a.219.219 0 00.22.22h.875a.219.219 0 00.218-.22v-.875a.219.219 0 00-.218-.218h-.875z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M13.25 2.969H2.75A1.54 1.54 0 001.219 4.5v7a1.54 1.54 0 001.531 1.531h10.5a1.54 1.54 0 001.531-1.531v-7a1.54 1.54 0 00-1.531-1.531zm.219 8.531a.219.219 0 01-.219.219H2.75a.219.219 0 01-.219-.219v-7a.219.219 0 01.219-.219h10.5a.219.219 0 01.219.219v7z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.491 10.406l.657-1.312H9.103v1.312',
                fill: '#242E30'
            }
        })]);
    }
};
