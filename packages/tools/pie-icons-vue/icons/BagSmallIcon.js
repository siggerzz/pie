import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'BagSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--bagSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.9963 3.71875H9.62503V1.53125L8.31253 0.21875H5.68753L4.37503 1.53125V3.71875H2.00378L1.57503 12.1712C1.56305 12.3792 1.59386 12.5873 1.66555 12.7829C1.73723 12.9784 1.84827 13.1571 1.9918 13.308C2.13532 13.4589 2.30828 13.5788 2.49997 13.6602C2.69167 13.7416 2.89803 13.7828 3.10628 13.7812H10.8938C11.102 13.7828 11.3084 13.7416 11.5001 13.6602C11.6918 13.5788 11.8647 13.4589 12.0083 13.308C12.1518 13.1571 12.2628 12.9784 12.3345 12.7829C12.4062 12.5873 12.437 12.3792 12.425 12.1712L11.9963 3.71875ZM5.68753 1.53125H8.31253V3.71875H5.68753V1.53125ZM11.0513 12.3988C11.0311 12.4205 11.0068 12.4379 10.9797 12.4499C10.9526 12.4619 10.9234 12.4684 10.8938 12.4688H3.10628C3.04895 12.4666 2.99456 12.4428 2.954 12.4023C2.91344 12.3617 2.88969 12.3073 2.88753 12.25L3.24628 5.04H10.7538L11.1125 12.25C11.1117 12.3056 11.0898 12.3587 11.0513 12.3988Z"
      }
    })]);
  }

};