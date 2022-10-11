import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'OffersSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--offersSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M6.67615 13.9387L0.0874023 7.34998L6.46615 0.96248C6.61216 0.817725 6.78808 0.706683 6.98156 0.637149C7.17505 0.567616 7.3814 0.541276 7.58615 0.55998L12.9237 1.09373L13.4574 6.43998C13.4784 6.64282 13.4539 6.84778 13.3858 7.03999C13.3177 7.2322 13.2076 7.40684 13.0637 7.55123L6.67615 13.9387ZM1.9424 7.34998L6.67615 12.0837L12.1362 6.62373L11.7249 2.29248L7.4549 1.87248L1.9424 7.34998ZM9.6249 3.49998C9.45184 3.49998 9.28267 3.5513 9.13878 3.64744C8.99488 3.74359 8.88273 3.88025 8.81651 4.04013C8.75028 4.20002 8.73295 4.37595 8.76672 4.54568C8.80048 4.71542 8.88381 4.87133 9.00618 4.9937C9.12855 5.11607 9.28446 5.19941 9.4542 5.23317C9.62393 5.26693 9.79986 5.2496 9.95975 5.18337C10.1196 5.11715 10.2563 5.005 10.3524 4.8611C10.4486 4.71721 10.4999 4.54804 10.4999 4.37498C10.4999 4.14292 10.4077 3.92036 10.2436 3.75626C10.0795 3.59217 9.85697 3.49998 9.6249 3.49998Z"
      }
    })]);
  }

};