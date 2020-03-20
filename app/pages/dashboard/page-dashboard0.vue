<style scoped>

.btn-next {
    width: 100%;
    border-radius: 10%;
    color: white;
    font-weight: bold;
    padding: 25px;
    background-color: #28ADAA;
    text-align: center;
    font-style: normal;
    /* border-width: 1; */
    border-color: #28ADAA;
    text-transform: capitalize;
    android-elevation: 0;
}

Carousel {
    background: linear-gradient(-45deg, #1d976c, #93f9b9);
}

</style>

<template>


<StackLayout
    height="250">
    <GridLayout row="0">
        <Carousel
            #carousel
            ref="myCarousel"
            ios:indicatorOffset="0,-10"
            ios:finite="true"
            ios:bounce="false"
            showIndicator="true"
            height="100%"
            indicatorAnimation="SWAP"
            indicatorColor="#66ccff"
            indicatorColorUnselected="#cceeff"
            :selectedPage="selectedPage"
            @tap="onTap"
            @pageChanged="onPageChanged"
            @pageTapped="onPageTapped"
            width="100%">

            <StackLayout v-for="item in myData">
                <CarouselItem
                    backgroundColor="green"
                    class="background-single-fixed"
                    height="100%">
                    <Label
                        class="h2 text-center"
                        color="red"
                        textWrap="true" text="item.title" />
                </CarouselItem>
            </StackLayout>

        </Carousel>
    </GridLayout>
</StackLayout>






    <!-- <GridLayout height="350"> -->
        <!-- <Carousel ref="myCarousel" debug="false" height="100%" width="100%"  :selectedPage="selectedPage" @pageChanged="onPageChanged" @pageTapped="onPageTapped" android:indicatorAnimation="slide" indicatorColor="blue" indicatorOffset="0,0" android:indicatorAlignment="top" showIndicator="true">

            <CarouselItem backgroundColor="red" v-for="(item, i) in myData" :key="i" verticalAlignment="middle" @tap="onTap">

                <Label text="123" /> -->

                <!-- <DashboardQuicknewsCardSurat height="250" /> -->

                <!-- <v-component :is="item" height="250" /> -->

            <!-- </CarouselItem>

        </Carousel> -->
    <!-- </GridLayout> -->


<!--
    <Label text="Indicator animation type: 'slide'" textWrap="true" ios:visibility="collapsed" margin="10,0,0,0" />

    <Button text="Select page 3" @tap="selectPageThree" margin="10,10,0,10" />
    <Button text="Add page" @tap="addNewPage" margin="10,10,0,10" />
    <Label text="Tap the button to add more pages" textWrap="true" margin="10,10,0,10" /> -->



<!-- <StackLayout>

    <DashboardQuicknewsCardSurat height="250" />
    <DashboardQuicknewsCardHadits height="250" />
    <DashboardQuicknewsCardDoa height="250" />

	</StackLayout> -->

</template>

<script>

const carousel = require("nativescript-carousel");
import {
    isAndroid, isIOS
}
from 'tns-core-modules/platform';
export default {
    data() {
            return {
              autoScroll: null,
              selectedPage: 0,
              myData:["DashboardQuicknewsCardSurat","DashboardQuicknewsCardHadits","DashboardQuicknewsCardDoa"],
              // myDataX: [{
              //     title: 'Slide 1',
              //     // color: '#b3cde0',
              //     image: '~/assets/images/01.jpg'
              // }, {
              //     title: 'Slide 2',
              //     // color: '#6497b1',
              //     image: '~/assets/images/02.jpg'
              // }, {
              //     title: 'Slide 3',
              //     // color: '#005b96',
              //     image: '~/assets/images/03.jpg'
              // }, {
              //     title: 'Slide 4',
              //     // color: '#03396c',
              //     image: '~/assets/images/04.jpg'
              // }],
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
                console.log("stop");
                this.onAutoScroll()
            }
        },
        mounted() {
            // this.onAutoScroll()
                // console.log(this.types)
        },
        methods: {
          onAutoScroll() {
              this.autoScroll = setTimeout(() => {
                  this.selectedPage++
                  if (this.selectedPage >= this.myData.length) {
                      this.selectedPage = 0
                  }
                  console.log("run");
              }, 5000);
          },
          onPageChanged(args) {
              var changeEventText = 'onPageChanged: ' + args.index;
              console.log(changeEventText);
              this.selectedPage = args.index
          },
          onPageTapped(args) {
              console.log('Scrolling: ' + args.state.offset + ' onPageTapped');
          },
          onTap() {
              console.log('onTap')
              // this.selectedPage = 0
          },
                // myChangePageEvent(args) {
                //     var changeEventText = 'Changed to slide: ' + (args.index + 1);
                //     console.log(changeEventText);
                // },
                // myTapPageEvent: function(args) {
                //     console.log('Tapped page: ' + this.$refs.myCarousel.nativeView.selectedPage);
                // },
                // selectPageThree: function(args) {
                //     this.$refs.myCarousel.nativeView.selectedPage = 2;
                // },
                // addNewPage: function(args) {
                //     let itemList = [...this.myData];
                //     var pagenr = this.myData.length + 1;
                //     var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                //     itemList.push({
                //         title: `Slide ${pagenr}`,
                //         color: color,
                //         image: ''
                //     });
                //     console.log('push item, update array');
                //     this.myData = itemList;
                //
                //     this.$refs.myCarousel.nativeView.selectedPage = this.myData.length - 1;
                // }
        }
}

</script>
