import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconIceCreamLarge',
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
            class: 'c-pieIcon c-pieIcon--iceCreamLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.698 15.694a.875.875 0 00-.272-.263V14.25a4.576 4.576 0 00-1.067-2.922c.053-.336.08-.676.078-1.015a7.438 7.438 0 00-14.875 0 7 7 0 00.21 1.644 3.657 3.657 0 00-1.207 2.625v.823a.928.928 0 00-.254.236.874.874 0 000 .945c1.339 2.188 2.695 4.165 4.008 6.125 1.312 1.96 2.625 3.859 3.955 6.003a.875.875 0 00.726.411.874.874 0 00.726-.394l7.963-12.084a.875.875 0 00.009-.953zM16 4.625a5.688 5.688 0 015.67 5.364 5.136 5.136 0 00-2.17-.49 4.944 4.944 0 00-1.391.192l.472 1.68c.286-.077.58-.118.875-.122a3.09 3.09 0 013.22 3.001v1.225c-1.688.21-3.911.411-4.13.429a3.123 3.123 0 00-2.896 2.108c-.298.63-.35.63-.525.63-.175 0-.262 0-.586-.752a2.913 2.913 0 00-2.485-2.083 43.72 43.72 0 01-2.713-.315v-.875c0-1.225 1.269-2.213 2.827-2.213a4.1 4.1 0 01.735.07l.358-1.75a5.311 5.311 0 00-2.87.192 5.239 5.239 0 01-.079-.604A5.696 5.696 0 0116 4.625zm0 22.006c-1.094-1.75-2.205-3.342-3.273-4.917-.97-1.418-1.968-2.87-2.957-4.375.656.087 1.321.157 2.004.21h.096c.543 0 .709.306 1.059 1.067a2.39 2.39 0 002.196 1.759 2.266 2.266 0 002.109-1.636c.323-.683.507-1.068 1.417-1.111.105 0 1.864-.158 3.5-.342L16 26.631z',
                fill: '#242E30'
            }
        })]);
    }
};
