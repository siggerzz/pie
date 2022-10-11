import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CaretDownFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--caretDownFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M22.82 6.16874H5.18C4.87169 6.16197 4.56751 6.24065 4.30114 6.39607C4.03477 6.55148 3.8166 6.77756 3.67077 7.0493C3.52494 7.32103 3.45714 7.62781 3.47487 7.93569C3.49261 8.24358 3.59519 8.54055 3.77125 8.79374L12.7313 22.75C12.8825 22.9904 13.0923 23.1885 13.341 23.3258C13.5897 23.4632 13.8691 23.5352 14.1531 23.5352C14.4372 23.5352 14.7166 23.4632 14.9653 23.3258C15.2139 23.1885 15.4237 22.9904 15.575 22.75L24.2463 8.74999C24.4112 8.49597 24.504 8.20191 24.5148 7.89923C24.5256 7.59655 24.4539 7.29664 24.3074 7.03155C24.1609 6.76645 23.9452 6.54614 23.6832 6.39417C23.4212 6.2422 23.1228 6.16428 22.82 6.16874Z"
      }
    })]);
  }

};