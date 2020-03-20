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
    border-width: 1;
    border-top-width: 0;
    border-color: #28ADAA;
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
    <GroupAccordion v-if="!rendering0" :judul="items.judul">
        <StackLayout slot="item">

            <StackLayout class="left-right-border">
      					<!-- <Label textWrap="true" text="Sholat" paddingBottom="5" color="#28ADAA" textAlignment="left" fontWeight="bold" fontSize="16" borderBottomWidth="1" borderBottomColor="#28ADAA" /> -->
                <DockLayout padding="10 14 10 16" stretchLastChild="true">
                  <StackLayout dock="left" >
                    <Label text="Standar Kelulusan Minimal" fontWeight="normal"  fontSize="14" verticalAlignment="middle" />
                    <Label dock="left" text="Jumlah aktivitas dalam persen(%)" fontWeight="normal" fontSize="12" verticalAlignment="middle" />
                  </StackLayout>

        					<Label textWrap="true" text="100%" fontWeight="bold" color="#28BAAA" fontStyle="underline" textAlignment="right" fontSize="24" />
                </DockLayout>

                <DockLayout padding="10 16 5 16" stretchLastChild="true">
                  <Label dock="left" text="Mudah" fontWeight="bold" fontSize="12" verticalAlignment="middle" />

                  <Label text="Sulit" fontWeight="bold" fontSize="12" verticalAlignment="middle" textAlignment="right" />
                </DockLayout>

                <Slider color="#28BAAA" value="80" @valueChange="" />

                <GridLayout columns="*,*,*,*" padding="0 16 10 16">
                  <Label padding="5 0" col="0" text="D" backgroundColor="rgba(255,0,51,0.3)" fontWeight="bold" color="white" fontSize="13" verticalAlignment="middle" textAlignment="center" />
                  <Label padding="5 0" col="1" text="C" backgroundColor="rgba(255,0,51,0.35)" fontWeight="bold" color="white" fontSize="13" verticalAlignment="middle" textAlignment="center" />
                  <Label padding="5 0" col="2" text="B" backgroundColor="rgba(255,0,51,0.4)" fontWeight="bold" color="white" fontSize="13" verticalAlignment="middle" textAlignment="center" />
                  <Label padding="5 0" col="3" text="A" backgroundColor="rgba(255,0,51,0.45)" fontWeight="bold" color="white" fontSize="13" verticalAlignment="middle" textAlignment="center" />
                </GridLayout>

                <GroupNewTextviewSKM padding="0 18 5 18" placeholder="Isikan dengan catatan tambahan" />

                <Label backgroundColor="rgba(255,0,51,0.4)" padding="10" margin="0 16 20 16" text='SKM untuk "Kebiasaan Sholat" mempunyai rentang waktu perhitungan harian, siswa diwajibkan mengisi harian' fontWeight="normal" color="white" fontSize="14" textWrap="true"/>
                <!-- <GroupItemCheckboxReadonly v-for="(_item, _index) in item.payload_description" :key="_index" :description="_item.description" :checked="_item.selected"/> -->
            </StackLayout>

            <Ripple rippleColor="white">
              <StackLayout backgroundColor="#28BAAA" width="100%" class="button-last-item" padding="10 15">
                  <!-- <GroupButtonConfirm width="40%" /> -->

                  <Label fontWeight="" color="white" width="auto" height="auto" textAlignment="center">
                      <FormattedString>
                          <Span :text="'fa-check' | fonticon" fontSize="18" class="fa" />
                          <Span text=" Simpan Data" fontStyle="" fontSize="14" />
                      </FormattedString>
                  </Label>

              </StackLayout>
            </Ripple>

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
    //         return this.get_habit_Group_payload;
    //     }
    // },
    // mounted(){
    //   console.log("items XXXXXXXXX", this.$store.state.group_skm.)
    // },
    methods: {
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
