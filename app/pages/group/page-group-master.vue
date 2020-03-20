<style scoped>

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

              <Ripple @tap="gotoPage({ path: '/view-group-hasil' })" col="0" rippleColor="white">
                  <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item-left" horizontalAlignment="right" padding="10 15">
                      <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                          <FormattedString>
                              <Span :text="'fa-bar-chart' | fonticon" fontSize="18" class="fa" />
                          </FormattedString>
                      </Label>
                      <Label textAlignment="center" color="white" text="Hasil" fontSize="14" />
                  </StackLayout>
              </Ripple>

              <Ripple @tap="gotoPage({ path: '/view-group-skm' })" col="1" rippleColor="white">
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

              <Ripple  @tap="onDialog({
                title: 'Arsipkan Kelompok',
                message: 'silahkan arsipkan kelompok jika diperlukan',
                okButtonText: 'Setuju',
                neutralButtonText: 'Batalkan'
              }, 'Kelompok berhasil diarsipkan...')" col="3" rippleColor="white">
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

              <Ripple @tap="onDialog({
                title: 'Aktifkan Kelompok',
                message: 'silahkan aktifkan kelompok jika diperlukan',
                okButtonText: 'Setuju',
                neutralButtonText: 'Batalkan'
              }, 'Kelompok berhasil diaktifkan...')" col="0" rippleColor="white">
                  <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item-left" horizontalAlignment="right" padding="10 15">
                      <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                          <FormattedString>
                              <Span :text="'fa-check-square-o' | fonticon" fontSize="18" class="fa" />
                          </FormattedString>
                      </Label>
                      <Label textAlignment="center" color="white" text="Aktifkan Kembali" fontSize="14" />
                  </StackLayout>
              </Ripple>
              <Ripple @tap="onDialog({
                title: 'Hapus Kelompok',
                message: 'silahkan hapus kelompok jika diperlukan',
                okButtonText: 'Setuju',
                neutralButtonText: 'Batalkan'
              }, 'Kelompok berhasil dihapus...')" col="1" rippleColor="white">
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

          this.$store.commit("setBottomDrawer", true)
        },
        onDialog(options, snackbar){
          const vm = this
          var dialogs = require("tns-core-modules/ui/dialogs");
          dialogs.confirm(options).then(function (result) {
    					// result argument is boolean
              if(result) {
                vm.showLoadingIndicator();
                setTimeout(() => {
                  vm.hideLoadingIndicator();
                  vm.showActionSnackbar('👍 Sukses! '+snackbar);
                }, 500);
                return
              }

    					console.log("Dialog result: " + result);
    					if(result == undefined) {
    							// TETAP DITUTUP
                  vm.showToast("batal...")
                  return
    					}

    			});
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
