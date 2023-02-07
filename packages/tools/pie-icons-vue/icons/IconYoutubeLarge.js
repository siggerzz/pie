import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconYoutubeLarge',
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
            class: 'c-pieIcon c-pieIcon--youtubeLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.9007 9.97068C27.6162 8.88214 26.7783 8.02487 25.7141 7.73394C23.7857 7.2052 16.0522 7.2052 16.0522 7.2052C16.0522 7.2052 8.3188 7.2052 6.39025 7.73394C5.32607 8.02487 4.48794 8.88214 4.20372 9.97068C3.68701 11.9437 3.68701 16.0604 3.68701 16.0604C3.68701 16.0604 3.68701 20.1768 4.20372 22.1501C4.48794 23.2387 5.32607 24.0958 6.39015 24.387C8.3187 24.9155 16.0521 24.9155 16.0521 24.9155C16.0521 24.9155 23.7856 24.9155 25.714 24.387C26.7782 24.0959 27.6161 23.2387 27.9006 22.1502C28.4174 20.1769 28.4174 16.0605 28.4174 16.0605C28.4174 16.0605 28.4175 11.9437 27.9007 9.97068Z',
                fill: '#FF0000'
            }
        }), h('path', {
            attrs: {
                d: 'M13.5234 19.7978L19.987 16.0604L13.5234 12.3226V19.7978Z',
                fill: 'white'
            }
        })]);
    }
};