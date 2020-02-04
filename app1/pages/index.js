import Vue from 'nativescript-vue'

const PageHabitAdab = resolve => {
    require.ensure(
        ['./page-habit-adab'],
        () => {
            resolve(require('./page-habit-adab'))
        }, 'page-habit-adab'
    )
}

const PageHabitOrganisasiNew = resolve => {
    require.ensure(
        ['./page-habit-organisasi-new'],
        () => {
            resolve(require('./page-habit-organisasi-new'))
        }, 'page-habit-organisasi-new'
    )
}

const PageHabitOrganisasi = resolve => {
    require.ensure(
        ['./page-habit-organisasi'],
        () => {
            resolve(require('./page-habit-organisasi'))
        }, 'page-habit-organisasi'
    )
}

const PageHabitMajelis = resolve => {
    require.ensure(
        ['./page-habit-majelis'],
        () => {
            resolve(require('./page-habit-majelis'))
        }, 'page-habit-majelis'
    )
}

Vue.component('PageHabitAdab', PageHabitAdab)
Vue.component('PageHabitOrganisasiNew', PageHabitOrganisasiNew)
Vue.component('PageHabitOrganisasi', PageHabitOrganisasi)
Vue.component('PageHabitMajelis', PageHabitMajelis)
