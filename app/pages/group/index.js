import Vue from 'nativescript-vue'

const PageGroupMaster = resolve => {
    require.ensure(
        ['./page-group-master'],
        () => {
            resolve(require('./page-group-master'))
        }, 'page-group-master'
    )
}

const PageGroupSKM = resolve => {
    require.ensure(
        ['./page-group-skm'],
        () => {
            resolve(require('./page-group-skm'))
        }, 'page-group-skm'
    )
}

const PageGroupAnggota = resolve => {
    require.ensure(
        ['./page-group-anggota'],
        () => {
            resolve(require('./page-group-anggota'))
        }, 'page-group-anggota'
    )
}

const PageGroupHasil = resolve => {
    require.ensure(
        ['./page-group-hasil'],
        () => {
            resolve(require('./page-group-hasil'))
        }, 'page-group-hasil'
    )
}

const PageGroupHasilKalenderModal = resolve => {
    require.ensure(
        ['./page-group-hasil-kalender-modal'],
        () => {
            resolve(require('./page-group-hasil-kalender-modal'))
        }, 'page-group-hasil-kalender-modal'
    )
}

const PageGroupHasilDetail = resolve => {
    require.ensure(
        ['./page-group-hasil-detail'],
        () => {
            resolve(require('./page-group-hasil-detail'))
        }, 'page-group-hasil-detail'
    )
}

Vue.component('PageGroupSKM', PageGroupSKM);
Vue.component('PageGroupMaster', PageGroupMaster);
Vue.component('PageGroupAnggota', PageGroupAnggota);
Vue.component('PageGroupHasil', PageGroupHasil);
Vue.component('PageGroupHasilDetail', PageGroupHasilDetail);
Vue.component('PageGroupHasilKalenderModal', PageGroupHasilKalenderModal);
