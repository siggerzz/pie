import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SettingsSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--settingsSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.50514 13.7812H5.49514L5.15389 12.5737C5.02955 12.1637 4.75016 11.8184 4.37514 11.6112C3.99748 11.3662 3.53795 11.2812 3.09764 11.375L1.88139 11.6813L0.376387 9.05625L1.25139 8.18125C1.5395 7.8575 1.6874 7.43267 1.66264 7C1.67716 6.77614 1.64671 6.55165 1.57307 6.33975C1.49943 6.12786 1.3841 5.93286 1.23389 5.76625L0.358887 4.89125L1.86389 2.26625L3.09764 2.625C3.31502 2.67367 3.53992 2.67862 3.75924 2.63957C3.97856 2.60051 4.18792 2.51823 4.37514 2.3975C4.76492 2.19695 5.06031 1.85128 5.19764 1.435L5.49514 0.21875H8.50514L8.84639 1.42625C8.97072 1.83625 9.25012 2.18157 9.62514 2.38875C9.81193 2.51052 10.021 2.59409 10.2403 2.63464C10.4595 2.67519 10.6846 2.67191 10.9026 2.625L12.1189 2.31875L13.6239 4.94375L12.7489 5.81875C12.4608 6.1425 12.3129 6.56733 12.3376 7C12.3277 7.21544 12.3605 7.4307 12.4341 7.63343C12.5077 7.83615 12.6206 8.02233 12.7664 8.18125L13.6414 9.05625L12.1364 11.6813L10.9026 11.375C10.6927 11.3286 10.4757 11.3241 10.264 11.3616C10.0523 11.3991 9.85008 11.478 9.66889 11.5938C9.2791 11.7943 8.98372 12.14 8.84639 12.5563L8.50514 13.7812ZM6.49264 12.4688H7.50764L7.58639 12.25C7.69459 11.88 7.87472 11.535 8.11645 11.2347C8.35819 10.9344 8.65678 10.6847 8.99514 10.5C9.66207 10.0898 10.4645 9.96076 11.2264 10.1413L11.4801 10.2025L11.9876 9.3275L11.8214 9.1525C11.5511 8.86544 11.3413 8.52694 11.2045 8.15716C11.0678 7.78737 11.0067 7.39385 11.0251 7C11.0045 6.22521 11.2907 5.47363 11.8214 4.90875L11.9876 4.73375L11.4801 3.85875L11.2264 3.92C10.8479 3.999 10.4575 4.00257 10.0777 3.9305C9.69781 3.85843 9.33589 3.71214 9.01264 3.5C8.67132 3.31667 8.36961 3.06768 8.12484 2.76735C7.88008 2.46703 7.69708 2.12128 7.58639 1.75L7.50764 1.49625H6.49264L6.41389 1.75C6.30568 2.12 6.12555 2.46503 5.88382 2.76532C5.64209 3.06561 5.34349 3.31527 5.00514 3.5C4.3382 3.91023 3.5358 4.03924 2.77389 3.85875L2.52014 3.7975L2.01264 4.6725L2.17889 4.8475C2.44916 5.13456 2.65893 5.47306 2.79572 5.84284C2.93251 6.21263 2.99353 6.60615 2.97514 7C2.9897 7.39079 2.92685 7.7806 2.7902 8.14701C2.65355 8.51342 2.44579 8.84919 2.17889 9.135L2.01264 9.31L2.52014 10.185L2.77389 10.1237C3.53252 9.95133 4.32857 10.0866 4.98764 10.5C5.32895 10.6833 5.63066 10.9323 5.87543 11.2326C6.1202 11.533 6.30319 11.8787 6.41389 12.25L6.49264 12.4688ZM7.00014 9.625C6.4813 9.62454 5.97423 9.47034 5.54297 9.18187C5.11172 8.8934 4.77562 8.4836 4.57713 8.00423C4.37864 7.52486 4.32666 6.99742 4.42776 6.48852C4.52885 5.97963 4.77849 5.5121 5.14514 5.145C5.38545 4.8871 5.67526 4.68024 5.99725 4.53677C6.31925 4.39329 6.66685 4.31615 7.01931 4.30993C7.37177 4.30371 7.72187 4.36855 8.04873 4.50057C8.37559 4.63259 8.67251 4.8291 8.92177 5.07837C9.17104 5.32763 9.36754 5.62455 9.49957 5.95141C9.63159 6.27827 9.69643 6.62837 9.69021 6.98083C9.68399 7.33329 9.60684 7.68089 9.46337 8.00288C9.3199 8.32488 9.11304 8.61468 8.85514 8.855C8.36333 9.34742 7.6961 9.62439 7.00014 9.625ZM7.00014 5.6875C6.74072 5.68773 6.48718 5.76483 6.27155 5.90906C6.05593 6.0533 5.88788 6.2582 5.78863 6.49788C5.68939 6.73757 5.6634 7.00129 5.71395 7.25574C5.7645 7.51019 5.88931 7.74395 6.07264 7.9275C6.1939 8.05025 6.33833 8.14772 6.49754 8.21423C6.65675 8.28075 6.82759 8.315 7.00014 8.315C7.17269 8.315 7.34352 8.28075 7.50273 8.21423C7.66195 8.14772 7.80637 8.05025 7.92764 7.9275C8.11096 7.74395 8.23578 7.51019 8.28633 7.25574C8.33687 7.00129 8.31088 6.73757 8.21164 6.49788C8.11239 6.2582 7.94435 6.0533 7.72872 5.90906C7.51309 5.76483 7.25956 5.68773 7.00014 5.6875Z"
      }
    })]);
  }

};