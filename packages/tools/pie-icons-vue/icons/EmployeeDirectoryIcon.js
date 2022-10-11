import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'EmployeeDirectoryIcon',
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
      "class": "c-pieIcon c-pieIcon--employeeDirectory"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.2501 13.125C13.375 13.125 14.4746 12.7914 15.4099 12.1665C16.3452 11.5415 17.0742 10.6533 17.5047 9.61401C17.9352 8.57476 18.0478 7.43119 17.8284 6.32793C17.6089 5.22466 17.0672 4.21124 16.2718 3.41583C15.4764 2.62042 14.463 2.07874 13.3597 1.85929C12.2564 1.63983 11.1129 1.75246 10.0736 2.18294C9.03437 2.61341 8.1461 3.34239 7.52115 4.2777C6.8962 5.213 6.56264 6.31262 6.56264 7.4375C6.55681 8.18602 6.69995 8.92822 6.98371 9.62089C7.26747 10.3136 7.68618 10.9429 8.21548 11.4722C8.74478 12.0015 9.37408 12.4202 10.0668 12.7039C10.7594 12.9877 11.5016 13.1308 12.2501 13.125ZM12.2501 3.5C13.0289 3.5 13.7902 3.73093 14.4377 4.16359C15.0852 4.59625 15.5899 5.2112 15.8879 5.93069C16.1859 6.65017 16.2639 7.44187 16.112 8.20567C15.96 8.96947 15.585 9.67107 15.0344 10.2217C14.4837 10.7724 13.7821 11.1474 13.0183 11.2993C12.2545 11.4513 11.4628 11.3733 10.7433 11.0753C10.0238 10.7773 9.40888 10.2726 8.97622 9.62506C8.54357 8.97754 8.31264 8.21627 8.31264 7.4375C8.31495 6.39392 8.73053 5.39375 9.46846 4.65582C10.2064 3.9179 11.2066 3.50231 12.2501 3.5ZM22.3126 13.9213C21.35 13.922 20.406 14.1875 19.5841 14.6886C18.7621 15.1897 18.0937 15.9071 17.652 16.7625C17.2103 17.6179 17.0124 18.5782 17.0797 19.5385C17.147 20.4988 17.4771 21.4222 18.0339 22.2075L13.9301 26.3113L15.1726 27.545L19.2501 23.4413C19.9224 23.9221 20.6987 24.2375 21.5158 24.3617C22.3329 24.4858 23.1679 24.4153 23.9526 24.1559C24.7374 23.8964 25.4498 23.4553 26.0318 22.8685C26.6139 22.2817 27.0492 21.5658 27.3023 20.779C27.5554 19.9922 27.6192 19.1567 27.4884 18.3406C27.3577 17.5245 27.036 16.7508 26.5498 16.0824C26.0635 15.4141 25.4263 14.87 24.69 14.4945C23.9537 14.1189 23.1392 13.9225 22.3126 13.9213ZM22.3126 22.6713C21.6204 22.6713 20.9437 22.466 20.3681 22.0814C19.7926 21.6968 19.344 21.1502 19.0791 20.5106C18.8142 19.8711 18.7448 19.1674 18.8799 18.4884C19.0149 17.8095 19.3483 17.1859 19.8378 16.6964C20.3272 16.2069 20.9509 15.8736 21.6298 15.7385C22.3088 15.6035 23.0125 15.6728 23.652 15.9377C24.2916 16.2026 24.8382 16.6512 25.2228 17.2268C25.6074 17.8023 25.8126 18.479 25.8126 19.1713C25.8126 20.0995 25.4439 20.9897 24.7875 21.6461C24.1311 22.3025 23.2409 22.6713 22.3126 22.6713ZM16.7126 14.875L12.2501 21.875L8.84639 16.625C7.68872 16.6934 6.57595 17.0971 5.64374 17.7869C4.71154 18.4767 4.00018 19.4229 3.59639 20.51L2.21389 24.4213H0.358887L1.93389 19.95C2.48647 18.4444 3.4929 17.1475 4.8142 16.2384C6.1355 15.3293 7.70646 14.8529 9.31014 14.875H9.78264L12.2501 18.6725L14.7176 14.875H16.7126Z"
      }
    })]);
  }

};