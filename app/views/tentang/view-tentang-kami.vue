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
    font-size: 18px;
    padding-right: 16;
    background-color: #fff;
    vertical-alignment: middle;
}

.action-bar-icon {
    font-size: 35px;
    width: 30;
}

.logo {
  border-bottom-width: 1;
  border-bottom-color: #28ADAA;
  padding: 10 0;
}


</style>

<template>

<Page actionBarHidden="false">
    <ActionBar color="#28ADAA">
        <GridLayout width="100%" columns="auto, *, 60%">
            <Ripple rippleColor="#fff" @tap="onBack">
                <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            </Ripple>
            <Label @tap="onBack" class="action-bar-title" text="Tentang Kami" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <GridLayout rows="auto, *" @loaded="onLoaded_Rendering(0, 300)">
      <StackLayout row="0" class="logo" v-shadow="5" >
        <GridLayout color="#28ADAA" columns="auto, auto" horizontalAlignment="center" >
            <Image height="40" width="40" src="~/assets/logo_1.png" />
            <StackLayout width="auto" col="1" paddingLeft="10">
              <Label @tap="onBack" >
                <FormattedString>
                  <Span text="Az-Zahra" class="FB" fontWeight="bold" fontSize="20"/>
                </FormattedString>
              </Label>
              <Label @tap="onBack" >
                <FormattedString>
                  <Span text="Untuk Generasi Islami" class="CG" fontSize="13" />
                </FormattedString>
              </Label>
            </StackLayout>
        </GridLayout>
      </StackLayout>

        <WebView v-if="!rendering0" row="1" src="https://privacy.kerjaholic.com/term/indo" />

    </GridLayout>
</Page>

</template>

<script>

import {
    Color
}
from 'tns-core-modules/color';

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    data() {
            return {

            }
        },
        methods: {
            // onBack() {
            //   // this.$navigator.navigate("/view-profile-siswa");
            //   this.gotoPage({path:"/view-profile-siswa"});
            //   return
            //     new Promise(resolve => {
            //         resolve();
            //     }).then(result => {
            //         this.$navigateBack();
            //         // this.$modal.close("Aku Pulang")
            //     });
            // },
        },
        mounted() {
            // const application = require('tns-core-modules/application');
            // application.android.on('activityBackPressed', args => {
            //     new Promise(resolve => {
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
