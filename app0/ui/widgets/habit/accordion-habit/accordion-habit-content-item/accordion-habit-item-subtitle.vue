

<!-- <template>

<StackLayout>
    <GridLayout @tap="$emit('onBubbleTriggered')" columns="*,40%" rows="*" height="40">
        <StackLayout col="0" row="0" verticalAlignment="middle" backgroundColor="red">
            <Label paddingLeft="10" textAlignment="left" fontWeight="bold" fontSize="16px" text="description" />
        </StackLayout>
        <StackLayout col="1" row="0" verticalAlignment="middle">
            <Label fontWeight="bold" fontSize="16px" textAlignment="center" :text="'ion-md-hand' | fonticon" class="ion" textWrap="true" />
        </StackLayout>
    </GridLayout>
</StackLayout>
</template>  -->

<template>
	<Ripple rippleColor="white" @tap="onTapBubble">
    <StackLayout backgroundColor="#28BAAA" color="white">
        <GridLayout columns="*,40%,40%" rows="*" height="auto" padding="10 5">
            <Label textAlignment="left" fontWeight="bold" paddingLeft="10" fontSize="16px" verticalAlignment="left" :text="subtitle" textWrap="true" col="0" />
						<StackLayout ref="iconContainer" col="1" row="0" verticalAlignment="middle">
                <Label fontSize="16px" textAlignment="center" :text="counter" />
            </StackLayout>
            <StackLayout ref="iconContainer" col="2" row="0" verticalAlignment="middle">
                <Label ref="icon" fontWeight="bold" fontSize="18px" textAlignment="center" :text="'ion-md-arrow-dropup' | fonticon" class="ion" />
            </StackLayout>
        </GridLayout>
    </StackLayout>
	</Ripple>

</template>

<script>

export default {
	props: ['visibility', 'subtitle', 'description_length'],
	data(){
		return {
			iconDown: this.visibility,
		}
	},
	computed: {
		counter(){
			return this.$store.getters.get_item_only_checked(this.subtitle)+'/'+this.description_length;
		}
	},
	methods:{
		onTapBubble(){
			this.iconDown = !this.iconDown;
			this.$emit('onBubbleTriggered', this.iconDown)

			// non-reusable
			// this.$refs.icon.nativeView.animate({
			//     rotate: this.iconDown ? 180 : 0,
			//     duration: 250
			// });

			// reusable
			const rotation = this.$refs.icon.nativeView.createAnimation({
			    rotate: this.iconDown ? 0 : 180,
			    duration: 250
			});

			rotation.play()
			    .then(function () {
			    console.log("Animation finished");
			})
			    .catch(function (e) {
			    console.log(e.message);
			});

			const zoomIn = this.$refs.iconContainer.nativeView.createAnimation({
			    scale: { x: 1.5, y: 1.5},
			    duration: 100
			});
			const zoomOut = this.$refs.iconContainer.nativeView.createAnimation({
			    scale: { x: 1, y: 1},
			    duration: 100
			});

			zoomIn.play()
					.then(function () { return zoomOut.play(); })
			    .then(function () {
			    console.log("Animation finished");
			})
			    .catch(function (e) {
			    console.log(e.message);
			});

		}
	}
}

</script>
