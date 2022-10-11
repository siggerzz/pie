import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'OrderSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--orderSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.375 1.09375H2.625C2.2196 1.09605 1.83145 1.25811 1.54478 1.54478C1.25811 1.83145 1.09605 2.2196 1.09375 2.625V13.265L4.2875 11.8212C4.31479 11.8081 4.3447 11.8012 4.375 11.8012C4.4053 11.8012 4.43521 11.8081 4.4625 11.8212L7 12.9675L9.5375 11.8212C9.56479 11.8081 9.5947 11.8012 9.625 11.8012C9.6553 11.8012 9.68521 11.8081 9.7125 11.8212L12.9062 13.265V2.625C12.904 2.2196 12.7419 1.83145 12.4552 1.54478C12.1686 1.25811 11.7804 1.09605 11.375 1.09375ZM11.5938 11.235L10.255 10.6312C10.0575 10.5402 9.84252 10.493 9.625 10.493C9.40748 10.493 9.19254 10.5402 8.995 10.6312L7 11.5325L5.005 10.6575C4.80778 10.5653 4.59272 10.5175 4.375 10.5175C4.15728 10.5175 3.94222 10.5653 3.745 10.6575L2.40625 11.2612V2.625C2.40625 2.56698 2.4293 2.51134 2.47032 2.47032C2.51134 2.4293 2.56698 2.40625 2.625 2.40625H11.375C11.433 2.40625 11.4887 2.4293 11.5297 2.47032C11.5707 2.51134 11.5938 2.56698 11.5938 2.625V11.235ZM4.375 4.59375H9.625V5.90625H4.375V4.59375ZM5.25 7.21875H8.75V8.53125H5.25V7.21875Z"
      }
    })]);
  }

};