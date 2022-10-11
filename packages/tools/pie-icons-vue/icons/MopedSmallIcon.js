import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MopedSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--mopedSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.0725 8.80249C12.8494 8.58118 12.5843 8.40678 12.2928 8.28956C12.0012 8.17234 11.6892 8.11469 11.375 8.11999C11.4358 7.81087 11.4358 7.49286 11.375 7.18374L9.625 1.31249C9.53098 0.985655 9.32964 0.700001 9.05343 0.501577C8.77723 0.303154 8.44225 0.203521 8.1025 0.218742H5.355L6.02 1.53124H8.1025C8.14949 1.53258 8.1949 1.54845 8.23251 1.57665C8.27011 1.60485 8.29806 1.64401 8.3125 1.68874L10.0625 7.55999C10.1108 7.72435 10.1201 7.8977 10.0897 8.06629C10.0594 8.23488 9.99012 8.39407 9.8875 8.53124C9.78708 8.66863 9.65527 8.78002 9.50307 8.85612C9.35086 8.93223 9.18266 8.97084 9.0125 8.96874H7.63L6.93 6.46624C6.84646 6.13464 6.65492 5.84028 6.38559 5.62957C6.11626 5.41886 5.78446 5.30379 5.4425 5.30249H1.75C1.3446 5.30479 0.95645 5.46685 0.669781 5.75352C0.383112 6.04019 0.221047 6.42834 0.21875 6.83374V10.2812H1.54875C1.51308 10.632 1.55668 10.9863 1.67633 11.318C1.79598 11.6497 1.98861 11.9503 2.24 12.1975C2.46212 12.4218 2.7265 12.5999 3.01787 12.7215C3.30923 12.843 3.6218 12.9056 3.9375 12.9056C4.2532 12.9056 4.56577 12.843 4.85713 12.7215C5.1485 12.5999 5.41288 12.4218 5.635 12.1975C5.88639 11.9503 6.07902 11.6497 6.19867 11.318C6.31832 10.9863 6.36192 10.632 6.32625 10.2812H8.95125C8.95125 10.3512 8.95125 10.43 8.95125 10.5C8.94994 10.8963 9.04653 11.2867 9.23243 11.6367C9.41833 11.9867 9.68779 12.2853 10.0169 12.5061C10.3459 12.7269 10.7245 12.863 11.1188 12.9023C11.5131 12.9416 11.9111 12.8829 12.2772 12.7315C12.6434 12.58 12.9665 12.3404 13.2179 12.034C13.4692 11.7276 13.641 11.3639 13.7179 10.9752C13.7949 10.5864 13.7746 10.1847 13.659 9.80569C13.5433 9.42665 13.3359 9.08205 13.055 8.80249H13.0725ZM4.7075 11.27C4.50266 11.473 4.22592 11.587 3.9375 11.587C3.64908 11.587 3.37234 11.473 3.1675 11.27C3.03764 11.1443 2.94212 10.9874 2.89005 10.8143C2.83797 10.6413 2.83107 10.4577 2.87 10.2812H5.005C5.04393 10.4577 5.03703 10.6413 4.98495 10.8143C4.93288 10.9874 4.83736 11.1443 4.7075 11.27ZM1.53125 8.96874V6.83374C1.53125 6.77573 1.5543 6.72009 1.59532 6.67906C1.63634 6.63804 1.69198 6.61499 1.75 6.61499H5.4425C5.49402 6.61754 5.5433 6.63688 5.5828 6.67006C5.6223 6.70324 5.64985 6.74843 5.66125 6.79874L6.265 8.96874H1.53125ZM12.145 11.27C11.9391 11.4709 11.6627 11.5834 11.375 11.5834C11.0873 11.5834 10.8109 11.4709 10.605 11.27C10.4511 11.1174 10.346 10.9225 10.303 10.7101C10.26 10.4977 10.2811 10.2773 10.3636 10.0769C10.4461 9.87645 10.5863 9.70506 10.7663 9.58446C10.9464 9.46385 11.1583 9.39946 11.375 9.39946C11.5917 9.39946 11.8036 9.46385 11.9837 9.58446C12.1637 9.70506 12.3039 9.87645 12.3864 10.0769C12.4689 10.2773 12.49 10.4977 12.447 10.7101C12.404 10.9225 12.2989 11.1174 12.145 11.27Z"
      }
    })]);
  }

};