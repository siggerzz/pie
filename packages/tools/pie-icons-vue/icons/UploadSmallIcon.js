import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'UploadSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--uploadSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M4.92625 4.05128L3.99875 3.12378L6.23 0.875032C6.33085 0.773442 6.45081 0.692813 6.58296 0.637792C6.71512 0.58277 6.85685 0.554443 7 0.554443C7.14315 0.554443 7.28488 0.58277 7.41704 0.637792C7.54919 0.692813 7.66915 0.773442 7.77 0.875032L10.0013 3.09753L9.07375 4.05128L7.65625 2.62503V8.75003H6.34375V2.62503L4.92625 4.05128ZM10.5 5.46878H8.995V6.78128H10.5C10.558 6.78128 10.6137 6.80433 10.6547 6.84535C10.6957 6.88638 10.7188 6.94202 10.7188 7.00003V12.25C10.7188 12.308 10.6957 12.3637 10.6547 12.4047C10.6137 12.4457 10.558 12.4688 10.5 12.4688H3.5C3.44198 12.4688 3.38634 12.4457 3.34532 12.4047C3.3043 12.3637 3.28125 12.308 3.28125 12.25V7.00003C3.28125 6.94202 3.3043 6.88638 3.34532 6.84535C3.38634 6.80433 3.44198 6.78128 3.5 6.78128H5.005V5.46878H3.5C3.0946 5.47108 2.70645 5.63314 2.41978 5.91981C2.13311 6.20648 1.97105 6.59463 1.96875 7.00003V12.25C1.97105 12.6554 2.13311 13.0436 2.41978 13.3303C2.70645 13.6169 3.0946 13.779 3.5 13.7813H10.5C10.9054 13.779 11.2936 13.6169 11.5802 13.3303C11.8669 13.0436 12.029 12.6554 12.0312 12.25V7.00003C12.029 6.59463 11.8669 6.20648 11.5802 5.91981C11.2936 5.63314 10.9054 5.47108 10.5 5.46878Z"
      }
    })]);
  }

};