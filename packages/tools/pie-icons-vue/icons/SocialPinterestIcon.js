import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SocialPinterestIcon',
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
      "class": "c-pieIcon c-pieIcon--socialPinterest"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14 1.75C11.5772 1.75 9.20877 2.46845 7.19427 3.8145C5.17977 5.16054 3.60965 7.07373 2.68248 9.31213C1.75531 11.5505 1.51272 14.0136 1.98539 16.3899C2.45805 18.7661 3.62475 20.9489 5.33795 22.6621C7.05114 24.3753 9.23388 25.542 11.6101 26.0146C13.9864 26.4873 16.4495 26.2447 18.6879 25.3175C20.9263 24.3904 22.8395 22.8202 24.1855 20.8057C25.5316 18.7912 26.25 16.4228 26.25 14C26.25 10.7511 24.9594 7.63526 22.6621 5.33794C20.3647 3.04062 17.2489 1.75 14 1.75V1.75ZM14 24.5C12.9344 24.5024 11.8748 24.34 10.8588 24.0188C11.4062 23.2462 11.823 22.3889 12.0925 21.4812C12.3113 20.72 12.495 19.95 12.6963 19.1888C12.6963 19.1188 12.74 19.0575 12.775 18.9437C12.8407 19.0503 12.9169 19.15 13.0025 19.2412C13.0747 19.3236 13.1538 19.3997 13.2388 19.4688C13.6296 19.7763 14.0814 19.997 14.5642 20.1162C15.0471 20.2354 15.5497 20.2503 16.0388 20.16C16.8511 20.0496 17.6278 19.7559 18.3099 19.3011C18.9921 18.8463 19.5619 18.2424 19.9763 17.535C20.7283 16.3342 21.1424 14.9527 21.175 13.5363C21.2503 12.1504 20.8716 10.7778 20.0963 9.6266C19.321 8.47544 18.1913 7.60857 16.8788 7.1575C15.6324 6.72352 14.3002 6.5945 12.9938 6.78125C11.1979 6.95025 9.53658 7.80598 8.35626 9.17C7.53482 10.1382 7.01837 11.328 6.872 12.5892C6.72563 13.8505 6.95589 15.1269 7.53376 16.2575C7.8672 16.939 8.40574 17.499 9.07376 17.8587C9.31876 17.9812 9.41501 17.9375 9.48501 17.6837C9.58126 17.29 9.69501 16.8963 9.76501 16.4938C9.7875 16.3573 9.75951 16.2173 9.68626 16.1C9.02119 15.1135 8.75435 13.9117 8.93941 12.7364C9.12447 11.5611 9.7477 10.4994 10.6838 9.765C11.3458 9.25218 12.1209 8.90517 12.9444 8.75296C13.7679 8.60074 14.6159 8.64773 15.4175 8.89C16.022 9.03716 16.5854 9.31899 17.0657 9.71444C17.546 10.1099 17.9308 10.6087 18.1913 11.1738C18.5566 11.9669 18.7103 12.8411 18.6375 13.7113C18.6128 14.8462 18.2801 15.9532 17.675 16.9137C17.4131 17.3431 17.0493 17.7011 16.6158 17.9561C16.1823 18.211 15.6925 18.3549 15.19 18.375C14.9206 18.4015 14.6489 18.3605 14.3994 18.2555C14.1499 18.1506 13.9305 17.9851 13.7611 17.7739C13.5917 17.5628 13.4776 17.3128 13.4292 17.0465C13.3807 16.7802 13.3995 16.506 13.4838 16.2487C13.685 15.4875 13.9213 14.735 14.1313 13.9825C14.3054 13.4582 14.3854 12.9072 14.3675 12.355C14.3607 12.1245 14.297 11.8992 14.1822 11.6992C14.0673 11.4991 13.9048 11.3306 13.7092 11.2085C13.5135 11.0864 13.2907 11.0146 13.0605 10.9994C12.8304 10.9841 12.6001 11.026 12.39 11.1213C12.093 11.2422 11.8271 11.4285 11.612 11.6664C11.3969 11.9042 11.2381 12.1874 11.1475 12.495C10.8279 13.3739 10.8279 14.3373 11.1475 15.2162C11.1825 15.3629 11.1825 15.5158 11.1475 15.6625C10.7275 17.4125 10.2725 19.25 9.88751 21.0437C9.7446 21.8972 9.72985 22.7672 9.84376 23.625C7.46046 22.5859 5.54745 20.6995 4.47506 18.3309C3.40266 15.9624 3.24715 13.2803 4.03863 10.8037C4.8301 8.32712 6.51228 6.23226 8.75951 4.92465C11.0067 3.61704 13.6592 3.18968 16.2034 3.7253C18.7476 4.26093 21.0026 5.72144 22.5319 7.8241C24.0612 9.92676 24.7559 12.522 24.4817 15.1075C24.2075 17.693 22.9838 20.0848 21.0475 21.8199C19.1112 23.555 16.6 24.51 14 24.5V24.5Z"
      }
    })]);
  }

};