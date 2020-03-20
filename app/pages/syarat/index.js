import Vue from 'nativescript-vue'

const PageSyaratKetentuan = resolve => {
    require.ensure(
        ['./page-syarat-ketentuan'],
        () => {
            resolve(require('./page-syarat-ketentuan'))
        }, 'page-syarat-ketentuan'
    )
}
Vue.component('PageSyaratKetentuan', PageSyaratKetentuan);
