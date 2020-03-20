module.exports = {
	methods: {
		onBack() {
				new Promise(resolve => {
		        this.rendering0 = true;
            this.rendering1 = true;
						this.rendering2 = true;
            this.rendering3 = true;
						this.rendering4 = true;
            this.rendering5 = true;
						this.rendering6 = true;
            this.rendering7 = true;
						this.rendering8 = true;
            this.rendering9 = true;
						resolve(this.$store.dispatch("setCurrentPath", ""));
				}).then(result => {
						this.$navigateBack();
						// this.$modal.close("Aku Pulang")
				});
		},
		onBackAlert(){
			const vm = this;

			var dialogs = require("tns-core-modules/ui/dialogs");
			dialogs.confirm({
					title: "Perhatian",
					message: "Data perubahan yang belum disimpan akan hilang saat halaman ini ditutup",
					okButtonText: "Simpan",
					cancelButtonText: "Mengerti",
					neutralButtonText: "Biarkan Hilang"
			}).then(function (result) {
					// result argument is boolean

					console.log("Dialog result: " + result);
					if(result == undefined) {
							// TETAP DITUTUP

							vm.rendering0 = true;
	            vm.rendering1 = true;
							vm.rendering2 = true;
	            vm.rendering3 = true;
							vm.rendering4 = true;
	            vm.rendering5 = true;
							vm.rendering6 = true;
	            vm.rendering7 = true;
							vm.rendering8 = true;
	            vm.rendering9 = true;

							vm.$store.dispatch("setCurrentPath", "");

					}

			});

		},
		gotoPage(params) {
			if(this.$store.getters.getCurrentPath.path == params.path) {
				this.showToast("Halaman yang sama")
				return
			};

			const options = params.options ? params.options : { transition: 'fade' };

			// curl (same as curlUp) (iOS only)
			// curlUp (iOS only)
			// curlDown (iOS only)
			// explode (Android Lollipop(21) and up only)
			// fade
			// flip (same as flipRight)
			// flipRight
			// flipLeft
			// slide (same as slideLeft)
			// slideLeft
			// slideRight
			// slideTop
			// slideBottom

			new Promise(resolve => {
					resolve(this.$store.dispatch("setCurrentPath", params));
			}).then(result => {
					this.$navigator.navigate(params.path,	options)
			});
		},

		// NAVIGATOR 1: data dikirim ke store navigator, dicek apakah halaman sudah dibuka atau belum
		// gotoPageDrawer(params) {
		// 	if(this.$store.getters.getCurrentPathDrawer.path == params.path) {
		// 		this.showToast("Halaman yang sama")
		// 		return
		// 	};
		// 	this.$store.dispatch("setCurrentPathDrawer", params)
		// },

		// NAVIGATOR 3: setelah drawer ditutup, lalu pindah halaman yang dituju sesuai store navigator
		// changePage(params) {
		// 	const options = params.options ? params.options : { transition: 'fade' };
		//
		// 	// curl (same as curlUp) (iOS only)
		// 	// curlUp (iOS only)
		// 	// curlDown (iOS only)
		// 	// explode (Android Lollipop(21) and up only)
		// 	// fade
		// 	// flip (same as flipRight)
		// 	// flipRight
		// 	// flipLeft
		// 	// slide (same as slideLeft)
		// 	// slideLeft
		// 	// slideRight
		// 	// slideTop
		// 	// slideBottom
		//
		// 	this.$navigator.navigate(params.path,	options)
		//
		// }
	},
}
