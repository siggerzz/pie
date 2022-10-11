import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'KosherSmallIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 14 14"
      },
      "class": "c-pieIcon c-pieIcon--kosherSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.9375 7.0525L12.9238 3.66625H8.98625L7 0.21875L5.01375 3.66625H1.07625L3.0625 7.0525L1.1375 10.3862H5.01375L7 13.7725L8.98625 10.3862H12.8625L10.9375 7.0525ZM11.0163 4.76L10.3162 5.95875L9.625 4.76H11.0163ZM9.6775 7.04375L8.35625 9.2925H5.64375L4.3225 7.04375L5.64375 4.76H8.35625L9.6775 7.04375ZM7 2.40625L7.72625 3.66625H6.27375L7 2.40625ZM2.98375 4.76H4.375L3.675 5.95875L2.98375 4.76ZM2.98375 9.2925L3.6925 8.1375L4.375 9.2925H2.98375ZM7 11.6025L6.2825 10.3862H7.7175L7 11.6025ZM10.3075 8.1025L10.9725 9.2575H9.625L10.3075 8.1025Z"
      }
    })]);
  }

};