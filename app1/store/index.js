import Vue from 'nativescript-vue';
import Vuex from "vuex";

import indicator from "./modules/indicator";

import habit_adab_diri_sendiri from "./modules/habit-adab-diri-sendiri";
import habit_organisasi from "./modules/habit-organisasi";
import habit_majelis from "./modules/habit-majelis";



Vue.use(Vuex);

let debug = process.env.NODE_ENV !== "production";

let store = new Vuex.Store({
  modules: {
    indicator,

    // sideDrawer,
    // keyboard_backpress,

    habit_adab_diri_sendiri,
    habit_organisasi,
    habit_majelis,

  },
  strict: debug
});

Vue.prototype.$store = store;

export default store;
