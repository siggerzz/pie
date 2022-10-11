import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ReceiptIcon',
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
      "class": "c-pieIcon c-pieIcon--receipt"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M19.25 13.125H8.75V14.875H19.25V13.125Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.5 16.625H10.5V18.375H17.5V16.625Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.5 9.62503H10.5V11.375H17.5V9.62503Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M20.9388 4.47127L17.5 2.49377L14 4.46252L10.5 2.49377L7.06125 4.47127L3.5 2.57252V25.4275L7.06125 23.5288L10.5 25.5063L14 23.5375L17.5 25.5063L20.93 23.5288L24.5 25.4275V2.57252L20.9388 4.47127ZM22.75 22.5138L21.7613 21.9888C21.5026 21.8463 21.2121 21.7716 20.9169 21.7716C20.6216 21.7716 20.3311 21.8463 20.0725 21.9888L17.4475 23.4675L14.8225 21.98C14.5565 21.8264 14.2547 21.7456 13.9475 21.7456C13.6403 21.7456 13.3385 21.8264 13.0725 21.98L10.4475 23.4675L7.9275 22.015C7.66887 21.8726 7.3784 21.7978 7.08313 21.7978C6.78785 21.7978 6.49738 21.8726 6.23875 22.015L5.25 22.5138V5.48627L6.23875 6.01127C6.49738 6.15374 6.78785 6.22846 7.08313 6.22846C7.3784 6.22846 7.66887 6.15374 7.9275 6.01127L10.5 4.50627L13.125 5.99377C13.391 6.14737 13.6928 6.22823 14 6.22823C14.3072 6.22823 14.609 6.14737 14.875 5.99377L17.5 4.50627L20.125 5.98502C20.3836 6.12749 20.6741 6.20221 20.9694 6.20221C21.2646 6.20221 21.5551 6.12749 21.8138 5.98502L22.75 5.48627V22.5138Z"
      }
    })]);
  }

};