import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CreditCardFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--creditCardFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M0.21875 5.90625V10.5C0.221047 10.9054 0.383112 11.2936 0.669781 11.5802C0.95645 11.8669 1.3446 12.029 1.75 12.0312H12.25C12.6554 12.029 13.0436 11.8669 13.3302 11.5802C13.6169 11.2936 13.779 10.9054 13.7812 10.5V5.90625H0.21875ZM5.25 9.40625H2.625V8.09375H5.25V9.40625Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M13.7812 4.59375V3.5C13.779 3.0946 13.6169 2.70645 13.3302 2.41978C13.0436 2.13311 12.6554 1.97105 12.25 1.96875H1.75C1.3446 1.97105 0.95645 2.13311 0.669781 2.41978C0.383112 2.70645 0.221047 3.0946 0.21875 3.5V4.59375H13.7812Z"
      }
    })]);
  }

};