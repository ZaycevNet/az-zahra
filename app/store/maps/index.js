import Vue from 'nativescript-vue'

// import auth from './auth'
// import tab from './tab'
// import init from './init'
// import notification from './notification'

const habit_adab = require('./habit-adab')
const habit_organisasi = require('./habit-organisasi')
// Vue.mixin(auth)
// Vue.mixin(tab)
// Vue.mixin(init)
// Vue.mixin(notification)

Vue.mixin(habit_adab)
Vue.mixin(habit_organisasi)
