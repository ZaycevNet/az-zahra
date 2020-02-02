import Vue from 'nativescript-vue'

const fonticon = {
		computed: {
			fa_arrow_down(){
				return String.fromCharCode('0xf063')
			}
		}
}


Vue.mixin(fonticon)
