import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ChequeIcon',
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
      "class": "c-pieIcon c-pieIcon--cheque"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M22.75 8.74997L24.2812 7.21872C24.7445 6.75017 25.0448 6.14505 25.1377 5.49275C25.2307 4.84044 25.1114 4.17553 24.7975 3.59622L26.0312 2.37122L24.7537 1.12872L23.5287 2.36247C22.9494 2.04856 22.2845 1.92928 21.6322 2.02224C20.9799 2.1152 20.3748 2.41548 19.9062 2.87872L14 8.74997H0.875V24.5H27.125V8.74997H22.75ZM15.4175 9.86997L21.175 4.12122C21.2938 3.98406 21.4396 3.87285 21.6033 3.79451C21.767 3.71618 21.9451 3.6724 22.1264 3.66591C22.3078 3.65942 22.4885 3.69036 22.6574 3.75679C22.8262 3.82323 22.9796 3.92374 23.1079 4.05205C23.2362 4.18037 23.3367 4.33374 23.4032 4.50261C23.4696 4.67148 23.5006 4.85222 23.4941 5.03357C23.4876 5.21492 23.4438 5.39299 23.3655 5.55667C23.2871 5.72036 23.1759 5.86616 23.0387 5.98497L17.29 11.7425L15.1112 12.0487L15.4175 9.86997ZM25.375 22.75H2.625V10.5H13.5275L13.0112 14.1137L18.0775 13.3875L21 10.5H25.375V22.75ZM5.25 17.5H15.75V19.25H5.25V17.5ZM19.25 17.5H22.75V19.25H19.25V17.5Z"
      }
    })]);
  }

};