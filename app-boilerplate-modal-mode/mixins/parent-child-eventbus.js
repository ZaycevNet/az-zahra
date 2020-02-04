// local mixins

const Vue = require('nativescript-vue');

module.exports = {
	data(){
			return {
				// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				// untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
				// untuk mengetahui jika parent sedang memanggil event
				bus: new Vue(),
				// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

			}
	},
	methods: {
		autoOpenFirstItem() {
      setTimeout(() => {
        if(this.index == 0) {
          // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
          // untuk mengakses event onTriggerParent() dari parent->child perlu mengirim bus.$event
          // untuk mengetahui jika parent sedang memanggil event
          this.bus.$emit('autoOpenFirstItem')
          // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }
      }, 100);
		},
	},
}
