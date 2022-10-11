import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MoonIcon',
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
      "class": "c-pieIcon c-pieIcon--moon"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.125 14C13.1333 11.9978 13.8247 10.0583 15.0848 8.50228C16.3448 6.94625 18.0982 5.86684 20.055 5.4425C19.8013 5.25875 19.53 5.08375 19.25 4.9175C18.8255 4.67317 18.3839 4.4597 17.9288 4.27875C16.6826 3.765 15.3479 3.50043 14 3.5C11.2152 3.5 8.54451 4.60625 6.57538 6.57538C4.60625 8.54451 3.5 11.2152 3.5 14C3.5 16.7848 4.60625 19.4555 6.57538 21.4246C8.54451 23.3938 11.2152 24.5 14 24.5C15.3479 24.4996 16.6826 24.235 17.9288 23.7213C18.3839 23.5403 18.8255 23.3268 19.25 23.0825C19.53 22.9162 19.8013 22.7413 20.055 22.5575C18.0982 22.1332 16.3448 21.0537 15.0848 19.4977C13.8247 17.9417 13.1333 16.0022 13.125 14ZM14 22.75C12.7729 22.752 11.5592 22.4958 10.4375 21.9982C9.31592 21.5006 8.31149 20.7726 7.48949 19.8616C6.66749 18.9505 6.0463 17.8768 5.66626 16.71C5.28621 15.5433 5.15582 14.3097 5.28353 13.0893C5.41125 11.8689 5.79422 10.689 6.40759 9.62623C7.02095 8.56346 7.85098 7.64158 8.84379 6.92046C9.8366 6.19933 10.97 5.69509 12.1703 5.44047C13.3707 5.18584 14.6112 5.18654 15.8112 5.4425C14.446 6.41321 13.3327 7.69651 12.5646 9.18521C11.7964 10.6739 11.3956 12.3248 11.3956 14C11.3956 15.6752 11.7964 17.3261 12.5646 18.8148C13.3327 20.3035 14.446 21.5868 15.8112 22.5575C15.2157 22.6839 14.6088 22.7484 14 22.75Z"
      }
    })]);
  }

};