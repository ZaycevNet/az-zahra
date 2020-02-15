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
    border-width: 0;
    border-color: #28BAAA;
    border-radius: 5;
}

/* .off-top-bottom-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
    border-bottom-width: 0;
} */
</style>

<template>

<StackLayout padding="10 10 10 10" marginBottom="0" @loaded="onLoaded_Rendering(0, 250)">

    <!-- <TadarusNewSubtitle ref="subtitle" class="subtitle-border" /> -->

    <StackLayout v-if="!rendering0" @loaded="onLoaded_Rendering(1, 250)" class="full-border-radius" padding="10 15 10 15">

        <!-- alquran * iqra -->
        <!-- <TadarusNewSegmented @onBubbleTap="onBubbleTap" width="100%" placeholder="Kategori" /> -->


        <!-- alquran * iqra -->
        <!-- waktu -->
        <!-- <TadarusNewDropdownFloatLabel /> -->
        <GridLayout columns="*,*" rows="*">
            <ProfileNewTextfield :text="items.nama_depan" col="0" width="45%" horizontalAlignment="left" placeholder="Nama Depan" />
            <ProfileNewTextfield :text="items.nama_belakang" col="1" width="50%" placeholder="Nama Belakang" />
        </GridLayout>

        <GridLayout columns="*,*" rows="*">
            <ProfileNewTextfield :text="items.gelar_depan" col="0" width="45%" horizontalAlignment="left" placeholder="Gelar Depan" />
            <ProfileNewTextfield :text="items.gelar_belakang" col="1" width="50%" placeholder="Gelar Belakang" />
        </GridLayout>
        <!-- <TadarusNewRadio placeholder="Durasi" /> -->

        <!-- alquran -->
        <!-- <TadarusNewStepper v-show="jenis == 1" placeholder="Tingkat"  maxLength="1" lowestNumber="1" highestNumber="6"/> -->

        <!-- alquran -->
        <!-- <TadarusNewStepper v-show="jenis == 0" placeholder="Juz" maxLength="30" lowestNumber="1" highestNumber="30"/> -->
        <!-- <TadarusNewDropdownFloatLabelSurat v-show="jenis == 0"  /> -->
        <!-- <TadarusNewTextfield placeholder="Ayat" v-show="jenis == 0"  /> -->

        <!-- alquran * iqra -->
        <ProfileNewTextfield placeholder="KTP" :text="items.ktp" />
        <ProfileNewTextfield placeholder="Telpon" :text="items.telpon" />
        <ProfileNewTextfield placeholder="Email" :text="items.email" />
        <ProfileNewTextfield placeholder="Whatsapp" :text="items.whatsapp" />
        <ProfileNewTextfield placeholder="Pekerjaan" :text="items.pekerjaan" />
        <ProfileNewTextfield placeholder="Jabatan" :text="items.jabatan" />

        <!-- <TadarusNewDatepicker placeholder="Tanggal" /> -->
        <ProfileNewTextview placeholder="Alamat" :text="items.alamat" />

    </StackLayout>

    <!-- <StackLayout v-if="!rendering1" v-show="jenis == 0" v-for="(item, index) in items" :key="index" slot="item">
        <TadarusItemCheckboxBasic :description="item.description" :checked="item.selected" :items="item" :class="index+1 >= items.length ? 'full-border-last-item' : 'off-bottom-border'" />
    </StackLayout> -->

    <!-- <Label v-if="!rendering1" v-show="jenis == 0" fontSize="12" padding="10 0" text="Tekan lama pilihan di atas untuk mengetahui artinya" width="100%" textAlignment="center" /> -->

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
