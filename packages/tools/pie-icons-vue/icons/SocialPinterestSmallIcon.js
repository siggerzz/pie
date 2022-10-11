import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SocialPinterestSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--socialPinterestSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M6.99986 0.174988C5.66053 0.175016 4.35119 0.57165 3.23699 1.31487C2.12279 2.05808 1.25362 3.1146 0.739098 4.35116C0.224581 5.58773 0.087759 6.94896 0.345889 8.26319C0.604018 9.57741 1.24554 10.7858 2.18954 11.7359C3.13354 12.686 4.33775 13.3352 5.65029 13.6018C6.96283 13.8684 8.32491 13.7403 9.56476 13.2338C10.8046 12.7272 11.8667 11.8649 12.6171 10.7555C13.3674 9.64605 13.7725 8.3393 13.7811 6.99999C13.7857 6.10611 13.6138 5.22011 13.2752 4.39284C12.9365 3.56557 12.4379 2.8133 11.8079 2.17919C11.1778 1.54508 10.4288 1.04162 9.6037 0.697691C8.77862 0.353759 7.89375 0.176128 6.99986 0.174988V0.174988ZM6.99986 12.425C6.43225 12.4284 5.86784 12.3398 5.32861 12.1625C5.62324 11.7544 5.84525 11.2986 5.98486 10.815C6.09861 10.4212 6.20361 10.0187 6.30861 9.62499C6.3057 9.58129 6.3057 9.53744 6.30861 9.49374C6.36111 9.55499 6.38736 9.60749 6.43111 9.65124L6.55361 9.76499C6.75595 9.92856 6.99145 10.0461 7.24378 10.1096C7.49611 10.1731 7.75922 10.1809 8.01486 10.1325C8.4465 10.0791 8.85991 9.92649 9.22272 9.68664C9.58553 9.44679 9.88789 9.1262 10.1061 8.74999C10.5057 8.12468 10.7238 7.40071 10.7361 6.65874C10.7733 5.93547 10.574 5.21976 10.1683 4.61986C9.76253 4.01995 9.17248 3.56849 8.48736 3.33374C7.8358 3.10827 7.13969 3.04225 6.45736 3.14124C5.5235 3.22607 4.6584 3.66802 4.04236 4.37499C3.61153 4.88123 3.3401 5.50361 3.26225 6.16379C3.1844 6.82397 3.30361 7.49242 3.60486 8.08499C3.77363 8.45463 4.05554 8.76105 4.40986 8.95999C4.54111 9.02124 4.58486 8.95999 4.61986 8.86374C4.65486 8.76749 4.73361 8.45249 4.77736 8.24249C4.78635 8.17115 4.76755 8.09909 4.72486 8.04124C4.37205 7.52144 4.22999 6.88696 4.32747 6.26634C4.42495 5.64572 4.75468 5.08535 5.24986 4.69874C5.59536 4.42889 6.0006 4.24593 6.4315 4.16524C6.8624 4.08454 7.30638 4.10846 7.72611 4.23499C8.04239 4.31073 8.33739 4.45715 8.58896 4.66325C8.84053 4.86936 9.04213 5.12979 9.17861 5.42499C9.36904 5.84093 9.44746 6.29941 9.40611 6.75499C9.39953 7.34777 9.22673 7.9268 8.90736 8.42624C8.77393 8.65476 8.58566 8.84643 8.35955 8.98393C8.13345 9.12142 7.87665 9.2004 7.61236 9.21374C7.47457 9.21889 7.33752 9.1914 7.21237 9.13351C7.08723 9.07563 6.97753 8.98899 6.89223 8.88066C6.80693 8.77233 6.74844 8.64537 6.72152 8.51014C6.69461 8.3749 6.70004 8.23523 6.73736 8.10249C6.85111 7.69999 6.97361 7.31499 7.08736 6.91249C7.17644 6.62978 7.21495 6.33358 7.20111 6.03749C7.19615 5.91354 7.15989 5.79287 7.09573 5.68671C7.03157 5.58055 6.94158 5.49236 6.83415 5.43035C6.72672 5.36834 6.60534 5.33452 6.48132 5.33205C6.3573 5.32959 6.23467 5.35855 6.12486 5.41624C5.97598 5.48353 5.84294 5.58142 5.7344 5.70353C5.62585 5.82565 5.54424 5.96925 5.49486 6.12499C5.32836 6.58282 5.32836 7.08466 5.49486 7.54249C5.51251 7.62025 5.51251 7.70098 5.49486 7.77874C5.27611 8.71499 5.04861 9.65124 4.83861 10.5962C4.76811 11.0456 4.76811 11.5032 4.83861 11.9525C3.60155 11.4017 2.61284 10.4115 2.06388 9.17359C1.51492 7.9357 1.44475 6.53817 1.86696 5.25152C2.28917 3.96487 3.17372 2.88062 4.34938 2.20866C5.52505 1.5367 6.90821 1.32482 8.23111 1.61404C9.55402 1.90326 10.7226 2.673 11.5106 3.77427C12.2986 4.87553 12.65 6.22998 12.4967 7.57544C12.3435 8.92089 11.6965 10.1616 10.6811 11.0575C9.66564 11.9534 8.35392 12.4406 6.99986 12.425V12.425Z"
      }
    })]);
  }

};