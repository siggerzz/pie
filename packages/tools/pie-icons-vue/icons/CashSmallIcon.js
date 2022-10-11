import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CashSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--cashSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.7812 1.96875H2.84375V4.59375H0.21875V11.1562H11.1562V8.53125H13.7812V1.96875ZM9.84375 9.84375H1.53125V5.90625H2.84375V8.53125H9.84375V9.84375ZM12.4688 7.21875H4.15625V3.28125H12.4688V7.21875ZM7.21875 5.25C7.21875 5.03368 7.2829 4.82221 7.40308 4.64234C7.52326 4.46248 7.69408 4.32229 7.89394 4.23951C8.0938 4.15672 8.31371 4.13506 8.52588 4.17727C8.73805 4.21947 8.93293 4.32364 9.0859 4.4766C9.23886 4.62957 9.34303 4.82445 9.38523 5.03662C9.42744 5.24879 9.40578 5.4687 9.32299 5.66856C9.24021 5.86842 9.10002 6.03924 8.92015 6.15942C8.74029 6.2796 8.52882 6.34375 8.3125 6.34375C8.02242 6.34375 7.74422 6.22852 7.5391 6.0234C7.33398 5.81828 7.21875 5.54008 7.21875 5.25Z"
      }
    })]);
  }

};