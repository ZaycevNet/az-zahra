<style scoped>

.left-border {
  /* border-top-width: 1; */
  /* border-left-width: 1; */
  border-color: white;
}

.right-border {
  /* border-top-width: 1; */
  /* border-right-width: 1; */
  border-color: white;
}

</style>

<template>

<StackLayout @loaded="onLoaded_Rendering(0, 250)">

  <GridLayout backgroundColor="#28BAAA" rows="auto" columns="*,*,*" padding="0 25" >

      <GroupPopupFilterDetail class="left-border" width="100%" row="0" col="0" />
      <GroupPopupCalenderDetail class="left-border" width="100%" row="0" col="1" />
      <GroupPopupRankingDetail class="left-border right-border" width="100%" row="0" col="2" />

  </GridLayout>

    <ScrollView height="90%">
      <StackLayout>
          <GroupItemHabit v-for="(item, index) in 9" :key="index"/>
      </StackLayout>
    </ScrollView>

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
