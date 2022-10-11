import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PizzaSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--pizzaSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.9238 3.98997C12.1013 2.70372 9.625 -0.236284 4.2525 0.0874665C3.87103 0.109812 3.51256 0.277264 3.25062 0.55548C2.98867 0.833696 2.8431 1.20159 2.84375 1.58372V14L12.6175 5.95872C12.9014 5.72542 13.0895 5.39581 13.146 5.03273C13.2025 4.66965 13.1234 4.29848 12.9238 3.98997V3.98997ZM4.17375 8.81997C4.3343 8.83207 4.49557 8.80941 4.64657 8.75354C4.79757 8.69767 4.93474 8.6099 5.04875 8.49622C5.26302 8.28135 5.38334 7.99028 5.38334 7.68684C5.38334 7.3834 5.26302 7.09234 5.04875 6.87747C4.93387 6.76449 4.79678 6.6766 4.64616 6.61936C4.49554 6.56213 4.33467 6.5368 4.17375 6.54497V3.62247C5.30797 3.5662 6.43918 3.78229 7.4728 4.25267C8.50642 4.72305 9.4124 5.43404 10.115 6.32622L4.15625 11.1825L4.17375 8.81997ZM11.8038 4.94372L11.13 5.49497C10.2986 4.45522 9.23398 3.62586 8.02243 3.07405C6.81087 2.52224 5.48641 2.26348 4.15625 2.31872V1.58372C4.15599 1.55607 4.16169 1.52869 4.17297 1.50344C4.18424 1.47819 4.20082 1.45567 4.22157 1.4374C4.24233 1.41914 4.26678 1.40556 4.29325 1.39759C4.31973 1.38962 4.34761 1.38744 4.375 1.39122H5.0925C9.24875 1.39122 11.2175 3.68372 11.865 4.71622C11.8797 4.75744 11.8799 4.80244 11.8656 4.8438C11.8513 4.88515 11.8233 4.9204 11.7863 4.94372H11.8038ZM8.30375 6.06372C8.30368 6.26384 8.24395 6.45939 8.13217 6.62539C8.0204 6.79139 7.86167 6.92029 7.67627 6.99562C7.49087 7.07094 7.28721 7.08928 7.09134 7.04828C6.89546 7.00728 6.71626 6.9088 6.57664 6.76544C6.43701 6.62207 6.34331 6.44033 6.30749 6.24344C6.27168 6.04655 6.29539 5.84345 6.3756 5.6601C6.4558 5.47676 6.58885 5.32149 6.75774 5.21414C6.92663 5.10679 7.1237 5.05225 7.32375 5.05747C7.59063 5.05747 7.84657 5.16348 8.03528 5.35219C8.22399 5.5409 8.33 5.79684 8.33 6.06372H8.30375Z"
      }
    })]);
  }

};