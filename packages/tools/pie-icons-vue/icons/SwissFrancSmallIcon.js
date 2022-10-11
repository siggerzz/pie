import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SwissFrancSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--swissFrancSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M1.295 7.13126C1.28561 7.32303 1.31457 7.51476 1.38018 7.6952C1.44578 7.87565 1.54672 8.0412 1.67709 8.18216C1.80746 8.32312 1.96463 8.43666 2.13942 8.51613C2.3142 8.59561 2.50308 8.63942 2.695 8.64501C2.89857 8.64859 3.10082 8.61176 3.29006 8.53666C3.4793 8.46157 3.65178 8.34969 3.7975 8.20751L3.85875 8.14626L4.64625 8.94251L4.59375 9.00376C4.34984 9.25681 4.05568 9.45604 3.73019 9.58865C3.4047 9.72126 3.05506 9.78431 2.70375 9.77376C2.35674 9.78216 2.01164 9.71999 1.68936 9.59105C1.36709 9.4621 1.07435 9.26905 0.828908 9.02361C0.583461 8.77816 0.390413 8.48543 0.261466 8.16315C0.132519 7.84088 0.0703584 7.49577 0.0787528 7.14876C0.0703584 6.80175 0.132519 6.45665 0.261466 6.13437C0.390413 5.8121 0.583461 5.51936 0.828908 5.27392C1.07435 5.02847 1.36709 4.83542 1.68936 4.70647C2.01164 4.57753 2.35674 4.51537 2.70375 4.52376C3.05153 4.51068 3.39834 4.56829 3.72321 4.69312C4.04807 4.81796 4.34423 5.00741 4.59375 5.25001L4.64625 5.31126L3.85875 6.12501L3.7975 6.03751C3.65206 5.89493 3.47964 5.7828 3.29034 5.70767C3.10103 5.63255 2.89863 5.59595 2.695 5.60001C2.50114 5.6043 2.31016 5.64784 2.13358 5.72799C1.95702 5.80815 1.79852 5.92325 1.66768 6.06637C1.53683 6.20948 1.43635 6.37763 1.3723 6.56065C1.30824 6.74368 1.28195 6.93779 1.295 7.13126ZM8.53125 6.54501H6.545V4.55876H5.32875V9.68626H6.545V7.61251H8.53125V9.68626H9.75625V4.55876H8.53125V6.54501ZM13.9563 5.67001V4.55876H10.7888V9.68626H12.0138V7.82251H13.8775V6.75501H12.0138V5.63501L13.9563 5.67001Z"
      }
    })]);
  }

};