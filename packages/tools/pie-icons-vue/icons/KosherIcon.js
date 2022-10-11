import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'KosherIcon',
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
      "class": "c-pieIcon c-pieIcon--kosher"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21.63 14.105L25.4713 7.55125H17.85L14 0.875L10.15 7.55125H2.52875L6.37 14.105L2.625 20.5537H10.1325L14 27.125L17.8412 20.5713H25.375L21.63 14.105ZM22.4175 9.30125L20.6238 12.355L18.8738 9.30125H22.4175ZM19.6 14.0963L16.8438 18.8037H11.1562L8.4 14.0963L11.1562 9.30125H16.8438L19.6 14.0963ZM14 4.375L15.8287 7.55125H12.1712L14 4.375ZM5.5825 9.30125H9.135L7.385 12.355L5.5825 9.30125ZM5.67875 18.8037L7.42875 15.8375L9.17875 18.8037H5.67875ZM14 23.625L12.1887 20.5362H15.8112L14 23.625ZM20.6062 15.82L22.3562 18.7862H18.8738L20.6062 15.82Z"
      }
    })]);
  }

};