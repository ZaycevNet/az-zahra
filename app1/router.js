import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/view';
// import SideDrawerApp from '@/components/SideDrawerApp.vue'

// const habit = require("@/routers/habit");
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
    // {
    //   path: '/',
    //   name: 'home',
    //   component: App,
    //   children: [
    //     {
    //       path: '/',
    //       redirect: 'first',
    //     },
    //     {
    //       path: 'third',
    //       name: 'third',
    //       component: () => import('@/components/pages/ThirdPageChildren.vue'),
    //
    //     },
    //     {
    //       path: 'first',
    //       name: 'first',
    //       component: () => import('@/components/pages/FirstPageChildren.vue')
    //       // component: FirstPage
    //     },
    //     {
    //       path: 'second',
    //       name: 'second',
    //       component: () => import('@/components/pages/SecondPageChildren.vue')
    //       // component: SecondPage
    //     }
    //   ]
    // },
    // {
    //   path: '/page-third',
    //   name: 'page-third',
    //   component: () => import('@/components/pages/ThirdPage.vue'),
    // },
    // {
    //   path: '/page-first',
    //   name: 'page-first',
    //   component: () => import('@/components/pages/FirstPage.vue')
    // },
    // {
    //   path: '/page-second',
    //   name: 'page-second',
    //   component: () => import('@/components/pages/SecondPage.vue')
    // },
    {
      path: '*', redirect: '/home'
    }
  ]
})
