import Vue from "nativescript-vue";
import Vuex from "vuex";

import indicator from "./modules/indicator";

import sideDrawer from "./modules/sideDrawer";

import habit_adab from "./modules/habit-adab";
import habit_organisasi from "./modules/habit-organisasi";



Vue.use(Vuex);

let debug = process.env.NODE_ENV !== "production";

let store = new Vuex.Store({
  modules: {
    indicator,

    // sideDrawer,
    habit_adab,
    habit_organisasi,
  },
  strict: debug
});

Vue.prototype.$store = store;

export default store;
