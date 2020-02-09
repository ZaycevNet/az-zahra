import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/view';
import habit from "@/routers/habit";

export default new VueRouter({
  mode: "abstract",
  routes: [
    ...habit,
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '*', redirect: '/home'
    }
  ]
})
