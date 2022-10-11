import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PartnershipSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--partnershipSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.865 6.59752C12.3744 6.39152 12.7986 6.01855 13.0682 5.53978C13.3378 5.061 13.4367 4.50483 13.3488 3.96247C13.2608 3.4201 12.9911 2.92372 12.584 2.55472C12.1769 2.18572 11.6565 1.966 11.1081 1.93158C10.5597 1.89716 10.0159 2.05009 9.56586 2.3653C9.11581 2.6805 8.78621 3.13927 8.6311 3.66638C8.476 4.19349 8.5046 4.75766 8.71221 5.26639C8.91982 5.77511 9.29413 6.1982 9.77375 6.46627C9.00583 6.6835 8.35098 7.18796 7.945 7.87502L7 9.29252L6.06375 7.87502C5.64701 7.20121 4.99043 6.71034 4.22625 6.50127C4.69582 6.23446 5.06112 5.8164 5.26255 5.31528C5.46398 4.81417 5.48965 4.25958 5.33537 3.74201C5.18109 3.22443 4.85597 2.77441 4.41305 2.46536C3.97013 2.15631 3.43555 2.00648 2.89653 2.04031C2.35751 2.07414 1.84586 2.28964 1.44505 2.65164C1.04425 3.01364 0.777946 3.50078 0.68959 4.03358C0.601234 4.56639 0.696041 5.11341 0.958544 5.58541C1.22105 6.0574 1.63575 6.42652 2.135 6.63252C1.57583 6.86187 1.09622 7.25023 0.755607 7.74949C0.414991 8.24875 0.228331 8.83697 0.21875 9.44127V13.125H1.53125V9.44127C1.54724 8.96702 1.74871 8.51798 2.09233 8.19072C2.43595 7.86346 2.89428 7.68413 3.36875 7.69127C3.68564 7.68894 3.99779 7.76821 4.27516 7.92146C4.55254 8.0747 4.7858 8.29677 4.9525 8.56627L7 11.7075L9.0475 8.53127C9.21483 8.26235 9.44822 8.04075 9.72546 7.88758C10.0027 7.73441 10.3145 7.65478 10.6312 7.65627C11.1057 7.64913 11.564 7.82846 11.9077 8.15572C12.2513 8.48298 12.4528 8.93202 12.4688 9.40627V13.125H13.7812V9.44127C13.7785 8.83098 13.5951 8.23517 13.254 7.72905C12.913 7.22293 12.4296 6.82919 11.865 6.59752ZM3.0625 3.28127C3.27882 3.28127 3.49029 3.34542 3.67016 3.4656C3.85002 3.58579 3.99021 3.75661 4.07299 3.95646C4.15578 4.15632 4.17744 4.37624 4.13523 4.5884C4.09303 4.80057 3.98886 4.99546 3.8359 5.14842C3.68293 5.30138 3.48805 5.40555 3.27588 5.44776C3.06371 5.48996 2.8438 5.4683 2.64394 5.38552C2.44408 5.30273 2.27326 5.16254 2.15308 4.98268C2.0329 4.80281 1.96875 4.59135 1.96875 4.37502C1.96875 4.08494 2.08398 3.80674 2.2891 3.60162C2.49422 3.39651 2.77242 3.28127 3.0625 3.28127ZM10.9375 3.28127C11.1538 3.28127 11.3653 3.34542 11.5452 3.4656C11.725 3.58579 11.8652 3.75661 11.948 3.95646C12.0308 4.15632 12.0524 4.37624 12.0102 4.5884C11.968 4.80057 11.8639 4.99546 11.7109 5.14842C11.5579 5.30138 11.363 5.40555 11.1509 5.44776C10.9387 5.48996 10.7188 5.4683 10.5189 5.38552C10.3191 5.30273 10.1483 5.16254 10.0281 4.98268C9.9079 4.80281 9.84375 4.59135 9.84375 4.37502C9.84375 4.08494 9.95898 3.80674 10.1641 3.60162C10.3692 3.39651 10.6474 3.28127 10.9375 3.28127ZM3.71875 10.5H5.03125V13.125H3.71875V10.5ZM8.96875 10.5H10.2812V13.125H8.96875V10.5Z"
      }
    })]);
  }

};