<template>
<Page>
	<!-- Tab2: Radiobuttons  -->
	<StackLayout ref="elem">
			<StackLayout class="p-10" v-for="(option, index) in radioOptions" :key="index">
					<StackLayout orientation="horizontal" verticalAlignment="center" >
							<CheckBox :id="'elem'+index" :checked="option.selected" @checkedChange="$refs.elem.nativeView.getViewById('elem'+index).checked !== option.selected &&  changeCheckedRadio(option, index)" class="checkbox" boxType="circle"></CheckBox>
							<StackLayout verticalAlignment="center">
									<Label :text="option.text" textWrap="true" @tap="changeCheckedRadio(option, index)"></Label>
							</StackLayout>
					</StackLayout>
			</StackLayout>
	</StackLayout>
</Page>
</template>

<script>
export default {
	data(){
		return {
		  radioOptions: [],
		}
	},
	watch: {
		radioOptions: {
			handler: function(after, before) {
				console.log(this.radioOptions[0].selected, this.radioOptions[1].selected, this.radioOptions[2].selected);
			},
			deep: true,
		}
	},
	mounted(){
	    // Plain ol' inline Array definition coming up :)
	    this.radioOptions = [
				{
					text: 'Radio option 1',
				  selected: false
				},
				{
					text: 'Radio option 2',
				  selected: false
				},
				{
					text: 'Radio option 3',
				  selected: false
				},
	    ];

	},
	methods: {
	  changeCheckedRadio(radioOption, index) {
	    radioOption.selected = !radioOption.selected;

	    if (!radioOption.selected) {
	      return;
	    }

	    this.radioOptions.forEach(option => {
	      if (option.text !== radioOption.text) {
	        option.selected = false;
	      }
	    });
	  }
	}
}
</script>
