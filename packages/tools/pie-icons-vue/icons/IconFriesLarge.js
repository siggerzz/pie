import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFriesLarge',
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
            class: 'c-pieIcon c-pieIcon--friesLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.8262 12.8C25.7027 12.7067 25.5566 12.6478 25.4029 12.6293C25.2492 12.6109 25.0933 12.6335 24.9512 12.695L24.2425 12.9663L25.1787 9.82502C25.2148 9.70925 25.2265 9.58725 25.2129 9.46675C25.1994 9.34624 25.1609 9.22987 25.1 9.12502C25.0416 9.0237 24.9636 8.93511 24.8704 8.86447C24.7772 8.79384 24.6708 8.7426 24.5575 8.71377L21.0575 7.83877L21.3812 4.84627C21.4191 4.62722 21.3722 4.40197 21.25 4.21627C21.1769 4.12023 21.0848 4.04034 20.9794 3.98161C20.874 3.92289 20.7576 3.8866 20.6375 3.87502L17.0762 3.56877C16.8482 3.54916 16.6215 3.61971 16.4448 3.7653C16.2682 3.91088 16.1556 4.1199 16.1312 4.34752L16.0612 4.96877C16.0035 4.7844 15.8863 4.62433 15.728 4.51353C15.5698 4.40273 15.3792 4.34743 15.1862 4.35627L11.625 4.66252C11.3939 4.68173 11.1799 4.79188 11.03 4.96877C10.9551 5.05788 10.8987 5.16105 10.8641 5.27223C10.8295 5.38342 10.8175 5.50038 10.8287 5.61627L10.96 6.89377L7.76624 7.56752C7.64823 7.58902 7.5359 7.63455 7.43622 7.7013C7.33655 7.76804 7.25166 7.85456 7.18684 7.95549C7.12201 8.05642 7.07863 8.16961 7.05939 8.28801C7.04015 8.40641 7.04546 8.52751 7.07499 8.64377L8.22124 13.1413C7.81874 13.0013 7.42499 12.8525 7.03999 12.695C6.8979 12.6335 6.74203 12.6109 6.58831 12.6293C6.43459 12.6478 6.28851 12.7067 6.16499 12.8C6.04251 12.8925 5.94651 13.0155 5.88661 13.1568C5.82671 13.2981 5.80503 13.4527 5.82374 13.605L7.48624 26.8525C7.57126 27.5145 7.89432 28.1229 8.39509 28.5641C8.89586 29.0052 9.5401 29.2491 10.2075 29.25H21.7925C22.4599 29.2491 23.1041 29.0052 23.6049 28.5641C24.1057 28.1229 24.4287 27.5145 24.5137 26.8525L26.1675 13.605C26.1862 13.4527 26.1645 13.2981 26.1046 13.1568C26.0447 13.0155 25.9487 12.8925 25.8262 12.8V12.8ZM21.4512 9.75502L23.2012 10.2013L22.195 13.6225C21.6 13.7888 20.9962 13.9375 20.3925 14.0513L20.515 12.8875L21.4512 9.75502ZM17.75 5.39752L19.57 5.55502L18.625 14.3225C18.0125 14.3925 17.3912 14.4363 16.77 14.4538L17.75 5.39752ZM14.4337 6.17627L15.1425 13.1763L15.0025 14.4538C14.6612 14.4538 14.32 14.4538 13.9875 14.3838L13.0862 10.7525L12.64 6.37752L14.4337 6.17627ZM8.99999 9.12502L10.75 8.74877L11.31 10.9538V11.12L12.0887 14.1825C11.4325 14.0775 10.7762 13.9375 10.12 13.7713L8.99999 9.12502ZM22.7725 26.625C22.7465 26.8663 22.6319 27.0894 22.4508 27.2511C22.2698 27.4127 22.0352 27.5014 21.7925 27.5H10.2075C9.96479 27.5014 9.7302 27.4127 9.54916 27.2511C9.36811 27.0894 9.25349 26.8663 9.22749 26.625L7.74874 14.8388C13.0932 16.6937 18.9068 16.6937 24.2512 14.8388L22.7725 26.625Z',
                fill: '#242E30'
            }
        })]);
    }
};