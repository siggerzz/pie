import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SocialPinterestAlternativeIcon',
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
      "class": "c-pieIcon c-pieIcon--socialPinterestAlternative"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.3288 18.1562C12.285 18.305 12.25 18.4012 12.2325 18.4975C11.9525 19.53 11.6988 20.5712 11.3575 21.6037C10.8492 23.271 9.99997 24.8144 8.86375 26.1362C8.77625 26.2412 8.6975 26.355 8.60125 26.4775C8.53125 26.3987 8.505 26.3812 8.505 26.3637C8.17993 24.6131 8.15626 22.8198 8.435 21.0612C8.9775 18.62 9.58125 16.1875 10.185 13.7462C10.2376 13.5455 10.2376 13.3345 10.185 13.1337C9.75627 11.9372 9.75627 10.629 10.185 9.43249C10.3034 9.0217 10.5106 8.6419 10.7918 8.31988C11.073 7.99786 11.4214 7.74145 11.8125 7.56874C12.0969 7.43829 12.4091 7.38047 12.7214 7.40046C13.0336 7.42046 13.3359 7.51764 13.6013 7.6833C13.8667 7.84895 14.0868 8.07789 14.242 8.34959C14.3971 8.62129 14.4823 8.92724 14.49 9.23999C14.5287 9.99063 14.4247 10.7418 14.1838 11.4537C13.895 12.4862 13.5713 13.51 13.3088 14.5425C13.1968 14.8934 13.1737 15.2666 13.2417 15.6285C13.3097 15.9905 13.4666 16.3299 13.6982 16.6162C13.9299 16.9026 14.2291 17.1268 14.5689 17.2689C14.9087 17.4109 15.2785 17.4663 15.645 17.43C16.3319 17.3975 16.9997 17.194 17.588 16.8379C18.1763 16.4819 18.6663 15.9846 19.0138 15.3912C19.841 14.0799 20.292 12.5665 20.3175 11.0162C20.4217 9.8312 20.2135 8.63953 19.7138 7.55999C19.3574 6.79274 18.831 6.11668 18.1746 5.58304C17.5182 5.0494 16.7489 4.67219 15.925 4.47999C14.8335 4.1489 13.6783 4.08577 12.5573 4.29597C11.4362 4.50616 10.3824 4.98349 9.485 5.68749C8.2152 6.68935 7.37017 8.13344 7.11874 9.73122C6.86731 11.329 7.22801 12.9628 8.12875 14.3062C8.23056 14.4643 8.27102 14.6542 8.2425 14.84C8.14625 15.3825 7.9975 15.9162 7.8575 16.4587C7.76125 16.8 7.63 16.8612 7.30625 16.695C6.41055 16.2008 5.69164 15.439 5.25 14.5162C4.46777 12.98 4.15676 11.2469 4.35601 9.53455C4.55527 7.82218 5.25592 6.20682 6.37 4.89124C7.97172 3.02979 10.2335 1.86282 12.6788 1.63624C14.4443 1.38775 16.2435 1.56168 17.9288 2.14374C19.7161 2.75816 21.2541 3.93919 22.3091 5.50741C23.3641 7.07564 23.8783 8.94534 23.7738 10.8325C23.7358 12.7553 23.173 14.6313 22.1463 16.2575C21.5814 17.2185 20.8061 18.039 19.8786 18.6573C18.9512 19.2757 17.8956 19.6757 16.7913 19.8275C16.1242 19.9518 15.4381 19.9309 14.7798 19.7664C14.1215 19.6018 13.5064 19.2973 12.9763 18.8737C12.8619 18.7786 12.7538 18.6763 12.6525 18.5675C12.5388 18.4537 12.46 18.375 12.3288 18.1562Z"
      }
    })]);
  }

};