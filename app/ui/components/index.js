import Vue from 'nativescript-vue';

const TextFieldFloatLabel = resolve => {
    require.ensure(
        ['./textfield-float-label'],
        () => {
            resolve(require('./textfield-float-label'))
        }, 'textfield-float-label'
    )
};

const TextViewFloatLabel = resolve => {
    require.ensure(
        ['./textview-float-label'],
        () => {
            resolve(require('./textview-float-label'))
        }, 'textview-float-label'
    )
};

// const ModalActionbar = resolve => {
//     require.ensure(
//         ['./modal-actionbar'],
//         () => {
//             resolve(require('./modal-actionbar'))
//         }, 'modal-actionbar'
//     )
// };

const ContentPreloader = resolve => {
    require.ensure(
        ['./content-preloader'],
        () => {
            resolve(require('./content-preloader'))
        }, 'content-preloader'
    )
};


Vue.component('TextFieldFloatLabel', TextFieldFloatLabel);
Vue.component('TextViewFloatLabel', TextViewFloatLabel);
// Vue.component('ModalActionbar', ModalActionbar);
Vue.component('ContentPreloader', ContentPreloader);
