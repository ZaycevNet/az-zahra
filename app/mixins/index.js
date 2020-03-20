import Vue from 'nativescript-vue';

const snackbar = require("./global/snackbar");
const feedback = require("./global/feedback");
const indicator = require("./global/indicator");
const fancyalert = require("./global/fancyalert");
const statusbar = require("./global/statusbar");
const toast = require("./global/toast");
const zoom = require("./global/zoom");

const radimagepicker = require("./global/radimagepicker");
const mediafilepicker = require("./global/mediafilepicker");

const sideDrawer = require("./sideDrawer");
const navigator = require("./navigator");

Vue.mixin(snackbar);
Vue.mixin(feedback);
Vue.mixin(indicator);
Vue.mixin(fancyalert);
Vue.mixin(statusbar);
Vue.mixin(toast);
Vue.mixin(zoom);

Vue.mixin(sideDrawer);
Vue.mixin(navigator);


// Vue.mixin(radimagepicker);
// Vue.mixin(mediafilepicker);
