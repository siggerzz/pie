import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'HelmetSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--helmetSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.6488 6.64122C11.0551 6.37276 11.5052 6.17732 11.9788 6.06372C12.6473 5.95802 13.3232 5.90535 14 5.90622L13.2476 4.61997L12.565 4.67247C11.96 3.45849 10.9872 2.46653 9.7852 1.83804C8.58321 1.20955 7.21347 0.976625 5.8713 1.17247C4.40011 1.40427 3.04845 2.12071 2.03078 3.20813C1.0131 4.29555 0.387704 5.69166 0.253799 7.17497C0.0912012 8.79682 0.499686 10.4246 1.4088 11.7775L1.6188 12.0662H1.96005C3.06481 12.0383 4.14876 12.37 5.0488 13.0112C5.67014 13.4768 6.41698 13.745 7.19255 13.7812C7.68721 13.813 8.18242 13.7281 8.63834 13.5336C9.09425 13.3391 9.49815 13.0403 9.81755 12.6612C10.6138 11.655 10.7538 10.0362 10.22 7.81372C10.1646 7.59785 10.1759 7.37026 10.2525 7.16094C10.329 6.95162 10.4672 6.77042 10.6488 6.64122ZM9.9138 5.54747C9.50815 5.82595 9.19649 6.22091 9.01996 6.68019C8.84344 7.13947 8.81034 7.64149 8.92505 8.11997C9.3538 9.86997 9.3013 11.1825 8.76755 11.8562C8.57013 12.073 8.3252 12.2411 8.05195 12.3474C7.77869 12.4536 7.48454 12.4952 7.19255 12.4687C6.66255 12.428 6.15677 12.23 5.74005 11.9C4.73549 11.1942 3.54595 10.7987 2.3188 10.7625C1.68627 9.71158 1.41865 8.48115 1.55755 7.26247C1.66782 6.08325 2.16403 4.97335 2.96927 4.10483C3.7745 3.23632 4.84377 2.65771 6.0113 2.45872C7.01734 2.31462 8.04354 2.47015 8.96169 2.90588C9.87985 3.34162 10.6493 4.03824 11.1738 4.90872C10.7303 5.07175 10.3074 5.28612 9.9138 5.54747ZM7.87505 10.5C7.87505 10.673 7.82373 10.8422 7.72759 10.9861C7.63144 11.13 7.49478 11.2421 7.3349 11.3084C7.17501 11.3746 6.99908 11.3919 6.82935 11.3582C6.65961 11.3244 6.5037 11.2411 6.38133 11.1187C6.25896 10.9963 6.17562 10.8404 6.14186 10.6707C6.1081 10.5009 6.12543 10.325 6.19165 10.1651C6.25788 10.0052 6.37003 9.86858 6.51393 9.77244C6.65782 9.67629 6.82699 9.62497 7.00005 9.62497C7.23211 9.62497 7.45467 9.71716 7.61877 9.88126C7.78286 10.0453 7.87505 10.2679 7.87505 10.5Z"
      }
    })]);
  }

};