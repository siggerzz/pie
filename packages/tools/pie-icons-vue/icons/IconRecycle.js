import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRecycle',
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
            class: 'c-pieIcon c-pieIcon--recycle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.5801 12.2788C14.45 12.517 14.2574 12.7154 14.0231 12.8526C13.7888 12.9897 13.5216 13.0606 13.2501 13.0575H10.0039L10.9489 13.985L10.0214 14.9213L7.47513 12.375L10.0214 9.84626L10.9489 10.7825L10.0039 11.7188H13.2501C13.2897 11.7199 13.3287 11.7098 13.3628 11.6896C13.3968 11.6695 13.4245 11.6402 13.4426 11.605C13.4622 11.5751 13.4726 11.5401 13.4726 11.5044C13.4726 11.4686 13.4622 11.4337 13.4426 11.4038L11.8939 8.77876L13.0226 8.11376L14.5801 10.7388C14.7188 10.9717 14.792 11.2377 14.792 11.5088C14.792 11.7798 14.7188 12.0459 14.5801 12.2788ZM8.19263 2.56626L9.79388 5.27001L8.46388 4.88501L8.09638 6.14501L11.5439 7.12501L12.5501 3.71251L11.2901 3.33626L10.9226 4.58751L9.32138 1.87501C9.18207 1.65263 8.98855 1.46929 8.75897 1.3422C8.52939 1.21511 8.27129 1.14844 8.00888 1.14844C7.74647 1.14844 7.48836 1.21511 7.25878 1.3422C7.0292 1.46929 6.83568 1.65263 6.69638 1.87501L5.21763 4.36876L6.34638 5.03376L7.80763 2.56626C7.92138 2.38251 8.07888 2.38251 8.19263 2.56626ZM4.33388 8.43751L4.76263 9.75001L6.01388 9.34751L4.93763 5.98751L1.50763 7.04626L1.87513 8.29751L3.08263 7.93001L1.42888 10.7563C1.2936 10.9888 1.22197 11.2529 1.2212 11.5219C1.22043 11.7909 1.29055 12.0554 1.4245 12.2887C1.55845 12.522 1.7515 12.7159 1.98422 12.8509C2.21694 12.9858 2.4811 13.0571 2.75013 13.0575H5.77763V11.745H2.75013C2.71058 11.7461 2.67154 11.736 2.63748 11.7159C2.60342 11.6958 2.57574 11.6664 2.55763 11.6313C2.53805 11.6014 2.52763 11.5664 2.52763 11.5306C2.52763 11.4949 2.53805 11.4599 2.55763 11.43L4.33388 8.43751Z',
                fill: '#242E30'
            }
        })]);
    }
};