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
    <!-- <Label text="Yang diikuti" width="35%" padding="15 10 15 10" margin="0 10" fontSize="16" borderBottomWidth="1" borderBottomColor="rgba(40,186,170,1)" color="#28ADAA" backgroundColor="rgba(40,186,170,0.0)" textAlignment="center" /> -->

		<ProfileItemHabit v-for="(item, index) in 9" :key="index"/>

    <!-- <ProfileAccordion v-if="!rendering0" v-for="(item, index) in items" :judul="item.judul +' '+(index+1)" :key="index" :index="index" borderBottomLeftRadius="5" borderBottomRightRadius="5">
        <StackLayout slot="item">

            <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item" paddingTop="5" />

        </StackLayout>
    </ProfileAccordion> -->
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
