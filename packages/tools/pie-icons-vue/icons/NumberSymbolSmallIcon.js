import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'NumberSymbolSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--numberSymbolSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.18 5.04876L12.3637 3.75376H10.4037L10.8762 0.507507H9.56373L9.09123 3.75376H5.85373L6.32623 0.507507H5.02248L4.54123 3.75376H2.54623L2.36248 5.04876H4.37498L3.80623 8.95126H1.81998L1.63623 10.2463H3.59623L3.12373 13.4925H4.43623L4.90873 10.2463H8.14623L7.67373 13.4925H8.97748L9.45873 10.2463H11.4537L11.6375 8.95126H9.62498L10.1937 5.04876H12.18ZM8.32998 8.95126H5.10123L5.66998 5.04876H8.89873L8.32998 8.95126Z"
      }
    })]);
  }

};