import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SocialFacebookColourIcon',
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
      "class": "c-pieIcon c-pieIcon--socialFacebookColour"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.9999 1.75001C10.9151 1.74671 7.94263 2.90739 5.67629 5.00015C3.40994 7.09292 2.01659 9.9637 1.77459 13.039C1.53259 16.1143 2.45975 19.1677 4.37086 21.5892C6.28197 24.0107 9.03632 25.622 12.0837 26.1013V17.5438H8.97741V14H12.0837V11.305C12.0837 8.23376 13.9124 6.53626 16.7124 6.53626C17.6298 6.54886 18.5451 6.62781 19.4512 6.77251V9.79126H17.9112C17.6478 9.75265 17.3792 9.77461 17.1256 9.85547C16.872 9.93633 16.6403 10.074 16.4479 10.2579C16.2555 10.4418 16.1077 10.6672 16.0155 10.9169C15.9234 11.1666 15.8894 11.434 15.9162 11.6988V14H19.3112L18.7687 17.5438H15.9162V26.1013C18.9635 25.622 21.7179 24.0107 23.629 21.5892C25.5401 19.1677 26.4672 16.1143 26.2252 13.039C25.9832 9.9637 24.5899 7.09292 22.3235 5.00015C20.0572 2.90739 17.0847 1.74671 13.9999 1.75001Z",
        "fill": "#1778F2"
      }
    })]);
  }

};