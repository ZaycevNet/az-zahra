<template>
	<Ripple rippleColor="white" @tap="onTapBubble">
    <StackLayout backgroundColor="#28BAAA" color="white">
        <GridLayout columns="*,40%,40%" rows="*" height="auto" padding="10 5">
            <Label textAlignment="left" fontWeight="bold" paddingLeft="10" fontSize="16px" verticalAlignment="left" :text="judul" textWrap="true" col="0" />
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

const accordionItemFirstLoad = require("@/mixins/toast-accordion-item-first-load");

export default {
  mixins: [accordionItemFirstLoad],
	props: ['visibility', 'judul', 'index', 'vuex', 'bus'],
	data(){
		return {
			iconDown: this.visibility,
		}
	},
	computed: {
		counter(){
			return this['get_habit_'+this.vuex+'_payload_checked'](this.index)+'/'+this['get_habit_'+this.vuex+'_payload_length'](this.index);
			// return this.get_item_only_checked(this.judul)+'/'+this.description_length;
		}
	},
	mounted(){
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // untuk meng-trigger onSubmit() dari parent->child perlu mendengar bus.$event
    this.bus.$on('autoOpenFirstItem', this.onTapBubble)
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  },
	methods:{
		onTapBubble(){

			new Promise(resolve => {
        this.showToastAccordionChild();
        setTimeout(() => {
          resolve();
        }, 100);
      }).then(result => {

				this.iconDown = !this.iconDown;
				this.$emit('onBubbleTriggered', this.iconDown)

				if(this.$refs.icon == undefined) return;
	      if(this.$refs.iconContainer == undefined) return;

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

			})
		}
	}
}

</script>
