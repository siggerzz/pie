import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ReceiptCheckSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--receiptCheckSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9.7125 2.24874C9.68521 2.26192 9.6553 2.26876 9.625 2.26876C9.5947 2.26876 9.56479 2.26192 9.5375 2.24874L7 1.10249L4.4625 2.24874C4.43521 2.26192 4.4053 2.26876 4.375 2.26876C4.3447 2.26876 4.31479 2.26192 4.2875 2.24874L1.09375 0.804993V13.195L4.2875 11.7512C4.31479 11.7381 4.3447 11.7312 4.375 11.7312C4.4053 11.7312 4.43521 11.7381 4.4625 11.7512L7 12.8975L9.5375 11.7512C9.56479 11.7381 9.5947 11.7312 9.625 11.7312C9.6553 11.7312 9.68521 11.7381 9.7125 11.7512L12.9062 13.195V0.804993L9.7125 2.24874ZM11.5938 11.165L10.255 10.5612C10.0575 10.4702 9.84252 10.423 9.625 10.423C9.40748 10.423 9.19254 10.4702 8.995 10.5612L7 11.4625L5.005 10.5875C4.80778 10.4953 4.59272 10.4475 4.375 10.4475C4.15728 10.4475 3.94222 10.4953 3.745 10.5875L2.40625 11.1912V2.83499L3.745 3.43874C3.94254 3.5298 4.15748 3.57695 4.375 3.57695C4.59252 3.57695 4.80746 3.5298 5.005 3.43874L7 2.53749L8.995 3.41249C9.19222 3.5047 9.40728 3.55249 9.625 3.55249C9.84272 3.55249 10.0578 3.5047 10.255 3.41249L11.5938 2.80874V11.165Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.0187 5.54749L9.05624 4.59374L6.15124 7.49874L4.94374 6.28249L3.98124 7.23624L6.15124 9.40624L10.0187 5.54749Z"
      }
    })]);
  }

};