import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'DriverMopedIcon',
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
      "class": "c-pieIcon c-pieIcon--driverMoped"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M6.39625 17.5H4.55L5.01375 16.1263C5.46412 14.7452 6.3397 13.5419 7.51525 12.6885C8.6908 11.8352 10.1061 11.3754 11.5587 11.375H16.4412C17.8939 11.3754 19.3092 11.8352 20.4847 12.6885C21.6603 13.5419 22.5359 14.7452 22.9862 16.1263L23.45 17.5H21.6037L21.3325 16.6775C20.9952 15.6457 20.3408 14.7467 19.4624 14.1088C18.5841 13.4709 17.5268 13.1266 16.4412 13.125H11.5587C10.4732 13.1266 9.41588 13.4709 8.53756 14.1088C7.65924 14.7467 7.00477 15.6457 6.6675 16.6775L6.39625 17.5ZM10.5962 9.09125C9.80879 8.30416 9.3186 7.26838 9.20919 6.16039C9.09979 5.0524 9.37794 3.94076 9.99626 3.01486C10.6146 2.08896 11.5348 1.40609 12.6002 1.0826C13.6655 0.75912 14.8101 0.81503 15.8388 1.24081C16.8676 1.66659 17.7168 2.43589 18.242 3.41765C18.7671 4.39941 18.9356 5.53287 18.7187 6.62492C18.5018 7.71697 17.913 8.70004 17.0526 9.40664C16.1922 10.1132 15.1134 10.4996 14 10.5C12.7239 10.4985 11.5002 9.99205 10.5962 9.09125ZM11.83 7.875C12.2607 8.29704 12.8065 8.58252 13.3988 8.69564C13.9912 8.80876 14.6037 8.74448 15.1597 8.51086C15.7156 8.27725 16.1903 7.8847 16.524 7.38243C16.8578 6.88017 17.0358 6.29054 17.0358 5.6875C17.0358 5.08446 16.8578 4.49483 16.524 3.99257C16.1903 3.4903 15.7156 3.09775 15.1597 2.86414C14.6037 2.63052 13.9912 2.56624 13.3988 2.67936C12.8065 2.79248 12.2607 3.07796 11.83 3.5C11.5411 3.78635 11.3118 4.12709 11.1553 4.50255C10.9988 4.878 10.9182 5.28074 10.9182 5.6875C10.9182 6.09426 10.9988 6.497 11.1553 6.87246C11.3118 7.24791 11.5411 7.58865 11.83 7.875ZM25.4362 19.7138V21.4638H19.67C19.5702 21.463 19.4713 21.4827 19.3794 21.5219C19.2876 21.561 19.2048 21.6187 19.1362 21.6913L16.8787 23.94C16.9977 24.2593 17.0599 24.5968 17.0625 24.9375C17.066 25.3877 16.9703 25.8331 16.7821 26.2421C16.5938 26.651 16.3177 27.0135 15.9735 27.3036C15.6292 27.5937 15.2252 27.8043 14.7902 27.9204C14.3552 28.0366 13.9 28.0554 13.457 27.9756C13.0139 27.8957 12.5939 27.7192 12.2268 27.4585C11.8598 27.1978 11.5547 26.8594 11.3333 26.4674C11.112 26.0754 10.9798 25.6394 10.9462 25.1904C10.9125 24.7415 10.9783 24.2906 11.1387 23.87L8.96 21.6913C8.89145 21.6187 8.80867 21.561 8.71683 21.5219C8.625 21.4827 8.52608 21.463 8.42625 21.4638H2.625V19.7138H8.42625C9.08213 19.7258 9.70843 19.9889 10.1762 20.4488L12.1887 22.4613C12.7126 22.0739 13.3485 21.868 14 21.875C14.6649 21.8788 15.3102 22.1 15.8375 22.505L17.8937 20.4488C18.3595 19.9858 18.9871 19.7222 19.6437 19.7138H25.4362ZM15.3125 24.9638C15.3177 24.7031 15.2452 24.4468 15.1042 24.2276C14.9632 24.0083 14.76 23.836 14.5207 23.7326C14.2814 23.6292 14.0167 23.5995 13.7604 23.6471C13.5041 23.6947 13.2678 23.8176 13.0816 24.0001C12.8954 24.1826 12.7678 24.4163 12.715 24.6716C12.6622 24.9269 12.6866 25.1922 12.7851 25.4335C12.8836 25.6749 13.0518 25.8814 13.2682 26.0269C13.4845 26.1723 13.7393 26.25 14 26.25C14.3481 26.25 14.6819 26.1117 14.9281 25.8656C15.1742 25.6194 15.3125 25.2856 15.3125 24.9375V24.9638Z"
      }
    })]);
  }

};