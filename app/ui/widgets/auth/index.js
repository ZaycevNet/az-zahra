import Vue from 'nativescript-vue';

const AuthTextfield = resolve => {
    require.ensure(
        ['./auth-textfield'],
        () => {
            resolve(require('./auth-textfield'))
        }, 'auth-textfield'
    )
};

const AuthNewTextview = resolve => {
    require.ensure(
        ['./auth-new-textview'],
        () => {
            resolve(require('./auth-new-textview'))
        }, 'auth-new-textview'
    )
};

const AuthTron = resolve => {
    require.ensure(
        ['./auth-tron'],
        () => {
            resolve(require('./auth-tron'))
        }, 'auth-tron'
    )
};

Vue.component('AuthTextfield', AuthTextfield);
Vue.component('AuthTron', AuthTron);
Vue.component('AuthNewTextview', AuthNewTextview);
