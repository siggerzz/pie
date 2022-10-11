import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ThumbsDownFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--thumbsDownFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M24.5875 15.2425L19.8625 16.4063L20.8337 21.245C20.9778 21.8959 20.9261 22.5748 20.685 23.1963C20.4065 23.9366 19.8806 24.5578 19.1966 24.9549C18.5125 25.3519 17.7122 25.5004 16.9313 25.375C16.9313 25.375 12.32 16.1263 11.5412 14.9713C11.2338 14.5416 10.9561 14.0914 10.71 13.6238C9.95192 11.958 9.58098 10.1422 9.625 8.31254C9.59013 6.78245 9.96795 5.27121 10.7188 3.93754C10.964 3.48445 11.2357 3.04619 11.5325 2.62504H20.4137C21.294 2.62137 22.1548 2.88329 22.8838 3.37658C23.6128 3.86987 24.1761 4.57158 24.5 5.39004L26.4862 11.935C26.589 12.2769 26.6209 12.6361 26.5801 12.9908C26.5393 13.3454 26.4266 13.688 26.2489 13.9975C26.0712 14.3071 25.8322 14.5772 25.5465 14.7913C25.2608 15.0053 24.9345 15.1589 24.5875 15.2425ZM9.17875 3.07129C8.28524 4.67112 7.83515 6.48053 7.875 8.31254C7.83053 10.4256 8.27052 12.5208 9.16125 14.4375C9.24875 14.6125 9.345 14.77 9.4325 14.9188H1.75V2.62504H9.4325L9.17875 3.07129Z"
      }
    })]);
  }

};