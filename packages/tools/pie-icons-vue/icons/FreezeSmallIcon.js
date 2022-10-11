import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FreezeSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--freezeSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.7487 7.77877L11.1299 8.62752L8.31242 7.00002L11.1299 5.37252L12.7487 6.22127L13.3612 5.05752L11.7862 4.23502L11.8562 2.45877L10.5524 2.40627L10.4737 4.24377L7.65617 5.86252V2.60752L9.20492 1.62752L8.49617 0.525024L6.99992 1.47002L5.50367 0.525024L4.79492 1.62752L6.34367 2.60752V5.86252L3.52617 4.24377L3.44742 2.40627L2.14367 2.45877L2.21367 4.23502L0.638672 5.05752L1.25117 6.22127L2.86992 5.37252L5.68742 7.00002L2.86992 8.62752L1.25117 7.77877L0.638672 8.94252L2.21367 9.76502L2.13492 11.5413L3.44742 11.5938L3.52617 9.75627L6.34367 8.13752V11.3925L4.79492 12.3725L5.50367 13.475L6.99992 12.53L8.49617 13.475L9.20492 12.3725L7.65617 11.3925V8.13752L10.4737 9.75627L10.5437 11.5938L11.8562 11.5413L11.7862 9.76502L13.3612 8.94252L12.7487 7.77877Z"
      }
    })]);
  }

};