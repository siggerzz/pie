import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SocialInstagramFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--socialInstagramFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M19.5388 9.73877C19.424 9.42842 19.2417 9.14747 19.005 8.91627C18.7782 8.68051 18.4996 8.50077 18.1913 8.39127C17.7686 8.23295 17.3214 8.15003 16.87 8.14627C16.1175 8.14627 15.8988 8.10252 14 8.10252C12.1013 8.10252 11.8825 8.10252 11.13 8.14627C10.6787 8.15003 10.2315 8.23295 9.80878 8.39127C9.50047 8.50077 9.22188 8.68051 8.99503 8.91627C8.75832 9.14747 8.57601 9.42842 8.46128 9.73877C8.30615 10.1593 8.22331 10.6031 8.21628 11.0513C8.21628 11.8038 8.17253 12.0313 8.17253 13.9213C8.17253 15.8113 8.17253 16.0475 8.21628 16.8C8.22331 17.2482 8.30615 17.692 8.46128 18.1125C8.57601 18.4229 8.75832 18.7038 8.99503 18.935C9.22188 19.1708 9.50047 19.3505 9.80878 19.46C10.2315 19.6183 10.6787 19.7013 11.13 19.705C11.8825 19.705 12.1013 19.7488 14 19.7488C15.8988 19.7488 16.1175 19.7488 16.87 19.705C17.3214 19.7013 17.7686 19.6183 18.1913 19.46C18.4996 19.3505 18.7782 19.1708 19.005 18.935C19.2417 18.7038 19.424 18.4229 19.5388 18.1125C19.6939 17.692 19.7767 17.2482 19.7838 16.8C19.7838 16.0475 19.8275 15.82 19.8275 13.9213C19.8275 12.0225 19.8275 11.8038 19.7838 11.0513C19.7767 10.6031 19.6939 10.1593 19.5388 9.73877ZM14 17.57C13.2784 17.57 12.5729 17.356 11.9729 16.9551C11.3729 16.5542 10.9052 15.9843 10.629 15.3176C10.3529 14.6509 10.2806 13.9172 10.4214 13.2094C10.5622 12.5016 10.9097 11.8515 11.42 11.3412C11.9303 10.8309 12.5804 10.4834 13.2882 10.3426C13.996 10.2018 14.7296 10.2741 15.3963 10.5503C16.0631 10.8264 16.6329 11.2941 17.0338 11.8941C17.4348 12.4942 17.6488 13.1996 17.6488 13.9213C17.6488 14.889 17.2644 15.817 16.5801 16.5013C15.8958 17.1856 14.9677 17.57 14 17.57ZM17.7888 10.99C17.6157 10.99 17.4465 10.9387 17.3027 10.8426C17.1588 10.7464 17.0466 10.6098 16.9804 10.4499C16.9142 10.29 16.8968 10.114 16.9306 9.94431C16.9644 9.77458 17.0477 9.61867 17.1701 9.4963C17.2924 9.37393 17.4483 9.29059 17.6181 9.25683C17.7878 9.22307 17.9637 9.2404 18.1236 9.30662C18.2835 9.37285 18.4202 9.485 18.5163 9.62889C18.6125 9.77279 18.6638 9.94196 18.6638 10.115C18.6638 10.3471 18.5716 10.5696 18.4075 10.7337C18.2434 10.8978 18.0208 10.99 17.7888 10.99Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M14 11.5588C13.5306 11.5588 13.0718 11.6981 12.6817 11.959C12.2916 12.22 11.9876 12.5908 11.8084 13.0246C11.6292 13.4584 11.5828 13.9356 11.675 14.3959C11.7672 14.8561 11.9939 15.2786 12.3264 15.6098C12.6589 15.9411 13.0822 16.1663 13.5428 16.2568C14.0033 16.3473 14.4804 16.2991 14.9135 16.1183C15.3467 15.9374 15.7164 15.6321 15.9759 15.241C16.2354 14.8499 16.373 14.3906 16.3713 13.9213C16.3689 13.2939 16.1181 12.693 15.6736 12.2502C15.2292 11.8074 14.6274 11.5588 14 11.5588Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M14 1.67126C11.5772 1.67126 9.20877 2.38971 7.19427 3.73576C5.17977 5.08181 3.60965 6.995 2.68248 9.23339C1.75531 11.4718 1.51272 13.9349 1.98539 16.3111C2.45805 18.6874 3.62475 20.8701 5.33795 22.5833C7.05114 24.2965 9.23388 25.4632 11.6101 25.9359C13.9864 26.4086 16.4495 26.166 18.6879 25.2388C20.9263 24.3116 22.8395 22.7415 24.1855 20.727C25.5316 18.7125 26.25 16.3441 26.25 13.9213C26.25 10.6724 24.9594 7.55653 22.6621 5.25921C20.3647 2.96189 17.2489 1.67126 14 1.67126ZM21.0613 16.8525C21.0525 17.4507 20.94 18.0428 20.7288 18.6025C20.5517 19.0764 20.2741 19.5063 19.915 19.8625C19.5569 20.2214 19.1277 20.5016 18.655 20.685C18.0941 20.8909 17.5024 21.0004 16.905 21.0088C16.17 21 15.925 21 14 21C12.075 21 11.83 21 11.0688 20.9563C10.4713 20.9479 9.87964 20.8384 9.31876 20.6325C8.84605 20.4491 8.41689 20.1689 8.05876 19.81C7.69964 19.4538 7.42201 19.0239 7.24501 18.55C7.03378 17.9903 6.92128 17.3982 6.91251 16.8C6.91251 16.0475 6.91251 15.8025 6.91251 13.8688C6.91251 11.935 6.91251 11.6988 6.91251 10.9463C6.92128 10.3481 7.03378 9.75597 7.24501 9.19627C7.42201 8.72239 7.69964 8.29252 8.05876 7.93626C8.41689 7.57733 8.84605 7.29718 9.31876 7.11376C9.87847 6.90361 10.4709 6.79401 11.0688 6.79002C11.83 6.79002 12.075 6.79002 14 6.79002C15.925 6.79002 16.17 6.79002 16.9313 6.79002C17.5291 6.79401 18.1215 6.90361 18.6813 7.11376C19.154 7.29718 19.5831 7.57733 19.9413 7.93626C20.3004 8.29252 20.578 8.72239 20.755 9.19627C20.9662 9.75597 21.0787 10.3481 21.0875 10.9463C21.0875 11.6988 21.1313 11.9438 21.1313 13.8688C21.1313 15.7938 21.0963 16.1 21.0613 16.8525Z"
      }
    })]);
  }

};