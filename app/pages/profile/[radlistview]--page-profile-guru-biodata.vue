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

<RadListView for="item in [0]">
    <v-template>

        <StackLayout padding="0 0 10 0" marginBottom="0">

            <!-- <TadarusNewSubtitle ref="subtitle" class="subtitle-border" /> -->

            <StackLayout class="full-border-radius" padding="10 15 10 15">

                <GridLayout columns="*,*" rows="*">
                    <LocalProfileNewTextfield :text="items.nama_depan" col="0" width="45%" horizontalAlignment="left" placeholder="Nama Depan" />
                    <LocalProfileNewTextfield :text="items.nama_belakang" col="1" width="50%" placeholder="Nama Belakang" />
                </GridLayout>

                <GridLayout columns="*,*" rows="*">
                    <LocalProfileNewTextfield :text="items.gelar_depan" col="0" width="45%" horizontalAlignment="left" placeholder="Gelar Depan" />
                    <LocalProfileNewTextfield :text="items.gelar_belakang" col="1" width="50%" placeholder="Gelar Belakang" />
                </GridLayout>

                <LocalProfileNewTextfield placeholder="NIP (Nomer Induk Pegawai)" :text="items.nip" />
                <LocalProfileNewTextfield placeholder="Telpon" :text="items.telpon" />
                <LocalProfileNewTextfield placeholder="Email" :text="items.email" />
                <LocalProfileNewTextfield placeholder="Whatsapp" :text="items.whatsapp" />

                <LocalProfileNewTextfield v-if="!get_profile_guru_is_edit" placeholder="Jenis Kelamin" :text="items.whatsapp" />
                <LocalProfileNewRadioGender v-else placeholder="Jenis Kelamin" :text="items.gender" />

                <!-- <TadarusNewDatepicker placeholder="Tanggal" /> -->
                <LocalProfileNewTextview placeholder="Alamat" :text="items.alamat" />

            </StackLayout>

        </StackLayout>

    </v-template>
</RadListView>

</template>

<script>

import Vue from 'nativescript-vue'

const delayrendering = require("@/mixins/delayrendering");

import LocalProfileNewTextfield from '@/ui/widgets/profile/profile-new-textfield'
import LocalProfileNewRadioGender from '@/ui/widgets/profile/profile-new-radio-gender'
import LocalProfileNewTextview from '@/ui/widgets/profile/profile-new-textview'


export default {
    // mixins: [delayrendering],
    props: ["items"],
    components: {
      LocalProfileNewTextfield, LocalProfileNewRadioGender, LocalProfileNewTextview
    },
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
