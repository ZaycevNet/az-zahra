import Vue from 'nativescript-vue'

const HabitAdab = resolve => {
    require.ensure(
        ['./habit-adab'],
        () => {
            resolve(require('./habit-adab'))
        }, 'page-habit-adab'
    )
}

const HabitSholat = resolve => {
    require.ensure(
        ['./habit-sholat'],
        () => {
            resolve(require('./habit-sholat'))
        }, 'page-habit-sholat'
    )
}

Vue.component('HabitAdab', HabitAdab)
Vue.component('HabitSholat', HabitSholat)
