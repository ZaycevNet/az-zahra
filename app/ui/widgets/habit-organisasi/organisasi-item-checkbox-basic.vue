
<template>
	<StackLayout backgroundColor="white" >
		<Ripple @tap="onGridLayout"  rippleColor="#28ADAA" >
		<GridLayout columns="*,40%" rows="*" height="auto" padding="15 5">
			<Label textAlignment="left"  paddingLeft="10" fontSize="14px" verticalAlignment="middle" :text="description" textWrap="true" col="0"/>
			<!-- <Label :text="myitems" /> -->
			<CheckBox
				:boxType="boxType"
				:fillColor="fillColor"
				text=""
				ref="checkbox"
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
	props: [ 'description', 'checked', 'items' ],
	data(){
		return {
			isLoading: false,
			boxType: "default", // "circle" radio button suggested
			isChecked: this.checked,
			fillColor: this.checked ? "#28BAAA" : "rgba(255,0,51,0.6)",
		}
	},
	methods:{
		isLoadingReset(){
			this.$store.commit("set_habit_organisasi_payload_description_checked", { code: this.items.code, value: this.isChecked});
			setTimeout(() => { this.isLoading = false }, 250);
		},
		onCheckedChangeHandler(event){
			if(this.isLoading) return;

			this.isChecked = !this.isChecked;
			this.fillColor = this.isChecked ? "#28BAAA" : "rgba(255,0,51,0.6)";

			this.isLoading = true;
			this.isLoadingReset();

		},
		onGridLayout(){
			if(this.isLoading) return;

			this.isChecked = !this.isChecked;
			this.fillColor = this.isChecked ? "#28BAAA" : "rgba(255,0,51,0.6)";

			this.isLoading = true;
			this.isLoadingReset();

		}
	}
}

</script>
