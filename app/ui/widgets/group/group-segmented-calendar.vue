<style scoped>
.segment {
	border-radius: 2;
	border-width: 1;
	border-color: #28BAAA;
}

.segment-left {
	border-radius: 1;
	border-right-width: 1;
	border-color: #28BAAA;
}

Label {
  font-weight: normal;
}
</style>
<template>

					<GridLayout ref="textField" class="segment" @loaded="onLoad" width="100%" rows="*" columns="*,*" >
						<StackLayout col="0" class="segment-left" horizontalAlignment="left" >
							<Ripple @tap="onTap(0)" width="100%" rippleColor="#28BAAA">
								<StackLayout ref="segment0" backgroundColor="red" >
									<Label padding="10 0" horizontalAlignment="center" text="Rentang" />
								</StackLayout>
							</Ripple>
						</StackLayout>
						<StackLayout col="1" horizontalAlignment="right" >
							<Ripple @tap="onTap(1)" width="100%" rippleColor="#28BAAA">
								<StackLayout ref="segment1" backgroundColor="red">
									<Label padding="10 0" horizontalAlignment="center" text="Acak" />
								</StackLayout>
							</Ripple>
						</StackLayout>
			    </GridLayout>


</template>

<script>
export default {
	props: {
			placeholder: {
					type: String
			},
	},
	data(){
		return {
		  segmentedOptions: [
				{
					selected: true
				},
				{
					selected: false
				},
			],
		}
	},

	methods: {
		onLoad(){
			for (var i = 0; i < this.segmentedOptions.length; i++) {
				if(this.segmentedOptions[i].selected) {
					this.$refs['segment'+i].nativeView.backgroundColor = "#28BAAA";
					this.$refs['segment'+i].nativeView.color = "white";

					this.$emit('onBubbleEvent', i)

				} else {
					this.$refs['segment'+i].nativeView.backgroundColor = "white";
					this.$refs['segment'+i].nativeView.color = "#28BAAA";
				}
			}
		},
		onTap(val){
			for (var i = 0; i < this.segmentedOptions.length; i++) {
				this.segmentedOptions[i].selected = false;
				this.$refs['segment'+i].nativeView.backgroundColor = "white";
				this.$refs['segment'+i].nativeView.color = "#28BAAA";
			}
			this.$refs['segment'+val].nativeView.backgroundColor = "#28BAAA";
			this.$refs['segment'+val].nativeView.color = "white";

			this.$emit('onBubbleEvent', val)
		}
	}
}
</script>
