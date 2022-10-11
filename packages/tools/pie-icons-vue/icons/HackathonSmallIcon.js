import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'HackathonSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--hackathonSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.0312 8.09375V3.5C12.029 3.0946 11.8669 2.70645 11.5802 2.41978C11.2936 2.13311 10.9054 1.97105 10.5 1.96875H3.5C3.0946 1.97105 2.70645 2.13311 2.41978 2.41978C2.13311 2.70645 1.97105 3.0946 1.96875 3.5V8.09375H0.21875V10.5C0.221047 10.9054 0.383112 11.2936 0.669781 11.5802C0.95645 11.8669 1.3446 12.029 1.75 12.0312H12.25C12.6554 12.029 13.0436 11.8669 13.3302 11.5802C13.6169 11.2936 13.779 10.9054 13.7812 10.5V8.09375H12.0312ZM3.28125 3.5C3.28125 3.44198 3.3043 3.38634 3.34532 3.34532C3.38634 3.3043 3.44198 3.28125 3.5 3.28125H10.5C10.558 3.28125 10.6137 3.3043 10.6547 3.34532C10.6957 3.38634 10.7188 3.44198 10.7188 3.5V8.09375H3.28125V3.5ZM12.4688 10.5C12.4688 10.558 12.4457 10.6137 12.4047 10.6547C12.3637 10.6957 12.308 10.7188 12.25 10.7188H1.75C1.69198 10.7188 1.63634 10.6957 1.59532 10.6547C1.5543 10.6137 1.53125 10.558 1.53125 10.5V9.40625H12.4688V10.5Z"
      }
    })]);
  }

};