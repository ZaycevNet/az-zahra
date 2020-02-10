// local mixins

module.exports = {
	data(){
			return {
				initContentPreloader: true,

				rendering0: true,
				rendering1: true,
				rendering2: true,
				rendering3: true,
				rendering4: true,
				rendering5: true,
				rendering6: true,
				rendering7: true,
				rendering8: true,
				rendering9: true,
			}
	},
	methods: {
		onLoaded_Rendering(index, duration) {

			this.statusbar.setNavigationBarColor("white");
			this.statusbar.setStatusBarColor("#28ADAA");

			setTimeout(() => {
				this.initContentPreloader = false;
				
				this['rendering'+index] = false
			}, duration * (index + 1));
		}
	},
}
