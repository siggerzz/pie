import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'OrderIcon',
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
      "class": "c-pieIcon c-pieIcon--order"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21.875 1.75H6.125C5.42881 1.75 4.76113 2.02656 4.26884 2.51884C3.77656 3.01113 3.5 3.67881 3.5 4.375V26.3025L7.06125 24.4037L10.5 26.3813L14 24.4125L17.5 26.3813L20.93 24.4037L24.5 26.3025V4.375C24.5 3.67881 24.2234 3.01113 23.7312 2.51884C23.2389 2.02656 22.5712 1.75 21.875 1.75ZM22.75 23.3888L21.7613 22.8637C21.5026 22.7213 21.2121 22.6466 20.9169 22.6466C20.6216 22.6466 20.3311 22.7213 20.0725 22.8637L17.4475 24.3425L14.8225 22.855C14.5565 22.7014 14.2547 22.6205 13.9475 22.6205C13.6403 22.6205 13.3385 22.7014 13.0725 22.855L10.4475 24.3425L7.9275 22.89C7.66887 22.7475 7.3784 22.6728 7.08313 22.6728C6.78785 22.6728 6.49738 22.7475 6.23875 22.89L5.25 23.3888V4.375C5.25 4.14294 5.34219 3.92038 5.50628 3.75628C5.67038 3.59219 5.89294 3.5 6.125 3.5H21.875C22.1071 3.5 22.3296 3.59219 22.4937 3.75628C22.6578 3.92038 22.75 4.14294 22.75 4.375V23.3888ZM8.75 14H19.25V15.75H8.75V14ZM10.5 17.5H17.5V19.25H10.5V17.5ZM13.3438 11.7337L10.5 8.93375L11.7425 7.69125L13.3088 9.26625L17.0625 5.50375L18.375 6.74625L13.3438 11.7337Z"
      }
    })]);
  }

};