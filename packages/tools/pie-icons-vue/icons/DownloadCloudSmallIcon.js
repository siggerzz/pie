import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'DownloadCloudSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--downloadCloudSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.145 6.4312C12.0121 5.22237 11.4582 4.09884 10.5802 3.2574C9.70215 2.41596 8.55608 1.91026 7.34269 1.82888C6.12931 1.7475 4.92597 2.09563 3.94346 2.81229C2.96095 3.52895 2.26191 4.56844 1.96879 5.7487C1.37973 6.01425 0.88027 6.44485 0.530861 6.98838C0.181451 7.5319 -0.00292928 8.16505 3.51925e-05 8.8112C3.51925e-05 9.70696 0.355878 10.566 0.989282 11.1994C1.62269 11.8329 2.48177 12.1887 3.37754 12.1887H4.17379L2.75629 10.7712C2.33903 10.6396 1.97437 10.3788 1.71489 10.0266C1.4554 9.67429 1.31451 9.24871 1.31254 8.8112C1.30924 8.37488 1.44601 7.94902 1.70273 7.59621C1.95946 7.2434 2.32261 6.98227 2.73879 6.8512L3.12379 6.73745L3.18504 6.3437C3.34334 5.39009 3.85301 4.53034 4.61365 3.93381C5.37429 3.33728 6.33074 3.04721 7.29459 3.12077C8.25845 3.19432 9.15981 3.62615 9.82113 4.33119C10.4824 5.03623 10.8558 5.96336 10.8675 6.92995V7.4462L11.3663 7.55995C11.7389 7.64511 12.0717 7.8542 12.3101 8.15301C12.5485 8.45182 12.6785 8.82268 12.6788 9.20495C12.6757 9.62334 12.5158 10.0253 12.2306 10.3315C11.9455 10.6377 11.5559 10.8258 11.1388 10.8587L9.81754 12.1887H11.0075C11.6986 12.1851 12.3671 11.9424 12.8995 11.5019C13.432 11.0613 13.7956 10.4501 13.9285 9.77195C14.0615 9.0938 13.9556 8.39053 13.6289 7.78156C13.3022 7.1726 12.7748 6.69547 12.1363 6.4312H12.145Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.21379 9.09119L7.65629 10.6487V6.12494H6.34379V10.6487L4.78629 9.09119L3.85879 10.0187L6.26504 12.4162C6.36109 12.5135 6.47552 12.5909 6.6017 12.6436C6.72787 12.6964 6.86327 12.7236 7.00004 12.7236C7.1368 12.7236 7.2722 12.6964 7.39837 12.6436C7.52455 12.5909 7.63898 12.5135 7.73504 12.4162L10.1413 10.0187L9.21379 9.09119Z"
      }
    })]);
  }

};