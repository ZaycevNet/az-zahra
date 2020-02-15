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

<StackLayout padding="0 0 10 0" marginBottom="0" @loaded="onLoaded_Rendering(0, 250)">

    <!-- <TadarusNewSubtitle ref="subtitle" class="subtitle-border" /> -->

    <StackLayout v-if="!rendering0" @loaded="onLoaded_Rendering(1, 250)" class="full-border-radius" padding="10 15 10 15">

      <GridLayout columns="*,*" rows="*">
          <ProfileNewTextfield :text="items.nama_depan" col="0" width="45%" horizontalAlignment="left" placeholder="Nama Depan" />
          <ProfileNewTextfield :text="items.nama_belakang" col="1" width="50%" placeholder="Nama Belakang" />
      </GridLayout>

      <GridLayout columns="*,*" rows="*">
          <ProfileNewTextfield :text="items.gelar_depan" col="0" width="45%" horizontalAlignment="left" placeholder="Gelar Depan" />
          <ProfileNewTextfield :text="items.gelar_belakang" col="1" width="50%" placeholder="Gelar Belakang" />
      </GridLayout>

      <ProfileNewTextfield placeholder="NIP (Nomer Induk Pegawai)" :text="items.nip" />
      <ProfileNewTextfield placeholder="Telpon" :text="items.telpon" />
      <ProfileNewTextfield placeholder="Email" :text="items.email" />
      <ProfileNewTextfield placeholder="Whatsapp" :text="items.whatsapp" />

      <ProfileNewTextfield v-if="!get_profile_guru_is_edit" placeholder="Jenis Kelamin" :text="items.whatsapp" />
      <ProfileNewRadioGender v-else placeholder="Jenis Kelamin" :text="items.gender" />

      <!-- <TadarusNewDatepicker placeholder="Tanggal" /> -->
      <ProfileNewTextview placeholder="Alamat" :text="items.alamat" />

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
