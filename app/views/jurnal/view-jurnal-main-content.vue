<style scoped>


</style>

<template>

    <StackLayout height="100%" backgroundColor="rgba(100,100,100,0)" @loaded="onLoaded_Rendering(0, 300)">
        <!-- jika menggunakan showModal, ini pengganti ActionBar -->

        <GridLayout rows="*" v-if="!rendering0">
            <!-- <JurnalMiniProfile verticalAlignment="top" habit="Hasil Kelompok" height="20%"/> -->

            <CardView row="0" elevation="15" radius="15" margin="75 10 15 10">

                <PageJurnal :items="get_group_hasil_payload.payload_anggota" />

            </CardView>

        </GridLayout>
        <ContentPreloader v-if="rendering0 && initContentPreloader" />
    </StackLayout>

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
        // onBack() {
        //         new Promise(resolve => {
        //             this.rendering0 = true;
        //             this.rendering1 = true;
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
        //         this.rendering0 = true;
        //         this.rendering1 = true;
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
