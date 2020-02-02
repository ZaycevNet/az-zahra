import Vue from 'nativescript-vue'

// const PageHabitAdab = require("./page-habit-adab")
const PageHabitAdab = resolve => {
    require.ensure(
        ['./page-habit-adab'],
        () => {
            resolve(require('./page-habit-adab'))
        }, 'page-habit-adab'
    )
}

// const PageHabitSholat = resolve => {
//     require.ensure(
//         ['./page-habit-sholat'],
//         () => {
//             resolve(require('./page-habit-sholat'))
//         }, 'page-habit-sholat'
//     )
// }

// const PageHabitOrganisasiNew = require("./page-habit-organisasi-new")
const PageHabitOrganisasiNew = resolve => {
    require.ensure(
        ['./page-habit-organisasi-new'],
        () => {
            resolve(require('./page-habit-organisasi-new'))
        }, 'page-habit-organisasi-new'
    )
}

// const PageHabitOrganisasi = require("./page-habit-organisasi")
const PageHabitOrganisasi = resolve => {
    require.ensure(
        ['./page-habit-organisasi'],
        () => {
            resolve(require('./page-habit-organisasi'))
        }, 'page-habit-organisasi'
    )
}

Vue.component('PageHabitAdab', PageHabitAdab)
// Vue.component('PageHabitSholat', PageHabitSholat)
Vue.component('PageHabitOrganisasiNew', PageHabitOrganisasiNew)
Vue.component('PageHabitOrganisasi', PageHabitOrganisasi)
