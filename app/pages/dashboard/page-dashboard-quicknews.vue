<template>
    <!-- @touch="onTouch" @pan="onPan" @swipe="onSwipe"  -->
    <StackLayout>

        <GridLayout height="300">
            <Carousel ref="myCarousel" debug="false" height="auto"
              width="100%" color="white"
              :selectedPage="selectedPage"
              @tap="onTap"
              @pageChanged="onPageChanged"
              @pageTapped="onPageTapped"
              android:indicatorAnimation="slide" indicatorColor="rgba(255,0,51,0.6)" indicatorColorUnselected="pink" indicatorOffset="0,15" showIndicator="true">

                <CarouselItem v-for="(item, i) in myData" :key="i" verticalAlignment="middle" @tap="">
                      <CardView elevation="15" radius="15" margin="0 5 35 5">
                        <!-- <DashboardQuicknewsCardSurat /> -->
                        <v-component :is="item" />
                      </CardView>
                </CarouselItem>

            </Carousel>
        </GridLayout>

    </StackLayout>

</template>

<script>
  // const carousel = require("nativescript-carousel");
  // import { isAndroid, isIOS } from 'tns-core-modules/platform';
  export default {
    data() {
      return {
        autoScroll: null,
        selectedPage: 0,
        myData:["DashboardQuicknewsCardSurat","DashboardQuicknewsCardHadits","DashboardQuicknewsCardDoa"],
      }
    },
    computed: {
        hasItems() {
            return this.myData.length > 0
        }
    },
    watch: {
        async myData(to) {
            await this.$nextTick()
            this.$refs.myCarousel.nativeView.refresh();
        },
        'selectedPage': function(params) {
            // console.log('carousel', this.imageList)
            clearInterval(this.autoScroll)
            // console.log("stop");
            this.onAutoScroll()
        }
    },
    mounted() {
        this.onAutoScroll()
            // console.log(this.types)
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


      onAutoScroll() {
          this.autoScroll = setTimeout(() => {
              this.selectedPage++
              if (this.selectedPage >= this.myData.length) {
                  this.selectedPage = 0
              }
              // console.log("run");
          }, 5000);
      },
      onPageChanged(args) {
          var changeEventText = 'onPageChanged: ' + args.index;
          // console.log(changeEventText);
          this.selectedPage = args.index
      },
      onPageTapped(args) {
          // console.log('Scrolling: ' + args.state.offset + ' onPageTapped');
      },
      onTap() {
          console.log('onTap')
          // this.selectedPage = 0
      },
    }
    // computed: {
    //     hasItems () {
    //         return this.myData.length > 0
    //     }
    // },
    // watch: {
    //     async myData(to) {
    //         await this.$nextTick()
    //         this.$refs.myCarousel.nativeView.refresh();
    //     },
    // },
    // methods: {
    //
    //
    //   myChangePageEvent(args) {
    //     var changeEventText = 'Changed to slide: ' + (args.index+1);
    //     console.log(changeEventText);
    //   },
	  //   myTapPageEvent: function(args) {
    //     console.log('Tapped page: ' + this.$refs.myCarousel.nativeView.selectedPage);
    //   },
    //   selectPageThree: function(args){
    //       this.$refs.myCarousel.nativeView.selectedPage = 2;
    //   },
    //   addNewPage: function(args){
    //     let itemList = [...this.myData];
    //       var pagenr = this.myData.length + 1;
    //       var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    //       itemList.push({ title: `Slide ${pagenr}`, color: color, image: '' });
    //       console.log('push item, update array');
    //       this.myData = itemList;
    //
    //       this.$refs.myCarousel.nativeView.selectedPage = this.myData.length-1;
    //   }
    // }
  }
</script>

<style scoped>
  Page{
    background: linear-gradient(-45deg, #1d976c, #93f9b9);
  }
</style>
