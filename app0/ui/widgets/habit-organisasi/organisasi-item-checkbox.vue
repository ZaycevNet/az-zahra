
<template>
	<StackLayout backgroundColor="white">
		<Ripple rippleColor="#28ADAA" @tap="onGridLayout" >
		<GridLayout columns="*,40%" rows="*" height="auto" padding="15 5">
			<Label textAlignment="left"  paddingLeft="10" fontSize="14px" verticalAlignment="middle" :text="description" textWrap="true" col="0"/>
			<!-- <Label :text="myitems" /> -->
			<CheckBox
				:boxType="boxType"
				:fillColor="fillColor"
				text=""
				horizontalAlignment="center"
				verticalAlignment="middle"
				:checked="isChecked"
				@checkedChange="onCheckedChangeHandler"
				col="1"/>
		</GridLayout>
	</Ripple>
</StackLayout>
</template>

<script>

export default {
	// props: {
	// 	description: {
	// 		default: "Merawat alat milik sendiri, orang lain, atau umum",
	// 		type: String,
	// 	},
	// 	checked: {
	// 		default: true,
	// 		type: Boolean,
	// 	},
	// 	score: {
	// 		default: "", //Math.round(Math.random()*15),
	// 		// type: Number,
	// 	}
	// },
	props: [ 'description', 'checked', 'items' ],
	data(){
		return {
			boxType: "default", // "circle" radio button suggested
			isChecked: this.checked,
			fillColor: this.checked ? "#28BAAA" : "rgba(255,0,51,0.6)",
		}
	},
	watch: {
		isChecked(val) {

		}
	},
	methods:{
		onAxios(){
			this.showLoadingIndicator(this.description+". ");

			// Axios Here
			new Promise(resolve => {
				setTimeout(() => {

					this.$store.commit("set_habit_organisasi_payload_description_checked", { code: this.items.code, value: this.isChecked});

					resolve();
				}, 1000);
			}).then(result => {
				// this.showActionSnackbar();
				this.showFeedback();
				this.showErrorFancyAlert();

				setTimeout(() => {
					// this.hideSnackbar();
					// this.hideFeedback();

					// penempatan menyesuaikan algoritma axios
					// this.$store.dispatch('set_indicator_loading', false);
				}, 1500);

				// letakkan diakhir agar overlay terakhir hilang
				this.hideLoadingIndicator();
			})

		},
		onCheckedChangeHandler(event){
			if(this.$store.getters.get_indicator_loading) return;
			this.$store.dispatch('set_indicator_loading', true)

			this.isChecked = !this.isChecked;
			this.fillColor = this.isChecked ? "#28BAAA" : "rgba(255,0,51,0.6)";

			this.onAxios();
			//vuex action
			// console.log(event.value)
			// this.fillColor = event.value ? "#28BAAA" : "rgba(255,0,51,0.6)";
		},
		onGridLayout(){
			if(this.$store.getters.get_indicator_loading) return;
			this.$store.dispatch('set_indicator_loading', true)

			this.isChecked = !this.isChecked;
			this.fillColor = this.isChecked ? "#28BAAA" : "rgba(255,0,51,0.6)";

			this.onAxios();
		}
	}
}

</script>
