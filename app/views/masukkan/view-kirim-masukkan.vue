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

</style>

<template>

<Page actionBarHidden="false">
    <ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <Ripple rippleColor="#28ADAA" @tap="onBack">
                <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            </Ripple>
            <Label @tap="onBack" class="action-bar-title" text="Kirim Masukkan" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <GridLayout padding="10 15 10 15" rows="auto,auto,auto">
			<MasukkanNewTextfield row="0" placeholder="Tempat" />
			<MasukkanNewTextview row="1" placeholder="Tujuan" />

			<ButtonRoundRipple marginTop="30" row="2" />
    </GridLayout>
</Page>

</template>

<script>

import {
    Color
}
from 'tns-core-modules/color';

export default {
    data() {
            return {

            }
        },
        methods: {
            // onBack() {
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
