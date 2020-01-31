

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
    <StackLayout backgroundColor="#2538AA" color="white">
        <GridLayout @tap="onTapBubble" columns="*,40%" rows="*" height="auto" padding="15 5">
            <Label textAlignment="left" fontWeight="bold" paddingLeft="10" fontSize="16px" verticalAlignment="left" text="description" textWrap="true" col="0" />
            <StackLayout ref="iconContainer" col="1" row="0" verticalAlignment="middle">
                <Label ref="icon" fontWeight="bold" fontSize="18px" textAlignment="center" :text="'ion-md-arrow-up' | fonticon" class="ion" />
            </StackLayout>
        </GridLayout>
    </StackLayout>

</template>

<script>

export default {
	props: ['visibility'],
	data(){
		return {
			iconDown: this.visibility,
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
