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

// Vue.component('Accordion', Accordion);
Vue.component('TextFieldFloatLabel', TextFieldFloatLabel);
Vue.component('TextViewFloatLabel', TextViewFloatLabel);
// Vue.component('ItemCheckbox', ItemCheckbox);
