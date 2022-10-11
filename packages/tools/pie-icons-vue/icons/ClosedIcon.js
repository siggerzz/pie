import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ClosedIcon',
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
      "class": "c-pieIcon c-pieIcon--closed"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M24.5 9.62501H20.0375L14.6825 2.94876H13.3175L7.9625 9.62501H3.5C2.80381 9.62501 2.13613 9.90157 1.64384 10.3939C1.15156 10.8861 0.875 11.5538 0.875 12.25V22.75C0.875 23.4462 1.15156 24.1139 1.64384 24.6062C2.13613 25.0984 2.80381 25.375 3.5 25.375H24.5C25.1962 25.375 25.8639 25.0984 26.3562 24.6062C26.8484 24.1139 27.125 23.4462 27.125 22.75V12.25C27.125 11.5538 26.8484 10.8861 26.3562 10.3939C25.8639 9.90157 25.1962 9.62501 24.5 9.62501ZM14 4.90001L17.7887 9.62501H10.2113L14 4.90001ZM25.375 22.75C25.375 22.9821 25.2828 23.2046 25.1187 23.3687C24.9546 23.5328 24.7321 23.625 24.5 23.625H3.5C3.26794 23.625 3.04538 23.5328 2.88128 23.3687C2.71719 23.2046 2.625 22.9821 2.625 22.75V12.25C2.625 12.0179 2.71719 11.7954 2.88128 11.6313C3.04538 11.4672 3.26794 11.375 3.5 11.375H24.5C24.7321 11.375 24.9546 11.4672 25.1187 11.6313C25.2828 11.7954 25.375 12.0179 25.375 12.25V22.75ZM17.6838 15.0588L15.2337 17.5L17.6838 19.9413L16.4413 21.1838L14 18.7338L11.5588 21.1838L10.3162 19.9413L12.7663 17.5L10.3162 15.0588L11.5588 13.8163L14 16.2663L16.4413 13.8163L17.6838 15.0588Z"
      }
    })]);
  }

};