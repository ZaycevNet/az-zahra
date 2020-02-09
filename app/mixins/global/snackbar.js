
const { SnackBar, SnackBarOptions } = require('@nstudio/nativescript-snackbar');

const { confirm } = require('tns-core-modules/ui/dialogs');
const { openUrl } = require('tns-core-modules/utils/utils');

module.exports = {
	data(){
		return {
			_SnackBar: SnackBar,
		  _snackText: "",
		  _actionText: "",
		}
	},
  mounted() {
    this._SnackBar = new SnackBar();
    this._snackText =
      'Snackbar Text on a really long max line number, this is only 3 max lines but it could be more :) so I will keep rambling on and on and on and on. Hope this works well.';
    this._actionText = 'Okay';
  },
	methods: {
	  nStudioIconTap() {
	    confirm({
	      message:
					'nStudio, LLC. specializes in custom software applications ranging from mobile, web, desktop, server and more. Would you like to visit nstudio.io?',
					okButtonText: 'Yes',
					cancelButtonText: 'Close'
	    }).then(result => {
	      if (result) {
	        openUrl('https://nstudio.io');
	      }
	    });
	  },

	  showSimpleSnackbar() {
	    // this._SnackBar = new SnackBar();

	    this._SnackBar
	      .simple('Hello from the 🍫 SnackBar 👋 Snackbar', 'white', '#28ADAA', 3, false)
	      .then(args => {
	        console.log('SnackBar.simple() result', args);
	      })
	      .catch(error => {
	        console.log('simple snackbar error', error);
	      });
	  },

		showActionSnackbar() {
	    this._SnackBar
	      .simple('👍 Sukses! Data berhasil diproses...', 'white', '#28ADAA', 2, false)
	      .then(args => {
	        console.log('SnackBar.simple() result', args);
	      })
	      .catch(error => {
	        console.log('simple snackbar error', error);
	      });
	  },

	  showActionSnackbarX() {
	    const options = {
				// actionText: string
				// actionTextColor: string
				// snackText: string
				// hideDelay: number
				// textColor: string
				// backgroundColor: string
				// maxLines: number
				// isRTL: boolean
				// view: View

	      actionText: "Tutup",
	      textColor: 'rgba(255,255,255,0.85)',
	      actionTextColor: "rgba(255,255,255,0.75)",
				backgroundColor: "#28ADAA",
	      snackText: "Data berhasil diproses...",
	      hideDelay: 100000 // kita gak pernah tahu kapan selesai kecuali dari axios
	    };

	    this._SnackBar.action(options).then(args => {
	      // console.log('SnackBar.action() result', args);
	      if (args.command === 'Action') {
					console.log("Action");
	      }
				if (args.command === 'Manual') {
					console.log("Manual");
	      }
				if (args.command === 'Swipe') {
					console.log("Swipe");
	      }
				if (args.command === 'Consecutive') {
					console.log("Consecutive");
	      }
				if (args.command === 'Timeout') {
					console.log("Timeout");
	      }
				// if(args.command == "Swipe") {
				// 	alert(123)
				// }
	    });
	  },

		hideSnackbar(){
			this._SnackBar.dismiss().then(args => console.log(args));
		}
	}
}
