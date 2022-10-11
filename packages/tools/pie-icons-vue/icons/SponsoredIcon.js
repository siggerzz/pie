import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SponsoredIcon',
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
      "class": "c-pieIcon c-pieIcon--sponsored"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M22.75 2.625H5.25C4.55381 2.625 3.88613 2.90156 3.39384 3.39384C2.90156 3.88613 2.625 4.55381 2.625 5.25V22.75C2.625 23.4462 2.90156 24.1139 3.39384 24.6062C3.88613 25.0984 4.55381 25.375 5.25 25.375H22.75C23.4462 25.375 24.1139 25.0984 24.6062 24.6062C25.0984 24.1139 25.375 23.4462 25.375 22.75V5.25C25.375 4.55381 25.0984 3.88613 24.6062 3.39384C24.1139 2.90156 23.4462 2.625 22.75 2.625ZM18.375 16.625H16.625V11.6813L12.8713 15.435C12.6614 15.6446 12.495 15.8936 12.3815 16.1676C12.2679 16.4416 12.2095 16.7353 12.2095 17.0319C12.2095 17.3285 12.2679 17.6222 12.3815 17.8962C12.495 18.1702 12.6614 18.4191 12.8713 18.6287L11.6287 19.8713C10.8807 19.1173 10.4609 18.0983 10.4609 17.0362C10.4609 15.9742 10.8807 14.9552 11.6287 14.2013L15.33 10.5H10.5V8.75H17.0625C17.4106 8.75 17.7444 8.88828 17.9906 9.13442C18.2367 9.38056 18.375 9.7144 18.375 10.0625V16.625Z"
      }
    })]);
  }

};