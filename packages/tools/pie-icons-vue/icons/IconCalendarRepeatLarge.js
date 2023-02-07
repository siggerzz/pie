import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarRepeatLarge',
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
            class: 'c-pieIcon c-pieIcon--calendarRepeatLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.125 6.375V4.625H20.375V6.375H11.625V4.625H9.875V6.375H4.625V27.375H23C24.1603 27.375 25.2731 26.9141 26.0936 26.0936C26.9141 25.2731 27.375 24.1603 27.375 23V6.375H22.125ZM25.625 23C25.625 23.6962 25.3484 24.3639 24.8562 24.8562C24.3639 25.3484 23.6962 25.625 23 25.625H6.375V8.125H9.875V9H11.625V8.125H20.375V9H22.125V8.125H25.625V23ZM21.6875 17.3125C21.6891 18.1753 21.4944 19.0272 21.1181 19.8036C20.7418 20.58 20.1937 21.2606 19.5155 21.7939C18.8372 22.3272 18.0466 22.6992 17.2033 22.8818C16.36 23.0643 15.4863 23.0526 14.6482 22.8475C13.8101 22.6425 13.0297 22.2494 12.366 21.6981C11.7022 21.1468 11.1727 20.4517 10.8173 19.6655C10.4619 18.8793 10.2901 18.0225 10.3148 17.1601C10.3396 16.2976 10.5602 15.4521 10.96 14.6875L9.5775 15.125L9 13.5062L13.375 11.9663L14.9062 16.3412L13.2612 16.9187L12.6488 15.1687C12.2486 15.796 12.036 16.5247 12.0363 17.2688C12.0276 18.0482 12.2505 18.8127 12.6767 19.4653C13.1029 20.118 13.7133 20.6295 14.4304 20.9349C15.1475 21.2404 15.9392 21.3262 16.7051 21.1813C17.4711 21.0365 18.1768 20.6676 18.7328 20.1213C19.2889 19.5751 19.6703 18.8761 19.8288 18.1129C19.9873 17.3496 19.9156 16.5566 19.623 15.8341C19.3303 15.1116 18.8298 14.4923 18.1848 14.0545C17.5399 13.6167 16.7795 13.3802 16 13.375V11.625C17.5077 11.6273 18.953 12.2273 20.0191 13.2934C21.0852 14.3595 21.6852 15.8048 21.6875 17.3125Z',
                fill: '#242E30'
            }
        })]);
    }
};