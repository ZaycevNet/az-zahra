

<template>

<Page>
  <ScrollView ref="Container" @scroll="onScroll">
    <StackLayout>
        <Label class="drawer-header" :backgroundColor="parentPayload.color" text="Tulis Komentar" />

        <!-- <Label paddingLeft="20px" text="Anda sedang membalas komenter dari:" fontSize="10px" /> -->


        <GridLayout row="0" col="0" rows="*,*" height="100%" columns="*">

            <DetailCard :bus="bus" :offset="offset" row="0" col="0" verticalAlignment="top"/>

            <!-- Bottom Toolbar -->
            <GridLayout rows="100%" columns="*" row="1" col="0" marginTop="50" padding="5" borderTopWidth="0" backgroundColor="white" :borderColor="parentPayload.color" verticalAlignment="bottom">

                <RadDataForm col="0" row="0" padding="0" verticalAlignment="top" :color="parentPayload.color" :source="ticket" :metadata="ticketMetadata">
                </RadDataForm>

                <TextView ref="input_data" col="0" height="100%" marginTop="100" row="1" borderRadius="25%" fontSize="13px" marginLeft="5" padding="10" hint="Tulis komentar di sini..." @focus="check" text="" paddingRight="50" />

                <StackLayout col="0" row="1" borderRadius="20" marginRight="5" height="40" width="40" horizontalAlignment="right" marginTop="60" verticalAlignment="top">
                    <Ripple rippleColor="white" borderRadius="25" height="50" width="50">
                        <Label :text="String.fromCharCode('0xf1d9')" class="fa" fontSize="20" :color="parentPayload.color" textAlignment="center" verticalAlignment="middle" textWrap="true" />
                    </Ripple>
                </StackLayout>

            </GridLayout>

        </GridLayout>
    </StackLayout>
  </ScrollView>
</Page>

</template>


<script>

const application = require('tns-core-modules/application')
import {
    Color
}
from 'tns-core-modules/color';

const Vue = require('nativescript-vue')

import DetailCard from "./components/detail-card"

export default {
    components: {
        DetailCard
    },
    props: {
        parentPayload: {
            default: {
                title: "",
                color: "",
            }
        }
    },
    data() {
        return {
            bus: new Vue(),
            offset: 0,

            ticket: {
                type: "Kritik",
            },
            ticketMetadata: {
                'isReadOnly': false,
                'commitMode': 'Immediate',
                'validationMode': 'Immediate',
                'propertyAnnotations': [{
                    'name': 'type',
                    'displayName': '', //'Type'
                    'index': 3,
                    'editor': 'SegmentedEditor',
                    'valuesProvider': ['Koordinasi', 'Sigap', 'Tindak'],
                }, ]
            }
        }
    },
    mounted() {


      			this.$store.commit("activityBackPressed", "no-backward")
      			this.$store.commit("gotoRoute", true)

      			application.android.on('activityBackPressed', args => {
      					args.cancel = true // no backward
      					this.$navigateBack()
      			})
    },
    methods: {
      onScroll() {
          const scrollView = this.$refs.Container.nativeView

          // if the offset is less than the height of the header.
          // if (scrollView.verticalOffset < 250) {

              this.bus.$emit('onScrollParent', scrollView.verticalOffset / 2)
              this.offset = scrollView.verticalOffset / 2

          // }
      },
      onGotoBack() {
        this.$navigateBack()

      },
      check() {
        //alert(123)

      }
    }
}

</script>
