import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'StarHalfFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--starHalfFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21.2887 17.1326L27.9124 10.6663L18.7512 9.33631C18.611 9.31525 18.478 9.26045 18.3637 9.17662C18.2494 9.09279 18.1571 8.98243 18.0949 8.85506L13.9999 0.560059L9.9049 8.85506C9.84268 8.98243 9.75045 9.09279 9.63613 9.17662C9.52181 9.26045 9.38884 9.31525 9.24865 9.33631L0.0874023 10.6663L6.71115 17.1326C6.81243 17.2309 6.8884 17.3523 6.93259 17.4864C6.97677 17.6205 6.98786 17.7633 6.9649 17.9026L5.39865 27.0288L13.5887 22.7501C13.7141 22.6841 13.8538 22.6497 13.9955 22.6497C14.1373 22.6497 14.2769 22.6841 14.4024 22.7501L22.6012 27.0638L20.9999 17.9026C20.9813 17.7604 20.9978 17.6158 21.0482 17.4815C21.0985 17.3473 21.1811 17.2274 21.2887 17.1326ZM15.2249 21.1663C14.8468 20.9691 14.4263 20.867 13.9999 20.8688V4.51506L16.5287 9.62506C16.7172 10.0067 16.9958 10.3367 17.3403 10.5867C17.6848 10.8366 18.0849 10.9991 18.5062 11.0601L24.1499 11.8826L20.0637 15.8638C19.7587 16.1615 19.5308 16.529 19.3997 16.9345C19.2686 17.3401 19.2382 17.7714 19.3112 18.1913L20.2737 23.8176L15.2249 21.1663Z"
      }
    })]);
  }

};