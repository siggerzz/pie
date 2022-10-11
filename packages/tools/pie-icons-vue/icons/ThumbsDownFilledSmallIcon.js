import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ThumbsDownFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--thumbsDownFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M3.40375 4.01621C3.39443 5.2497 3.57444 6.47732 3.9375 7.65621H0.875V1.09371H3.8675C3.53445 2.03105 3.37723 3.02181 3.40375 4.01621ZM13.2038 5.90621L12.18 2.62496C12.0054 2.17239 11.698 1.78317 11.2983 1.50836C10.8986 1.23354 10.4251 1.08595 9.94 1.08496H5.25C4.84313 2.00399 4.64873 3.00293 4.68125 4.00746C4.65642 5.28281 4.87621 6.5511 5.32875 7.74371L7.875 12.9062H8.2775C8.54362 12.9128 8.80772 12.8585 9.0497 12.7476C9.29169 12.6367 9.50518 12.472 9.67393 12.2661C9.84268 12.0602 9.96224 11.8186 10.0235 11.5595C10.0848 11.3005 10.0861 11.0309 10.0275 10.7712L9.625 8.38246L12.075 7.87496C12.2833 7.82871 12.4796 7.73943 12.6514 7.61286C12.8232 7.48629 12.9666 7.32521 13.0725 7.13996C13.1777 6.95428 13.2437 6.74895 13.2663 6.53672C13.2889 6.32449 13.2676 6.10988 13.2038 5.90621Z"
      }
    })]);
  }

};