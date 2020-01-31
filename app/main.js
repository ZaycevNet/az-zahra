require('@/ui/components')
require('@/ui/widgets')
require('@/pages')
require('@/mixins/fontawesome')
require("@/store/maps");
require('@/mixins')

import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import * as application from 'tns-core-modules/application'

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import DateTimePicker from "nativescript-datetimepicker/vue";
Vue.use(DateTimePicker);

// import Home from "@/views/research/picker/Home";
// import PickerField from "nativescript-picker/vue";
// Vue.use(PickerField);

import router from './router'
import store from "./store/index";

// import SideDrawerApp from '@/components/SideDrawerApp.vue'
// import Main from '@/views/habit-organisasi.vue';
import Main from '@/views/view-habit-organisasi-new.vue';

// import Main from '@/views/fancyalert.vue';
// import Main from '@/views/cfalert.vue';
// import Main from '@/views/feedback.vue';
// import Main from '@/views/LoadingIndicator';
// import Main from '@/views/popup';
// import Main from '@/views/snackbar';
// import Main from '@/views/research/datetimepicker.vue';

import Home from "@/views/research/dropdown";


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
  name:"12345678614055955555655556675565665676556545655555665656655554545445664455455004x65x55441365555566566ff66461646255555596778575533564455454356242637455646576558666853696c40585666696575865556756656768585495785558619657546956094774f236",
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
