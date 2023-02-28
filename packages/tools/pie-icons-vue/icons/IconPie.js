import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPie',
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
            class: 'c-pieIcon c-pieIcon--pie'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.053 6.906c.105 0 .21-.043.288-.122a.412.412 0 00.123-.289c0-.245-.184-.814-.411-.814-.228 0-.412.595-.412.814 0 .105.044.21.123.289a.412.412 0 00.289.122z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.979 6.346s.096.062.149.079c.043.009.078.018.122.018h.044a.337.337 0 00.157-.053.5.5 0 00.123-.114c.149-.166.411-.735.236-.883a.185.185 0 00-.122-.035c-.228 0-.595.245-.727.385a.4.4 0 00-.096.14.355.355 0 00-.035.166c0 .052.018.114.035.166a.387.387 0 00.105.131h.009z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.566 6.381a.416.416 0 00.158.044h.026s.088 0 .131-.017a.444.444 0 00.14-.08.416.416 0 00.14-.28c0-.052 0-.104-.017-.157a.444.444 0 00-.079-.14c-.131-.14-.516-.376-.744-.376-.043 0-.087.009-.113.035-.175.149.078.718.236.884.035.044.079.07.122.096v-.009z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.773 7.388h-.202L13.547 5.41c-.55-.857-1.452-1.4-2.52-1.514-.35-.035-.63-.28-.796-.481-.332-.385-.971-.84-2.17-.84h-.113c-1.2 0-1.847.455-2.17.84-.175.201-.447.446-.85.481-1.014.105-1.907.657-2.493 1.567l-.989 1.925h-.218V8.7h.84l1.04 4.734h9.827L13.976 8.7h.796V7.388zm-11.21-1.27c.333-.515.876-.848 1.55-.918.62-.061 1.19-.385 1.662-.936.271-.315.788-.385 1.173-.385h.113c.385 0 .902.07 1.173.385.472.542 1.041.866 1.715.936a1.998 1.998 0 011.461.858l.682 1.32H2.916l.648-1.268v.009zm8.313 6.003H4.16L3.406 8.7h9.223l-.753 3.421z',
                fill: '#242E30'
            }
        })]);
    }
};
