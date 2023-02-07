import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGoogleCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--googleCircleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 28.25C13.5772 28.25 11.2088 27.5316 9.19427 26.1855C7.17977 24.8395 5.60965 22.9263 4.68248 20.6879C3.75531 18.4495 3.51272 15.9864 3.98539 13.6101C4.45805 11.2339 5.62475 9.05114 7.33795 7.33795C9.05114 5.62475 11.2339 4.45805 13.6101 3.98539C15.9864 3.51272 18.4495 3.75531 20.6879 4.68248C22.9263 5.60965 24.8395 7.17977 26.1855 9.19427C27.5316 11.2088 28.25 13.5772 28.25 16C28.25 19.2489 26.9594 22.3647 24.6621 24.6621C22.3647 26.9594 19.2489 28.25 16 28.25ZM16 5.50001C13.9233 5.50001 11.8932 6.11582 10.1665 7.26957C8.4398 8.42333 7.09399 10.0632 6.29927 11.9818C5.50455 13.9005 5.29662 16.0117 5.70176 18.0485C6.1069 20.0853 7.10693 21.9562 8.57538 23.4246C10.0438 24.8931 11.9148 25.8931 13.9516 26.2983C15.9884 26.7034 18.0996 26.4955 20.0182 25.7007C21.9368 24.906 23.5767 23.5602 24.7304 21.8335C25.8842 20.1068 26.5 18.0767 26.5 16C26.5 13.2152 25.3938 10.5445 23.4246 8.57538C21.4555 6.60625 18.7848 5.50001 16 5.50001Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.72852 16.2537V15.5887C8.72852 15.5887 8.72852 15.5887 8.72852 15.5275L8.78102 15.055C8.83722 14.5355 8.9547 14.0244 9.13102 13.5325C9.68981 11.9222 10.7897 10.5555 12.2432 9.66519C13.6967 8.7749 15.4139 8.41613 17.1023 8.65001C18.3836 8.80241 19.5964 9.31176 20.6023 10.12L21.0398 10.4788L18.9573 12.5C18.5462 12.1205 18.0614 11.8298 17.5329 11.6461C17.0045 11.4624 16.4438 11.3897 15.886 11.4325C15.0306 11.4773 14.2093 11.7826 13.5323 12.3075C12.9985 12.7086 12.5595 13.2222 12.2465 13.812C11.9334 14.4017 11.7541 15.0531 11.721 15.72C11.6786 16.3163 11.7713 16.9145 11.9923 17.47C12.1506 17.9123 12.3748 18.3282 12.6573 18.7037C13.2589 19.5036 14.1129 20.0771 15.081 20.3312C15.6934 20.4855 16.3313 20.5093 16.9535 20.4012C17.5975 20.3151 18.212 20.0783 18.7473 19.71C19.464 19.2173 19.9649 18.4691 20.1473 17.6187C20.1473 17.5662 20.1473 17.5137 20.1473 17.4437H16.131V14.5737H22.9998C22.9998 14.8275 23.0785 15.0725 23.096 15.3262C23.2138 16.4347 23.1127 17.5555 22.7985 18.625C22.4521 19.7552 21.8156 20.7749 20.9523 21.5825C20.6546 21.8513 20.3324 22.0915 19.9898 22.3C18.9771 22.9021 17.8327 23.2475 16.656 23.3062C15.9616 23.3606 15.263 23.3134 14.5823 23.1662C13.2661 22.8846 12.0542 22.2423 11.0823 21.3112C10.4288 20.708 9.89968 19.9827 9.52477 19.1762C9.26283 18.6526 9.07158 18.0965 8.95602 17.5225C8.87727 17.1375 8.84227 16.735 8.78977 16.35C8.77538 16.3144 8.75462 16.2818 8.72852 16.2537Z',
                fill: '#242E30'
            }
        })]);
    }
};