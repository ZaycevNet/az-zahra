require("./habit-adab");
require("./habit-berpikir");
require("./habit-organisasi");
require("./habit-majelis");
require("./habit-membaca");
require("./habit-tadarus");
require("./habit-zis");
require("./habit-puasa");
require("./habit-sholat");
require("./profile");
require("./group");
require("./jurnal");

import Vue from 'nativescript-vue'

const HabitHeadlineNonTab = resolve => {
    require.ensure(
        ['./habit-headline-non-tab'],
        () => {
            resolve(require('./habit-headline-non-tab'))
        }, 'habit-headline-non-tab'
    )
}
const HeadlineNonTab = resolve => {
    require.ensure(
        ['./headline-non-tab'],
        () => {
            resolve(require('./headline-non-tab'))
        }, 'headline-non-tab'
    )
}

Vue.component('HeadlineNonTab', HeadlineNonTab)
