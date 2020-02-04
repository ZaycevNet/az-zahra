require("./habit-adab");
require("./habit-organisasi");
require("./habit-majelis");

import Vue from 'nativescript-vue'

const HabitHeadlineNonTab = resolve => {
    require.ensure(
        ['./habit-headline-non-tab'],
        () => {
            resolve(require('./habit-headline-non-tab'))
        }, 'habit-headline-non-tab'
    )
}

Vue.component('HabitHeadlineNonTab', HabitHeadlineNonTab)
