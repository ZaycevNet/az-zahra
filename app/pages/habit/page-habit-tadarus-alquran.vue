<style scoped>

/* .full-border {
    border-width: 0;
    border-color: #28ADAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
} */

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

/* .full-border-last-item {
    border-width: 0;
    border-color: #28ADAA;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
    border-top-width: 0;
    padding-bottom: 15;
} */

/* .off-top-border {
    border-width: 0;
    border-color: #28ADAA;
    border-top-width: 0;
} */

/* .off-bottom-border {
    border-width: 0;
    border-color: #28ADAA;
    border-bottom-width: 0;
    border-top-width: 0;
} */

/* .off-top-bottom-border {
    border-width: 0;
    border-color: #28ADAA;
    border-top-width: 0;
    border-bottom-width: 0;
} */

</style>

<template>

<StackLayout @loaded="onLoaded_Rendering(0, 250)">
    <TadarusAccordion v-if="!rendering0" v-for="(item, index) in items" :key="index" :index="index">
        <StackLayout slot="item">
            <Gradient direction="top down" colors="#28ADAA, #28BAAA">
                <StackLayout padding="0 0 10 0">

                  <TadarusItemTextbox title="Tempat" :description="item.tempat" />
                  <TadarusItemTextbox title="Waktu Mulai" :description="item.waktu" />
                  <TadarusItemTextbox title="Waktu Selesai" :description="item.waktu" />
                  <TadarusItemTextbox title="Surat" :description="item.surat" />
                  <TadarusItemTextbox title="Juz" :description="item.juz" />
                  <TadarusItemTextbox title="Ayat" :description="item.ayat" />
                  <TadarusItemTextbox title="Keterangan" :description="item.keterangan" />

                </StackLayout>
            </Gradient>

            <StackLayout padding="10 0" class="left-right-border">
                <TadarusItemCheckboxReadonly v-for="(_item, _index) in item.payload_description" :key="_index" :description="_item.description" :checked="_item.selected"/>
            </StackLayout>

            <Ripple rippleColor="white">
                <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item" horizontalAlignment="right" padding="10 15">
                    <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                        <FormattedString>
                            <Span :text="'fa-pencil-square-o' | fonticon" fontSize="18" class="fa" />
                            <Span text=" Ubah Data" fontStyle="" fontSize="14" />
                        </FormattedString>
                    </Label>
                </StackLayout>
            </Ripple>

        </StackLayout>
    </TadarusAccordion>
</StackLayout>


</template>

<script>

import Vue from 'nativescript-vue'

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    props: ["items"],
    // props: {
    //     renderingTime: {
    //         default: 10,
    //     },
    //     index: {
    //       type: Number
    //     }
    // },
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
    // computed: {
    //     items() {
    //         return this.get_habit_Tadarus_payload;
    //     }
    // },
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
