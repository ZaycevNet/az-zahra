require('@/ui/components')
require('@/ui/widgets')
require('@/pages')
require("@/store/maps");
require('@/mixins')
require('@/filters')
require('@/layouts')
// require('@/routers')

import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import DateTimePicker from "nativescript-datetimepicker/vue";
Vue.use(DateTimePicker);

import RadDataForm from "nativescript-ui-dataform/vue";
Vue.use(RadDataForm);

import NSVueShadow from 'nativescript-vue-shadow'
Vue.use(NSVueShadow)

import RadListView from "nativescript-ui-listview/vue";
Vue.use(RadListView);
// Vue.component("RadListView", require("~/radlistview-directive"));

// import Home from "@/views/research/picker/Home";
// import PickerField from "nativescript-picker/vue";
// Vue.use(PickerField);

// import router from './router';
import store from "./store/index";

// import SideDrawerApp from '@/components/SideDrawerApp.vue'
// import Main from '@/views/habit-organisasi.vue';
// import Main from '@/views/view-habit-organisasi-new.vue';
// import Main from '@/views/view-habit-organisasi';

// import Main from '@/views/fancyalert.vue';
import Main from '@/views/research/cfalert.vue';
// import Main from '@/views/feedback.vue';
// import Main from '@/views/LoadingIndicator';
// import Main from '@/views/popup';
// import Main from '@/views/snackbar';
// import Main from '@/views/research/datetimepicker.vue';
// import Main from "@/views/research/dropdown";

// import Main from "@/organisasi-new-raddataform";
// import Main from "@/views/radiobutton";
// import Main from "@/views/research/pro-nested-scrollview";

import Navigator from 'nativescript-vue-navigator'

import { habit } from '@/routers/habit'
import { profile } from '@/routers/profile'

const routes = {
	...habit,
	...profile,
}

Vue.use(Navigator, { routes })

import views from "./view";
Vue.prototype.$views = views;

// import Main from '@/views/view';

import App from '@/views/app';
/*
import RadAutoComplete from 'nativescript-ui-autocomplete/vue';
Vue.use(RadAutoComplete);
import { getExamples } from '@/views/research/ui-autocomplete/examples';
import Home from '@/views/research/ui-autocomplete/views/Home';
import Home from '@/views/research/ui-autocomplete/examples/Completion-modes/Contains';
import { setCssFileName } from "tns-core-modules/application";
setCssFileName("app.css");
for (let comp of getExamples()) {
  Vue.component(comp.name, comp);
}
*/

// import { Statusbar } from "nativescript-plugin-statusbar";
// let status = new Statusbar();


if(TNS_ENV !== 'production') {
  //Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient);
Vue.registerElement('CheckBox',() => require('@nstudio/nativescript-checkbox').CheckBox,
  {
    model: {
      prop: 'checked',
      event: 'checkedChange'
    }
  }
);
Vue.registerElement("Ripple",() => require("nativescript-ripple").Ripple);
Vue.registerElement('Fab',() => require('@nstudio/nativescript-floatingactionbutton').Fab);
Vue.registerElement('ImageZoom', () => require('nativescript-image-zoom').ImageZoom);
Vue.registerElement('CardView',() => require('@nstudio/nativescript-cardview').CardView);
// Vue.registerElement("NestedScrollView", () => require("nativescript-nested-scrollview").NestedScrollView);

const { TNSFontIcon, fonticon } = require("nativescript-fonticon");

// TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': "./assets/font-awesome.css",
  'ion': "./assets/ionicons.css",
  'mdi': "./assets/material-design-icons.css"
};
TNSFontIcon.loadCss("./assets/app.css");
Vue.filter("fonticon", fonticon);

import * as application from 'tns-core-modules/application'

// router.push('/home');
const app = new Vue({
  name:"THIRD COMMIT 246538559",
  store,
  data(){
    return {
    }
  },
  mounted(){
    this.statusbar.setNavigationBarColor("white");
    this.statusbar.setStatusBarColor("#28ADAA");

    // console.log(this.$route.path, this.$router.history.stack.length);

    application.android.on('activityBackPressed', args => {
      // if(this.$store.getters.waitingUI){
      //   args.cancel = true //
      //   return
      // }
      //
      // args.cancel = false //
    })
  },
  // watch: {
  //   "$route.path":function(val) {
  //     console.log(val)
  //     // console.log(router.history)
  //   }
  // },

  // store,
  // router,

  // render: h => h(Main)
  // template: `<Frame><router-view/></Frame>`,
  // render: h => h('frame', [h(Main)]) // without nativescript-vue-navigator
  render: h => h(App),// nativescript-vue-navigator
}).$start()


// GOOD -> pakai nanti
// router.beforeEach((to, from, next) => {
//   if (!isAuthenticated) next('/login')
//   else next()
// })

// router.afterEach((to, from) => {
//   // ...
// })
