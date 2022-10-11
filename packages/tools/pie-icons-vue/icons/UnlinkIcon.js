import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'UnlinkIcon',
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
      "class": "c-pieIcon c-pieIcon--unlink"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.3775 19.25H6.87752C5.50208 19.2315 4.19005 18.6686 3.22894 17.6845C2.26782 16.7004 1.736 15.3755 1.75002 14C1.74625 12.6113 2.28649 11.2764 3.25502 10.2812C3.7282 9.79757 4.29304 9.41304 4.91652 9.15013C5.54 8.88722 6.20962 8.75119 6.88627 8.75H10.3863L11.375 7H6.88627C5.97661 7.00099 5.07628 7.18335 4.23794 7.53642C3.39959 7.88948 2.64006 8.40617 2.00377 9.05625C0.715145 10.3788 -0.00415514 12.1535 1.80579e-05 14C-0.000224496 15.837 0.721639 17.6004 2.00989 18.91C3.29815 20.2195 5.04954 20.9701 6.88627 21H11.375L10.3775 19.25Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.6838 16.4412L15.2338 14L17.6838 11.5587L16.4413 10.3162L14 12.7662L11.5588 10.3162L10.3163 11.5587L12.7663 14L10.3163 16.4412L11.5588 17.6837L14 15.2337L16.4413 17.6837L17.6838 16.4412Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M21.1138 7H17.1063L18.06 8.75H21.1138C22.4907 8.76616 23.805 9.32809 24.768 10.3124C25.731 11.2968 26.264 12.623 26.25 14C26.2538 15.3887 25.7135 16.7236 24.745 17.7188C24.2718 18.2024 23.707 18.587 23.0835 18.8499C22.46 19.1128 21.7904 19.2488 21.1138 19.25H18.06L17.1063 21H21.1138C22.0234 20.999 22.9238 20.8166 23.7621 20.4636C24.6004 20.1105 25.36 19.5938 25.9963 18.9437C27.2849 17.6212 28.0042 15.8465 28 14C28.0003 12.163 27.2784 10.3996 25.9901 9.09004C24.7019 7.78051 22.9505 7.02985 21.1138 7Z"
      }
    })]);
  }

};