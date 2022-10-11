import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'StarCircleFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--starCircleFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14 1.75C11.5772 1.75 9.20877 2.46845 7.19427 3.8145C5.17977 5.16054 3.60965 7.07373 2.68248 9.31213C1.75531 11.5505 1.51272 14.0136 1.98539 16.3899C2.45805 18.7661 3.62475 20.9489 5.33795 22.6621C7.05114 24.3753 9.23388 25.542 11.6101 26.0146C13.9864 26.4873 16.4495 26.2447 18.6879 25.3175C20.9263 24.3904 22.8395 22.8202 24.1855 20.8057C25.5316 18.7912 26.25 16.4228 26.25 14C26.25 10.7511 24.9594 7.63526 22.6621 5.33794C20.3647 3.04062 17.2489 1.75 14 1.75V1.75ZM20.125 13.125L17.6925 15.4962L18.2613 18.8388C18.2831 18.9655 18.2768 19.0954 18.2427 19.2194C18.2087 19.3434 18.1477 19.4584 18.0642 19.5561C17.9806 19.6538 17.8766 19.732 17.7594 19.7849C17.6422 19.8379 17.5148 19.8644 17.3863 19.8625C17.2434 19.8645 17.1022 19.8314 16.975 19.7663L14 18.165L10.9988 19.7487C10.8538 19.8249 10.6905 19.859 10.5272 19.8469C10.3639 19.8349 10.2073 19.7773 10.0751 19.6807C9.94296 19.5841 9.84055 19.4523 9.77954 19.3004C9.71853 19.1484 9.70137 18.9824 9.73001 18.8213L10.2988 15.4788L7.87501 13.125C7.75945 13.0105 7.67809 12.8661 7.64007 12.7079C7.60205 12.5498 7.60887 12.3841 7.65976 12.2296C7.71066 12.0751 7.80361 11.9379 7.92819 11.8333C8.05276 11.7287 8.20403 11.6609 8.36501 11.6375L11.725 11.1475L13.2125 8.085C13.2842 7.93706 13.396 7.8123 13.5353 7.725C13.6746 7.6377 13.8356 7.5914 14 7.5914C14.1644 7.5914 14.3254 7.6377 14.4647 7.725C14.604 7.8123 14.7159 7.93706 14.7875 8.085L16.2838 11.13L19.6438 11.62C19.8076 11.6422 19.9618 11.7104 20.0885 11.8167C20.2152 11.923 20.3092 12.063 20.3596 12.2206C20.4099 12.3781 20.4146 12.5466 20.3731 12.7067C20.3316 12.8668 20.2456 13.0118 20.125 13.125V13.125Z"
      }
    })]);
  }

};