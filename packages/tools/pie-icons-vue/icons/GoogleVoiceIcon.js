import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'GoogleVoiceIcon',
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
      "class": "c-pieIcon c-pieIcon--googleVoice"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M19.9676 18.445C19.7927 18.2613 19.5823 18.115 19.3491 18.0151C19.116 17.9151 18.865 17.8636 18.6113 17.8636C18.3576 17.8636 18.1066 17.9151 17.8735 18.0151C17.6404 18.115 17.4299 18.2613 17.2551 18.445C16.7301 18.9788 16.3801 19.32 16.0388 19.6438C15.9127 19.7707 15.7628 19.8715 15.5976 19.9403C15.4324 20.0091 15.2552 20.0445 15.0763 20.0445C14.8974 20.0445 14.7202 20.0091 14.555 19.9403C14.3898 19.8715 14.2399 19.7707 14.1138 19.6438L8.4088 13.7987C8.16323 13.5402 8.0263 13.1972 8.0263 12.8406C8.0263 12.484 8.16323 12.1411 8.4088 11.8825L9.42381 10.815C10.4476 9.75625 10.4738 9.065 9.42381 7.98L5.60005 4.1125C5.41757 3.91974 5.19783 3.76606 4.95416 3.66077C4.7105 3.55549 4.44799 3.50079 4.18255 3.5C3.88524 3.50262 3.59204 3.56969 3.32315 3.69658C3.05426 3.82348 2.81609 4.00717 2.62505 4.235C1.46389 5.60382 0.841693 7.34907 0.875055 9.14375C0.897739 12.2314 1.89616 15.2328 3.72755 17.7188C6.9038 22.2075 10.7976 25.7075 16.3363 26.88C17.0698 27.0374 17.8174 27.1195 18.5676 27.125C19.5546 27.1428 20.5349 26.9588 21.4482 26.5841C22.3615 26.2095 23.1886 25.6521 23.8788 24.9463C24.0576 24.8266 24.2051 24.666 24.309 24.4777C24.413 24.2894 24.4704 24.0789 24.4764 23.8639C24.4824 23.6489 24.4368 23.4356 24.3435 23.2418C24.2502 23.048 24.1119 22.8794 23.9401 22.75C22.6276 21.2975 21.2976 19.8713 19.9676 18.445ZM18.5851 25.375C17.9582 25.37 17.3336 25.2996 16.7213 25.165C12.2501 24.22 8.59255 21.5338 5.18005 16.7038C3.55127 14.5202 2.65675 11.8764 2.62505 9.1525C2.58592 7.7771 3.05295 6.43517 3.93755 5.38125C3.96405 5.34053 4.0004 5.30715 4.04322 5.28421C4.08605 5.26126 4.13397 5.2495 4.18255 5.25C4.21933 5.24791 4.25606 5.25478 4.28959 5.27003C4.32312 5.28527 4.35245 5.30842 4.37505 5.3375L5.9938 7L8.1813 9.205L8.3388 9.38C8.27888 9.45933 8.21462 9.53527 8.1463 9.6075C7.6738 10.0887 7.3938 10.3775 7.1138 10.6838C6.54996 11.2757 6.23984 12.0645 6.24965 12.8819C6.25946 13.6994 6.58842 14.4805 7.1663 15.0587L12.8713 20.8512C13.1581 21.1485 13.502 21.3847 13.8825 21.5456C14.2629 21.7065 14.672 21.7888 15.0851 21.7875C15.8948 21.7898 16.6734 21.4759 17.2551 20.9125L17.4301 20.7375L18.5063 19.6787C18.5314 19.6521 18.566 19.6364 18.6026 19.635C18.6194 19.6359 18.6358 19.6402 18.6509 19.6478C18.6659 19.6553 18.6793 19.6658 18.6901 19.6787C20.0901 21.1663 21.3151 22.5312 22.5576 23.8438C22.0291 24.3484 21.4061 24.7435 20.7243 25.0063C20.0425 25.2691 19.3155 25.3944 18.5851 25.375ZM16.3626 0.875H16.2488C15.3213 0.875 14.9626 1.2075 14.9538 2.14375C14.9538 5.46 14.9538 8.77625 14.9101 12.1012C14.9101 12.81 15.2163 13.1075 15.9076 13.1075C17.5701 13.1075 24.2026 13.1075 25.8651 13.0638C26.7401 13.0638 27.1076 12.6962 27.0988 11.8212C27.0471 8.97025 25.9057 6.24725 23.9091 4.21152C21.9124 2.17579 19.212 0.981881 16.3626 0.875ZM21.0963 11.375H16.6688C16.6688 10.08 16.6688 8.75 16.6688 7.49C16.6688 5.88 16.6688 4.27875 16.6688 2.6775C18.9246 2.83432 21.0479 3.80077 22.6476 5.39892C24.2474 6.99707 25.216 9.11934 25.3751 11.375H21.0963Z"
      }
    })]);
  }

};