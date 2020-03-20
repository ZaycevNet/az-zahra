
<template>
	<StackLayout backgroundColor="white" @loaded="onEnabledCheckbox">
		<GridLayout columns="*,40%" rows="*" height="auto" padding="5 5">
			<Label textAlignment="left" fontWeight="none"  paddingLeft="10" fontSize="14px" verticalAlignment="middle" :text="description" textWrap="true" col="0"/>

			<CheckBox
				:boxType="boxType"
				:fillColor="fillColor"
				text=""
				id="checkbox"
				ref="checkbox"
				horizontalAlignment="center"
				verticalAlignment="middle"
				:checked="isChecked"
				col="1"/>
		</GridLayout>
</StackLayout>
</template>

<script>

export default {
	props: [ 'description', 'checked'],
	data(){
		return {
			boxType: "default", // "circle" radio button suggested
			isChecked: this.checked,
			fillColor: this.checked ? "#28BAAA" : "rgba(255,0,51,0.6)",
		}
	},
	methods:{
		onEnabledCheckbox(args){
			// this.$refs.checkbox.nativeView.isEnabled = false;
			const page = args.object;
			let tapTestCheck = page.getViewById("checkbox");
	    tapTestCheck.isEnabled = !tapTestCheck.isEnabled;
	    // console.log(tapTestCheck);
		},
	}
}

</script>
