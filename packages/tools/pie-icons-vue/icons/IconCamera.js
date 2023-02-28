import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCamera',
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
            class: 'c-pieIcon c-pieIcon--camera'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 4.719a2.844 2.844 0 102.844 2.844A2.853 2.853 0 008 4.719zm0 4.375a1.531 1.531 0 111.531-1.531A1.54 1.54 0 018 9.093zm5.617-5.469a24.668 24.668 0 00-2.318-.437l-.455-1.05a1.532 1.532 0 00-1.409-.92h-2.87a1.531 1.531 0 00-1.409.928l-.455 1.05a24.84 24.84 0 00-2.301.438A1.523 1.523 0 001.219 5.12V11.5a1.54 1.54 0 001.531 1.531h10.5a1.54 1.54 0 001.531-1.531V5.121a1.532 1.532 0 00-1.164-1.496zM13.47 11.5a.219.219 0 01-.219.219H2.75a.219.219 0 01-.219-.219V5.121a.219.219 0 01.166-.21 22.69 22.69 0 012.538-.463h.376l.753-1.75a.219.219 0 01.201-.132h2.87a.219.219 0 01.201.132l.753 1.75h.376c.856.11 1.706.264 2.546.463a.227.227 0 01.158.21V11.5z',
                fill: '#242E30'
            }
        })]);
    }
};
