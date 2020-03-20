<style scoped>

ActionBar,
.action-bar {
    background-color: #fff;
    padding-left: 0px;
    android-elevation: 0;
}

.action-bar-title {
    text-align: left;
    font-size: 18px;
    padding-right: 16;
    background-color: #fff;
    vertical-alignment: middle;
}

.action-bar-right {
    text-align: right;
    font-size: 24;
    padding-right: 16;
    background-color: #fff;
    vertical-alignment: middle;
}

.action-bar-icon {
    font-size: 35px;
    width: 30;
}

.sub-salam {
  font-size: 16;
  text-alignment:center;
  margin-bottom: 10;
  color:#28ADAA;
}
.title {
  font-size: 30;
  font-weight: bold;
  text-alignment:center;
  margin-top: 10;
  color:#28ADAA;
}


</style>

<template>

<Page ref="page" actionBarHidden="false" backgroundColor="#28ADAA" backgroundSpanUnderStatusBar="true"  @loaded="onLoaded">

  <ActionBar ref="actionbar" color="#28ADAA" flat="true">
    <GridLayout width="100%" columns="auto, *, 60%">
        <Ripple rippleColor="#fff" @tap="onBack">
            <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
        </Ripple>
        <Label @tap="onBack" class="action-bar-title" text="Syarat & Ketentuan" col="1" />
        <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
    </GridLayout>
  </ActionBar>

<GridLayout ref="body" rows="*,auto"  @loaded="onLoaded_Rendering(0, 300)">

    <ScrollView ref="Container" @scroll="onScroll" scrollBarIndicatorVisible="false" :isUserInteractionEnabled="isUserInteractionEnabled">
        <StackLayout id="stackList" ref="stackList">

            <Gradient ref="Parallex" direction="top down" colors="#fff, #fff">

              <StackLayout v-if="!rendering0" >
                <Image src="~/assets/logo_1_besar.png" stretch="aspectFill" width="100" height="100" />
          			<Label class="title FB" text="Az-Zahra" />
          			<Label class="sub-salam CG" text="Untuk Generasi Islami" />
              </StackLayout>

            </Gradient>

            <GridLayout rows="*,auto" columns="*" backgroundColor="white" ref="content" height="1000" paddingBottom="0">
            <!-- <StackLayout backgroundColor="white" ref="content" height="1000" paddingBottom="35"> -->

              <ViewContent v-if="!rendering0" @onBubbleParallex="onBubbleParallex" :bus="bus" paddingBottom="30"/>

            </GridLayout>

        </StackLayout>
    </ScrollView>

      <Fab @tap="onScrollTop" ref="fabButton" rowSpan="2" icon="~/assets/icons/scroll-to-top.png" rippleColor="#f1f1f1" class="fab-button"></Fab>

</GridLayout>
</Page>

</template>

<script>
const permissions = require("nativescript-permissions");

import ViewContent from "./view-syarat-ketentuan-content"

import { AndroidData, ShapeEnum } from "nativescript-vue-shadow";

const Vue = require('nativescript-vue');

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
        components: {
          ViewContent
        },
        data() {
            return {
              shadowCustom: {
                  elevation: 25,
                  shape: ShapeEnum.RECTANGLE,
                  bgcolor: 'white',
                  cornerRadius: 0
              },

              // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      				// untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
      				// untuk mengetahui jika parent sedang memanggil event
      				bus: new Vue(),
      				// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

              isUserInteractionEnabled: true,
              fotoProfile: "~/assets/images/best.bmp",
            }
        },
        watch: {
          isUserInteractionEnabled(val) {


            if(val) {
              this.$refs.fabButton.nativeView.animate({
                  translate: {
                      x: 0,
                      y: 100
                  },
                  opacity: 1
              })
              .then(() => {}, () => {});
            } else {
              this.$refs.fabButton.nativeView.animate({
                  translate: {
                      x: 0,
                      y: 0
                  },
                  opacity: 1
              })
              .then(() => {}, () => {});
            }
          }
        },
        mounted() {
            // const application = require('tns-core-modules/application');
            // application.android.on('activityBackPressed', args => {
            //
            //     new Promise(resolve => {
            //         // this.rendering0 = true;
            //         resolve();
            //     }).then(result => {
            //         this.$navigateBack();
            //         // this.$modal.close("Aku Pulang")
            //     });
            //
            //     args.cancel = true //
            // })

        },
        methods: {
            // onBack(){
            //   const vm = this;
            //
            //   var dialogs = require("tns-core-modules/ui/dialogs");
            //   dialogs.confirm({
            //       title: "Perhatian",
            //       message: "Data perubahan yang belum disimpan akan hilang saat halaman profile guru ini ditutup",
            //       okButtonText: "Simpan",
            //       cancelButtonText: "Mengerti",
            //       neutralButtonText: "Biarkan Hilang"
            //   }).then(function (result) {
            //       // result argument is boolean
            //
            //       console.log("Dialog result: " + result);
            //       if(result == undefined) {
            //           // TETAP DITUTUP
            //       }
            //
            //   });
            //
            // },


            onScrollTop() {

                this.$refs.Container.nativeView.scrollToVerticalOffset(0, true)
                this.isUserInteractionEnabled = true;

                this.bus.$emit('onEmitFromParent');
                // this.$refs.fabButton.nativeView.animate({
                //     translate: {
                //         x: 0,
                //         y: 100
                //     },
                //     opacity: 1
                // })
                // .then(() => {}, () => {});
            },

            onBubbleParallex(val){
              this.isUserInteractionEnabled = val;
            },
            onScroll(args) {

                const scrollView = this.$refs.Container.nativeView

                // if the offset is less than the height of the header.
                if (scrollView.verticalOffset < this.$refs.Parallex.nativeView.getActualSize().height) {

                    this.onScrollParallex(scrollView.verticalOffset / 2);
                    // this.bus.$emit('onScrollParent', this.scrollView.verticalOffset / 2)
                }

                // BOTTOM
                if(args.scrollY >= (args.object.getViewById("stackList").getActualSize().height - args.object.getActualSize().height)) {

                  // args.object.isUserInteractionEnabled = false;
                  this.isUserInteractionEnabled = false;

                  // this.$refs.fabButton.nativeView.animate({
                  //     translate: {
                  //         x: 0,
                  //         y: 0
                  //     },
                  //     opacity: 1
                  // })
                  // .then(() => {}, () => {});
                }

                // console.log(args.scrollY, args.object.getViewById("stackList").getActualSize().height / 4)

                if(args.scrollY <= (args.object.getViewById("stackList").getActualSize().height - args.object.getActualSize().height) - 5) {
                  // this.$refs.fabButton.nativeView.animate({
                  //     translate: {
                  //         x: 0,
                  //         y: 100
                  //     },
                  //     opacity: 1
                  // })
                  // .then(() => {}, () => {});
                }
            },
            onScrollParallex(offset) {
                // console.log('onScrollParent', offset)
                const scrollView = this.$refs.Container.nativeView

                const Parallex = this.$refs.Parallex.nativeView

                if (scrollView.ios) {
                    // iOS adjust the position with an animation to create a smother scrolling effect.
                    Parallex.animate({
                        translate: {
                            x: 0,
                            y: offset
                        }
                    }).then(() => {}, () => {});
                } else {
                    // Android, animations are jerky so instead just adjust the position without animation.
                    Parallex.translateY = Math.floor(offset);
                }
            },

            onLoaded(args) {


                    this.$refs.fabButton.nativeView.translateY = 100;

                    setTimeout(() => {
                        // console.log(this.$refs.Parallex.nativeView.getActualSize().height);
                        // console.log(this.$refs.page.nativeView.getActualSize().height);
                        // console.log(this.$refs.content.nativeView.getActualSize().height);
                        // console.log(this.$refs.actionbar.nativeView.getActualSize().height);

                        this.$refs.content.nativeView.height = (this.$refs.page.nativeView.getActualSize().height - this.$refs.actionbar.nativeView.getActualSize().height)
                    }, 200)
                },
        }
};


</script>
