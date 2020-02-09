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

.iqra {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
    border-top-width: 0;
    border-bottom-width: 1;
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

    <ZisNewSubtitle ref="subtitle" class="subtitle-border" />

    <StackLayout v-if="!rendering0" @loaded="onLoaded_Rendering(1, 250)" :class="format == 1 ? 'iqra' : 'off-bottom-border'" padding="10 15 10 15">

        <!-- alquran * iqra -->
        <!-- <ZisNewSegmented @onBubbleTap="onBubbleTap" width="100%" placeholder="Perantara" /> -->
        <ZisNewSegmentedPerantara @onBubbleTap="onBubbleTap" width="100%" placeholder="Perantara" />
        <ZisNewTextfield placeholder="Penerima"  />
        <ZisNewTextfield placeholder="Penghasilan"  />
        <ZisNewStepper placeholder="Presentase"  maxLength="5" :lowestNumber="Number(0.1)" highestNumber="100"/>
        <ZisNewTextfield placeholder="Tempat" />

        <!-- alquran * iqra -->
        <!-- waktu -->
        <!-- <ZisNewDropdownFloatLabel /> -->
        <!-- <GridLayout columns="*,*" rows="*">
            <ZisNewTimepicker col="0" width="45%" horizontalAlignment="left" placeholder="Waktu Mulai" />
            <ZisNewTimepicker col="1" width="50%" placeholder="Waktu Selesai" />
        </GridLayout> -->
        <!-- <ZisNewRadio placeholder="Durasi" /> -->

        <!-- alquran -->
        <!-- <ZisNewStepper v-show="format == 1" placeholder="Tingkat"  maxLength="1" lowestNumber="1" highestNumber="6"/> -->

        <!-- alquran -->
        <!-- <ZisNewStepper v-show="format == 0" placeholder="Juz" maxLength="30" lowestNumber="1" highestNumber="30"/> -->
        <!-- <ZisNewDropdownFloatLabelSurat v-show="format == 0"  />
        <ZisNewTextfield placeholder="Ayat" v-show="format == 0"  /> -->


        <!-- alquran * iqra -->
        <!-- <ZisNewTextfield placeholder="Tempat" />
        <ZisNewDatepicker placeholder="Tanggal" />
        <ZisNewTextview placeholder="Rangkuman" /> -->

    </StackLayout>

</StackLayout>

</template>

<script>

import Vue from 'nativescript-vue'

// const ZisModal = "@/ui/widgets/habit-format/format-modal"
const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    props: ["items"],
    // components: {
    //   ZisModal
    // },
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
    //         return this.get_habit_Zis_payload;
    //     }
    // },
    methods: {

      onBubbleTap(val) {
        this.format = val
      },
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
