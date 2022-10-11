import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'DollarSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--dollarSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7.61251 6.30869C6.14251 5.92369 4.98751 5.57369 4.98751 4.55869C4.98751 3.54369 6.03751 3.17619 7.00001 3.17619C7.50294 3.17274 8.0013 3.27183 8.46465 3.4674C8.92801 3.66298 9.34665 3.95093 9.69501 4.31369L10.6925 3.28119C9.94464 2.42957 8.89866 1.89719 7.77001 1.79369V0.0961914H6.38751V1.79369C4.63751 1.98619 3.41251 2.98369 3.41251 4.66369C3.41251 6.50119 4.98751 7.21869 6.56251 7.63869C8.13751 8.05869 9.18751 8.32119 9.18751 9.33619C9.18751 10.3512 8.13751 10.8237 6.94751 10.8237C6.40225 10.8506 5.85774 10.7572 5.35265 10.55C4.84757 10.3429 4.39429 10.027 4.02501 9.62494L3.01001 10.7187C3.41663 11.1768 3.91124 11.5484 4.46442 11.8115C5.0176 12.0746 5.61803 12.2237 6.23001 12.2499V13.9474H7.64751V12.2499C9.45001 12.0399 10.7625 11.0599 10.7625 9.27494C10.7625 7.48994 9.17001 6.71119 7.61251 6.30869Z"
      }
    })]);
  }

};