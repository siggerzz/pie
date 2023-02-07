import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLogoPointsLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--logoPointsLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.6137 12.535C26.6137 11.0825 25.4324 9.90999 23.9887 9.90999H23.6912C24.2074 9.41124 24.5837 8.74624 24.7237 8.01999C24.9424 6.86499 24.3737 5.63999 23.3237 5.04499C20.9962 3.72374 18.8962 5.58749 18.1699 6.23499C17.2774 7.02249 16.5162 7.73124 15.9037 8.35249C15.2824 7.73124 14.5212 7.01374 13.5937 6.19999C12.9024 5.58749 10.8024 3.72374 8.47491 5.04499C7.42491 5.63999 6.84741 6.86499 7.07491 8.01999C7.21491 8.74624 7.58241 9.41124 8.10741 9.90999H7.94116C6.48866 9.90999 5.31616 11.0912 5.31616 12.535V17.1812H7.30241V24.7237C7.30241 26.1675 8.47491 27.34 9.91866 27.3487L21.9499 27.3925H21.9587C22.6587 27.3925 23.3149 27.1212 23.8137 26.6312C24.3124 26.1325 24.5837 25.4762 24.5837 24.7762V17.19H26.6399V12.5437L26.6137 12.535ZM19.3599 7.50374C20.2787 6.68999 21.3637 5.94624 22.4487 6.55874C22.9212 6.82999 23.0612 7.32874 22.9912 7.68749C22.8774 8.26499 22.5099 8.66749 22.2037 8.85124C20.6899 9.75249 18.3799 9.70874 17.1374 9.56874C17.7237 8.98249 18.4674 8.29124 19.3599 7.50374ZM9.33241 6.55874C9.61241 6.40124 9.89241 6.33124 10.1637 6.33124C10.9687 6.33124 11.7474 6.90874 12.4649 7.53874C13.3224 8.29999 14.0574 8.98249 14.6437 9.56874C13.3924 9.70874 11.0912 9.75249 9.57741 8.85124C9.27116 8.66749 8.90366 8.26499 8.78991 7.68749C8.71991 7.33749 8.85991 6.82999 9.33241 6.55874ZM7.04866 12.535C7.04866 12.0537 7.44241 11.66 7.92366 11.66H15.0112V15.44H7.04866V12.5437V12.535ZM9.03491 24.7237V17.1812H15.0112V25.6162L9.90991 25.5987C9.42866 25.5987 9.04366 25.205 9.04366 24.7237H9.03491ZM22.8162 24.7675C22.8162 25.0037 22.7287 25.2225 22.5624 25.3887C22.3962 25.555 22.1774 25.6425 21.9499 25.6425L16.7699 25.625V17.1812H22.8249V24.7675H22.8162ZM24.8724 15.4312H16.7612V11.6512H23.9887C24.4699 11.6512 24.8637 12.045 24.8637 12.5262V15.4225L24.8724 15.4312Z',
                fill: '#242E30'
            }
        })]);
    }
};