<template>
  	<Ripple rippleColor="white" @tap="onTapBubble">
    <StackLayout backgroundColor="#28ADAA" color="white">
        <GridLayout columns="*,40%,40%" rows="*" height="auto" padding="10 5">
            <Label textAlignment="left" fontWeight="bold" paddingLeft="10" fontSize="16px" verticalAlignment="left" text="Dibuat: 21-10-2020 21:30" textWrap="true" col="0" />
						<!-- <StackLayout col="1" row="0" verticalAlignment="middle">
              <Ripple rippleColor="#28BAAA" @tap="onEdit">
                <Label fontWeight="" fontSize="22" textAlignment="center" :text="'fa-pencil-square-o' | fonticon" class="fa"/>
              </Ripple>
            </StackLayout> -->
            <StackLayout ref="iconContainer" col="2" row="0" verticalAlignment="middle">
              <!-- <Ripple rippleColor="#28BAAA" @tap="onTapBubble" > -->
                <Label ref="icon" fontWeight="bold" fontSize="18px" textAlignment="center" :text="'ion-md-arrow-dropdown' | fonticon" class="ion" />
              <!-- </Ripple> -->
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
			return this.$store.getters.get_habit_organisasi_payload_description_checked+'/'+this.$store.getters.get_habit_organisasi_payload_description_length;
		}
	},
	methods:{
		onTapBubble(){
			this.iconDown = !this.iconDown;

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

      this.$emit('onBubbleTriggered', this.iconDown)

		}
	}
}

</script>
