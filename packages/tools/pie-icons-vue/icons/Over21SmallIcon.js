import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'Over21SmallIcon',
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
      "class": "c-pieIcon c-pieIcon--over21Small"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.375 1.3125H2.625C2.2769 1.3125 1.94306 1.45078 1.69692 1.69692C1.45078 1.94306 1.3125 2.2769 1.3125 2.625V11.375C1.3125 11.7231 1.45078 12.0569 1.69692 12.3031C1.94306 12.5492 2.2769 12.6875 2.625 12.6875H11.375C11.7231 12.6875 12.0569 12.5492 12.3031 12.3031C12.5492 12.0569 12.6875 11.7231 12.6875 11.375V2.625C12.6875 2.2769 12.5492 1.94306 12.3031 1.69692C12.0569 1.45078 11.7231 1.3125 11.375 1.3125ZM5.6175 8.94688H2.625V8.37375C2.625 7.57312 3.08875 7.23625 3.75375 6.88188C4.41875 6.5275 4.62875 6.37437 4.62875 6.00688C4.62875 5.63937 4.375 5.53 4.01188 5.53C3.84606 5.52732 3.68169 5.56122 3.53045 5.62927C3.37922 5.69733 3.24484 5.79787 3.13688 5.92375L2.65563 5.33312C2.83558 5.13713 3.05587 4.98245 3.30133 4.87974C3.54679 4.77703 3.81158 4.72871 4.0775 4.73812C4.9525 4.73813 5.50375 5.21062 5.50375 5.98063C5.50375 6.6675 5.06625 7.0875 4.35312 7.43313C3.71 7.75688 3.47812 7.93625 3.47812 8.155V8.19875H5.6L5.6175 8.94688ZM7.97125 8.94688H7.14V5.80125L6.4575 6.055L6.1775 5.35063L7.37188 4.8125H7.97125V8.94688ZM11.375 7.4375H10.5V8.3125H9.625V7.4375H8.75V6.5625H9.625V5.6875H10.5V6.5625H11.375V7.4375Z"
      }
    })]);
  }

};