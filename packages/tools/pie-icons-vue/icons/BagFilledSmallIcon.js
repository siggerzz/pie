import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'BagFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--bagFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.9963 3.71875H9.62503V1.53125L8.31253 0.21875H5.68753L4.37503 1.53125V3.71875H2.00378L1.57503 12.1712C1.56305 12.3792 1.59386 12.5873 1.66555 12.7829C1.73723 12.9784 1.84827 13.1571 1.9918 13.308C2.13532 13.4589 2.30828 13.5788 2.49997 13.6602C2.69167 13.7416 2.89803 13.7828 3.10628 13.7812H10.8938C11.102 13.7828 11.3084 13.7416 11.5001 13.6602C11.6918 13.5788 11.8647 13.4589 12.0083 13.308C12.1518 13.1571 12.2628 12.9784 12.3345 12.7829C12.4062 12.5873 12.437 12.3792 12.425 12.1712L11.9963 3.71875ZM5.68753 1.53125H8.31253V3.71875H5.68753V1.53125Z"
      }
    })]);
  }

};