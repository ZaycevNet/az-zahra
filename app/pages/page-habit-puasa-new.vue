<style scoped>

.subtitle-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

.full-border-last-item {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
    border-top-width: 0;
    padding-bottom: 15;
}

/* .off-top-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
} */

.off-bottom-border {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-width: 0;
    border-top-width: 0;
}

.full-border-radius {
    border-width: 1;
    border-color: #28BAAA;
    border-radius: 5;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
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

    <PuasaNewSubtitle ref="subtitle" class="subtitle-border" />

    <StackLayout v-if="!rendering0" @loaded="onLoaded_Rendering(1, 250)" class="off-bottom-border" padding="10 15 10 15">

        <!-- alquran * iqra -->
        <!-- <PuasaNewSegmented @onBubbleTap="onBubbleTap" width="100%" placeholder="Kategori" /> -->

        <!-- alquran * iqra -->
        <!-- waktu -->
        <PuasaNewDropdownFloatLabel :items="items.jenis" />
        <!-- <GridLayout columns="*,*" rows="*">
            <PuasaNewTimepicker col="0" width="45%" horizontalAlignment="left" placeholder="Waktu Mulai" />
            <PuasaNewTimepicker col="1" width="50%" placeholder="Waktu Selesai" />
        </GridLayout> -->
        <!-- <PuasaNewRadio placeholder="Durasi" /> -->

        <!-- alquran -->
        <!-- <PuasaNewStepper v-show="jenis == 1" placeholder="Tingkat"  maxLength="1" lowestNumber="1" highestNumber="6"/> -->

        <!-- alquran -->
        <!-- <PuasaNewStepper v-show="jenis == 0" placeholder="Juz" maxLength="30" lowestNumber="1" highestNumber="30"/> -->
        <!-- <PuasaNewDropdownFloatLabelSurat v-show="jenis == 0"  /> -->
        <!-- <PuasaNewTextfield placeholder="Ayat" v-show="jenis == 0"  /> -->


        <!-- alquran * iqra -->
        <!-- <PuasaNewTextfield placeholder="Tempat" /> -->
        <PuasaNewDatepicker placeholder="Tanggal" />
        <PuasaNewTextview placeholder="Rangkuman" />

    </StackLayout>

    <StackLayout v-if="!rendering1" v-for="(item, index) in items.payload_description" :key="index" slot="item">
        <PuasaItemCheckboxBasic :description="item.description" :checked="item.selected" :items="item" :class="index+1 >= items.payload_description.length ? 'full-border-last-item' : 'off-bottom-border'" />
    </StackLayout>

</StackLayout>

</template>

<script>

import Vue from 'nativescript-vue'

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    props: ["items"],
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
    //         return this.get_habit_Puasa_payload;
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
