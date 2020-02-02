require('@/ui/components')
require('@/ui/widgets')
require('@/pages')
require('@/mixins/fontawesome')
require("@/store/maps");
require('@/mixins')

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

import router from './router'
import store from "./store/index";

// import SideDrawerApp from '@/components/SideDrawerApp.vue'
// import Main from '@/views/habit-organisasi.vue';
// import Main from '@/views/view-habit-organisasi-new.vue';
// import Main from '@/views/view-habit-organisasi';

// import Main from '@/views/fancyalert.vue';
// import Main from '@/views/cfalert.vue';
// import Main from '@/views/feedback.vue';
// import Main from '@/views/LoadingIndicator';
// import Main from '@/views/popup';
// import Main from '@/views/snackbar';
// import Main from '@/views/research/datetimepicker.vue';
// import Main from "@/views/research/dropdown";

// import Main from "@/organisasi-new-raddataform";

import views from "./view";
Vue.prototype.$views = views;

import Main from '@/views/view';

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

import { Statusbar } from "nativescript-plugin-statusbar";
let status = new Statusbar();


if(TNS_ENV !== 'production') {
  //Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
//Vue.config.silent = (TNS_ENV === 'production')
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
Vue.registerElement(
	"Ripple",
	() => require("nativescript-ripple").Ripple
);
Vue.registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
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

import * as application from 'tns-core-modules/application'

// router.replace('/habit-organisasi');
const app = new Vue({
  name:"1234567861405595554554555555425555534265555555555755555455555667554r5556566655657565555555565555545655555559665856656655554545445664445554550504x565x554467771365555555556654676565ff6645561645565255r554555965665565545565657875856555557555336556445545435624526374556465765586668535696c4058566669657586555675665676685854957855586666166575546956094774f236",

  data(){
    return {
    }
  },
  mounted(){
    // status.setNavigationBarColor("#28ADAA");
    // status.setStatusBarColor("#28ADAA");
    console.log(this.$route.path, this.$router.history.stack.length);

    application.android.on('activityBackPressed', args => {
      // if(this.$store.getters.waitingUI){
      //   args.cancel = true //
      //   return
      // }
      //
      // args.cancel = false //
    })
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


// // // const application = require('tns-core-modules/application')
// application.android.on('activityBackPressed', args => {
//
//
//     // console.log(route.path)
//     // if (router.history.stack.length > 1) {
//     // if(router.path){
//     //     args.cancel = true;
//     // }
//     // console.log('activityBackPressed', router.path)
//     // console.log('after activityBackPressed')
// })

// GOOD -> pakai nanti
// router.beforeEach((to, from, next) => {
//   if (!isAuthenticated) next('/login')
//   else next()
// })

router.afterEach((to, from) => {
  // ...
})
