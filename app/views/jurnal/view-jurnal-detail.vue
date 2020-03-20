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
          <Ripple rippleColor="#28ADAA">
              <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
          </Ripple>
            <Label @tap="onBack" class="action-bar-title" text="Kelompok" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <StackLayout @loaded="onLoaded_Rendering(0, 300)">
        <!-- jika menggunakan showModal, ini pengganti ActionBar -->
        <!-- <ModalActionbar @onBack="onBack" /> -->

        <GroupHeadlineHasilDetail habit="Hasil Kelompok"  />

        <GridLayout ref="container" rows="*,auto" v-if="!rendering0" >

            <!-- <ScrollView ref="scroll" @scroll="onScroll" height="100%" v-if="!rendering1"> -->
                <StackLayout id="stackList" ref="stackList" paddingBottom="0">

                    <PageGroupHasilDetail :items="get_group_hasil_payload.payload_anggota"/>

                </StackLayout>
            <!-- </ScrollView> -->

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


        // onBack() {
        //       new Promise(resolve => {
        //           this.rendering0 = true;
        //           this.rendering1 = true;
        //           resolve();
        //       }).then(result => {
        //           this.$navigateBack();
        //           // this.$modal.close("Aku Pulang")
        //       });
        //     },
            onItemTap({
                item
            }) {
                console.log(`Tapped on ${item.name}`);
            },
    },
    mounted() {


        // const application = require('tns-core-modules/application');
        // application.android.on('activityBackPressed', args => {
        //     new Promise(resolve => {
        //         // this.rendering0 = true;
        //         // this.rendering1 = true;
        //         resolve();
        //     }).then(result => {
        //         this.$navigateBack();
        //         // this.$modal.close("Aku Pulang")
        //     });
        //
        //     args.cancel = true //
        //
        // })

        // this.statusbar.setStatusBarColor("#28ADAA");
    },
}

</script>
