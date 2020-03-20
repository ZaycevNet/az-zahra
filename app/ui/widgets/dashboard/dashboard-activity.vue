<style scoped>
.item-activity {
	border-width: 1;
	border-color: rgba(40,186,170,0.25);
	border-left-width: 0;
	border-right-width: 0;
	border-top-width: 0;
}
</style>

<template>
 <!-- @touch="onTouch" @pan="onPan" @swipe="onSwipe" -->
<StackLayout>
    <CardView row="0" elevation="10" radius="15" margin="5 5 15 5">
			<GridLayout rows="60,*">

				<!-- Header -->
				<!-- rgb(64,204,155), rgb(5,175,170) -->
        <Gradient row="0" direction="top down" colors="#7CDD8D, #33C272" color="white" height="auto">

            <GridLayout columns="40,*" rows="50" margin="0" borderRadius="10" borderWidth="0" padding="5">

                <Label col="0" row="0" textWrap="true" verticalAlignment="middle" textAlignment="center" color="" fontSize="36" class="ion" :text="'ion-md-checkmark-circle-outline' | fonticon" fontWeight="normal"/>

                <StackLayout paddingLeft="5" col="1" row="0" verticalAlignment="middle">
                    <Label fontSize="14" fontWeight="bold" text="Aktivitas Masuk" />
                    <Label textWrap="true" fontWeight="normal" fontSize="12" text="Rakam jejak kebiasaan yang diisi oleh siswa" />
                </StackLayout>

            </GridLayout>

        </Gradient>

				<!-- Item -->
        <RadListView row="1" ref="listView" for="item in habit" @itemTap="" >
					<v-template>

						<GridLayout class="item-activity" columns="40,*" rows="40" margin="0" padding="5" >

								<StackLayout col="0" row="0" padding="5">
										<Image @tap="onFotoZoom(item.image)"  :src="item.image" stretch="aspectFill" width="100%" height="100%" borderRadius="50%" borderColor="rgba(255,255,255,0.5)" borderWidth="0"/>
								</StackLayout>

								<StackLayout paddingLeft="5" col="1" row="0" verticalAlignment="middle">
										<Label fontSize="13" fontWeight="normal" :text="item.nama" height="15" />
										<Label textWrap="false" fontWeight="normal" fontSize="10" :text="item.description" />
								</StackLayout>

						</GridLayout>

					</v-template>
				</RadListView>

			</GridLayout>
    </CardView>

</StackLayout>

</template>

<script>

export default {
    props: ["habit"],
    data() {
        return {
					// habits: function(){
					// 	return `Telah mengisi "Kebiasaan ${this.habit[Math.round(Math.random(9))].title}" pada 20-12-2020 20:19`
					// }()
        }
    },
		methods: {
			// onTouch(args) {
			//     console.log(
			//         "Touch point: [" + args.getX() + ", " + args.getY() +
			//         "] activePointers: " + args.getActivePointers().length);
			//
			// 		const { EventBus } = require('@/event-bus.js');
			// 		EventBus.$emit('onEventBus_isUserInteractionEnabled', true);
			// },
			// onPan(args) {
			// 	// alert("124");
			// 	console.log("Pan delta: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
			// 	// this.$emit("onBubbleSwipe", true)
			//
			// 	const { EventBus } = require('@/event-bus.js');
			// 	EventBus.$emit('onEventBus_isUserInteractionEnabled', true);
			//
			// },
			// onSwipe(args) {
			//
			// 	const { SwipeDirection } = require("ui/gestures");
			//
			// 	let direction = args.direction == SwipeDirection.down ? "down" :
			// 			args.direction == SwipeDirection.up ? "up" :
			// 			args.direction == SwipeDirection.left ? "left" : "right";
			//
			// 	console.log("Swipe!", direction);
			// 	console.log("Object that triggered the event: " + args.object);
			// 	console.log("View that triggered the event: " + args.view);
			// 	console.log("Event name: " + args.eventName);
			// 	console.log("Swipe Direction: " + args.direction);
			//
			// 	if(direction == "down" || direction == "up") {
			// 		const { EventBus } = require('@/event-bus.js');
			// 		EventBus.$emit('onEventBus_isUserInteractionEnabled', true);
			// 	}
			// 		// this.$emit("onBubbleSwipe", true)
			// 		// this.isUserInteractionEnabled = true;
			// },
		}
}

</script>
