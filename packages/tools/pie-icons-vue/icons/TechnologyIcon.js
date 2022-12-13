import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'TechnologyIcon',
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
      "class": "c-pieIcon c-pieIcon--technology"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M24.5 17.2638V5.25C24.5 4.55381 24.2234 3.88613 23.7312 3.39384C23.2389 2.90156 22.5712 2.625 21.875 2.625H6.125C5.42881 2.625 4.76113 2.90156 4.26884 3.39384C3.77656 3.88613 3.5 4.55381 3.5 5.25V17.2638L0 23.3888V23.625C0 24.3212 0.276562 24.9889 0.768845 25.4812C1.26113 25.9734 1.92881 26.25 2.625 26.25H25.375C26.0712 26.25 26.7389 25.9734 27.2312 25.4812C27.7234 24.9889 28 24.3212 28 23.625V23.3888L24.5 17.2638ZM5.25 5.25C5.25 5.01794 5.34219 4.79538 5.50628 4.63128C5.67038 4.46719 5.89294 4.375 6.125 4.375H21.875C22.1071 4.375 22.3296 4.46719 22.4937 4.63128C22.6578 4.79538 22.75 5.01794 22.75 5.25V16.625H5.25V5.25ZM25.375 24.5H17.1675L16.5113 23.625H11.4888L10.8325 24.5H2.625C2.42273 24.5049 2.225 24.4396 2.06547 24.3152C1.90593 24.1908 1.79445 24.0149 1.75 23.8175L4.8825 18.375H23.1175L26.25 23.8175C26.2055 24.0149 26.0941 24.1908 25.9345 24.3152C25.775 24.4396 25.5773 24.5049 25.375 24.5ZM7 20.125H10.5V21.875H7V20.125ZM17.5 20.125H21V21.875H17.5V20.125ZM12.25 20.125H15.75V21.875H12.25V20.125Z"
      }
    })]);
  }

};