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
            <Label @tap="onBack" class="action-bar-title" text="Timeline" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <GridLayout rows="*" @loaded="onLoaded_Rendering(0, 300)">

      <Gradient verticalAlignment="top" direction="top down" colors="#28ADAA, #28BAAA, #CDF6CE" color="white" height="25%" />

      <CardView row="0" v-if="!rendering0" elevation="15" radius="15" margin="10">

          <PageTimeline :items="get_group_hasil_payload.payload_anggota" />

      </CardView>

    </GridLayout>

</Page>
</template>

<script>

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    data() {
        return {

        }
    },
    methods: {
        // onBack() {
        //         new Promise(resolve => {
        //             resolve();
        //         }).then(result => {
        //             this.$navigateBack();
        //             // this.$modal.close("Aku Pulang")
        //         });
        //     },

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
    },
}

</script>
