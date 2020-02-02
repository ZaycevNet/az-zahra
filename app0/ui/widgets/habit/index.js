require("./accordion-habit")

import Vue from 'nativescript-vue'

const Accordion = resolve => {
    require.ensure(
        ['./accordion'],
        () => {
            resolve(require('./accordion'))
        }, 'accordion'
    )
};

const HabitHeadline = resolve => {
    require.ensure(
        ['./habit-headline'],
        () => {
            resolve(require('./habit-headline'))
        }, 'habit-headline'
    )
}

Vue.component('HabitHeadline', HabitHeadline)
Vue.component('Accordion', Accordion);
