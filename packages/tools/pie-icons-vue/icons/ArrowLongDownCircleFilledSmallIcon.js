import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowLongDownCircleFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--arrowLongDownCircleFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7.65626 0.253723V7.74372L9.55501 5.84497L10.5 6.77247L7.78751 9.48497C7.68665 9.58656 7.5667 9.66719 7.43454 9.72221C7.30239 9.77724 7.16066 9.80556 7.01751 9.80556C6.87436 9.80556 6.73262 9.77724 6.60047 9.72221C6.46832 9.66719 6.34836 9.58656 6.24751 9.48497L3.50001 6.77247L4.44501 5.84497L6.34376 7.74372V0.253723C4.6103 0.422268 3.00815 1.2513 1.86934 2.56901C0.730517 3.88672 0.142347 5.59207 0.226719 7.33166C0.31109 9.07124 1.06153 10.7117 2.32253 11.913C3.58352 13.1143 5.25838 13.7844 7.00001 13.7844C8.74163 13.7844 10.4165 13.1143 11.6775 11.913C12.9385 10.7117 13.6889 9.07124 13.7733 7.33166C13.8577 5.59207 13.2695 3.88672 12.1307 2.56901C10.9919 1.2513 9.38971 0.422268 7.65626 0.253723Z"
      }
    })]);
  }

};