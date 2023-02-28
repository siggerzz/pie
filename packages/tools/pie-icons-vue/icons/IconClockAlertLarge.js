import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClockAlertLarge',
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
            class: 'c-pieIcon c-pieIcon--clockAlertLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75a12.25 12.25 0 00-11.874 9.284l.403-.158a5.838 5.838 0 011.566-.323A10.5 10.5 0 119.49 24.224a2.914 2.914 0 01-.044 2.109A12.251 12.251 0 1016 3.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M15.125 9v7.849l5.67 3.404.91-1.506-4.83-2.896V9h-1.75z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.602 26.535a1.312 1.312 0 100-2.625 1.312 1.312 0 000 2.625z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.15 14.512l.744 7.613H7.31l.744-7.648a4.541 4.541 0 00-1.444-.227 4.5 4.5 0 00-1.461.262z',
                fill: '#242E30'
            }
        })]);
    }
};
