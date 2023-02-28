import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSpicy',
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
            class: 'c-pieIcon c-pieIcon--spicy'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.106 13.758a3.036 3.036 0 01-2.625-1.138l-.429-.682.762-.29c2.275-.874 3.5-3.22 4.506-5.25a12.959 12.959 0 011.96-3.15 3.5 3.5 0 015.075 0 3.71 3.71 0 010 5.146c-1.855 1.82-5.154 4.287-7.201 4.987a6.38 6.38 0 01-2.048.377zm-.761-1.383c.8.175 1.632.102 2.389-.21 1.75-.612 5.005-2.992 6.676-4.707a2.389 2.389 0 000-3.317 2.275 2.275 0 00-3.194 0 12.25 12.25 0 00-1.75 2.835c-.918 1.838-2.091 4.104-4.121 5.399z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M13.145 3.783l-1.085-.736A3.789 3.789 0 0115 1.22V2.53a2.538 2.538 0 00-1.855 1.252z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M13.136 6.74a3.631 3.631 0 01-3.631-3.631 1.75 1.75 0 010-.403l1.277.298-.638-.149.639.14v.114A2.319 2.319 0 0013.1 5.428c.146.014.292.014.438 0l.297 1.277a3.325 3.325 0 01-.7.035z',
                fill: '#242E30'
            }
        })]);
    }
};
