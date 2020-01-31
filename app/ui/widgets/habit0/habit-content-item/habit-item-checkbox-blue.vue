
<template>
	<StackLayout>
		<GridLayout @tap="onGridLayout" columns="*,40%" rows="*" height="auto" padding="15 5">
			<Label textAlignment="left"  paddingLeft="10" fontSize="16px" verticalAlignment="middle" :text="description" textWrap="true" col="0"/>
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
</StackLayout>
</template>

<script>

export default {
	props: {
		description: {
			default: "Merawat alat milik sendiri, orang lain, atau umum",
			type: String,
		},
		checked: {
			default: true,
			type: Boolean,
		},
		score: {
			default: "", //Math.round(Math.random()*15),
			// type: Number,
		}
	},
	data(){
		return {
			boxType: "default", // "circle" radio button suggested
			isChecked: this.checked,
			fillColor: this.checked ? "#2538AA" : "red",
		}
	},
	methods:{
		onCheckedChangeHandler(event){
			//vuex action
			console.log(event.value)
			this.fillColor = event.value ? "#2538AA" : "red";
		},
		onGridLayout(){
			this.isChecked = !this.isChecked
			this.fillColor = this.isChecked ? "#2538AA" : "red";
		}
	}
}

</script>
