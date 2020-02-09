import Vue from 'nativescript-vue';

const snackbar = require("./global/snackbar");
const feedback = require("./global/feedback");
const indicator = require("./global/indicator");
const fancyalert = require("./global/fancyalert");
const statusbar = require("./global/statusbar");

Vue.mixin(snackbar);
Vue.mixin(feedback);
Vue.mixin(indicator);
Vue.mixin(fancyalert);
Vue.mixin(statusbar);
