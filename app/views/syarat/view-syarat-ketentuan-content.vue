Guru<style scoped>

ActionBar,
.action-bar {
    background-color: #28ADAA;
    padding-left: 0px;
    android-elevation: 0;
}

.action-bar-title {
    text-align: left;
    font-size: 18px;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.action-bar-right {
    text-align: right;
    font-size: 18px;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.action-bar-icon {
    font-size: 35px;
    width: 30;
}

/* .tabviewitem-container {
    padding-bottom: 10;
} */

TabView > * {
    text-transform: none;
}

TabView {
    /* selected-tab-text-color: $theme-primary-color;
    border-bottom-color: $theme-primary-color;
    android-selected-tab-highlight-color: $theme-primary-color; */
    font-size: 15;
}

#tabview {
    font-weight: bold;
}

</style>

<template>

<StackLayout @loaded="onLoaded_Rendering(0, 400)">

    <StackLayout v-if="!rendering0">

        <TabView ref="tabview" id="tabview" :selectedIndex="selectedIndex" @selectedIndexChange="onSelectedIndexChanged" @loaded="onTabViewLoaded" @unloaded="onTabViewUnloaded" height="100%" tabTextFontSize="15" selectedTabTextColor="#28BAAA" androidSelectedTabHighlightColor="#28BAAA"
        tabTextColor="rgb(40, 186, 170,0.5)" tabBackgroundColor="#fff" iosIconRenderingMode="alwaysOriginal">

            <TabViewItem title="Indonesia" bageValue="" wrapContent="false">

                <ScrollView ref="scroll0" @scroll="onScroll($event, 0)" height="100%" scrollBarIndicatorVisible="false">
                    <StackLayout id="stackList0" ref="stackList0" paddingBottom="10">

                        <ContentPreloader v-if="!tab0" />

                        <PageSyaratKetentuan v-if="tab0" :items="get_syarat_ketentuan_payload[0].deskripsi" />

                    </StackLayout>
                </ScrollView>

            </TabViewItem>

            <TabViewItem title="English" bageValue="" wrapContent="false">

                <ScrollView ref="scroll1" @scroll="onScroll($event, 1)" height="100%" scrollBarIndicatorVisible="false">
                    <StackLayout id="stackList1" ref="stackList1" paddingBottom="10">

                        <ContentPreloader v-if="!tab1" />

                        <PageSyaratKetentuan v-if="tab1" :items="get_syarat_ketentuan_payload[0].deskripsi" />

                    </StackLayout>
                </ScrollView>

            </TabViewItem>


        </TabView>

    </StackLayout>

    <ContentPreloader v-if="rendering0 && initContentPreloader" />
</StackLayout>

</template>

<script>

import {
    Label
}
from 'ui/label';
import {
    isIOS, isAndroid
}
from 'platform';
import {
    ContentView
}
from 'ui/content-view';

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    props:['bus'],
    data() {
        return {
            busy0: false,
            busy1: false,

            selectedIndex: 0,

            tab0: false,
            tab1: false,

        }
    },
    mounted(){
      this.bus.$on('onEmitFromParent', this.scrollToTop);
      // console.log(this.get_profile_guru_payload.payload_biodata)
    },
    methods: {
      scrollToTop(){
        // setTimeout(() =>{
        //
        // }, 250)
        if(this.$refs.scroll0 == undefined) return
          this.$refs.scroll0.nativeView.scrollToVerticalOffset(0, true)

        if(this.$refs.scroll1 == undefined) return
          this.$refs.scroll1.nativeView.scrollToVerticalOffset(0, true)
      },
            onScroll(args, index) {
                // console.log(index);
                if (args.scrollY >= (args.object.getViewById("stackList" + index).getActualSize().height - args.object.getActualSize().height)) {
                    this['busy' + index] = true;
                    setTimeout(() => {
                        this['busy' + index] = false;

                        // let n = [];
                        // for (var i = 0; i < 30; i++) {
                        //     n.push(i + 1);
                        // }
                        // this.itemList.push(n);

                    }, 1000);
                }

                // untuk reset parallex
                if (args.scrollY <= 0) {
                    this.$emit('onBubbleParallex', true);
                }
            },
            // onBack() {
            //     new Promise(resolve => {
            //         this.rendering0 = true;
            //         resolve();
            //     }).then(result => {
            //         this.$navigateBack();
            //         // this.$modal.close("Aku Pulang")
            //     });
            // },
            // TABVIEW

            onSelectedIndexChanged: function(args) {

                let newIndex = args.value;
                this.selectedIndex = newIndex;
                console.log('Current tab index: ' + newIndex, this.selectedIndex);

                setTimeout(() => {
                    this['tab' + newIndex] = true
                }, 100)

            },

    }
}

</script>
