import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'LogOutSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--logOutSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.9061 7C12.9134 8.05425 12.6383 9.09123 12.1095 10.0033C11.5807 10.9154 10.8174 11.6692 9.89887 12.1867C8.98032 12.7041 7.94 12.9663 6.88592 12.9459C5.83185 12.9256 4.80243 12.6234 3.90455 12.0709C3.00667 11.5184 2.27305 10.7355 1.77986 9.80374C1.28667 8.87194 1.05188 7.82511 1.09987 6.77193C1.14787 5.71874 1.47689 4.69761 2.05278 3.81452C2.62867 2.93143 3.43045 2.21859 4.37486 1.75V3.2375C3.57228 3.79635 2.96899 4.59675 2.65281 5.52221C2.33663 6.44768 2.32405 7.44989 2.61692 8.383C2.90978 9.3161 3.4928 10.1314 4.28111 10.7102C5.06942 11.289 6.02188 11.6011 6.99986 11.6011C7.97784 11.6011 8.9303 11.289 9.71861 10.7102C10.5069 10.1314 11.0899 9.3161 11.3828 8.383C11.6757 7.44989 11.6631 6.44768 11.3469 5.52221C11.0307 4.59675 10.4274 3.79635 9.62486 3.2375V1.75C10.6034 2.23657 11.428 2.98471 12.0072 3.91143C12.5864 4.83814 12.8975 5.9072 12.9061 7ZM7.65611 0H6.34361V5.25H7.65611V0Z"
      }
    })]);
  }

};