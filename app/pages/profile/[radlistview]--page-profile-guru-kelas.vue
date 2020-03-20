<style scoped>

.subtitle-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

.full-border-radius {
    border-width: 0;
    border-color: #28BAAA;
    border-radius: 5;
}

.btn-circle {
    font-size: 20;
    width: 50;
    height: 50;
    border-radius: 25;
    border-width: 1;
    border-color: #28ADAA;
    background-color: #28ADAA;
    color: white;
}

.btn-circle:active {
    width: 50;
    height: 50;
    border-radius: 25;
    border-width: 1;
    border-color: #28ADAA;
    background-color: white;
    color: #28ADAA;
}

.btn-circle-remove {
    /* font-size: 20; */
    font-weight: normal;
    width: 50;
    height: 50;
    border-radius: 25;
    border-width: 1;
    border-color: #ff4081;
    background-color: #ff4081;
    color: white;
}

.btn-circle-remove:active {
    width: 50;
    height: 50;
    border-radius: 25;
    border-width: 1;
    border-color: #ff4081;
    background-color: white;
    color: #ff4081;
}

</style>

<template>

<RadListView for="item in [0]">
    <v-template>

        <StackLayout padding="0 0 10 0" marginBottom="0">

            <Gradient v-if="get_profile_guru_is_edit" direction="top down" margin="10 10 0 10" colors="#28ADAA, #28BAAA" borderRadius="5">
                <Label color="white" textAlignment="center" text="Tambahkan kelas yang sedang diajar" padding="10" />
            </Gradient>


            <GridLayout v-if="get_profile_guru_is_edit" columns="*,*,*,auto" padding="10 15 10 15" rows="*">
                <LocalProfileNewDropdownKelas col="0" />
                <LocalProfileNewDropdownRombel col="1" />
                <LocalProfileNewDropdownJenjang col="2" />
                <Button class="btn-circle" col="3" text="+" @tap="onAdd" />
            </GridLayout>

            <Gradient direction="top down" margin="10 10 0 10" colors="#28ADAA, #28BAAA" borderRadius="5">
                <Label color="white" textAlignment="center" text="Daftar kelas yang sedang diajar" padding="10" />
            </Gradient>

            <StackLayout padding="10 15 10 15">

                <GridLayout height="100%" columns="*,*,*,auto" rows="*" v-for="(item, index) in items" :key="index">
                    <LocalProfileNewTextfield :text="item.kelas" col="0" width="50%" horizontalAlignment="left" placeholder="Kelas" />
                    <LocalProfileNewTextfield :text="item.rombel" col="1" width="50%" placeholder="Rombel" />
                    <LocalProfileNewTextfield :text="item.jenjang" col="2" width="50%" placeholder="Jenjang" />

                    <Button v-if="get_profile_guru_is_edit" class="btn-circle-remove fa" col="3" :text="'fa-close' | fonticon" @tap="onRemove" />
                </GridLayout>

            </StackLayout>

        </StackLayout>

    </v-template>
</RadListView>

</template>

<script>

import Vue from 'nativescript-vue'

const delayrendering = require("@/mixins/delayrendering");

import LocalProfileNewTextfield from '@/ui/widgets/profile/profile-new-textfield'
import LocalProfileNewDropdownKelas from '@/ui/widgets/profile/profile-new-dropdown-kelas'
import LocalProfileNewDropdownRombel from '@/ui/widgets/profile/profile-new-dropdown-rombel'
import LocalProfileNewDropdownJenjang from '@/ui/widgets/profile/profile-new-dropdown-jenjang'

export default {
    // mixins: [delayrendering],
    props: ["items"],
    components: {
      LocalProfileNewTextfield, LocalProfileNewDropdownKelas, LocalProfileNewDropdownRombel, LocalProfileNewDropdownJenjang
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
        onRemove() {
                this.showToast("kelas dihapus...")
            },
            onAdd() {
                this.showToast("kelas ditambahkan...")
            },
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
