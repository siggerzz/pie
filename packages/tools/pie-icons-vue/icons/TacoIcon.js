import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'TacoIcon',
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
      "class": "c-pieIcon c-pieIcon--taco"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M26.1625 16.2313L24.5875 17.01C24.9725 17.7888 25.6025 19.635 25.0863 20.51C24.8763 20.8513 24.4038 21.0263 23.6775 21.0263C22.715 21.0263 22.225 20.265 21.5863 19.1013L21.3238 18.6375L21.2013 18.445C20.9825 18.0775 20.7725 17.6925 20.58 17.2988C23.485 16.1613 24.885 14.525 24.43 12.7313C24.08 11.3488 22.8113 11.0688 21.8838 10.8588C21.4312 10.8068 21 10.6379 20.6325 10.3688C20.545 10.2638 20.7463 9.62502 20.8513 9.31877C21.175 8.30377 21.6738 6.76377 20.2475 5.58252C18.9963 4.55002 17.43 5.09252 16.1788 5.53002C14.6563 6.06377 14.2363 6.08127 13.9563 5.62627C13.6609 5.05014 13.229 4.5551 12.6982 4.18445C12.1674 3.8138 11.5539 3.57881 10.9113 3.50002C10.4182 3.46825 9.92459 3.55127 9.4691 3.74258C9.01361 3.93388 8.60872 4.22825 8.28625 4.60252C6.50125 6.71127 5.52125 6.41377 4.5675 6.12502C4.24197 5.97618 3.88677 5.90354 3.52894 5.91264C3.1711 5.92174 2.82006 6.01233 2.5025 6.17752C3.08454e-06 7.75252 1.75 11.4713 2.625 13.0375C1.56396 15.0946 1.00335 17.373 0.988753 19.6875C0.964412 20.0844 1.01917 20.4821 1.14986 20.8577C1.28054 21.2332 1.48454 21.579 1.75 21.875C1.99167 22.1453 2.2867 22.3626 2.6165 22.5132C2.94631 22.6638 3.30374 22.7444 3.66625 22.75H23.6775C24.238 22.8056 24.8031 22.71 25.314 22.473C25.8249 22.236 26.263 21.8663 26.5825 21.4025C27.7375 19.5388 26.32 16.5638 26.1625 16.2313ZM3.4125 7.68252C3.63152 7.68803 3.84781 7.73247 4.05125 7.81377C5.25 8.15502 7.105 8.75002 9.625 5.73127C9.76701 5.56697 9.94529 5.43796 10.1457 5.35443C10.3462 5.27091 10.5633 5.23516 10.78 5.25002C11.1392 5.30713 11.4793 5.44983 11.7717 5.66609C12.0642 5.88235 12.3002 6.16581 12.46 6.49252C13.545 8.24252 15.3913 7.61252 16.7475 7.14002C17.885 6.73752 18.6638 6.51002 19.1188 6.88627C19.5738 7.26252 19.5213 7.64752 19.1713 8.74127C18.9088 9.56377 18.5763 10.5788 19.2675 11.4363C19.8673 12.0347 20.6492 12.4164 21.49 12.5213C22.365 12.7138 22.645 12.8275 22.7238 13.1163C22.9338 13.9475 21.8488 14.9188 19.81 15.6713C18.375 12.5388 16.4325 8.75002 11.0863 8.75002C9.92227 8.73375 8.76177 8.88102 7.63875 9.18752C6.16419 9.57404 4.82552 10.3615 3.77125 11.4625C3.08875 10.045 2.52875 8.24252 3.43 7.68252H3.4125ZM3.70125 21C3.57915 20.9997 3.45846 20.9739 3.34695 20.9242C3.23543 20.8744 3.13556 20.8019 3.05375 20.7113C2.93822 20.5841 2.8499 20.4347 2.79423 20.2722C2.73856 20.1097 2.7167 19.9375 2.73 19.7663C2.80875 18.0163 3.07125 15.3913 4.41 13.4488C5.28862 12.1667 6.60455 11.249 8.11125 10.8675C9.08179 10.6113 10.0825 10.4877 11.0863 10.5C15.4613 10.5 16.8438 13.4838 18.3313 16.625L18.62 17.2375C18.9705 18.0034 19.3649 18.7484 19.8013 19.4688L19.88 19.5738L20.055 19.8975C20.2388 20.2213 20.4488 20.6063 20.7025 20.9738L3.70125 21ZM6.125 17.5C6.125 17.6731 6.07369 17.8423 5.97754 17.9861C5.88139 18.13 5.74474 18.2422 5.58485 18.3084C5.42497 18.3746 5.24903 18.392 5.0793 18.3582C4.90957 18.3244 4.75366 18.2411 4.63128 18.1187C4.50891 17.9964 4.42558 17.8405 4.39182 17.6707C4.35805 17.501 4.37538 17.3251 4.44161 17.1652C4.50784 17.0053 4.61999 16.8686 4.76388 16.7725C4.90777 16.6763 5.07694 16.625 5.25 16.625C5.48207 16.625 5.70463 16.7172 5.86872 16.8813C6.03282 17.0454 6.125 17.268 6.125 17.5ZM8.75 14C8.75 14.1731 8.69869 14.3423 8.60254 14.4861C8.50639 14.63 8.36974 14.7422 8.20985 14.8084C8.04997 14.8746 7.87403 14.892 7.7043 14.8582C7.53457 14.8244 7.37866 14.7411 7.25628 14.6187C7.13391 14.4964 7.05058 14.3405 7.01682 14.1707C6.98305 14.001 7.00038 13.8251 7.06661 13.6652C7.13283 13.5053 7.24499 13.3686 7.38888 13.2725C7.53277 13.1763 7.70194 13.125 7.875 13.125C8.10707 13.125 8.32963 13.2172 8.49372 13.3813C8.65782 13.5454 8.75 13.768 8.75 14ZM16.625 17.5C16.625 17.6731 16.5737 17.8423 16.4775 17.9861C16.3814 18.13 16.2447 18.2422 16.0849 18.3084C15.925 18.3746 15.749 18.392 15.5793 18.3582C15.4096 18.3244 15.2537 18.2411 15.1313 18.1187C15.0089 17.9964 14.9256 17.8405 14.8918 17.6707C14.8581 17.501 14.8754 17.3251 14.9416 17.1652C15.0078 17.0053 15.12 16.8686 15.2639 16.7725C15.4078 16.6763 15.5769 16.625 15.75 16.625C15.9821 16.625 16.2046 16.7172 16.3687 16.8813C16.5328 17.0454 16.625 17.268 16.625 17.5ZM11.375 17.5C11.375 17.6731 11.3237 17.8423 11.2275 17.9861C11.1314 18.13 10.9947 18.2422 10.8349 18.3084C10.675 18.3746 10.499 18.392 10.3293 18.3582C10.1596 18.3244 10.0037 18.2411 9.88128 18.1187C9.75891 17.9964 9.67558 17.8405 9.64182 17.6707C9.60805 17.501 9.62538 17.3251 9.69161 17.1652C9.75783 17.0053 9.86999 16.8686 10.0139 16.7725C10.1578 16.6763 10.3269 16.625 10.5 16.625C10.7321 16.625 10.9546 16.7172 11.1187 16.8813C11.2828 17.0454 11.375 17.268 11.375 17.5ZM14 14C14 14.1731 13.9487 14.3423 13.8525 14.4861C13.7564 14.63 13.6197 14.7422 13.4599 14.8084C13.3 14.8746 13.124 14.892 12.9543 14.8582C12.7846 14.8244 12.6287 14.7411 12.5063 14.6187C12.3839 14.4964 12.3006 14.3405 12.2668 14.1707C12.2331 14.001 12.2504 13.8251 12.3166 13.6652C12.3828 13.5053 12.495 13.3686 12.6389 13.2725C12.7828 13.1763 12.9519 13.125 13.125 13.125C13.3571 13.125 13.5796 13.2172 13.7437 13.3813C13.9078 13.5454 14 13.768 14 14Z"
      }
    })]);
  }

};