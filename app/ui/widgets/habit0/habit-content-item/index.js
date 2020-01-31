import Vue from 'nativescript-vue'

const HabitItemCheckbox = resolve => {
    require.ensure(
        ['./habit-item-checkbox'],
        () => {
            resolve(require('./habit-item-checkbox'))
        }, 'habit-item-checkbox'
    )
}

const HabitItemSubtitle = resolve => {
    require.ensure(
        ['./habit-item-subtitle'],
        () => {
            resolve(require('./habit-item-subtitle'))
        }, 'habit-item-subtitle'
    )
}

Vue.component('HabitItemCheckbox', HabitItemCheckbox)
Vue.component('HabitItemSubtitle', HabitItemSubtitle)
