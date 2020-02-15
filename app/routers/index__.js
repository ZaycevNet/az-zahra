import Vue from 'nativescript-vue'
import Navigator from 'nativescript-vue-navigator'

import { habit } from '@/routers/habit'
import { profile } from '@/routers/profile'

const routes = {
	...habit,
	...profile,
}

Vue.use(Navigator, { routes })
