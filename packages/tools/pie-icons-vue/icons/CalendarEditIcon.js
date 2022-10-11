import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CalendarEditIcon',
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
      "class": "c-pieIcon c-pieIcon--calendarEdit"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.26554 10.5087H19.7344L20.6072 8.76311H7.39273L8.26554 10.5087Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M4.36404 23.5661V6.10974H7.85532V6.98256H9.60095V6.10974H18.3291V6.98256H20.0748V6.10974H23.566V10.0636C24.0655 10.227 24.5199 10.505 24.8927 10.8753L25.3117 11.3466V4.36411H20.0748V2.61847H18.3291V4.36411H9.60095V2.61847H7.85532V4.36411H2.61841V25.3117H10.2207L10.4127 23.5661H4.36404Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M25.5735 14.0873L23.6359 12.1496C23.4737 11.9873 23.2812 11.8586 23.0693 11.7707C22.8574 11.6829 22.6302 11.6377 22.4008 11.6377C22.1714 11.6377 21.9443 11.6829 21.7324 11.7707C21.5204 11.8586 21.3279 11.9873 21.1658 12.1496L12.8915 20.424C12.5993 20.7104 12.417 21.0904 12.3765 21.4975L11.8965 25.8616L16.2606 25.3816C16.6661 25.3292 17.0432 25.1452 17.3341 24.8579L25.5735 16.5836C25.8986 16.2565 26.0811 15.8141 26.0811 15.3529C26.0811 14.8917 25.8986 14.4493 25.5735 14.1222V14.0873ZM20.0748 15.7107L22.0124 17.6484L16.0685 23.5661L13.869 23.8192L14.1221 21.6284L20.0748 15.7107ZM24.3079 15.3616L23.2518 16.4177L21.3142 14.4801L22.3615 13.424L24.3079 15.3616Z"
      }
    })]);
  }

};