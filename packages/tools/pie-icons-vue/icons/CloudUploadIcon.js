import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CloudUploadIcon',
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
      "class": "c-pieIcon c-pieIcon--cloudUpload"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M24.0187 12.7312C23.8231 10.3348 22.7744 8.08807 21.0632 6.39911C19.3519 4.71015 17.0916 3.69102 14.6928 3.52687C12.2941 3.36271 9.91598 4.06442 7.99058 5.50452C6.06519 6.94461 4.72021 9.02756 4.19997 11.375C3.03379 11.848 2.03572 12.659 1.33406 13.7037C0.632399 14.7484 0.259213 15.979 0.262472 17.2375C0.262472 18.9316 0.935439 20.5562 2.13333 21.7541C3.33122 22.952 4.9559 23.625 6.64997 23.625H22.1375C23.622 23.6227 25.045 23.0319 26.0947 21.9822C27.1444 20.9325 27.7352 19.5095 27.7375 18.025C27.7301 16.869 27.3701 15.7427 26.7056 14.7968C26.0411 13.8508 25.1037 13.1302 24.0187 12.7312ZM22.1375 21.875H6.64997C5.42074 21.8727 4.24252 21.3833 3.37332 20.5141C2.50412 19.6449 2.01479 18.4667 2.01247 17.2375C2.01465 16.257 2.3311 15.303 2.91537 14.5156C3.49964 13.7282 4.32094 13.1488 5.25872 12.8625C5.70395 12.6957 6.17459 12.6069 6.64997 12.6C7.10311 12.6001 7.55391 12.6649 7.98872 12.7925L8.51372 11.1212C7.73991 10.8902 6.93006 10.8042 6.12497 10.8675C6.76043 9.02396 8.0244 7.46287 9.69538 6.45778C11.3664 5.4527 13.3378 5.06774 15.2641 5.37036C17.1905 5.67298 18.9489 6.64388 20.2312 8.11292C21.5135 9.58196 22.2379 11.4554 22.2775 13.405V14.0962L22.9512 14.2537C23.8087 14.4473 24.5755 14.9253 25.1268 15.6101C25.678 16.2948 25.9814 17.1459 25.9875 18.025C25.9875 19.0461 25.5818 20.0253 24.8598 20.7473C24.1378 21.4694 23.1586 21.875 22.1375 21.875ZM15.1375 10.0537L18.55 13.4662L17.3162 14.7L14.98 12.3637V18.9H13.23V12.3637L10.8937 14.7L9.62497 13.4662L13.0375 10.0537C13.1745 9.9127 13.3384 9.80059 13.5195 9.72404C13.7006 9.64748 13.8952 9.60803 14.0918 9.60803C14.2885 9.60803 14.4831 9.64748 14.6642 9.72404C14.8453 9.80059 15.0092 9.9127 15.1462 10.0537H15.1375Z"
      }
    })]);
  }

};