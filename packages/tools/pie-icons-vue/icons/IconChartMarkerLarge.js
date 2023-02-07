import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChartMarkerLarge',
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
            class: 'c-pieIcon c-pieIcon--chartMarkerLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9 22.125H10.75V29.125H9V22.125ZM15.125 29.125H16.875V16.875H15.125V29.125ZM21.25 20.375V29.125H23V20.375H21.25ZM21.25 9C21.2492 9.39358 21.16 9.78194 20.9888 10.1364C20.8177 10.4908 20.569 10.8022 20.2613 11.0475L16 14.495L11.7387 11.0825C11.4263 10.8335 11.1749 10.5165 11.0035 10.1556C10.8322 9.79471 10.7455 9.39947 10.75 9V2.875H21.25V9ZM19.5 4.625H12.5V9C12.5006 9.13143 12.5308 9.26103 12.5884 9.37919C12.6459 9.49734 12.7294 9.60101 12.8325 9.6825L16 12.255L19.1675 9.7175C19.2754 9.6324 19.3617 9.52311 19.4194 9.39846C19.4772 9.2738 19.5048 9.1373 19.5 9V4.625Z',
                fill: '#242E30'
            }
        })]);
    }
};