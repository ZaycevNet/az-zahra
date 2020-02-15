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
	<GridLayout rows="25, auto, *" marginBottom="10" marginTop="5">
			<Label ref="label" row="1" :text="placeholder" opacity="0.4"
					fontSize="14" class="input" />

					<GridLayout ref="textField" row="1" class="segment" @loaded="onLoad" width="100%" rows="*" columns="*,*" >
						<StackLayout col="0" class="segment-left" horizontalAlignment="left" >
							<Ripple @tap="onTap(0)" width="100%" rippleColor="#28BAAA">
								<StackLayout ref="segment0">
									<Label padding="10 0" horizontalAlignment="center" text="Langsung" />
								</StackLayout>
							</Ripple>
						</StackLayout>
						<StackLayout col="1" horizontalAlignment="right" >
							<Ripple @tap="onTap(1)" width="100%" rippleColor="#28BAAA">
								<StackLayout ref="segment1">
									<Label padding="10 0" horizontalAlignment="center" text="Amil" />
								</StackLayout>
							</Ripple>
						</StackLayout>
			    </GridLayout>

					<!-- <Label text="wajib diisi" horizontalAlignment="right" verticalAlignment="bottom" color="rgba(255,0,51,0.6)" fontSize="12" row="2" /> -->

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
		},500)
	},
	methods: {
		onLoad(){
			for (var i = 0; i < this.segmentedOptions.length; i++) {
				if(this.segmentedOptions[i].selected) {
					this.$refs['segment'+i].nativeView.backgroundColor = "#28BAAA";
					this.$refs['segment'+i].nativeView.color = "white";
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

			this.$emit('onBubbleTap', val)
		}
	}
}
</script>
