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
    font-size: 24;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.action-bar-icon {
    font-size: 35px;
    width: 30;
}

.btn-circle {
    width: 50;
    height: 50;
    border-radius: 25;
    border-width: 1;
    border-color: white;
    background-color: white;
    color: #28ADAA;
}

.btn-circle:active {
    background-color: rgb(255,255,255,0.5);
    border-color: rgb(255,255,255,0.5);
}

.click {
  background-color: white;
}

.click:active {
    background-color: rgb(255,255,255,0.5);
    border-color: rgb(255,255,255,0.5);
}

.btn-next {
    width: 100%;
    border-radius: 10%;
    color: white;
    font-weight: bold;
    padding: 25px;
    background-color: #28ADAA;
    text-align: center;
    /* margin-top: 20px; */
    /* margin-bottom: 20px; */
}
</style>

<template>

<Page ref="page" actionBarHidden="false" backgroundColor="#28ADAA" backgroundSpanUnderStatusBar="true"  @loaded="onLoaded">

  <ActionBar ref="actionbar" color="white" flat="true">
      <GridLayout width="100%" columns="auto, *, 60%">
          <Ripple rippleColor="#28ADAA" @tap="onBack" v-if="!isEdit">
              <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
          </Ripple>
          <Ripple rippleColor="#28ADAA" @tap="onCancel" v-else>
              <Label :text="'ion-ios-close' | fonticon" class="action-bar-icon ion" />
          </Ripple>

          <Label @tap="" class="action-bar-title" :text=" !isEdit ? 'Profile Siswa' : 'Ubah Profile Siswa'" col="1" />
          <Ripple rippleColor="#28ADAA" v-if="!isEdit" @tap="onEdit" col="2" >
            <Label class="action-bar-right fa" :text="'fa-pencil-square-o' | fonticon" />
          </Ripple>
      </GridLayout>
  </ActionBar>

<GridLayout ref="body" rows="*,auto">

    <ScrollView ref="Container" @scroll="onScroll" scrollBarIndicatorVisible="false" :isUserInteractionEnabled="isUserInteractionEnabled">
        <StackLayout id="stackList" ref="stackList">

            <Gradient ref="Parallex" direction="top down" colors="#28ADAA, #28BAAA">
                <GridLayout columns="*,150,*">

                    <StackLayout col="0" verticalAlignment="middle">
                        <Button @tap="onChangePasswordDialog" :text="'fa-key' | fonticon" class="btn-circle fa" />
                    </StackLayout>

                    <StackLayout col="1">
                        <Image @tap="onFotoZoom" ref="fotoProfile" :src="fotoProfile" stretch="aspectFill" borderRadius="75" borderWidth="5" borderColor="rgba(255,255,255,0.5)" width="150" height="150" />
                    </StackLayout>

                    <StackLayout col="2" verticalAlignment="middle">
                        <Button @tap="checkPermission"  :text="'fa-camera' | fonticon" class="btn-circle fa" />
                    </StackLayout>

                </GridLayout>

                <StackLayout horizontalAlignment="center" marginBottom="20">

                    <Label text="Dessy Indah Fitri" fontSize="18px" fontWeight="bold" textAlignment="center" color="white" paddingTop="15px" paddingLeft="10" paddingRight="10" paddingBottom="15px" />

                    <Label text="1201 Westlake Avenue, Suite 205, Seattle, WA 98121 USA" fontSize="12px" color="white" width="100%" textWrap="true" paddingLeft="50" paddingRight="50" textAlignment="center" />

                    <FlexboxLayout v-if="false" alignItems="flex-starts" horizontalAlignment="center" marginTop="20" >
                        <!-- Instagram -->
                        <Button :text="String.fromCharCode('0xf16d')" fontSize="20px" width="50" height="50" margin="10px" class="click fa" color="#28ADAA" backgroundColor="white" borderRadius="25%" borderColor="white" />
                        <!-- Twitter -->
                        <Button :text="String.fromCharCode('0xf099')" fontSize="20px" width="50" height="50" margin="10px" class="click fa" color="#28ADAA" backgroundColor="white" borderRadius="25%" borderColor="white" />
                        <!-- Facebook -->
                        <Button :text="String.fromCharCode('0xf09a')" fontSize="20px" width="50" height="50" margin="10px" class="click fa" color="#28ADAA" backgroundColor="white" borderRadius="25%" borderColor="white" />
                    </FlexboxLayout>

                </StackLayout>
            </Gradient>

            <GridLayout rows="*,auto" columns="*" backgroundColor="white" ref="content" height="1000" paddingBottom="0">
            <!-- <StackLayout backgroundColor="white" ref="content" height="1000" paddingBottom="35"> -->

              <ProfileSiswa @onBubbleParallex="onBubbleParallex" paddingBottom="30"/>

              <!-- <transition name="transition" v-if="isEdit" appear> -->
                <StackLayout ref="submitbutton" padding="0 10" rowSpan="2" verticalAlignment="bottom" v-shadow="shadowCustom" v-show="isEdit">
                    <Ripple rippleColor="white" margin="10 0" @tap="onSubmit">
                        <Label class="btn-next" text="Simpan" />
                    </Ripple>
                </StackLayout>
              <!-- </transition> -->
            <!-- </StackLayout> -->
            </GridLayout>

        </StackLayout>
    </ScrollView>

      <Fab @tap="onScrollTop" ref="fabButton" rowSpan="2" icon="~/assets/icons/scroll-to-top.png" rippleColor="#f1f1f1" class="fab-button"></Fab>

</GridLayout>
</Page>

</template>

<script>
const permissions = require("nativescript-permissions");

import ProfileSiswa from "./view-profile-siswa-content"

import PageProfileFotoZoomModal from "@/pages/profile/page-profile-foto-zoom-modal"

import Mediafilepicker from '@/mixins/global/mediafilepicker'

import {
    AndroidData, ShapeEnum
}
from "nativescript-vue-shadow";

export default {
  mixins:[Mediafilepicker],
        components: {
          ProfileSiswa
        },
        data() {
            return {
              shadowCustom: {
                  elevation: 25,
                  shape: ShapeEnum.RECTANGLE,
                  bgcolor: 'white',
                  cornerRadius: 0
              },

                isZoom: false,
                isEdit: false,

                isUserInteractionEnabled: true,
                fotoProfile: "~/assets/images/love.jpg",
            }
        },
        watch: {
          isUserInteractionEnabled(val) {
            if(this.isEdit) return
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
            // setTimeout(() => {
            //   this.$refs.Container.nativeView.scrollToVerticalOffset(this.$refs.Container.nativeView.scrollableHeight, true)
            // }, 2000)

            this.$refs.submitbutton.nativeView.translateY = 100;

            const application = require('tns-core-modules/application');
            application.android.on('activityBackPressed', args => {

                if(this.isZoom) {
                  return
                }

                new Promise(resolve => {
                    this.rendering0 = true;
                    resolve();
                }).then(result => {
                    this.$navigateBack();
                    // this.$modal.close("Aku Pulang")
                });

                args.cancel = true //
            })

        },
        methods: {
            onCancel(){
                const vm = this;
                this.showToast("data belum disimpan...")
                vm.$refs.submitbutton.nativeView.animate({
                    translate: {
                        x: 0,
                        y: 100
                    },
                    opacity: 1
                })
                .then(() => {

                  vm.isEdit = false;
                  vm.action_profile_siswa_is_edit(false);
                  vm.isUserInteractionEnabled = true;

                  vm.$refs.Container.nativeView.scrollToVerticalOffset(0, true)

                }, () => {});
            },
            onBack(){
              const vm = this;

              var dialogs = require("tns-core-modules/ui/dialogs");
              dialogs.confirm({
                  title: "Perhatian",
                  message: "Data perubahan yang belum disimpan akan hilang saat halaman profile siswa ini ditutup",
                  okButtonText: "Simpan",
                  cancelButtonText: "Mengerti",
                  neutralButtonText: "Biarkan Hilang"
              }).then(function (result) {
                  // result argument is boolean

                  console.log("Dialog result: " + result);
                  if(result == undefined) {
                      // TETAP DITUTUP
                  }

              });

            },
            onSubmit(){
              this.showLoadingIndicator();
              setTimeout(() => {
                this.hideLoadingIndicator();
                this.showActionSnackbar('👍 Sukses! Data berhasil disimpan...');
              }, 500);

              this.$refs.submitbutton.nativeView.animate({
                  translate: {
                      x: 0,
                      y: 100
                  },
                  opacity: 1
              })
              .then(() => {

                this.isEdit = false;
                this.action_profile_siswa_is_edit(false);
                this.isUserInteractionEnabled = true;

                this.$refs.Container.nativeView.scrollToVerticalOffset(0, true)

              }, () => {});

            },
            onEdit(){
              this.isEdit = true;
              this.action_profile_siswa_is_edit(true);
              this.isUserInteractionEnabled = false;

              this.$refs.fabButton.nativeView.animate({
                  translate: {
                      x: 0,
                      y: 100
                  },
              })

              this.$refs.submitbutton.nativeView.animate({
                  translate: {
                      x: 0,
                      y: 0
                  },
              })

              // scroll TO BOTTOM
              this.$refs.Container.nativeView.scrollToVerticalOffset(this.$refs.Container.nativeView.getViewById("stackList").getActualSize().height - this.$refs.Container.nativeView.getActualSize().height, true);

            },
            onFotoZoom(){
              // this.statusbar.setStatusBarColorTransparent();
              // this.statusbar.setStatusBarColor("black");
              this.isZoom = true;
              this.$showModal(PageProfileFotoZoomModal, {
                fullscreen:true,
                props: {
                  image: this.fotoProfile
                }
              }).then(data => {
        					console.log(data)
                  this.isZoom = false;
        			});
            },

            checkPermission() {
                permissions
                  .requestPermission(
                    [
                      // total_permission = 2
                      android.Manifest.permission.CAMERA,
                      android.Manifest.permission.READ_EXTERNAL_STORAGE,
                      android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
                    ],
                    "I really need all the permissions in the world!"
                  )
                  .then(result => {

                    // this.fotoProfile = this.pickImageRadImagePicker()[0].source;
                    this.onImageFilePicker();

                    // this.total_permission = 0;
                    // this.text =
                    //   "WooHoo you granted me all the permissions! " +
                    //   this.total_permission;
                    //
                    // if (this.total_permission <= 0) {
                    //   // ignite camera
                    //   const recorder = this.page.getViewById("recorderView");
                    //   recorder.stopRecording();
                    // }
                  })
                  .catch(result => {
                    // let count = 0;
                    // console.dir(result);
                    // for (let res in result) {
                    //   if (!result.hasOwnProperty(res)) {
                    //     continue;
                    //   }
                    //   if (result[res] === true) {
                    //     count++;
                    //     this.total_permission--;
                    //   }
                    // }
                    // this.text =
                    //   "Oops, I'm so sad, I was only granted " +
                    //   count +
                    //   " of " +
                    //   this.total_permission +
                    //   " permissions!";

          		  /*
                    alert(this.text);
                    if (this.total_permission <= 0) {
                      // ignite camera
                      setTimout(() => {
                        const recorder = this.page.getViewById("recorderView");
                        recorder.stopRecording();
                      }, 1000);
                    }
          		  */
                  });
              },
            onChangePasswordDialog(){
              var dialogs = require("tns-core-modules/ui/dialogs");
              let options = {
                  title: "Ganti Password",
                  message: "silahkan perbarui kata sandi jika diperlukan",
                  okButtonText: "Ganti Sekarang",
                  // cancelButtonText: "Batalkan",
                  neutralButtonText: "Batalkan",
                  userNameHint: "sandi lama",
                  passwordHint: "sandi baru",
                  userName: "",
                  password: ""
              };

              login(options).then((r) => {
                  console.log(r.result, r.userName);

                  if(r.result) {
                    this.showLoadingIndicator();
                    setTimeout(() => {
                      this.hideLoadingIndicator();
                      this.showActionSnackbar('👍 Sukses! Kata sandi berhasil diganti...');
                    }, 500);
                  } else {
                    this.showToast("batal...")
                  }
              });
            },
            onScrollTop() {
              if(this.isEdit) return


                this.$refs.Container.nativeView.scrollToVerticalOffset(0, true)
                this.isUserInteractionEnabled = true;
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
              if(this.isEdit) return

              this.isUserInteractionEnabled = val;
            },
            // onScrollNested(args) {
            //     console.log(args.scrollY)
            //     if(args.scrollY <= 0) {
            //         this.isUserInteractionEnabled = true;
            //     }
            // },
            onScroll(args) {
                if(this.isEdit) return

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
                        console.log(this.$refs.Parallex.nativeView.getActualSize().height);
                        console.log(this.$refs.page.nativeView.getActualSize().height);
                        console.log(this.$refs.content.nativeView.getActualSize().height);
                        console.log(this.$refs.actionbar.nativeView.getActualSize().height);

                        this.$refs.content.nativeView.height = (this.$refs.page.nativeView.getActualSize().height - this.$refs.actionbar.nativeView.getActualSize().height)
                    }, 200)
                },
        }
};


</script>
