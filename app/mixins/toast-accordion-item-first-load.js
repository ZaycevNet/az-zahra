const { Color } = require('tns-core-modules/color');

var Toast = require("nativescript-toast");

module.exports = {
		data(){
			return {
				fistLoad: false,
			}
		},
		methods: {
			showToast(args = "tampilkan..."){
				var toast = Toast.makeText(args);
				toast.show();
			},			
			showToastAccordionChild(args = "tampilkan..."){
				if(this.firstLoad) return;

				var toast = Toast.makeText(args);
				toast.show();

				this.firstLoad = true;
			},
		}
}
