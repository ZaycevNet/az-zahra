const {
    Statusbar
} = require("nativescript-plugin-statusbar");
// let status = new Statusbar();

module.exports = {
	data(){
			return {
				statusbar: new Statusbar()
			}
	},
}
