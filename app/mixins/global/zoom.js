module.exports = {
	data(){
		return {
			isZoom: false,
		}
	},
	methods: {
		onFotoZoom(fotoProfile){

			const myProfile = fotoProfile ? fotoProfile : this.fotoProfile
			// this.statusbar.setStatusBarColorTransparent();
			// this.statusbar.setStatusBarColor("black");
			this.isZoom = true;
			this.$showModal(this.$views.PageProfileFotoZoomModal, {
				fullscreen:true,
				props: {
					image: myProfile
				}
			}).then(data => {
					console.log(data)
					this.isZoom = false;
			});
		},
	}
}
