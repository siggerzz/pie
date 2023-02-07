import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChequeFilled',
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
            class: 'c-pieIcon c-pieIcon--chequeFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.1 6.81002L8 7.12502L8.315 5.02502L11.2375 2.11127C11.4702 1.88044 11.7847 1.75092 12.1125 1.75092C12.4403 1.75092 12.7548 1.88044 12.9875 2.11127C13.2183 2.34399 13.3479 2.65849 13.3479 2.98627C13.3479 3.31405 13.2183 3.62855 12.9875 3.86127L10.1 6.81002ZM15 6.25002V14.125H1V6.25002H6.81875L6.4775 8.64752L10.7212 8.04377L12.515 6.25002H15ZM8.875 9.96877H3.625V11.2813H8.875V9.96877ZM12.375 9.96877H10.625V11.2813H12.375V9.96877Z',
                fill: '#242E30'
            }
        })]);
    }
};