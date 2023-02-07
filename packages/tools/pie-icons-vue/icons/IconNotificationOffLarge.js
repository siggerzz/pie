import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNotificationOffLarge',
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
            class: 'c-pieIcon c-pieIcon--notificationOffLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.375 21.7663L26.6925 21.0837C25.7926 20.1889 25.0799 19.1237 24.5962 17.9504C24.1124 16.777 23.8673 15.5191 23.875 14.25V13.375C23.8741 11.4386 23.1597 9.57037 21.8684 8.12735C20.5771 6.68432 18.7994 5.76766 16.875 5.5525V2.875H15.125V5.5525C13.8599 5.70872 12.6554 6.1845 11.625 6.935L9.14875 2.875H7.10125L10.2513 8.125C8.88513 9.66062 8.12874 11.6434 8.125 13.6987V14.25C8.12926 15.5147 7.88241 16.7677 7.39876 17.9362C6.91511 19.1048 6.20428 20.1657 5.3075 21.0575L4.625 21.7663V24.75H11.4938C11.5341 25.8817 12 26.9565 12.7982 27.7598C13.5964 28.563 14.6683 29.0356 15.7997 29.0831C16.9311 29.1306 18.0388 28.7496 18.9016 28.0161C19.7643 27.2825 20.3186 26.2506 20.4538 25.1263L22.8512 29.125H24.8988L22.2738 24.75H27.375V21.7663ZM16 27.375C15.2903 27.3759 14.6074 27.1039 14.0927 26.6153C13.578 26.1266 13.2709 25.4588 13.235 24.75H18.765C18.7291 25.4588 18.422 26.1266 17.9073 26.6153C17.3926 27.1039 16.7097 27.3759 16 27.375ZM11.7125 23H6.375V22.4837L6.54125 22.3175C7.60509 21.2617 8.44784 20.0045 9.02024 18.6193C9.59264 17.2342 9.88322 15.7488 9.875 14.25V13.6725C9.87626 12.2338 10.3428 10.8342 11.205 9.6825L19.1762 23H11.7125ZM25.625 23H21.25L12.5 8.43125C13.3354 7.77926 14.3346 7.37051 15.3875 7.25C16.2398 7.16012 17.1014 7.25165 17.9158 7.51859C18.7302 7.78552 19.4788 8.2218 20.1125 8.79875C20.7509 9.37712 21.2601 10.0837 21.6069 10.8722C21.9537 11.6608 22.1302 12.5136 22.125 13.375V14.25C22.1203 15.7444 22.4125 17.2248 22.9848 18.6052C23.5571 19.9856 24.3981 21.2386 25.4587 22.2913L25.625 22.4575V23Z',
                fill: '#242E30'
            }
        })]);
    }
};