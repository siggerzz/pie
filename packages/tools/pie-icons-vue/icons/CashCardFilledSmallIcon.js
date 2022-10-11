import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CashCardFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--cashCardFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.605 3.77126V2.89626C10.6027 2.52102 10.4526 2.16181 10.1873 1.89647C9.92193 1.63113 9.56272 1.48105 9.18748 1.47876H1.53123C1.15448 1.47875 0.793024 1.62782 0.5258 1.8934C0.258577 2.15898 0.107292 2.51951 0.10498 2.89626V3.77126H10.605Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M2.28373 5.74876H10.605V5.08376H0.10498V7.49001C0.10498 7.86828 0.255246 8.23105 0.522719 8.49852C0.790193 8.766 1.15297 8.91626 1.53123 8.91626H2.28373V5.74876Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M3.59623 7.06126V12.8538H13.6762V7.06126H3.59623ZM8.63623 11.0338C8.42337 11.0338 8.21529 10.9706 8.0383 10.8524C7.86131 10.7341 7.72337 10.566 7.64191 10.3694C7.56045 10.1727 7.53913 9.95631 7.58066 9.74754C7.62219 9.53877 7.72469 9.347 7.87521 9.19649C8.02572 9.04597 8.21749 8.94347 8.42627 8.90194C8.63504 8.86041 8.85143 8.88173 9.04809 8.96318C9.24475 9.04464 9.41284 9.18259 9.5311 9.35958C9.64936 9.53656 9.71248 9.74465 9.71248 9.95751C9.71248 10.2429 9.59909 10.5167 9.39725 10.7185C9.19542 10.9204 8.92167 11.0338 8.63623 11.0338Z"
      }
    })]);
  }

};