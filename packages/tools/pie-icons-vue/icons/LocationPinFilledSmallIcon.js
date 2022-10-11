import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'LocationPinFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--locationPinFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.9376 2.13496C9.87875 1.16456 8.4862 0.640341 7.0503 0.671611C5.6144 0.70288 4.24599 1.28723 3.23042 2.3028C2.21484 3.31838 1.63049 4.68679 1.59922 6.12269C1.56795 7.55859 2.09217 8.95114 3.06258 10.01L7.00008 14L10.9376 10.0625C11.4619 9.54409 11.8782 8.92683 12.1623 8.24644C12.4464 7.56604 12.5927 6.83604 12.5927 6.09871C12.5927 5.36138 12.4464 4.63138 12.1623 3.95099C11.8782 3.2706 11.4619 2.65334 10.9376 2.13496ZM8.09383 6.12496C8.09383 6.34129 8.02968 6.55275 7.9095 6.73262C7.78931 6.91248 7.61849 7.05267 7.41864 7.13546C7.21878 7.21824 6.99886 7.2399 6.7867 7.1977C6.57453 7.1555 6.37964 7.05133 6.22668 6.89836C6.07371 6.7454 5.96954 6.55051 5.92734 6.33834C5.88514 6.12618 5.9068 5.90626 5.98958 5.7064C6.07237 5.50655 6.21255 5.33573 6.39242 5.21554C6.57229 5.09536 6.78375 5.03121 7.00008 5.03121C7.29016 5.03121 7.56836 5.14645 7.77347 5.35157C7.97859 5.55668 8.09383 5.83488 8.09383 6.12496Z"
      }
    })]);
  }

};