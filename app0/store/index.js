import Vue from 'nativescript-vue';
import Vuex from "vuex";

import indicator from "./modules/indicator";

import keyboard_backpress from "./modules/keyboard-backpress";

import habit_adab from "./modules/habit-adab";
import habit_organisasi from "./modules/habit-organisasi";



Vue.use(Vuex);

let debug = process.env.NODE_ENV !== "production";

let store = new Vuex.Store({
  modules: {
    indicator,

    // sideDrawer,
    // keyboard_backpress,

    habit_adab,
    habit_organisasi,
  },
  strict: debug
});

Vue.prototype.$store = store;

export default store;
