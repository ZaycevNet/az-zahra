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
    <!-- <ScrollView height="150" orientation="horizontal" >
      <StackLayout orientation="horizontal"> -->
        <!-- <DashboardHabitHarian v-for="(habit, index) in habits" :key="index" :habit="habit" /> -->
      <!-- </StackLayout>
    </ScrollView> -->


    <RadListView marginLeft="10" height="150" layout="staggered" :gridSpanCount="3" for="habit in habits" @itemTap="">
      <v-template>
        <LocalDashboardHabitHarian marginRight="10" :key="$index" :habit="habit" />
      </v-template>
    </RadListView>

</template>

<script>

// import Vue from 'nativescript-vue'
import LocalDashboardHabitHarian from "@/ui/widgets/dashboard/dashboard-habit-harian"

export default {
    props: ["items"],
    components: {
      LocalDashboardHabitHarian
    },
    data() {
        return {
          habits:[
            {
              title:"Sholat",
              image:"~/assets/icons/sholat.png",
              path:"/view-habit-sholat"
            },
            {
              title:"Adab Islami",
              image:"~/assets/icons/adab.png",
              path:"/view-habit-adab"
            },
            {
              title:"Berpikir Positif",
              image:"~/assets/icons/berpikir.png",
              path:"/view-habit-berpikir"
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
