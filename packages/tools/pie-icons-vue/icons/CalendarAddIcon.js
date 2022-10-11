import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CalendarAddIcon',
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
      "class": "c-pieIcon c-pieIcon--calendarAdd"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.32663 10.4738H19.7867L20.6596 8.72819H7.45381L8.32663 10.4738Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M20.0748 4.36411V2.61847H18.3291V4.36411H9.60095V2.61847H7.85532V4.36411H2.61841V25.3117H20.9476C22.105 25.3117 23.215 24.8519 24.0335 24.0335C24.8519 23.2151 25.3117 22.1051 25.3117 20.9476V4.36411H20.0748ZM23.566 20.9476C23.566 21.6421 23.2902 22.3081 22.7991 22.7992C22.3081 23.2902 21.642 23.5661 20.9476 23.5661H4.36404V6.10974H7.85532V6.98256H9.60095V6.10974H18.3291V6.98256H20.0748V6.10974H23.566V20.9476Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.9276 16.1471H14.8728V13.0923H13.1271V16.1471H10.0723V17.8928H13.1271V20.9476H14.8728V17.8928H17.9276V16.1471Z"
      }
    })]);
  }

};