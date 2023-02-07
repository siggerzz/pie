import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPickUpLarge',
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
            class: 'c-pieIcon c-pieIcon--pickUpLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.6251 2.875H16.8751C13.0163 2.875 10.9163 5.98125 10.2163 7.25H5.84134L5.68384 7.32C5.24784 7.50203 4.85766 7.77853 4.54143 8.12957C4.22519 8.4806 3.99078 8.89743 3.85509 9.35C3.67434 10.1024 3.74804 10.8936 4.06468 11.5996C4.38131 12.3057 4.92302 12.887 5.60509 13.2525L3.75009 26.6925C3.7338 27.0202 3.78349 27.3478 3.89622 27.656C4.00895 27.9641 4.18242 28.2464 4.40634 28.4862C4.59582 28.6861 4.82366 28.8457 5.07625 28.9554C5.32883 29.0652 5.60096 29.1229 5.87634 29.125H21.7488C22.0242 29.1229 22.2964 29.0652 22.5489 28.9554C22.8015 28.8457 23.0294 28.6861 23.2188 28.4862C23.451 28.236 23.6291 27.9405 23.742 27.6183C23.8549 27.2962 23.9002 26.9542 23.8751 26.6137L21.9501 12.5C22.6598 12.0954 23.2303 11.4853 23.5863 10.75H24.7501V12.5H30.0001V2.875H25.6251ZM5.54384 9.81375C5.6581 9.46475 5.90257 9.17327 6.22634 9H15.7988L14.5213 10.225C14.1241 10.6033 13.8472 11.0902 13.7251 11.625H6.27884C5.99003 11.4305 5.76582 11.1542 5.63489 10.8316C5.50396 10.5089 5.47226 10.1545 5.54384 9.81375ZM22.1251 26.7625C22.1329 26.8539 22.1222 26.946 22.0937 27.0332C22.0651 27.1204 22.0192 27.2009 21.9588 27.27C21.9325 27.3005 21.9003 27.3254 21.8643 27.3434C21.8283 27.3614 21.789 27.3722 21.7488 27.375H5.87634C5.83615 27.3722 5.79692 27.3614 5.76088 27.3434C5.72485 27.3254 5.69272 27.3005 5.66634 27.27C5.55919 27.1522 5.49719 27.0004 5.49134 26.8412L7.32009 13.375H13.8651C14.0056 13.7192 14.2139 14.0316 14.4776 14.2937C14.7417 14.5581 15.0555 14.7676 15.4009 14.9103C15.7462 15.0529 16.1164 15.1259 16.4901 15.125C17.2443 15.124 17.9675 14.8252 18.5026 14.2937L19.6576 13.13C19.8597 13.1244 20.0613 13.1069 20.2613 13.0775L22.1251 26.7625ZM22.3701 9L22.1688 9.595C21.9618 10.1519 21.577 10.6251 21.0741 10.9414C20.5711 11.2577 19.978 11.3996 19.3863 11.345L18.9751 11.3013L17.2251 13.0513C17.1235 13.1531 17.0028 13.2339 16.8699 13.2891C16.737 13.3442 16.5946 13.3726 16.4507 13.3726C16.3069 13.3726 16.1644 13.3442 16.0315 13.2891C15.8986 13.2339 15.7779 13.1531 15.6763 13.0513C15.5724 12.9488 15.4907 12.8259 15.4365 12.6904C15.3823 12.5549 15.3567 12.4096 15.3613 12.2638C15.3622 12.1184 15.3921 11.9746 15.4492 11.8409C15.5063 11.7072 15.5894 11.5862 15.6938 11.485L18.3188 8.99125C18.49 8.85924 18.6146 8.67601 18.6744 8.46826C18.7342 8.2605 18.7262 8.03908 18.6513 7.83625C18.5765 7.65995 18.4508 7.50999 18.2902 7.40556C18.1297 7.30112 17.9416 7.24696 17.7501 7.25H12.2726C12.773 6.47538 13.4523 5.83251 14.2534 5.37564C15.0544 4.91877 15.9536 4.66132 16.8751 4.625H24.7501V9H22.3701ZM28.2501 10.75H26.5001V4.625H28.2501V10.75Z',
                fill: '#242E30'
            }
        })]);
    }
};