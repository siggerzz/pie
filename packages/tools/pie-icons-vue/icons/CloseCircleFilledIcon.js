import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CloseCircleFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--closeCircleFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14.25 2C11.8272 2 9.45877 2.71845 7.44427 4.0645C5.42977 5.41054 3.85965 7.32373 2.93248 9.56213C2.00531 11.8005 1.76272 14.2636 2.23539 16.6399C2.70805 19.0161 3.87475 21.1989 5.58795 22.9121C7.30114 24.6252 9.48388 25.792 11.8601 26.2646C14.2364 26.7373 16.6995 26.4947 18.9379 25.5675C21.1763 24.6404 23.0895 23.0702 24.4355 21.0557C25.7816 19.0412 26.5 16.6728 26.5 14.25C26.5 11.0011 25.2094 7.88526 22.9121 5.58794C20.6147 3.29062 17.4989 2 14.25 2ZM19.2463 18.0037L18.0038 19.2463L14.25 15.4837L10.4963 19.2463L9.25376 18.0037L13.0163 14.25L9.25376 10.4963L10.4963 9.25375L14.25 13.0163L18.0038 9.25375L19.2463 10.4963L15.4838 14.25L19.2463 18.0037Z"
      }
    })]);
  }

};