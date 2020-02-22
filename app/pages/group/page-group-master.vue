<style scoped>

/* .full-border {
    border-width: 0;
    border-color: #28ADAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
} */

/* .left-right-border {
    border-color: #28ADAA;
    border-left-width: 1;
    border-right-width: 1;
} */

.button-last-item-left {
    border-bottom-left-radius: 5;
    /* border-bottom-right-radius: 5; */
    padding-bottom: 15;
    border-top-width: 1;
    border-top-color:rgba(255,255,255,0.25);
}
.button-last-item-middle {
    /* border-bottom-left-radius: 5; */
    /* border-bottom-right-radius: 5; */
    padding-bottom: 15;
    border-top-width: 1;
    border-top-color:rgba(255,255,255,0.25);
}
.button-last-item-right {
    /* border-bottom-left-radius: 5; */
    border-bottom-right-radius: 5;
    padding-bottom: 15;
    border-top-width: 1;
    border-top-color:rgba(255,255,255,0.25);
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
    <GroupAccordion v-if="!rendering0" v-for="(item, index) in items" :key="index" :index="index" :judul="item.judul">
        <StackLayout slot="item">

            <Gradient direction="top down" colors="#28ADAA, #28BAAA">
                <StackLayout padding="0 0 10 0">
                  <!-- "jenis":"group",
                  "judul": "Jenius",
                  "anggota":"5",
                  "aktif":"false", -->
                    <GroupItemTextbox title="Tempat" :description="item.judul" />
                    <GroupItemTextbox title="Waktu Mulai" :description="item.anggota" />
                    <GroupItemTextbox title="Waktu Selesai" :description="item.aktif" />
                </StackLayout>
            </Gradient>

            <GridLayout v-if="item.aktif" columns="*,*,*,*">

              <Ripple col="0" rippleColor="white">
                  <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item-left" horizontalAlignment="right" padding="10 15">
                      <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                          <FormattedString>
                              <Span :text="'fa-bar-chart' | fonticon" fontSize="18" class="fa" />
                          </FormattedString>
                      </Label>
                      <Label textAlignment="center" color="white" text="Hasil" fontSize="14" />
                  </StackLayout>
              </Ripple>
              <Ripple col="1" rippleColor="white">
                  <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item-middle" horizontalAlignment="right" padding="10 15">
                      <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                          <FormattedString>
                              <Span :text="'fa-calculator' | fonticon" fontSize="18" class="fa" />
                          </FormattedString>
                      </Label>
                      <Label textAlignment="center" color="white" text="SKM" fontSize="14" />
                  </StackLayout>
              </Ripple>
              <Ripple col="2" rippleColor="white" @tap="onEventBus(item)">
                  <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item-middle" horizontalAlignment="right" padding="10 15">
                      <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                          <FormattedString>
                              <Span :text="'fa-pencil-square-o' | fonticon" fontSize="18" class="fa" />
                          </FormattedString>
                      </Label>
                      <Label textAlignment="center" color="white" text="Ubah" fontSize="14" />
                  </StackLayout>
              </Ripple>
              <Ripple col="3" rippleColor="white">
                  <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item-right" horizontalAlignment="right" padding="10 15">
                      <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                          <FormattedString>
                              <Span :text="'fa-briefcase' | fonticon" fontSize="18" class="fa" />
                          </FormattedString>
                      </Label>
                      <Label textAlignment="center" color="white" text="Arsip" fontSize="14" />
                  </StackLayout>
              </Ripple>
            </GridLayout>

            <GridLayout v-else columns="*,*">

              <Ripple col="0" rippleColor="white">
                  <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item-left" horizontalAlignment="right" padding="10 15">
                      <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                          <FormattedString>
                              <Span :text="'fa-check-square-o' | fonticon" fontSize="18" class="fa" />
                          </FormattedString>
                      </Label>
                      <Label textAlignment="center" color="white" text="Aktifkan Kembali" fontSize="14" />
                  </StackLayout>
              </Ripple>
              <Ripple col="1" rippleColor="white">
                  <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item-middle" horizontalAlignment="right" padding="10 15">
                      <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                          <FormattedString>
                              <Span :text="'fa-trash' | fonticon" fontSize="18" class="fa" />
                          </FormattedString>
                      </Label>
                      <Label textAlignment="center" color="white" text="Hapus Kelompok" fontSize="14" />
                  </StackLayout>
              </Ripple>
            </GridLayout>
        </StackLayout>
    </GroupAccordion>
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
    mounted(){
      console.log('items', this.items);
    },
    methods: {
        onEventBus(item){
          console.log(item)
          const { EventBus } = require('@/event-bus.js');
          EventBus.$emit('ViewGroup', item);
        },
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
