<style scoped>

.subtitle-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

/* .full-border-last-item {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
    border-top-width: 0;
    padding-bottom: 15;
} */


/* .off-top-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
} */

.off-bottom-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
}


/* .off-top-bottom-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
    border-bottom-width: 0;
} */

</style>

<template>

<StackLayout padding="10 10 10 10" marginBottom="65" @loaded="onLoaded_Rendering(0, 250)">

    <MembacaNewSubtitle ref="subtitle" class="subtitle-border" />

    <StackLayout v-if="!rendering0" @loaded="onLoaded_Rendering(1, 250)" class="off-bottom-border" padding="10 15 10 15">
        <MembacaNewSegmented width="100%" placeholder="Kategori" />
        <MembacaNewDropdownFloatLabel />
        <!-- <GridLayout columns="*,*" rows="*">
            <MembacaNewTimepicker col="0" width="45%" horizontalAlignment="left" placeholder="Waktu Mulai" />
            <MembacaNewTimepicker col="1" width="50%" placeholder="Waktu Selesai" />
        </GridLayout> -->
        <MembacaNewDatepicker placeholder="Tanggal" />
        <MembacaNewTextfield placeholder="Topik" />
        <MembacaNewTextfield placeholder="Tempat" />
        <MembacaNewRadio placeholder="Durasi" />
        <MembacaNewTextview placeholder="Rangkuman" />
    </StackLayout>

</StackLayout>

</template>

<script>

import Vue from 'nativescript-vue'

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    data() {
        return {
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
            // untuk mengetahui jika parent sedang memanggil event
            bus: new Vue(),
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }
    },
    // computed: {
    //     items() {
    //         return this.get_habit_membaca_payload;
    //     }
    // },
    methods: {
        onNext() {
            // console.log(this.$refs.dataform.nativeView)
            console.log('onSubmit')
                // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                // untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
                // untuk mengetahui jika parent sedang memanggil event
            this.bus.$emit('onSubmitParent')
                // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        },
    }
}

</script>
