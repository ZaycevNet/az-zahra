<style scoped>

ActionBar,
.action-bar {
    background-color: #28ADAA;
    padding-left: 0px;
    android-elevation: 0;
}

.action-bar-title {
    text-align: left;
    font-size: 18px;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.action-bar-right {
    text-align: right;
    font-size: 18px;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.action-bar-icon {
    font-size: 35px;
    width: 30;
}

/* .fab-button {
  height: 50;
  width: 50;
  margin: 15;
  background-color: #ff4081;
  horizontal-align: right;
  vertical-align: bottom;
} */
</style>

<template>

<Page actionBarHidden="false">
    <ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <Ripple rippleColor="#28ADAA" @tap="onBack">
                <Label :text="'ion-ios-close' | fonticon" class="action-bar-icon ion" />
            </Ripple>
            <Label @tap="onBack" class="action-bar-title" text="Kembali" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <StackLayout @loaded="onLoaded_Rendering(0, 400)">
        <!-- jika menggunakan showModal, ini pengganti ActionBar -->
        <!-- <ModalActionbar @onBack="onBack" /> -->


        <GroupHeadlineSKM habit="SKM Kelompok" v-shadow="5" />

        <GridLayout ref="container" rows="*,auto" v-if="!rendering0" @loaded="onLoaded_Rendering(1, 250)" >

            <ScrollView ref="scroll" @scroll="onScroll" height="100%" v-if="!rendering1">
                <StackLayout  id="stackList" ref="stackList" paddingBottom="30">

                    <PageGroupSKM :items="get_group_skm_payload.skm_habit_sholat"  />
                    <PageGroupSKM :items="get_group_skm_payload.skm_habit_puasa"  />
                    <PageGroupSKM :items="get_group_skm_payload.skm_habit_zis"  />
                    <PageGroupSKM :items="get_group_skm_payload.skm_habit_adab"  />

                    <PageGroupSKM :items="get_group_skm_payload.skm_habit_berpikir"  />
                    <PageGroupSKM :items="get_group_skm_payload.skm_habit_membaca"  />
                    <PageGroupSKM :items="get_group_skm_payload.skm_habit_tadarus"  />
                    <PageGroupSKM :items="get_group_skm_payload.skm_habit_majelis"  />

                    <PageGroupSKM :items="get_group_skm_payload.skm_habit_organisasi"  />

                    <!-- <ActivityIndicator ref="indicator" color="#28ADAA" :busy="busy" @busyChange="onBusyChange" /> -->
                </StackLayout>
            </ScrollView>

            <!-- <Fab @tap="" rowSpan="2" icon="~/assets/icons/baseline_add_white.png" rippleColor="#f1f1f1" class="fab-button"></Fab> -->

        </GridLayout>
        <ContentPreloader v-if="rendering0 && initContentPreloader" />
    </StackLayout>
</Page>

</template>

<script>
const delayrendering = require("@/mixins/delayrendering");
import {
    Color
}
from 'tns-core-modules/color';

export default {
    mixins: [delayrendering],
    data() {
        return {
            busy: false,
            // renderingChild: 5,

            // itemList: function() {
            //     let n = [];
            //     for (var i = 0; i < 30; i++) {
            //         n.push(i + 1);
            //     }
            //     return n;
            // }(),
        }
    },
    methods: {
        onBusyChange(event) {
          console.log(event.value)
        },
        onScroll(args) {

              // console.log("scrollView.height: " + args.object.getActualSize().height);
              // console.log("scrollView.stackList.height: " + (args.object.getViewById("stackList").getActualSize().height - args.object.getActualSize().height));

              // console.log("scrollX: " + args.scrollX);
              // console.log("scrollY: " + args.scrollY);
              // console.log("scrollY 2: " + args.object.getViewById("stackList").getLocationRelativeTo(args.object).y )

              if(args.scrollY >= (args.object.getViewById("stackList").getActualSize().height - args.object.getActualSize().height)) {
                this.busy = true;
                setTimeout(() => {
                  this.busy = false;

                  // let n = [];
                  // for (var i = 0; i < 30; i++) {
                  //     n.push(i + 1);
                  // }
                  // this.itemList.push(n);

                }, 1000);
              }

              // this.afterScroll(args.object, args.object.getViewById("stackList"))

        },

        afterScroll(scroll, stack) {
            console.log("Scrolling Done");

            // Get size of the scrollview
            // tinggi viewport dari ScrolLView
            let scrollHeight = scroll.getActualSize().height;
            console.log("Scroll Height: " + scrollHeight);

            // mengukur tinggi semua kontent di dalam ScrolLView
            // bisa menyebabkan error kode dibawah ini klu tidak salah

            // let inside_scrollview_content_height = this.scroll.scrollableHeight
            // let a = this.page.getViewById("scrollList");
            // setTimeout(() => {
            //   console.log("--->" + a.scrollableHeight + " " + a.effectiveHeight + " " + a.verticalOffset+" "+a);
            // }, 400)


            // Check each item in the ScrollView and see if it's in the visible bounds
            stack.eachChildView((c) => {
                let l = (c);

                // Get the height of the UI elements in the scrollview
                let halfHeight = l.getActualSize().height / 2;

                // Get the UI element location RELATIVE TO the scrollview
                let relativeY = c.getLocationRelativeTo(scroll).y;

                // console.log(`X ${ l.text }: ${relativeY}`, halfHeight);

                // Here's the logic for "shown"/"not shown"
                // In this example...
                // Element is considered "shown" if at least HALF of element is visible (on top or bottom of scrollview)
                if (relativeY > (halfHeight * -1) && relativeY < (scrollHeight - halfHeight)) {
                    // We'll change color when item is shown/not shown, but here is
                    // where you could do other things like play/pause video

                    // di dalam viewport ScrollView
                    l.backgroundColor = new Color("green");
                } else {
                    // di luar viewport ScrollView
                    l.backgroundColor = new Color("blue");
                }

                return true;
            });
        },


        onBack() {
              new Promise(resolve => {
                  this.rendering0 = true;
                  this.rendering1 = true;
                  resolve();
              }).then(result => {
                  this.$navigateBack();
                  // this.$modal.close("Aku Pulang")
              });
            },
            onItemTap({
                item
            }) {
                console.log(`Tapped on ${item.name}`);
            },
    },
    mounted() {

        const application = require('tns-core-modules/application');
        application.android.on('activityBackPressed', args => {
            new Promise(resolve => {
                this.rendering0 = true;
                this.rendering1 = true;
                resolve();
            }).then(result => {
                this.$navigateBack();
                // this.$modal.close("Aku Pulang")
            });

            args.cancel = true //

        })

        // this.statusbar.setStatusBarColor("#28ADAA");
    },
}

</script>
