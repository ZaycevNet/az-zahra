var MBProgressHUDMode;

// optional options
// android and ios have some platform specific options
var options = {
  message: 'Loading...',
  progress: 0.65,
  android: {
    color: "#FFF", // color of indicator and labels
    indeterminate: true,
    cancelable: true,
    cancelListener: function(dialog) { console.log("Loading cancelled") },
    max: 100,
    progressNumberFormat: "%1d/%2d",
    progressPercentFormat: 0.53,
    progressStyle: 1,
    secondaryProgress: 1
  },
  ios: {
    details: "Additional detail note!",
    margin: 10,
    dimBackground: true,
    color: "#4B9ED6", // color of indicator and labels
    // background box around indicator
    // hideBezel will override this if true
    backgroundColor: "yellow",
    userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
    hideBezel: true, // default false, can hide the surrounding bezel
    // view: UIView, // Target view to show on top of (Defaults to entire window)
    // mode: MBProgressHUDModeDeterminate, // see iOS specific options below

        // Quick Mode Reference:

        // MBProgressHUDModeDeterminate
        // MBProgressHUDModeAnnularDeterminate
        // MBProgressHUDModeDeterminateHorizontalBar
        // MBProgressHUDModeText
        // MBProgressHUDModeCustomView
        // use with customView: string - local path to an image file
  }
};

const { LoadingIndicator } = require('nativescript-loading-indicator')

module.exports = {
	data(){
			return {
					indicator: new LoadingIndicator()
			}
	},
	methods: {
			showLoadingIndicator(param) {
				this.indicator.show({
					message: "Sedang diproses... ", //param+'Sedang diproses... '
				});
			},

			hideLoadingIndicator(){
				this.indicator.hide();
			},

			showLoader() {
					this.indicator.show({
						message: 'Loading test...'
					});
					this.demoLoader();

					// to test target view
					// uncomment - then can toggle this method to show/hide in target
					// if (!this._testTarget) {
					//   this._testTarget = true;
					//   this.indicator.show({
					//     message: 'Loading test...',
					//     ios: {
					//       view: this.stackView.ios
					//     }
					//   });
					// } else {
					//   this._testTarget = false;
					//   this.indicator.hide();
					// }
				},

				showLoaderNoBezel() {
					this.indicator.show({
						message: 'Loading, no bezel!',
						ios: {
							color: '#000',
							hideBezel: true
						}
					});
					this.demoLoader();
				},

				showLoaderMsgAndDetails() {
					this.indicator.show({ message: 'One moment', ios: { details: 'Updating data...' } });
					setTimeout(() => {
						this.indicator.show({ ios: { details: 'Transferring secret codes...' } });
						this.demoLoader();
					}, 1000);
				},

				showLoaderSquare() {
					this.indicator.show({ ios: { square: true } });
					this.demoLoader();
				},

				showLoaderMargin() {
					this.indicator.show({ message: 'Message offset margin...', ios: { margin: 30 } });
					this.demoLoader();
				},

				showLoaderDimBg() {
					this.indicator.show({ ios: { dimBackground: true } });
					this.demoLoader();
				},

				showLoaderColor() {
					this.indicator.show({ ios: { color: '#fff', backgroundColor: '#4B9ED6' } });
					this.demoLoader();
				},

				showLoaderDeterminate() {
					this.indicator.show({ ios: { mode: MBProgressHUDMode.Determinate } });
					this.demoProgress();
				},

				showLoaderAnnularDeterminate() {
					this.indicator.show({ ios: { mode: MBProgressHUDMode.AnnularDeterminate } });
					this.demoProgress();
				},

				showLoaderDeterminateHorizontalBar() {
					this.indicator.show({ ios: { mode: MBProgressHUDMode.DeterminateHorizontalBar } });
					this.demoProgress();
				},

				showLoaderModeText() {
					this.indicator.show({ message: 'Text only', ios: { mode: MBProgressHUDMode.Text } });
					this.demoLoader();
				},

				showLoaderModeCustom() {
					this.indicator.show({ message: 'Completed', ios: { mode: MBProgressHUDMode.CustomView, customView: 'Checkmark.png' } });
					this.demoLoader();
				},

				demoLoader() {
					setTimeout(() => {
						this.indicator.hide();
					}, 3000);
				},

				demoProgress() {
					setTimeout(() => {
						this.indicator.show({ progress: 0.15 });
					}, 500);
					setTimeout(() => {
						this.indicator.show({ progress: 0.35 });
					}, 1500);
					setTimeout(() => {
						this.indicator.show({ progress: 0.65 });
					}, 2500);
					setTimeout(() => {
						this.indicator.show({ progress: 0.85 });
					}, 4000);
					setTimeout(() => {
						this.indicator.show({ progress: 0.99 });
					}, 4500);
					setTimeout(() => {
						this.indicator.hide();
					}, 5000);
				}
	}

	// mounted(){

	//     loader.show(options); // options is optional

	//     // Do whatever it is you want to do while the loader is showing, then

	//     // loader.hide();
	// }
}
