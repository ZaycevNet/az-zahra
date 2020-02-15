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

</style>

<template>

<StackLayout padding="10 10 10 10" marginBottom="65" @loaded="onLoaded_Rendering(0, 250)">

    <TadarusNewSubtitle ref="subtitle" class="subtitle-border" />

    <StackLayout v-if="!rendering0" @loaded="onLoaded_Rendering(1, 250)" :class="jenis == 1 ? 'iqra' : 'off-bottom-border'" padding="10 15 10 15">

        <!-- alquran * iqra -->
        <TadarusNewSegmented @onBubbleTap="onBubbleTap" width="100%" placeholder="Kategori" />

        <!-- alquran * iqra -->
        <!-- waktu -->
        <!-- <TadarusNewDropdownFloatLabel /> -->
        <GridLayout columns="*,*" rows="*">
            <TadarusNewTimepicker col="0" width="45%" horizontalAlignment="left" placeholder="Waktu Mulai" />
            <TadarusNewTimepicker col="1" width="50%" placeholder="Waktu Selesai" />
        </GridLayout>
        <!-- <TadarusNewRadio placeholder="Durasi" /> -->

        <!-- alquran -->
        <TadarusNewStepper v-show="jenis == 1" placeholder="Tingkat"  maxLength="1" lowestNumber="1" highestNumber="6"/>

        <!-- alquran -->
        <TadarusNewStepper v-show="jenis == 0" placeholder="Juz" maxLength="30" lowestNumber="1" highestNumber="30"/>
        <TadarusNewDropdownFloatLabelSurat v-show="jenis == 0"  />
        <TadarusNewTextfield placeholder="Ayat" v-show="jenis == 0"  />


        <!-- alquran * iqra -->
        <TadarusNewTextfield placeholder="Tempat" />
        <TadarusNewDatepicker placeholder="Tanggal" />
        <TadarusNewTextview placeholder="Rangkuman" />

    </StackLayout>

    <StackLayout v-if="!rendering1" v-show="jenis == 0" v-for="(item, index) in items" :key="index" slot="item">
        <TadarusItemCheckboxBasic :description="item.description" :checked="item.selected" :items="item" :class="index+1 >= items.length ? 'full-border-last-item' : 'off-bottom-border'" />
    </StackLayout>

    <Label v-if="!rendering1" v-show="jenis == 0" fontSize="12" padding="10 0" text="Tekan lama pilihan di atas untuk mengetahui artinya" width="100%" textAlignment="center" />

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
            jenis: 0, // 0 = alquran, 1 = iqra

            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
            // untuk mengetahui jika parent sedang memanggil event
            bus: new Vue(),
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }
    },
    // computed: {
    //     items() {
    //         return this.get_habit_Tadarus_payload;
    //     }
    // },
    methods: {

      onBubbleTap(val) {
        this.jenis = val
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
