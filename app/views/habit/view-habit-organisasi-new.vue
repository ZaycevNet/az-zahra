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

<Page actionBarHidden="false">
    <ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <Ripple rippleColor="#28ADAA" @tap="onBack">
                <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            </Ripple>
            <Label @tap="onBack" class="action-bar-title" text="Tambahkan Kebiasaan" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <StackLayout @loaded="onLoaded_Rendering(0, 300)">

        <!-- jika menggunakan showModal, ini pengganti ActionBar -->
        <!-- <ModalActionbar @onBack="onBack()" /> -->

        <HabitHeadlineNonTab habit="Dakwah & Berorganisasi" v-shadow="5" />

        <GridLayout rows="*,auto" columns="*">
            <ScrollView height="100%" v-if="!rendering0">
                <StackLayout>
                    <PageHabitOrganisasiNew :items="get_habit_organisasi_payload[0].payload_description"  />
                </StackLayout>
            </ScrollView>

            <StackLayout padding="0 10" rowSpan="2" verticalAlignment="bottom" v-shadow="shadowCustom">

                <ButtonRoundRippleSave margin="10 0" text="Simpan" icon="f046" @onBubbleEvent="onAxios"/>

                <!-- <Ripple @tap="onNext" rippleColor="white" margin="10 0">
                    <Label class="btn-next" text="Simpan" />
                </Ripple> -->
            </StackLayout>

        </GridLayout>

    </StackLayout>
</Page>

</template>

<script>

import {
    required, minLength, between
}
from 'vuelidate/lib/validators'
import {
    AndroidData, ShapeEnum
}
from "nativescript-vue-shadow";

// import { Statusbar } from "nativescript-plugin-statusbar";
// let status = new Statusbar();

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    // props: {
    //   routeProps: {
    //     default: () => ({
    //         origin: "before route", // pada dasarnya data inspeksi masih invalid (belum divalidasi oleh
    //     })
    //   }
    // },
    data() {
        return {
            shadowCustom: {
                elevation: 25,
                shape: ShapeEnum.RECTANGLE,
                bgcolor: 'white',
                cornerRadius: 0
            }
        }
    },
    methods: {
      onAxios(){
  			this.showLoadingIndicator();

  			// Axios Here
  			new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 500)
  			}).then(result => {
  				// this.showActionSnackbar();

          this.onBack();

  				this.showFeedback();
  				this.hideLoadingIndicator();
  			})

  		},
    },
    mounted() {
        // const application = require('tns-core-modules/application');
        // application.android.on('activityBackPressed', args => {
        //     new Promise(resolve => {
        //         // this.rendering0 = true;
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
