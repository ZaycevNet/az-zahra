import Vue from 'nativescript-vue'

// import auth from './auth'
// import tab from './tab'
// import init from './init'
// import notification from './notification'
import indicator from './indicator';

import habit_organisasi from './habit-organisasi';
import habit_adab_diri_sendiri from './habit-adab-diri-sendiri';
import habit_majelis from './habit-majelis';

// const map_habit_adab_diri_sendiri = require('./habit-adab-diri-sendiri')
// Vue.mixin(auth)
// Vue.mixin(tab)
// Vue.mixin(init)
// Vue.mixin(notification)
Vue.mixin(indicator);

Vue.mixin(habit_adab_diri_sendiri);
Vue.mixin(habit_organisasi);
Vue.mixin(habit_majelis);
