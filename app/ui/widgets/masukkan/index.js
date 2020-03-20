import Vue from 'nativescript-vue';

const MasukkanNewTextfield = resolve => {
    require.ensure(
        ['./masukkan-new-textfield'],
        () => {
            resolve(require('./masukkan-new-textfield'))
        }, 'masukkan-new-textfield'
    )
};

const MasukkanNewTextview = resolve => {
    require.ensure(
        ['./masukkan-new-textview'],
        () => {
            resolve(require('./masukkan-new-textview'))
        }, 'masukkan-new-textview'
    )
};


Vue.component('MasukkanNewTextfield', MasukkanNewTextfield);
Vue.component('MasukkanNewTextview', MasukkanNewTextview);
