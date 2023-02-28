import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconWalletLarge',
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
            class: 'c-pieIcon c-pieIcon--walletLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.496 5.299a.871.871 0 01.332-.07.87.87 0 01.333.07.837.837 0 01.473.472l.507 1.234h1.89l-.787-1.899a2.619 2.619 0 00-3.43-1.417L8.807 7.005h4.576l4.113-1.706z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M25.669 23.446h-.875v1.768a.878.878 0 01-.875.875H5.498a.878.878 0 01-.874-.875V11.223a.872.872 0 01.499-.788c.017 0 .026-.018.035-.026a.88.88 0 01.34-.07h18.42c.48 0 .875.393.875.875v1.785h1.802v-1.671a2.59 2.59 0 00-.254-1.112 2.617 2.617 0 00-2.423-1.618H5.498a2.61 2.61 0 00-1.574.533 2.56 2.56 0 00-.411.403c-.053.061-.105.131-.158.201-.017.026-.044.053-.061.079a2.156 2.156 0 00-.219.393 2.652 2.652 0 00-.254 1.112v13.886A2.677 2.677 0 005.5 27.883h18.419a2.677 2.677 0 002.677-2.678v-1.767h-.927v.008z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M20.104 14.749v6.947h9.03V14.75h-9.03zm1.75 1.75h5.53v3.447h-5.53V16.5z',
                fill: '#242E30'
            }
        })]);
    }
};
