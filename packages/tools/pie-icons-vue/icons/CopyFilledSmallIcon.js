import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CopyFilledSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--copyFilledSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.7952 1.6275C12.6948 1.48123 12.5669 1.35649 12.4189 1.2604C12.2709 1.16431 12.1056 1.09876 11.9326 1.0675L5.9462 -5.6508e-07C5.5954 -0.0585779 5.23597 0.0251188 4.94547 0.233024C4.65498 0.440928 4.45673 0.756366 4.39352 1.11125L4.32451 1.75H8.19758C8.88714 1.76371 9.54401 2.05065 10.0276 2.54942C10.5113 3.04818 10.7833 3.71915 10.7854 4.41875V11.6987C10.9944 11.6184 11.1791 11.4841 11.3213 11.3091C11.4635 11.1342 11.5582 10.9247 11.5962 10.7012L13.0195 2.625C13.0769 2.27552 12.9964 1.91716 12.7952 1.6275Z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M8.19758 14H2.15939C1.97873 14.0048 1.79899 13.9723 1.63103 13.9047C1.46307 13.837 1.31038 13.7355 1.18219 13.6062C1.054 13.477 0.952961 13.3228 0.885184 13.1528C0.817407 12.9829 0.784298 12.8008 0.787857 12.6175V4.4275C0.786711 4.24907 0.820512 4.07219 0.887298 3.90711C0.954084 3.74204 1.05253 3.59207 1.17691 3.46589C1.30129 3.33972 1.44914 3.23987 1.61187 3.17212C1.77461 3.10437 1.94898 3.07009 2.12489 3.07125H8.16308C8.33898 3.07009 8.51336 3.10437 8.67609 3.17212C8.83883 3.23987 8.98667 3.33972 9.11106 3.46589C9.23544 3.59207 9.33388 3.74204 9.40067 3.90711C9.46745 4.07219 9.50126 4.24907 9.50011 4.4275V12.6175C9.50706 12.9757 9.37398 13.3222 9.12993 13.5812C8.88588 13.8403 8.5507 13.9908 8.19758 14ZM6.86018 6.50126H3.47016V7.85751H6.86018V6.50126ZM3.47016 9.13502H6.86018V10.4913H3.47016V9.13502Z"
      }
    })]);
  }

};