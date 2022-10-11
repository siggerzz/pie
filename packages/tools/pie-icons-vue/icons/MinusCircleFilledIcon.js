import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MinusCircleFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--minusCircleFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M22.6626 5.33751C20.9493 3.62444 18.7666 2.45786 16.3904 1.98529C14.0141 1.51273 11.5511 1.75539 9.31282 2.6826C7.07449 3.60981 5.16138 5.17992 3.81539 7.1944C2.46939 9.20888 1.75098 11.5772 1.75098 14C1.75098 16.4228 2.46939 18.7911 3.81539 20.8056C5.16138 22.8201 7.07449 24.3902 9.31282 25.3174C11.5511 26.2446 14.0141 26.4873 16.3904 26.0147C18.7666 25.5421 20.9493 24.3756 22.6626 22.6625C23.8002 21.525 24.7027 20.1745 25.3184 18.6882C25.9341 17.2018 26.251 15.6088 26.251 14C26.251 12.3912 25.9341 10.7982 25.3184 9.31185C24.7027 7.82553 23.8002 6.47504 22.6626 5.33751ZM20.1863 14.875H7.81384V13.125H20.1863V14.875Z"
      }
    })]);
  }

};