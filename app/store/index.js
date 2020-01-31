import Vue from "nativescript-vue";
import Vuex from "vuex";

import indicator from "./modules/indicator";

import sideDrawer from "./modules/sideDrawer";

import habit_adab from "./modules/habit-adab";



Vue.use(Vuex);

let debug = process.env.NODE_ENV !== "production";

let store = new Vuex.Store({
  modules: {
    indicator,

    // sideDrawer,
    habit_adab,
  },
  strict: debug
});

Vue.prototype.$store = store;

export default store;
