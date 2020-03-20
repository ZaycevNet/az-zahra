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
require("./dashboard");
require("./timeline");
require("./auth");
require("./masukkan");

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

const MiniProfile = resolve => {
    require.ensure(
        ['./mini-profile'],
        () => {
            resolve(require('./mini-profile'))
        }, 'mini-profile'
    )
}

const MiniProfileDrawer = resolve => {
    require.ensure(
        ['./mini-profile-drawer'],
        () => {
            resolve(require('./mini-profile-drawer'))
        }, 'mini-profile-drawer'
    )
}


const ButtonRipple = resolve => {
    require.ensure(
        ['./button-ripple'],
        () => {
            resolve(require('./button-ripple'))
        }, 'button-ripple'
    )
}

const ButtonRoundRipple = resolve => {
    require.ensure(
        ['./button-round-ripple'],
        () => {
            resolve(require('./button-round-ripple'))
        }, 'button-round-ripple'
    )
}

const ButtonRoundRippleSave = resolve => {
    require.ensure(
        ['./button-round-ripple-save'],
        () => {
            resolve(require('./button-round-ripple-save'))
        }, 'button-round-ripple-save'
    )
}

Vue.component('ButtonRoundRippleSave', ButtonRoundRippleSave)
Vue.component('ButtonRoundRipple', ButtonRoundRipple)
Vue.component('ButtonRipple', ButtonRipple)
Vue.component('HeadlineNonTab', HeadlineNonTab)
Vue.component('HabitHeadlineNonTab', HabitHeadlineNonTab)
Vue.component('MiniProfile', MiniProfile)
Vue.component('MiniProfileDrawer', MiniProfileDrawer)
