require('@/components/ui')
require('@/components/widget')
require('@/pages')
require('@/mixins/fontawesome')
require("@/store/maps");
require('@/mixins')

import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import * as application from 'tns-core-modules/application'

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import router from './router'
import store from "./store/index";

// import SideDrawerApp from '@/components/SideDrawerApp.vue'
import Main from '@/views/habit-organisasi.vue';

// import Main from '@/views/fancyalert.vue';
// import Main from '@/views/cfalert.vue';
// import Main from '@/views/feedback.vue';
// import Main from '@/views/LoadingIndicator';
// import Main from '@/views/popup';
// import Main from '@/views/snackbar';



if(TNS_ENV !== 'production') {
  //Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
//Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
Vue.registerElement('CheckBox',() => require('@nstudio/nativescript-checkbox').CheckBox,
  {
    model: {
      prop: 'checked',
      event: 'checkedChange'
    }
  }
);
Vue.registerElement(
	"Ripple",
	() => require("nativescript-ripple").Ripple
);

const { TNSFontIcon, fonticon } = require("nativescript-fonticon");

// TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': "./assets/font-awesome.css",
  'ion': "./assets/ionicons.css",
  'mdi': "./assets/material-design-icons.css"
};
TNSFontIcon.loadCss("./assets/app.css");
Vue.filter("fonticon", fonticon);

// router.push('/fancyalert')
const app = new Vue({
  name:"1234567861405595555555664555566565545454456644554554x65x55441365555566566ff6646164625555596778555334455443562423745478853696c40586967586555675676858549578555861965756956094774f236",
  data(){
    return {
    }
  },
  watch: {
    "$route.path":function(val) {
      console.log(val)
      // console.log(router.history)
    }
  },
  //store,
  router,
  // render: h => h(Main)
  // template: `<Frame><router-view/></Frame>`,
  render: h => h('frame', [h(Main)])
}).$start()


// const application = require('tns-core-modules/application')
application.android.on('activityBackPressed', args => {
    // console.log('before back')
    // if (router.history.stack.length > 1) {
    //     router.back()
    //     args.cancel = true
    // }
    // console.log('after back')
    // console.log('after activityBackPressed')
})

// GOOD -> pakai nanti
// router.beforeEach((to, from, next) => {
//   if (!isAuthenticated) next('/login')
//   else next()
// })

router.afterEach((to, from) => {
  // ...
})
