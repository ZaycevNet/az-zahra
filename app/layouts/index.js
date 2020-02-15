import Vue from 'nativescript-vue'

const LayoutProfile = resolve => {
    require.ensure(
        ['./layout-profile'],
        () => {
            resolve(require('./layout-profile'))
        }, 'layout-profile'
    )
}

Vue.component('LayoutProfile', LayoutProfile);
