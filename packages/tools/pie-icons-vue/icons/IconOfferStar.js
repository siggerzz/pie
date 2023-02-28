import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconOfferStar',
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
            class: 'c-pieIcon c-pieIcon--offerStar'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.871 6.355a2.456 2.456 0 01-.472-.586c-.07-.26-.1-.528-.088-.796a2.467 2.467 0 00-.516-1.75 2.467 2.467 0 00-1.75-.517 2.626 2.626 0 01-.796-.087 2.283 2.283 0 01-.578-.473A2.45 2.45 0 008 1.22a2.45 2.45 0 00-1.654.875c-.165.188-.36.347-.577.472-.26.07-.528.1-.796.088a2.415 2.415 0 00-1.75.516 2.467 2.467 0 00-.517 1.75c.012.268-.018.537-.087.796a2.459 2.459 0 01-.473.587A2.415 2.415 0 001.22 8a2.415 2.415 0 00.875 1.645c.186.17.346.368.472.586.07.26.1.528.088.796a2.467 2.467 0 00.516 1.75c.496.39 1.122.575 1.75.517.268-.012.537.018.796.087.217.125.412.285.578.473a2.45 2.45 0 001.654.875 2.45 2.45 0 001.653-.875c.166-.188.36-.348.578-.473.26-.07.528-.099.796-.087a2.415 2.415 0 001.75-.517c.39-.495.574-1.122.516-1.75a2.621 2.621 0 01.088-.796c.126-.218.286-.416.472-.586A2.415 2.415 0 0014.676 8a2.415 2.415 0 00-.805-1.645zm-.936 2.38a3.37 3.37 0 00-.753 1.015A3.503 3.503 0 0012 11.019a1.89 1.89 0 01-.132.875 1.89 1.89 0 01-.875.131c-.43-.017-.86.045-1.268.184a3.367 3.367 0 00-.998.752c-.245.236-.551.534-.735.534-.183 0-.49-.297-.735-.534a3.368 3.368 0 00-1.006-.779A3.503 3.503 0 004.981 12a1.89 1.89 0 01-.875-.132 1.89 1.89 0 01-.131-.875 3.5 3.5 0 00-.158-1.242 3.369 3.369 0 00-.752-.998c-.236-.245-.534-.55-.534-.735 0-.183.298-.49.534-.734.314-.294.57-.644.752-1.033a3.5 3.5 0 00.184-1.269 1.89 1.89 0 01.131-.875 1.89 1.89 0 01.876-.131 3.5 3.5 0 001.242-.158c.377-.186.715-.441.997-.752.245-.236.552-.534.736-.534.183 0 .49.298.734.534.294.314.644.57 1.033.752a3.5 3.5 0 001.269.184 1.89 1.89 0 01.875.131c.112.278.157.578.131.876a3.5 3.5 0 00.157 1.242c.187.377.442.715.753.997.236.245.534.552.534.736 0 .183-.298.507-.534.752zM10.73 8A4.821 4.821 0 008 10.73 4.821 4.821 0 005.27 8 4.821 4.821 0 008 5.27 4.821 4.821 0 0010.73 8z',
                fill: '#242E30'
            }
        })]);
    }
};
