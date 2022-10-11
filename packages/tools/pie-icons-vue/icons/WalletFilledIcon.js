import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'WalletFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--walletFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M19.0403 5.00504L18.2528 3.10629C18.1208 2.78625 17.9269 2.49548 17.6821 2.2507C17.4373 2.00593 17.1465 1.81198 16.8265 1.68004C16.1849 1.41509 15.4644 1.41509 14.8228 1.68004L6.80775 5.00504H19.0403Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M23.6253 21.4463H17.0628C16.8725 21.4463 16.69 21.3707 16.5554 21.2361C16.4208 21.1016 16.3453 20.9191 16.3453 20.7288V11.7075C16.3476 11.5188 16.4242 11.3385 16.5585 11.2058C16.6928 11.0732 16.874 10.9988 17.0628 10.9988H24.5878V9.32754C24.5856 8.943 24.499 8.56365 24.334 8.21629C24.1343 7.72999 23.7931 7.31487 23.3547 7.02469C22.9163 6.73452 22.4009 6.58266 21.8753 6.58879H3.50025C2.94226 6.59188 2.39976 6.77271 1.9515 7.10504C1.79605 7.22842 1.65251 7.36611 1.52275 7.51629L1.36525 7.72629L1.29525 7.81379C1.20872 7.94009 1.13542 8.07497 1.0765 8.21629C0.911548 8.56365 0.824922 8.943 0.822754 9.32754V23.2138C0.822754 23.9239 1.10485 24.6049 1.60698 25.1071C2.1091 25.6092 2.79014 25.8913 3.50025 25.8913H21.8753C22.5854 25.8913 23.2664 25.6092 23.7685 25.1071C24.2707 24.6049 24.5528 23.9239 24.5528 23.2138V21.4638H23.6253V21.4463Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M18.0953 12.7488V19.6963H27.1253V12.7488H18.0953Z"
      }
    })]);
  }

};