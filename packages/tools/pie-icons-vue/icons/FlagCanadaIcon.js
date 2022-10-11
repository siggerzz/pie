import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FlagCanadaIcon',
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
      "class": "c-pieIcon c-pieIcon--flagCanada"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14 7.00005C14.0003 5.68328 13.6292 4.39313 12.9293 3.27777C12.2295 2.1624 11.2292 1.26706 10.0434 0.69458V13.3055C11.2292 12.733 12.2295 11.8377 12.9293 10.7223C13.6292 9.60697 14.0003 8.31681 14 7.00005ZM1.97654e-07 7.00005C-0.000312658 8.31681 0.370783 9.60697 1.07067 10.7223C1.77055 11.8377 2.77084 12.733 3.95664 13.3055V0.69458C2.77084 1.26706 1.77055 2.1624 1.07067 3.27777C0.370783 4.39313 -0.000312658 5.68328 1.97654e-07 7.00005ZM8.2168 7.91333L9.43359 7.30083L8.82656 7.00005V6.39028L7.60977 7.00005L8.2168 5.78325H7.60977L7 4.86724L6.39023 5.78052H5.7832L6.39023 6.99731L5.17344 6.38755V7.00005L4.56641 7.30357L5.7832 7.91333L5.47695 8.5231H6.69922V9.43364H7.30078V8.5231H8.52031L8.2168 7.91333Z",
        "fill": "#D80027"
      }
    })]);
  }

};