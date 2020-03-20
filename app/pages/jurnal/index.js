import Vue from 'nativescript-vue'

const PageJurnal = resolve => {
    require.ensure(
        ['./page-jurnal'],
        () => {
            resolve(require('./page-jurnal'))
        }, 'page-jurnal'
    )
}

const PageJurnalDetail = resolve => {
    require.ensure(
        ['./page-jurnal-detail'],
        () => {
            resolve(require('./page-jurnal-detail'))
        }, 'page-jurnal-detail'
    )
}


Vue.component('PageJurnal', PageJurnal);
Vue.component('PageJurnalDetail', PageJurnalDetail);
