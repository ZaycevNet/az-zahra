import Vue from 'nativescript-vue'

const PageKebijakanPrivasi = resolve => {
    require.ensure(
        ['./page-kebijakan-privasi'],
        () => {
            resolve(require('./page-kebijakan-privasi'))
        }, 'page-kebijakan-privasi'
    )
}
Vue.component('PageKebijakanPrivasi', PageKebijakanPrivasi);
