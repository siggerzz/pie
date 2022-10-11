import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CreditCardHomeFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--creditCardHomeFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.9388 4.32249L13.125 5.36374C11.2815 3.89875 9.32074 2.58767 7.26253 1.44374C7.0843 1.40033 6.89826 1.40033 6.72003 1.44374C4.66783 2.58846 2.71295 3.89952 0.875029 5.36374L0.0612793 4.32249C1.99121 2.80511 4.0394 1.44453 6.18628 0.253738C6.44489 0.14326 6.72319 0.0863037 7.0044 0.0863037C7.28562 0.0863037 7.56392 0.14326 7.82253 0.253738C9.96711 1.44374 12.0125 2.80438 13.9388 4.32249ZM1.75003 9.40624H12.25V12.25C12.25 12.4821 12.1578 12.7046 11.9937 12.8687C11.8297 13.0328 11.6071 13.125 11.375 13.125H2.62503C2.39296 13.125 2.17041 13.0328 2.00631 12.8687C1.84222 12.7046 1.75003 12.4821 1.75003 12.25V9.40624ZM3.50003 11.375H5.25003V10.5H3.50003V11.375ZM11.375 6.12499H2.62503C2.39296 6.12499 2.17041 6.21718 2.00631 6.38127C1.84222 6.54536 1.75003 6.76792 1.75003 6.99999V8.09374H12.25V6.99999C12.25 6.76792 12.1578 6.54536 11.9937 6.38127C11.8297 6.21718 11.6071 6.12499 11.375 6.12499Z"
      }
    })]);
  }

};