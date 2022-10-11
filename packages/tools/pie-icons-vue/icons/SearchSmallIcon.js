import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SearchSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--searchSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.1248 12.1625L10.1498 9.17877C10.9294 8.16154 11.2929 6.88592 11.1667 5.61056C11.0405 4.33521 10.434 3.15557 9.47022 2.31085C8.50642 1.46614 7.25744 1.01956 5.97655 1.06169C4.69565 1.10382 3.47872 1.63149 2.5725 2.53771C1.66628 3.44393 1.13861 4.66086 1.09648 5.94176C1.05435 7.22265 1.50093 8.47163 2.34564 9.43543C3.19036 10.3992 4.37 11.0057 5.64535 11.1319C6.92071 11.2581 8.19633 10.8946 9.21356 10.115L12.1623 13.125L13.1248 12.1625ZM6.12481 9.84377C5.38931 9.84377 4.67033 9.62567 4.05878 9.21705C3.44724 8.80842 2.97059 8.22763 2.68913 7.54812C2.40767 6.86861 2.33402 6.12089 2.47751 5.39953C2.621 4.67816 2.97518 4.01554 3.49525 3.49546C4.01533 2.97539 4.67795 2.62121 5.39932 2.47772C6.12068 2.33423 6.8684 2.40788 7.54791 2.68934C8.22743 2.9708 8.80821 3.44745 9.21684 4.05899C9.62546 4.67054 9.84356 5.38952 9.84356 6.12502C9.84125 7.11058 9.44871 8.05512 8.75181 8.75202C8.05491 9.44892 7.11037 9.84146 6.12481 9.84377Z"
      }
    })]);
  }

};