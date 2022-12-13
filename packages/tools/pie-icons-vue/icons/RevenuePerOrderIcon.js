import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'RevenuePerOrderIcon',
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
      "class": "c-pieIcon c-pieIcon--revenuePerOrder"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M26.11 16.975C25.2933 16.3756 24.2964 16.0731 23.2844 16.1177C22.2723 16.1622 21.3058 16.5511 20.545 17.22L18.0075 19.4775C17.5232 19.9004 16.9004 20.1308 16.2575 20.125H15.75C16.318 19.3677 16.625 18.4466 16.625 17.5V15.75H11.5062C10.1307 15.7495 8.78558 16.1543 7.63875 16.9138L4.1125 19.25H0.875V21H3.5V25.375H0.875V27.125H17.6925C18.3066 27.1249 18.9138 26.9955 19.4746 26.7453C20.0354 26.495 20.5373 26.1295 20.9475 25.6725L27.6325 18.2438L26.11 16.975ZM19.6438 24.5C19.3981 24.7746 19.0974 24.9945 18.7613 25.1452C18.4251 25.296 18.0609 25.3743 17.6925 25.375H5.25V20.5975L8.60125 18.375C9.46237 17.8038 10.4729 17.4994 11.5062 17.5H14.875C14.875 18.1962 14.5984 18.8639 14.1062 19.3562C13.6139 19.8484 12.9462 20.125 12.25 20.125H11.4712L10.5962 21.875H16.2838C17.3461 21.8759 18.3724 21.4902 19.1712 20.79L21.7 18.5325C22.1572 18.1356 22.7348 17.9042 23.3396 17.8756C23.9444 17.847 24.5412 18.023 25.0338 18.375L25.1213 18.445L19.6438 24.5ZM20.125 14C20.8172 14 21.4939 13.7947 22.0695 13.4101C22.6451 13.0256 23.0937 12.4789 23.3586 11.8394C23.6235 11.1999 23.6928 10.4961 23.5577 9.81719C23.4227 9.13825 23.0894 8.51461 22.5999 8.02513C22.1104 7.53564 21.4867 7.2023 20.8078 7.06725C20.1289 6.9322 19.4251 7.00152 18.7856 7.26642C18.1461 7.53133 17.5994 7.97993 17.2149 8.55551C16.8303 9.13108 16.625 9.80777 16.625 10.5C16.625 11.4283 16.9937 12.3185 17.6501 12.9749C18.3065 13.6313 19.1967 14 20.125 14ZM20.125 8.75C20.4711 8.75 20.8095 8.85264 21.0972 9.04493C21.385 9.23722 21.6093 9.51054 21.7418 9.83031C21.8742 10.1501 21.9089 10.5019 21.8414 10.8414C21.7738 11.1809 21.6072 11.4927 21.3624 11.7374C21.1177 11.9822 20.8059 12.1489 20.4664 12.2164C20.1269 12.2839 19.7751 12.2492 19.4553 12.1168C19.1355 11.9843 18.8622 11.76 18.6699 11.4722C18.4776 11.1845 18.375 10.8461 18.375 10.5C18.375 10.0359 18.5594 9.59075 18.8876 9.26257C19.2158 8.93438 19.6609 8.75 20.125 8.75ZM12.6875 8.75C13.3797 8.75 14.0564 8.54473 14.632 8.16014C15.2076 7.77556 15.6562 7.22893 15.9211 6.58939C16.186 5.94985 16.2553 5.24612 16.1202 4.56719C15.9852 3.88825 15.6519 3.26461 15.1624 2.77513C14.6729 2.28564 14.0492 1.9523 13.3703 1.81725C12.6914 1.6822 11.9876 1.75152 11.3481 2.01642C10.7086 2.28133 10.1619 2.72993 9.77736 3.30551C9.39277 3.88108 9.1875 4.55777 9.1875 5.25C9.1875 6.17826 9.55625 7.0685 10.2126 7.72488C10.869 8.38125 11.7592 8.75 12.6875 8.75ZM12.6875 3.5C13.0336 3.5 13.372 3.60264 13.6597 3.79493C13.9475 3.98722 14.1718 4.26053 14.3043 4.58031C14.4367 4.90008 14.4714 5.25194 14.4039 5.59141C14.3364 5.93088 14.1697 6.2427 13.9249 6.48744C13.6802 6.73218 13.3684 6.89885 13.0289 6.96638C12.6894 7.0339 12.3376 6.99924 12.0178 6.86679C11.698 6.73434 11.4247 6.51004 11.2324 6.22225C11.0401 5.93446 10.9375 5.59612 10.9375 5.25C10.9375 4.78587 11.1219 4.34075 11.4501 4.01256C11.7783 3.68438 12.2234 3.5 12.6875 3.5Z"
      }
    })]);
  }

};