import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CalendarAlertSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--calendarAlertSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.2731 1.84163V0.75061H8.96388V1.84163H5.0362V0.75061H3.72697V1.84163H1.10852V12.7519H9.60104C10.4691 12.7519 11.3016 12.407 11.9154 11.7932C12.5293 11.1794 12.8741 10.3469 12.8741 9.47879V1.84163H10.2731ZM11.5823 9.47879C11.5823 9.73816 11.531 9.99496 11.4312 10.2344C11.3314 10.4738 11.1852 10.6911 11.001 10.8736C10.8168 11.0562 10.5982 11.2005 10.3579 11.2982C10.1176 11.3958 9.8604 11.4449 9.60104 11.4426H2.41775V3.15086H3.72697V4.24188H5.0362V3.15086H8.96388V4.24188H10.2731V3.15086H11.5823V9.47879Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M7.65466 5.26308H6.34543V7.88154H7.65466V5.26308Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M7.00004 10.5C7.48209 10.5 7.87286 10.1092 7.87286 9.62717C7.87286 9.14513 7.48209 8.75435 7.00004 8.75435C6.518 8.75435 6.12722 9.14513 6.12722 9.62717C6.12722 10.1092 6.518 10.5 7.00004 10.5Z"
      }
    })]);
  }

};