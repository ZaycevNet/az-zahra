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
            <Ripple rippleColor="#28ADAA">
                <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            </Ripple>
            <Label @tap="onBack" class="action-bar-title" text="Kelompok" col="1" />
            <Label class="action-bar-right" text="1/2" col="2" />
        </GridLayout>
    </ActionBar>

    <StackLayout @loaded="onLoaded_Rendering(0, 400)">
        <!-- jika menggunakan showModal, ini pengganti ActionBar -->
        <!-- <ModalActionbar @onBack="onBack" /> -->
        <GridLayout rows="*,50" >
            <JurnalMiniProfile verticalAlignment="top" habit="Hasil Kelompok" height="20%"/>

            <CardView row="0" elevation="15" radius="15" margin="75 10 10 10">

                <PageJurnal :items="get_group_hasil_payload.payload_anggota" />

            </CardView>

            <!-- Bottom Naviagtion -->
            <FlexboxLayout row="1" alignItems="center" flexDirection="row" id="bottom-nav">
                <StackLayout flexGrow="1" class="ico active">
                    <Label style="text-align:center;" class="icon" flexGrow="1"
                        text="&#xf237;" />
                    <Image class="ico-wrapper" />
                </StackLayout>
                <StackLayout flexGrow="1" class="ico">
                    <Label style="text-align:center;" class="icon" flexGrow="1"
                        text="&#xf19d;" />
                    <Image class="ico-wrapper" />
                </StackLayout>
                <Image src="~/App_Resources/icon-plus.png" style="margin:1 5 3 5;" />
                <StackLayout flexGrow="1" class="ico ">
                    <Label style="text-align:center;" class="icon" flexGrow="1"
                        text="&#xf19a;" />
                    <Image class="ico-wrapper" />
                </StackLayout>
                <StackLayout flexGrow="1" class="ico">
                    <Label style="text-align:center;" class="icon " flexGrow="1"
                        text="&#xf140;" />
                    <Image class="ico-wrapper" />
                </StackLayout>
            </FlexboxLayout>
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

        }
    },
    methods: {
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
    },
}

</script>
