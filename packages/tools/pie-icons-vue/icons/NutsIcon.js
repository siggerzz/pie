import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'NutsIcon',
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
      "class": "c-pieIcon c-pieIcon--nuts"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9.8525 25.375C9.58125 25.375 9.30125 25.375 9.02125 25.3312C7.92634 25.1983 6.87601 24.8181 5.94977 24.2193C5.02353 23.6205 4.24564 22.8188 3.675 21.875C2.96201 20.7065 2.59726 19.3588 2.62361 17.9902C2.64996 16.6216 3.06631 15.2889 3.82375 14.1487C4.87517 12.5826 6.49977 11.4922 8.3475 11.1125C9.07867 10.9592 9.75132 10.6016 10.2873 10.0812C10.8232 9.56072 11.2004 8.89884 11.375 8.17247C11.4388 7.90284 11.5177 7.63701 11.6112 7.37622C12.0411 6.17075 12.7886 5.10377 13.7748 4.28801C14.7609 3.47226 15.9491 2.93801 17.2138 2.74172C18.4784 2.54543 19.7727 2.69438 20.9597 3.17285C22.1467 3.65131 23.1825 4.44151 23.9575 5.45997C24.7529 6.53666 25.2372 7.81118 25.3576 9.14438C25.4779 10.4776 25.2297 11.8182 24.64 13.02C24.1544 14.0441 23.3941 14.9135 22.4438 15.5312C21.6391 16.0536 20.7514 16.4353 19.8188 16.66C19.0582 16.8897 18.3745 17.3222 17.8411 17.9111C17.3078 18.4999 16.9448 19.2229 16.7913 20.0025C16.3856 21.5475 15.4777 22.9139 14.2105 23.8865C12.9433 24.8591 11.3887 25.3827 9.79125 25.375H9.8525ZM5.25 15.155C4.67889 16.0192 4.36716 17.0289 4.35165 18.0647C4.33615 19.1005 4.61752 20.119 5.1625 21C5.59131 21.7104 6.17618 22.314 6.87281 22.7649C7.56943 23.2158 8.35954 23.5023 9.18328 23.6026C10.007 23.703 10.8428 23.6145 11.6273 23.344C12.4118 23.0735 13.1244 22.628 13.7112 22.0412C14.39 21.3607 14.8762 20.5122 15.12 19.5825C15.3539 18.4962 15.8789 17.494 16.6388 16.6832C17.3987 15.8724 18.3649 15.2837 19.4337 14.98C20.1632 14.8053 20.8583 14.5095 21.49 14.105C22.1586 13.6741 22.6971 13.069 23.0475 12.355C23.5101 11.4418 23.7092 10.4179 23.6227 9.39788C23.5362 8.37789 23.1673 7.40215 22.5575 6.57997C21.9808 5.80243 21.2039 5.19604 20.3096 4.82553C19.4152 4.45502 18.4371 4.33429 17.4795 4.47622C16.5219 4.61815 15.6208 5.01742 14.8724 5.63141C14.124 6.24541 13.5563 7.05109 13.23 7.96247C13.1528 8.15853 13.0914 8.36042 13.0462 8.56622C12.7929 9.61671 12.2477 10.5742 11.4736 11.3281C10.6995 12.0821 9.72804 12.6019 8.67125 12.8275C7.2685 13.1217 6.03882 13.9583 5.25 15.155Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M19.25 7.87497C19.7332 7.87497 20.125 7.48322 20.125 6.99997C20.125 6.51672 19.7332 6.12497 19.25 6.12497C18.7668 6.12497 18.375 6.51672 18.375 6.99997C18.375 7.48322 18.7668 7.87497 19.25 7.87497Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M20.125 11.375C20.6082 11.375 21 10.9832 21 10.5C21 10.0167 20.6082 9.62497 20.125 9.62497C19.6418 9.62497 19.25 10.0167 19.25 10.5C19.25 10.9832 19.6418 11.375 20.125 11.375Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M16.625 10.5C17.1082 10.5 17.5 10.1082 17.5 9.62497C17.5 9.14172 17.1082 8.74997 16.625 8.74997C16.1418 8.74997 15.75 9.14172 15.75 9.62497C15.75 10.1082 16.1418 10.5 16.625 10.5Z"
      }
    })]);
  }

};