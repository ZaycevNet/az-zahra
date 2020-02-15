<style scoped>
Label {
  font-weight: normal;
}
</style>
<template>
	<GridLayout rows="25, auto, *" marginBottom="10" marginTop="5">
			<Label ref="label" row="1" :text="placeholder" opacity="0.4"
					fontSize="14" class="input" />

    	<StackLayout ref="textField" row="1">
    			<GridLayout columns="*,*" rows="*">
    					<StackLayout v-for="(option, index) in radioOptions" :key="index" :col="index" row="0" orientation="horizontal" verticalAlignment="center" >
    							<CheckBox :id="'elem'+index" :checked="option.selected" :fillColor="fillColor" @checkedChange="$refs.textField.nativeView.getViewById('elem'+index).checked !== option.selected &&  changeCheckedRadio(option, index)" class="checkbox" boxType="circle">

                  </CheckBox>
    							<StackLayout verticalAlignment="center">
    									<Label :text="option.text" textWrap="true" @tap="changeCheckedRadio(option, index)"></Label>
    							</StackLayout>
    					</StackLayout>
    			</GridLayout>
    	</StackLayout>

  		<Label text="wajib diisi" horizontalAlignment="right" verticalAlignment="bottom" color="rgba(255,0,51,0.6)" fontSize="12" row="2" />

	</GridLayout>

</template>

<script>
export default {
  // props: {
  //     placeholder: {
  //         type: String
  //     },
  // },
  props:['placeholder','text'],
	data(){
		return {
			fillColor: this.text ? "#28BAAA" : "rgba(255,0,51,0.6)",
		  radioOptions: [
				{
					text: 'Laki-laki',
					value: 0,
					selected: this.text == 0 && this.text.length > 0 ? true : false
				},
				{
					text: 'Perempuan',
					value: 1,
					selected: this.text == 1 && this.text.length > 0 ? true : false
				},
			],
		}
	},
	mounted(){
		if(this.$refs.label == undefined) return;

		const label = this.$refs.label.nativeView;
		const textField = this.$refs.textField.nativeView;

		setTimeout(() => {
			label
					.animate({
							translate: {
									x: 0,
									y: -25
							},
							opacity: 1
					})
					.then(() => {
						// textField.borderBottomColor = "#28BAAA";
					}, () => {});
		},100)
	},
	watch: {
		radioOptions: {
			handler: function(after, before) {
				// console.log(this.radioOptions[0].selected, this.radioOptions[1].selected, this.radioOptions[2].selected);
			},
			deep: true,
		}
	},
	methods: {
	  changeCheckedRadio(radioOption, index) {
	    radioOption.selected = !radioOption.selected;

	    if (!radioOption.selected) {
	      return;
	    }

			this.fillColor = "#28BAAA";

	    this.radioOptions.forEach(option => {
	      if (option.text !== radioOption.text) {
	        option.selected = false;
	      }
	    });
	  }
	}
}
</script>
