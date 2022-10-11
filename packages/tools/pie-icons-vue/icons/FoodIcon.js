import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FoodIcon',
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
      "class": "c-pieIcon c-pieIcon--food"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2.135 19.7225C1.53075 19.2371 0.774886 18.98 0 18.9962L0 17.2462C1.12064 17.2314 2.21406 17.5917 3.10625 18.27C3.71427 18.7547 4.47259 19.0116 5.25 18.9962C6.0273 19.0108 6.78537 18.754 7.39375 18.27C8.28594 17.5917 9.37936 17.2314 10.5 17.2462C11.6235 17.2301 12.7201 17.5905 13.615 18.27C14.2278 18.7432 14.9801 19 15.7544 19C16.5286 19 17.281 18.7432 17.8938 18.27C18.7878 17.5953 19.88 17.2354 21 17.2462V18.9962C20.2227 18.9817 19.4646 19.2385 18.8562 19.7225C17.9547 20.3856 16.8648 20.7433 15.7456 20.7433C14.6265 20.7433 13.5366 20.3856 12.635 19.7225C12.029 19.2404 11.2743 18.9837 10.5 18.9962C9.72558 18.983 8.97069 19.2398 8.365 19.7225C7.47012 20.402 6.37352 20.7624 5.25 20.7462C4.12638 20.7631 3.02957 20.4026 2.135 19.7225V19.7225ZM21.9187 4.375V0H16.6687V1.75H20.1687V4.375H13.9388L14.7 11.2262C13.3548 10.7345 11.9322 10.4885 10.5 10.5C6.125 10.5 2.47625 12.6962 1.84625 15.75L3.59625 16.1C4.0425 13.93 7.0875 12.25 10.5 12.25C13.9125 12.25 16.9575 13.8775 17.4388 16.0387L19.1888 15.6625C18.8024 14.1988 17.8607 12.9433 16.5638 12.1625L15.89 6.125H26.075L24.5525 22.8288C24.5328 23.0469 24.432 23.2497 24.27 23.3972C24.108 23.5446 23.8965 23.6259 23.6775 23.625H19.0925C19.233 23.0525 19.3006 22.4645 19.2937 21.875H17.5437C17.5437 24.1763 17.2288 25.375 10.5438 25.375C3.85875 25.375 3.54375 24.1763 3.54375 21.875H1.79375C1.79375 26.3375 4.61125 27.125 10.5438 27.125C14.35 27.125 16.87 26.7925 18.1913 25.375H23.6862C24.3434 25.3777 24.9776 25.1338 25.4636 24.6915C25.9497 24.2492 26.2521 23.6407 26.3112 22.9863L28 4.375H21.9187Z"
      }
    })]);
  }

};