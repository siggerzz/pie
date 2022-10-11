import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'NetworkErrorIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 24 24"
      },
      "class": "c-pieIcon c-pieIcon--networkError"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M3 21H7.8V10.5H3V21ZM4.5 12H6.3V19.5H4.5V12Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M21 3H16.2V17.5425L14.4 14.5425V6.75H9.74998L6.12748 0.75H4.37248L9.62248 9.4575V21H14.4225V17.46L16.2225 20.46V21H16.5L17.85 23.25H19.605L18.255 21H21V3ZM11.1 8.25H12.9V12.045L11.1 9.045V8.25ZM12.9 19.5H11.1V11.955L12.9 14.955V19.5ZM19.5 19.5H17.7V4.5H19.5V19.5Z"
      }
    })]);
  }

};