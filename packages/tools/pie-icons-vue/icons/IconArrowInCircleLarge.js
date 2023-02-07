import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowInCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowInCircleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75C13.2078 3.75096 10.4998 4.70574 8.32447 6.45619C6.14914 8.20664 4.63707 10.6477 4.03875 13.375H5.84125C6.48016 10.9005 7.9996 8.744 10.1148 7.30967C12.2299 5.87534 14.7956 5.26167 17.3309 5.58369C19.8661 5.90571 22.1969 7.14131 23.8863 9.05889C25.5758 10.9765 26.5078 13.4444 26.5078 16C26.5078 18.5556 25.5758 21.0235 23.8863 22.9411C22.1969 24.8587 19.8661 26.0943 17.3309 26.4163C14.7956 26.7383 12.2299 26.1247 10.1148 24.6903C7.9996 23.256 6.48016 21.0995 5.84125 18.625H4.03875C4.53385 20.8818 5.65708 22.9525 7.27878 24.5982C8.90048 26.2439 10.9545 27.3974 13.2038 27.9256C15.4531 28.4538 17.8059 28.3351 19.9906 27.5832C22.1753 26.8314 24.1028 25.477 25.5506 23.6765C26.9985 21.8759 27.9076 19.7026 28.1731 17.4075C28.4385 15.1123 28.0495 12.7889 27.0509 10.7054C26.0523 8.62188 24.4848 6.86327 22.5294 5.63255C20.574 4.40184 18.3105 3.74921 16 3.75Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M19.1412 16.875L14.9762 21.04L16.21 22.2738L21.25 17.2337C21.3351 17.1515 21.4113 17.0606 21.4775 16.9625C21.6657 16.6768 21.766 16.3421 21.766 16C21.766 15.6579 21.6657 15.3232 21.4775 15.0375C21.4113 14.9394 21.3351 14.8485 21.25 14.7662L16.21 9.72625L14.9762 10.96L19.1412 15.125H2.875V16.875H19.1412Z',
                fill: '#242E30'
            }
        })]);
    }
};