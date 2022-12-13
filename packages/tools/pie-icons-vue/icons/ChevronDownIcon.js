import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChevronDownIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 28 28"
      },
      "class": "c-pieIcon c-pieIcon--chevronDown"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M3.87625 7.875L14 18.375H14.0963L24.1237 7.875L25.375 9.10875L15.3125 19.6087C14.9571 19.9428 14.4877 20.1288 14 20.1288C13.5123 20.1288 13.0429 19.9428 12.6875 19.6087L2.625 9.09125L3.87625 7.875Z"
      }
    })]);
  }

};