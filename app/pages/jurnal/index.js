import Vue from 'nativescript-vue'

const PageJurnal = resolve => {
    require.ensure(
        ['./page-jurnal'],
        () => {
            resolve(require('./page-jurnal'))
        }, 'page-jurnal'
    )
}

Vue.component('PageJurnal', PageJurnal);
