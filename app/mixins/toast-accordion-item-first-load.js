const { Color } = require('tns-core-modules/color');

var Toast = require("nativescript-toast");

module.exports = {
		data(){
			return {
				fistLoad: false,
			}
		},
		methods: {
			showToastAccordionChild(){
				if(this.firstLoad) return;

				var toast = Toast.makeText("tampilkan...");
				toast.show();

				this.firstLoad = true;
			},
		}
}
