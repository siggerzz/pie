import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'WalletFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--walletFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.74964 2.06496L8.48714 1.32996C8.33218 0.95571 8.03523 0.658106 7.66132 0.50231C7.28741 0.346514 6.86701 0.345221 6.49214 0.498714L2.72964 2.06496H8.74964Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.39714 10.325C9.29271 10.325 9.19256 10.2835 9.11872 10.2096C9.04488 10.1358 9.00339 10.0356 9.00339 9.93121V6.78121C9.00401 6.70559 9.02851 6.63209 9.07339 6.57121C9.10496 6.51928 9.14837 6.47555 9.20008 6.44362C9.25179 6.41168 9.31032 6.39244 9.37089 6.38746H12.4859V4.90871C12.4859 4.5026 12.3246 4.11312 12.0374 3.82596C11.7502 3.53879 11.3608 3.37746 10.9546 3.37746H1.98589C1.75791 3.36882 1.53083 3.41065 1.32089 3.49996C1.14216 3.58781 0.98276 3.71045 0.852041 3.86071C0.721322 4.01096 0.621914 4.18579 0.559644 4.37496C0.488723 4.54389 0.452995 4.72551 0.454644 4.90871V11.9087C0.456941 12.3141 0.619007 12.7023 0.905675 12.9889C1.19234 13.2756 1.58049 13.4377 1.98589 13.44H10.9546C11.36 13.4377 11.7482 13.2756 12.0349 12.9889C12.3215 12.7023 12.4836 12.3141 12.4859 11.9087V10.325H9.39714Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.3159 7.69996V9.00371H13.3346V7.69996H10.3159Z"
      }
    })]);
  }

};