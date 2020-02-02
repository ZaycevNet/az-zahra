import Vue from 'nativescript-vue'

const AccordionHabitItemCheckbox = resolve => {
    require.ensure(
        ['./accordion-habit-item-checkbox'],
        () => {
            resolve(require('./accordion-habit-item-checkbox'))
        }, 'accordion-habit-item-checkbox'
    )
}

const AccordionHabitItemSubtitle = resolve => {
    require.ensure(
        ['./accordion-habit-item-subtitle'],
        () => {
            resolve(require('./accordion-habit-item-subtitle'))
        }, 'accordion-habit-item-subtitle'
    )
}

Vue.component('AccordionHabitItemCheckbox', AccordionHabitItemCheckbox)
Vue.component('AccordionHabitItemSubtitle', AccordionHabitItemSubtitle)
