import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'BagFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--bagFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M23.625 6.125H18.375V2.625L16.625 0.875H11.375L9.62499 2.625V6.125H4.37499L3.58749 24.3775C3.57032 24.7316 3.62504 25.0855 3.74836 25.4178C3.87167 25.7501 4.06102 26.0541 4.30499 26.3112C4.54999 26.5683 4.84459 26.7729 5.17095 26.9128C5.49732 27.0526 5.84867 27.1248 6.20374 27.125H21.7962C22.1513 27.1248 22.5027 27.0526 22.829 26.9128C23.1554 26.7729 23.45 26.5683 23.695 26.3112C23.939 26.0541 24.1283 25.7501 24.2516 25.4178C24.3749 25.0855 24.4297 24.7316 24.4125 24.3775L23.625 6.125ZM16.625 14V10.5H18.375V14L16.625 15.75H11.375L9.62499 14V10.5H11.375V14H16.625ZM11.375 2.625H16.625V6.125H11.375V2.625Z"
      }
    })]);
  }

};