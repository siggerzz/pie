import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CloseCircleOutlineIcon',
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
      "class": "c-pieIcon c-pieIcon--closeCircleOutline"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M18.9963 10.2463L15.2338 14L18.9963 17.7537L17.7538 18.9963L14 15.2337L10.2463 18.9963L9.00376 17.7537L12.7663 14L9.00376 10.2463L10.2463 9.00375L14 12.7663L17.7538 9.00375L18.9963 10.2463ZM26.25 14C26.25 16.4228 25.5316 18.7912 24.1855 20.8057C22.8395 22.8202 20.9263 24.3904 18.6879 25.3175C16.4495 26.2447 13.9864 26.4873 11.6101 26.0146C9.23388 25.542 7.05114 24.3752 5.33795 22.6621C3.62475 20.9489 2.45805 18.7661 1.98539 16.3899C1.51272 14.0136 1.75531 11.5505 2.68248 9.31213C3.60965 7.07373 5.17977 5.16054 7.19427 3.8145C9.20877 2.46845 11.5772 1.75 14 1.75C17.2489 1.75 20.3647 3.04062 22.6621 5.33794C24.9594 7.63526 26.25 10.7511 26.25 14ZM24.5 14C24.5 11.9233 23.8842 9.89323 22.7304 8.16651C21.5767 6.4398 19.9368 5.09398 18.0182 4.29926C16.0996 3.50454 13.9884 3.29661 11.9516 3.70175C9.91476 4.1069 8.04384 5.10693 6.57538 6.57538C5.10693 8.04383 4.1069 9.91475 3.70176 11.9516C3.29662 13.9884 3.50455 16.0996 4.29927 18.0182C5.09399 19.9368 6.4398 21.5767 8.16652 22.7304C9.89323 23.8842 11.9233 24.5 14 24.5C16.7848 24.5 19.4555 23.3938 21.4246 21.4246C23.3938 19.4555 24.5 16.7848 24.5 14Z"
      }
    })]);
  }

};