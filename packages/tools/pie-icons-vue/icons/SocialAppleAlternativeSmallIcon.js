import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SocialAppleAlternativeSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--socialAppleAlternativeSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.9087 9.70371C11.9087 9.76496 11.8562 9.81746 11.8387 9.86996C11.5067 10.8199 10.9757 11.688 10.2812 12.4162C10.0226 12.6795 9.68396 12.8498 9.31831 12.9005C8.95266 12.9511 8.58052 12.8793 8.25999 12.6962C7.93439 12.5072 7.5646 12.4076 7.18812 12.4076C6.81163 12.4076 6.44184 12.5072 6.11624 12.6962C5.80602 12.8659 5.45423 12.9448 5.10124 12.9237C4.88838 12.9049 4.68207 12.8405 4.49635 12.7348C4.31063 12.6291 4.14986 12.4846 4.02499 12.3112C2.73129 10.9232 2.02294 9.08969 2.04749 7.19246C2.05232 6.65337 2.16539 6.12075 2.37999 5.62621C2.52421 5.25842 2.74348 4.92472 3.02382 4.64637C3.30415 4.36802 3.63941 4.15114 4.00822 4.00954C4.37702 3.86795 4.77128 3.80475 5.16587 3.82397C5.56045 3.8432 5.9467 3.94443 6.29999 4.12121C6.53068 4.25237 6.7915 4.32134 7.05687 4.32134C7.32224 4.32134 7.58306 4.25237 7.81374 4.12121C8.05679 3.99658 8.31184 3.8969 8.57499 3.82371C9.2222 3.69349 9.89372 3.76369 10.5 4.02496C10.9684 4.20229 11.361 4.53616 11.6112 4.96996L11.1212 5.40746C10.9383 5.56368 10.7765 5.74311 10.64 5.94121C10.3643 6.43629 10.2522 7.00588 10.3198 7.56851C10.3874 8.13114 10.6311 8.65799 11.0162 9.07371C11.2535 9.35815 11.5613 9.57538 11.9087 9.70371Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.37999 0.874955C9.4315 1.30922 9.35868 1.74919 9.16999 2.14371C9.02337 2.5166 8.78691 2.8475 8.48161 3.107C8.17631 3.36651 7.81164 3.54657 7.41999 3.63121C6.86874 3.74496 6.87749 3.75371 6.93874 3.19371C7.01522 2.62845 7.26627 2.10118 7.65686 1.68549C8.04745 1.2698 8.55809 0.986438 9.11749 0.874955C9.20493 0.870213 9.29256 0.870213 9.37999 0.874955Z"
      }
    })]);
  }

};