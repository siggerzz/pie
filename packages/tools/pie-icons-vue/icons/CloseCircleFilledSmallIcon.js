import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CloseCircleFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--closeCircleFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7 0.21875C5.6588 0.21875 4.34771 0.616463 3.23254 1.3616C2.11737 2.10673 1.2482 3.16582 0.734945 4.40493C0.221688 5.64404 0.0873968 7.00752 0.349053 8.32296C0.610709 9.63839 1.25656 10.8467 2.20494 11.7951C3.15331 12.7434 4.36161 13.3893 5.67705 13.651C6.99248 13.9126 8.35596 13.7783 9.59508 13.2651C10.8342 12.7518 11.8933 11.8826 12.6384 10.7675C13.3835 9.65229 13.7813 8.3412 13.7813 7C13.7789 5.20221 13.0637 3.47872 11.7925 2.20749C10.5213 0.93626 8.79779 0.221065 7 0.21875ZM9.87 8.96875L8.9425 9.89625L7 7.9275L5.0575 9.87L4.13 8.9425L6.0725 7L4.13 5.0575L5.0575 4.13L7 6.0725L8.9425 4.13L9.87 5.0575L7.9275 7L9.87 8.96875Z"
      }
    })]);
  }

};