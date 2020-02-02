import Vue from 'nativescript-vue';

const snackbar = require("./snackbar");
const feedback = require("./feedback");
const indicator = require("./indicator");
const fancyalert = require("./fancyalert");

Vue.mixin(snackbar);
Vue.mixin(feedback);
Vue.mixin(indicator);
Vue.mixin(fancyalert);
