import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPinAtHomeLarge',
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
            class: 'c-pieIcon c-pieIcon--pinAtHomeLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.375 18.625a1.313 1.313 0 110 2.626 1.313 1.313 0 010-2.626zm3.063 1.313a1.313 1.313 0 102.625 0 1.313 1.313 0 00-2.625 0zm4.375 0a1.313 1.313 0 102.625 0 1.313 1.313 0 00-2.625 0zm5.687-1.313a1.313 1.313 0 100 2.626 1.313 1.313 0 000-2.626zM17.461 4.109a3.15 3.15 0 00-2.94 0C10.146 6.68 3.208 13.375 2.92 13.62l1.207 1.26s.928-.875 2.25-2.083V26.5h19.25V23h-1.75v1.75H8.125V11.231a55.837 55.837 0 017.253-5.582 1.444 1.444 0 011.216 0 55.79 55.79 0 017.28 5.582v5.644h1.75v-4.078a130.695 130.695 0 012.249 2.083l1.251-1.26c-.332-.245-7.271-6.939-11.664-9.511z',
                fill: '#242E30'
            }
        })]);
    }
};
