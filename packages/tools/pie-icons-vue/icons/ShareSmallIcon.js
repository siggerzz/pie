import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ShareSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--shareSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.3225 8.07631C10.9514 8.0763 10.5855 8.16338 10.2542 8.33055C9.92288 8.49772 9.63544 8.74031 9.41498 9.03881L5.03998 7.37631C5.04898 7.25105 5.04898 7.12531 5.03998 7.00006C5.04898 6.8748 5.04898 6.74906 5.03998 6.62381L9.41498 4.96131C9.75511 5.41018 10.2439 5.72334 10.7938 5.84473C11.3438 5.96612 11.919 5.88781 12.4164 5.62382C12.9139 5.35984 13.3012 4.92741 13.5089 4.40395C13.7167 3.88049 13.7314 3.30018 13.5503 2.7669C13.3693 2.23361 13.0043 1.78218 12.5208 1.49341C12.0373 1.20464 11.4668 1.09738 10.9114 1.19085C10.356 1.28431 9.85207 1.57238 9.48971 2.0035C9.12735 2.43462 8.93026 2.98064 8.93373 3.54381C8.93005 3.60792 8.93005 3.6722 8.93373 3.73631L4.46248 5.43381C4.2453 5.18104 3.97709 4.97707 3.67548 4.83532C3.37388 4.69356 3.04569 4.61722 2.71248 4.61131C2.07894 4.61131 1.47136 4.86298 1.02338 5.31096C0.575402 5.75894 0.32373 6.36652 0.32373 7.00006C0.32373 7.6336 0.575402 8.24118 1.02338 8.68916C1.47136 9.13714 2.07894 9.38881 2.71248 9.38881C3.04569 9.3829 3.37388 9.30656 3.67548 9.1648C3.97709 9.02304 4.2453 8.81908 4.46248 8.56631L8.95998 10.2638C8.9563 10.3279 8.9563 10.3922 8.95998 10.4563C8.95825 10.9291 9.09687 11.3918 9.3583 11.7858C9.61972 12.1798 9.99218 12.4873 10.4285 12.6695C10.8648 12.8516 11.3454 12.9002 11.8094 12.809C12.2733 12.7178 12.6998 12.491 13.0347 12.1573C13.3697 11.8235 13.598 11.3979 13.6909 10.9343C13.7838 10.4707 13.737 9.98995 13.5565 9.55296C13.3759 9.11596 13.0698 8.74237 12.6768 8.4795C12.2837 8.21663 11.8216 8.07631 11.3487 8.07631H11.3225ZM11.3225 2.46756C11.5353 2.46756 11.7434 2.53068 11.9204 2.64894C12.0974 2.7672 12.2353 2.93529 12.3168 3.13195C12.3983 3.32861 12.4196 3.545 12.3781 3.75378C12.3365 3.96255 12.234 4.15432 12.0835 4.30483C11.933 4.45535 11.7412 4.55785 11.5324 4.59938C11.3237 4.64091 11.1073 4.61959 10.9106 4.53813C10.714 4.45668 10.5459 4.31873 10.4276 4.14174C10.3094 3.96475 10.2462 3.75667 10.2462 3.54381C10.2462 3.40247 10.2741 3.26252 10.3282 3.13195C10.3822 3.00137 10.4615 2.88272 10.5615 2.78279C10.6614 2.68285 10.78 2.60357 10.9106 2.54948C11.0412 2.4954 11.1811 2.46756 11.3225 2.46756ZM2.67748 8.07631C2.46462 8.07631 2.25654 8.01319 2.07955 7.89493C1.90256 7.77667 1.76461 7.60858 1.68316 7.41192C1.6017 7.21526 1.58038 6.99887 1.62191 6.79009C1.66344 6.58132 1.76594 6.38955 1.91646 6.23904C2.06697 6.08852 2.25874 5.98602 2.46751 5.94449C2.67629 5.90296 2.89268 5.92428 3.08934 6.00573C3.286 6.08719 3.45409 6.22514 3.57235 6.40213C3.69061 6.57912 3.75373 6.7872 3.75373 7.00006C3.75373 7.2855 3.64034 7.55925 3.4385 7.76108C3.23667 7.96292 2.96292 8.07631 2.67748 8.07631V8.07631ZM11.3225 11.5326C11.1078 11.5324 10.8981 11.468 10.7203 11.3477C10.5424 11.2274 10.4047 11.0566 10.3247 10.8574C10.2446 10.6582 10.226 10.4396 10.2712 10.2297C10.3164 10.0199 10.4234 9.82829 10.5783 9.67966C10.7332 9.53104 10.9291 9.43214 11.1406 9.39569C11.3522 9.35924 11.5698 9.38689 11.7656 9.4751C11.9613 9.5633 12.1262 9.70803 12.239 9.89068C12.3518 10.0733 12.4075 10.2855 12.3987 10.5001C12.3874 10.7778 12.2691 11.0405 12.0684 11.233C11.8678 11.4254 11.6005 11.5328 11.3225 11.5326V11.5326Z"
      }
    })]);
  }

};