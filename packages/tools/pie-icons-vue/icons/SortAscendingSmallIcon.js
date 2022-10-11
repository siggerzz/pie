import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SortAscendingSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--sortAscendingSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M0 6.34375H6.81625L6.265 7.65625H0V6.34375ZM8.28625 2.84375H0V4.15625H7.735L8.28625 2.84375ZM0 11.1563H4.78625L5.34625 9.84375H0V11.1563ZM12.9938 8.65375L11.1562 10.5V5.25H9.84375V10.5L8.00625 8.65375L7.07875 9.625L9.70375 12.25C9.804 12.3527 9.92376 12.4342 10.056 12.4899C10.1882 12.5456 10.3303 12.5743 10.4738 12.5743C10.6172 12.5743 10.7593 12.5456 10.8915 12.4899C11.0237 12.4342 11.1435 12.3527 11.2438 12.25L13.8688 9.625L12.9938 8.65375Z"
      }
    })]);
  }

};