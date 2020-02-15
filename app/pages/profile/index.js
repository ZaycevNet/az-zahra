import Vue from 'nativescript-vue'

const PageProfileGuruBiodata = resolve => {
    require.ensure(
        ['./page-profile-guru-biodata'],
        () => {
            resolve(require('./page-profile-guru-biodata'))
        }, 'page-profile-guru-biodata'
    )
}
const PageProfileGuruKelas = resolve => {
    require.ensure(
        ['./page-profile-guru-kelas'],
        () => {
            resolve(require('./page-profile-guru-kelas'))
        }, 'page-profile-guru-kelas'
    )
}
const PageProfileSiswaBiodata = resolve => {
    require.ensure(
        ['./page-profile-siswa-biodata'],
        () => {
            resolve(require('./page-profile-siswa-biodata'))
        }, 'page-profile-siswa-biodata'
    )
}
const PageProfileSiswaOrangtua = resolve => {
    require.ensure(
        ['./page-profile-siswa-orangtua'],
        () => {
            resolve(require('./page-profile-siswa-orangtua'))
        }, 'page-profile-siswa-orangtua'
    )
}
const PageProfileGuruGroup = resolve => {
    require.ensure(
        ['./page-profile-guru-group'],
        () => {
            resolve(require('./page-profile-guru-group'))
        }, 'page-profile-guru-group'
    )
}
const PageProfileSiswaGroup = resolve => {
    require.ensure(
        ['./page-profile-siswa-group'],
        () => {
            resolve(require('./page-profile-siswa-group'))
        }, 'page-profile-siswa-group'
    )
}
const PageProfileSiswaHabit = resolve => {
    require.ensure(
        ['./page-profile-siswa-habit'],
        () => {
            resolve(require('./page-profile-siswa-habit'))
        }, 'page-profile-siswa-habit'
    )
}

const PageProfileFotoZoomModal = resolve => {
    require.ensure(
        ['./page-profile-foto-zoom-modal'],
        () => {
            resolve(require('./page-profile-foto-zoom-modal'))
        }, 'page-profile-foto-zoom-modal'
    )
}
Vue.component('PageProfileSiswaBiodata', PageProfileSiswaBiodata);
Vue.component('PageProfileSiswaOrangtua', PageProfileSiswaOrangtua);
Vue.component('PageProfileSiswaGroup', PageProfileSiswaGroup);
Vue.component('PageProfileFotoZoomModal', PageProfileFotoZoomModal);
Vue.component('PageProfileSiswaHabit', PageProfileSiswaHabit);

Vue.component('PageProfileGuruBiodata', PageProfileGuruBiodata);
Vue.component('PageProfileGuruGroup', PageProfileGuruGroup);
Vue.component('PageProfileGuruKelas', PageProfileGuruKelas);
