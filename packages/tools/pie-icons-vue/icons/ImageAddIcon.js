import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ImageAddIcon',
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
      "class": "c-pieIcon c-pieIcon--imageAdd"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9.625 14.875C10.4038 14.875 11.165 14.6441 11.8126 14.2114C12.4601 13.7788 12.9648 13.1638 13.2628 12.4443C13.5608 11.7248 13.6388 10.9331 13.4868 10.1693C13.3349 9.40553 12.9599 8.70394 12.4092 8.15327C11.8586 7.6026 11.157 7.22759 10.3932 7.07566C9.62937 6.92373 8.83767 7.0017 8.11818 7.29972C7.3987 7.59774 6.78375 8.10242 6.35109 8.74994C5.91843 9.39746 5.6875 10.1587 5.6875 10.9375C5.68981 11.9811 6.1054 12.9813 6.84332 13.7192C7.58124 14.4571 8.58142 14.8727 9.625 14.875ZM9.625 8.75C10.0576 8.75 10.4806 8.87829 10.8403 9.11866C11.2 9.35903 11.4804 9.70067 11.646 10.1004C11.8116 10.5001 11.8549 10.9399 11.7705 11.3643C11.6861 11.7886 11.4777 12.1784 11.1718 12.4843C10.8659 12.7902 10.4761 12.9986 10.0518 13.083C9.62743 13.1674 9.18759 13.1241 8.78788 12.9585C8.38817 12.7929 8.04653 12.5125 7.80616 12.1528C7.56579 11.7931 7.4375 11.3701 7.4375 10.9375C7.4375 10.3573 7.66797 9.80094 8.0782 9.3907C8.48844 8.98047 9.04484 8.75 9.625 8.75Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M25.375 8.3125V14.4375C20.7463 12.8888 17.7537 14.875 15.1025 16.625C14.4725 17.045 13.8687 17.43 13.2562 17.78C10.36 16.625 7.105 15.2863 2.625 17.2375V5.25H14.875V3.5H0.875V24.5H27.125V8.3125H25.375ZM16.065 18.0863C18.6287 16.3888 21.0525 14.7787 24.955 16.1C24.399 16.9784 23.6119 17.6868 22.68 18.1475C21.5653 18.7865 20.3179 19.1592 19.0354 19.2366C17.7528 19.3141 16.4697 19.094 15.2862 18.5938L16.065 18.0863ZM25.375 22.75H2.625V19.1712C6.86 17.0275 9.70375 18.2 12.6962 19.4513C14.5452 20.3642 16.5608 20.8912 18.62 21C20.3282 20.9728 22.0029 20.5218 23.4937 19.6875C24.1806 19.3426 24.8142 18.9005 25.375 18.375V22.75Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M26.25 4.8125H22.3125V0.875H20.5625V4.8125H16.625V6.5625H20.5625V10.5H22.3125V6.5625H26.25V4.8125Z"
      }
    })]);
  }

};