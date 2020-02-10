<style scoped>

.subtitle-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

/* .off-top-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
} */

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

    <ZisNewSubtitle ref="subtitle" class="subtitle-border" />

    <StackLayout v-if="!rendering0" @loaded="onLoaded_Rendering(1, 250)" class="full-border-radius" padding="10 15 10 15">

        <!-- all -->
        <ZisNewDropdownFloatLabel @onBubbleTap="onBubbleTapJenis" />
        <ZisNewSegmentedPerantara @onBubbleTap="onBubbleTap" width="100%" placeholder="Perantara" />
        <ZisNewTextfield placeholder="Penerima"  />

        <!-- non zakat mall -->
        <ZisNewTextfield v-show="!isZakatMal" placeholder="Bentuk Materi"  />

        <!-- zakat mall -->
        <ZisNewTextfield v-show="isZakatMal" placeholder="Penghasilan"  />
        <ZisNewStepper v-show="isZakatMal" placeholder="Presentase"  maxLength="5" :lowestNumber="Number(0.1)" highestNumber="100"/>
        <ZisNewTextfield v-show="isZakatMal" placeholder="Nomimal Diberikan"  />

        <ZisNewTextfield placeholder="Tempat" />
        <ZisNewTextview placeholder="Tujuan" />

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
            jenis: 0,

            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
            // untuk mengetahui jika parent sedang memanggil event
            bus: new Vue(),
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }
    },
    computed: {
        isZakatMal() {
            return this.jenis == 0 ? true : false;
        }
    },
    methods: {
        onBubbleTapJenis(val) {
          this.jenis = val // zakat-mall
        },
        onBubbleTap(val) {

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
