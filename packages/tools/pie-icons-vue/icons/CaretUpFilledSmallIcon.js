import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CaretUpFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--caretUpFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.9962 9.23127L7.93623 3.29002C7.81708 3.11374 7.65686 2.96906 7.46937 2.86845C7.28188 2.76785 7.07274 2.71434 6.85998 2.71252C6.64254 2.71673 6.42955 2.77491 6.24016 2.88182C6.05078 2.98873 5.89092 3.14103 5.77498 3.32502L1.97748 9.26627C1.85911 9.4695 1.79675 9.70047 1.79675 9.93565C1.79675 10.1708 1.85911 10.4018 1.97748 10.605C2.09081 10.8122 2.25791 10.9849 2.46119 11.105C2.66446 11.2251 2.89637 11.2882 3.13248 11.2875H10.955C11.1945 11.2882 11.4295 11.2233 11.6348 11.0999C11.84 10.9765 12.0076 10.7993 12.1194 10.5875C12.2311 10.3757 12.2828 10.1374 12.2688 9.89834C12.2548 9.65927 12.1757 9.42859 12.04 9.23127H11.9962Z"
      }
    })]);
  }

};