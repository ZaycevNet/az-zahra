<style scoped>

.full-border {
    border-width: 0;
    border-color: #28ADAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

.left-right-border {
    border-color: #28ADAA;
    border-left-width: 1;
    border-right-width: 1;
}

.full-border-last-item {
    border-width: 0;
    border-color: #28ADAA;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
    border-top-width: 0;
    padding-bottom: 15;
}

.off-top-border {
    border-width: 0;
    border-color: #28ADAA;
    border-top-width: 0;
}

.off-bottom-border {
    border-width: 0;
    border-color: #28ADAA;
    border-bottom-width: 0;
    border-top-width: 0;
}

.off-top-bottom-border {
    border-width: 0;
    border-color: #28ADAA;
    border-top-width: 0;
    border-bottom-width: 0;
}

</style>

<template>

<StackLayout @loaded="onRendering">
    <OrganisasiAccordion v-if="!rendering">
        <StackLayout slot="item">
            <Gradient direction="top down" colors="#28ADAA, #28BAAA">
                <StackLayout class="off-bottom-border" padding="0 0 10 0">

                    <OrganisasiItemTextbox title="Tempat" description="item.description" />

                    <OrganisasiItemTextbox title="Waktu Mulai" description="item.description" />
                    <OrganisasiItemTextbox title="Waktu Selesai" description="item.description" />
                    <OrganisasiItemTextbox title="Kegiatan" description="item.description" />
                    <OrganisasiItemTextbox title="Rangkuman" description="item.description" />
                </StackLayout>
            </Gradient>

            <StackLayout padding="10 0" class="left-right-border">
                <OrganisasiItemCheckboxReadonly v-for="(item, index) in items" :key="index" :description="item.description" :checked="item.selected" :class="index+1 >= items.length ? 'off-bottom-border' : 'off-bottom-border'" />
            </StackLayout>

            <Ripple rippleColor="white">
                <StackLayout backgroundColor="#28BAAA" width="100%" class="full-border-last-item" horizontalAlignment="right" padding="10 15">
                    <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                        <FormattedString>
                            <Span :text="'fa-pencil-square-o' | fonticon" fontSize="18" class="fa" />
                            <Span text=" Ubah Data" fontStyle="" fontSize="14" />
                        </FormattedString>
                    </Label>
                </StackLayout>
            </Ripple>

        </StackLayout>
    </OrganisasiAccordion>
</StackLayout>


</template>

<script>

import Vue from 'nativescript-vue'

export default {
    props: {
        renderingTime: {
            default: 10,
        },
    },
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
    computed: {
        items() {
            return this.$store.getters.get_habit_organisasi_payload_description;
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
