import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSalad',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--salad'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.0375 7.34372C14.1193 7.21558 14.184 7.07733 14.23 6.93247C14.3364 6.62895 14.3705 6.30476 14.3295 5.98574C14.2885 5.66672 14.1735 5.36169 13.9938 5.09497C13.9815 5.0659 13.9752 5.03466 13.9752 5.0031C13.9752 4.97154 13.9815 4.9403 13.9938 4.91122C14.0978 4.63167 14.1453 4.33427 14.1338 4.03622C14.1177 3.72192 14.0306 3.41533 13.8791 3.13951C13.7275 2.86368 13.5155 2.6258 13.2588 2.44372C12.9205 2.18613 12.5071 2.04663 12.0819 2.04663C11.6567 2.04663 11.2433 2.18613 10.905 2.44372C10.8708 2.45447 10.8342 2.45447 10.8 2.44372C10.5491 2.33555 10.2765 2.2876 10.0037 2.30372C9.69354 2.31643 9.39072 2.40232 9.12004 2.55439C8.84936 2.70646 8.61848 2.9204 8.44625 3.17872C8.44954 3.20487 8.44954 3.23133 8.44625 3.25747C8.2253 2.86872 7.88462 2.5618 7.475 2.38247C7.19986 2.26094 6.90054 2.20407 6.6 2.21622C6.57539 2.22091 6.54996 2.21845 6.5267 2.20915C6.50345 2.19985 6.48334 2.18409 6.46875 2.16372C6.22977 1.78605 5.87377 1.49694 5.4551 1.34053C5.03642 1.18413 4.57807 1.169 4.15 1.29747C3.83193 1.38942 3.53972 1.55438 3.29667 1.77921C3.05361 2.00404 2.86642 2.28252 2.75 2.59247C2.64176 2.87131 2.58829 3.1684 2.5925 3.46747C2.59904 3.50973 2.5944 3.55296 2.57905 3.59288C2.5637 3.63279 2.53817 3.66799 2.505 3.69497C2.23099 3.90492 2.009 4.17514 1.85622 4.48468C1.70344 4.79422 1.62397 5.13478 1.62397 5.47997C1.62397 5.82517 1.70344 6.16573 1.85622 6.47527C2.009 6.78481 2.23099 7.05502 2.505 7.26497C2.53207 7.28887 2.55307 7.31886 2.56625 7.35247H1.21875V8.87497C1.21957 9.72563 1.48193 10.5555 1.97028 11.252C2.45862 11.9485 3.14932 12.478 3.94875 12.7687L4.21125 13.9062H11.7887L12.0513 12.7687C12.8507 12.478 13.5414 11.9485 14.0297 11.252C14.5181 10.5555 14.7804 9.72563 14.7812 8.87497V7.34372H14.0375ZM9.4 4.40372C9.40562 4.23429 9.46034 4.07014 9.5575 3.93122C9.61244 3.8423 9.68809 3.76799 9.77799 3.71466C9.86789 3.66133 9.96937 3.63056 10.0737 3.62497C10.1697 3.62334 10.2649 3.6412 10.3537 3.67747C10.5743 3.77001 10.815 3.80413 11.0525 3.77654C11.2901 3.74895 11.5165 3.66059 11.71 3.51997C11.8244 3.43269 11.9643 3.38541 12.1081 3.38541C12.252 3.38541 12.3919 3.43269 12.5062 3.51997C12.5896 3.5891 12.6581 3.67433 12.7077 3.77055C12.7573 3.86677 12.787 3.97201 12.795 4.07997C12.7968 4.2023 12.776 4.32391 12.7337 4.43872C12.6517 4.66468 12.624 4.90679 12.6528 5.14545C12.6817 5.38411 12.7664 5.61261 12.9 5.81247C12.9656 5.91536 13.0075 6.03154 13.0226 6.15262C13.0377 6.27369 13.0257 6.39661 12.9875 6.51247C12.9534 6.62051 12.8933 6.71851 12.8124 6.79785C12.7315 6.87719 12.6324 6.93544 12.5238 6.96747C12.287 7.03567 12.0726 7.16551 11.9025 7.34372H10.8C11.0916 6.93958 11.3547 6.51564 11.5875 6.07497L10.4238 5.47122C10.0956 6.10039 9.69313 6.68793 9.225 7.22122C9.27272 6.66757 9.11375 6.11585 8.77875 5.67247C8.97146 5.5217 9.12748 5.3292 9.23508 5.10944C9.34268 4.88969 9.39907 4.6484 9.4 4.40372V4.40372ZM3.31875 6.19747C3.20646 6.11335 3.11604 6.00345 3.05513 5.87706C2.99421 5.75066 2.96459 5.61147 2.96875 5.47122C2.96459 5.33098 2.99421 5.19178 3.05513 5.06539C3.11604 4.93899 3.20646 4.8291 3.31875 4.74497C3.51896 4.59166 3.67919 4.39228 3.78583 4.16378C3.89246 3.93527 3.94235 3.68439 3.93125 3.43247C3.93398 3.30408 3.95762 3.177 4.00125 3.05622C4.04328 2.94292 4.10976 2.84028 4.19597 2.75559C4.28217 2.6709 4.38598 2.60624 4.5 2.56622C4.66205 2.51627 4.83613 2.52186 4.99464 2.58209C5.15316 2.64233 5.28702 2.75376 5.375 2.89872C5.51523 3.10705 5.70592 3.27649 5.9293 3.39124C6.15268 3.50599 6.40148 3.56232 6.6525 3.55497C6.75526 3.55888 6.85628 3.58265 6.95 3.62497C7.0655 3.67954 7.16765 3.75873 7.24928 3.85699C7.33091 3.95524 7.39003 4.07018 7.4225 4.19372C7.47963 4.37602 7.47963 4.57143 7.4225 4.75372C7.282 5.15067 7.30082 5.58661 7.475 5.96997C7.54441 6.13321 7.63566 6.28628 7.74625 6.42497C7.83458 6.53209 7.89773 6.65768 7.93105 6.79246C7.96436 6.92724 7.967 7.06779 7.93875 7.20372C7.93875 7.20372 7.93875 7.29122 7.93875 7.33497H6.915C6.40882 6.74382 6.0624 6.03291 5.90875 5.26997L4.61375 5.47997C4.74106 6.13346 4.97143 6.76256 5.29625 7.34372H3.9225C3.91176 7.12015 3.85213 6.90164 3.74782 6.7036C3.64351 6.50556 3.49705 6.33279 3.31875 6.19747V6.19747ZM13.4688 8.87497C13.4669 9.50358 13.2561 10.1137 12.8697 10.6095C12.4832 11.1053 11.9429 11.4585 11.3338 11.6137L10.9487 11.7187L10.7475 12.5937H5.2525L5.05125 11.7187L4.66625 11.6137C4.05711 11.4585 3.51682 11.1053 3.13035 10.6095C2.74387 10.1137 2.53313 9.50358 2.53125 8.87497V8.65622H13.4688V8.87497Z',
                fill: '#242E30'
            }
        })]);
    }
};