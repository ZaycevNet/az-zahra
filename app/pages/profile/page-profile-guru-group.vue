<style scoped>

.left-right-border {
    border-color: #28ADAA;
    border-left-width: 1;
    border-right-width: 1;
}

.button-last-item {
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
    padding-bottom: 15;
}

</style>

<template>

<StackLayout @loaded="onLoaded_Rendering(0, 250)">
    <!-- <Label text="Yang diikuti" width="35%" padding="15 10 15 10" margin="0 10" fontSize="16" borderBottomWidth="1" borderBottomColor="rgba(40,186,170,1)" color="#28ADAA" backgroundColor="rgba(40,186,170,0.0)" textAlignment="center" /> -->

    <ProfileAccordion v-if="!rendering0" v-for="(item, index) in items" :judul="item.judul +' '+(index+1)" :key="index" :index="index" borderBottomLeftRadius="5" borderBottomRightRadius="5">
        <StackLayout slot="item">

            <Gradient direction="top down" colors="#28ADAA, #28BAAA">
                <StackLayout padding="0 0 10 0" >
                    <ProfileItemTextbox title="Nama" :description="item.nama" />
                    <ProfileItemTextbox title="Anggota" :description="item.anggota" />
                </StackLayout>
            </Gradient>

            <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item" paddingTop="5" />


            <!-- <Ripple rippleColor="white">
                <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item" horizontalAlignment="right" padding="10 15">
                    <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                        <FormattedString>
                            <Span :text="'fa-pencil-square-o' | fonticon" fontSize="18" class="fa" />
                            <Span text=" Ubah Data" fontStyle="" fontSize="14" />
                        </FormattedString>
                    </Label>
                </StackLayout>
            </Ripple> -->
        </StackLayout>
    </ProfileAccordion>
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
            rendering: true,
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
            // untuk mengetahui jika parent sedang memanggil event
            bus: new Vue(),
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }
    },
    methods: {
        onRendering(args) {
                console.log(this.renderingTime)
                setTimeout(() => {
                    this.rendering = false;
                }, this.renderingTime)
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
