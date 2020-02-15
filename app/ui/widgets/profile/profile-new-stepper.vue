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
	background-color: #28BAAA;
}

.segment-right {
	border-radius: 1;
	border-left-width: 1;
	border-color: #28BAAA;
	background-color: #28BAAA;
}

TextField {
    border-width: 0 0 1 0;
    border-bottom-color: white;
		padding: 8 0;
		color: black;
		text-align: center;
}

.label-stepper {
	text-align: center;
	width: 100%;
	font-size: 20;
	color: white;
	padding: 5 0;
}


Label {
  font-weight: normal;
}
</style>
<template>
	<GridLayout rows="25, auto, *" marginBottom="10" marginTop="5">
			<Label ref="label" row="1" :text="placeholder" opacity="0.4" fontSize="14" class="input" />

			<GridLayout ref="textField" row="1" class="segment" width="100%" rows="*" columns="*,*,*" >
				<StackLayout col="0" class="segment-left" horizontalAlignment="left" >
					<Ripple @tap="onTap('dec')" width="100%" rippleColor="#fff">
							<Label class="label-stepper" text="-"/>
					</Ripple>
				</StackLayout>
				<StackLayout col="1" >
					<TextField @textChange="onTextChange" @blur="onBlur" :text="value" keyboardType="number" :maxLength="maxLength" fontSize="14" />
				</StackLayout>
				<StackLayout col="2" class="segment-right" horizontalAlignment="right" >
					<Ripple @tap="onTap('inc')" width="100%" rippleColor="#fff">
							<Label class="label-stepper" text="+" />
					</Ripple>
				</StackLayout>
	    </GridLayout>

					<Label text="wajib diisi" horizontalAlignment="right" verticalAlignment="bottom" color="rgba(255,0,51,0.6)" fontSize="12" row="2" />

	</GridLayout>


</template>

<script>
export default {
	props: ["placeholder", "maxLength", "lowestNumber", "highestNumber"],
	data(){
		return {
			value: 0.1
		}
	},
	watch: {
		value(val) {
			if(val >= this.highestNumber) {
				// this.value = this.highestNumber;
			}
			if(val <= this.lowestNumber) {
				this.value = this.lowestNumber;
			}
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
	methods: {
		onTextChange(args) {
			this.value = args.object.text
			if(this.value >= this.highestNumber) {
				// this.value = this.highestNumber;
			} else if(this.value <= this.lowestNumber) {
				this.value = this.lowestNumber;
			}
		},
		onBlur(args){
			if(this.value >= this.highestNumber) {
				// this.value = this.highestNumber;
			} else if(this.value <= this.lowestNumber) {
				this.value = this.lowestNumber;
			}
			args.object.text = this.value;
		},
		onTap(val){
			switch (val) {
				case "inc":
					this.value ++;
					break;
				case "dec":
					this.value --;
					break;
			}
		}
	}
}
</script>
