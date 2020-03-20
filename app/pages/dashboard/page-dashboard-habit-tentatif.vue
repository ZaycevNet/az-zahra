<style scoped>

.left-border {
  /* border-top-width: 1; */
  /* border-left-width: 1; */
  border-color: white;
}

.right-border {
  /* border-top-width: 1; */
  /* border-right-width: 1; */
  border-color: white;
}

</style>

<template>

    <!-- @touch="onTouch" @pan="onPan" @swipe="onSwipe"  -->
    <ScrollView height="150" orientation="horizontal" >
      <StackLayout orientation="horizontal">
          <DashboardHabitTentatif v-for="(habit, index) in habits" :key="index" :habit="habit" />
      </StackLayout>
    </ScrollView>

</template>

<script>

// import Vue from 'nativescript-vue'

export default {
    props: ["items"],
    data() {
        return {
          habits:[
            {
              title:"Puasa",
              image:"~/assets/icons/puasa.png",
              path:"/view-habit-puasa"
            },
            {
              title:"ZIS",
              image:"~/assets/icons/zis.png",
              path:"/view-habit-zis"
            },
            {
              title:"Tadarus",
              image:"~/assets/icons/tadarus.png",
              path:"/view-habit-tadarus"
            },
            {
              title:"Membaca",
              image:"~/assets/icons/membaca.png",
              path:"/view-habit-membaca"
            },
            {
              title:"Organisasi",
              image:"~/assets/icons/organisasi.png",
              path:"/view-habit-organisasi"
            },
            {
              title:"Majelis Ilmu",
              image:"~/assets/icons/majelis.png",
              path:"/view-habit-majelis"              
            },
          ]
        }
    },

    methods: {
      // onTouch(args) {
      //     console.log(
      //         "Touch point: [" + args.getX() + ", " + args.getY() +
      //         "] activePointers: " + args.getActivePointers().length);
      //
      //     const { EventBus } = require('@/event-bus.js');
      //     EventBus.$emit('onEventBus_isUserInteractionEnabled', true);
      // },
      // onPan(args) {
      //   // alert("124");
      //   console.log("Pan delta: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
      //   // this.$emit("onBubbleSwipe", true)
      //
      //   const { EventBus } = require('@/event-bus.js');
      //   EventBus.$emit('onEventBus_isUserInteractionEnabled', true);
      //
      // },
      // onSwipe(args) {
      //
      //   const { SwipeDirection } = require("ui/gestures");
      //
      //   let direction = args.direction == SwipeDirection.down ? "down" :
      //       args.direction == SwipeDirection.up ? "up" :
      //       args.direction == SwipeDirection.left ? "left" : "right";
      //
      //   console.log("Swipe!", direction);
      //   console.log("Object that triggered the event: " + args.object);
      //   console.log("View that triggered the event: " + args.view);
      //   console.log("Event name: " + args.eventName);
      //   console.log("Swipe Direction: " + args.direction);
      //
      //   if(direction == "down" || direction == "up") {
      //     const { EventBus } = require('@/event-bus.js');
      //     EventBus.$emit('onEventBus_isUserInteractionEnabled', true);
      //   }
      //     // this.$emit("onBubbleSwipe", true)
      //     // this.isUserInteractionEnabled = true;
      // },
    }
}

</script>
