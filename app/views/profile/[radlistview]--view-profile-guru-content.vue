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


TabView > * {
    text-transform: none;
}

TabView {
    /* selected-tab-text-color: $theme-primary-color;
    border-bottom-color: $theme-primary-color;
    android-selected-tab-highlight-color: $theme-primary-color; */
    font-size: 15;
}


/* .fab-button {
  height: 50;
  width: 50;
  margin: 15;
  background-color: #ff4081;
  horizontal-align: right;
  vertical-align: bottom;
} */

#tabview_child,
#tabview_child1,
#tabview {
    font-weight: bold;
}

</style>

<template>

<StackLayout @loaded="onLoaded_Rendering(0, 400)">

    <!-- jika menggunakan showModal, ini pengganti ActionBar -->
    <!-- <ModalActionbar @onBack="onBack" /> -->

    <StackLayout v-if="!rendering0">

        <TabView ref="tabview" id="tabview" :selectedIndex="selectedIndex" @selectedIndexChange="onSelectedIndexChanged" @loaded="onTabViewLoaded" @unloaded="onTabViewUnloaded" height="100%" tabTextFontSize="15" selectedTabTextColor="white" androidSelectedTabHighlightColor="white"
        tabTextColor="rgb(255,255,255,0.5)" tabBackgroundColor="#28BAAA" iosIconRenderingMode="alwaysOriginal">

            <TabViewItem title="Biodata" bageValue="" wrapContent="false">

                <!-- <ScrollView ref="scroll0" @scroll="onScroll($event, 0)" height="100%" scrollBarIndicatorVisible="false"> -->
                    <StackLayout id="stackList0" ref="stackList0" paddingBottom="10">

                        <ContentPreloader v-if="!tab0" />

                        <PageProfileGuruBiodata v-if="tab0" :items="get_profile_guru_payload.payload_biodata" />

                    </StackLayout>
                <!-- </ScrollView> -->


            </TabViewItem>

            <TabViewItem title="Kelas" bageValue="" wrapContent="false">


                <!-- <ScrollView ref="scroll1" @scroll="onScroll($event, 1)" height="100%" scrollBarIndicatorVisible="false"> -->
                    <StackLayout id="stackList1" ref="stackList1" paddingBottom="10">

                        <ContentPreloader v-if="!tab1" />

                        <PageProfileGuruKelas v-if="tab1" :items="get_profile_guru_payload.payload_kelas" />

                    </StackLayout>
                <!-- </ScrollView> -->

            </TabViewItem>

            <TabViewItem title="Kelompok" bageValue="" wrapContent="false">
              <StackLayout>
                    <Label color="#28BAAA" text="Yang dibuat" padding="10" backgroundColor="white" v-shadow="{
                        elevation: 0,
                        bgcolor: '#6DBAB1'
                    }" borderBottomWidth="1" borderBottomColor="#28BAAA" />

                    <!-- <ScrollView ref="scroll2" @scroll="onScroll($event, 2)" height="100%" scrollBarIndicatorVisible="false"> -->
                        <StackLayout id="stackList2" ref="stackList2" paddingBottom="25" paddingTop="5">

                            <ContentPreloader v-if="!tab2" />

                            <PageProfileGuruGroup v-if="tab2" :items="get_profile_guru_payload.payload_group" />

                            <ActivityIndicator ref="indicator2" color="#28ADAA" :busy="busy2" @busyChange="onBusyChange($event, 2)" />

                        </StackLayout>
                    <!-- </ScrollView> -->

                </StackLayout>
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
    data() {
        return {
            busy0: false,
            busy1: false,
            busy2: false,

            selectedIndex: 0,

            tab0: false,
            tab1: false,
            tab2: false,
        }
    },
    // mounted(){
    //   console.log(this.get_profile_guru_payload.payload_biodata)
    // },
    methods: {
            onBusyChange(event, index) {
                console.log(event.value, index)
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
            onBack() {
                new Promise(resolve => {
                    this.rendering0 = true;
                    resolve();
                }).then(result => {
                    this.$navigateBack();
                    // this.$modal.close("Aku Pulang")
                });
            },
            // TABVIEW

            onSelectedIndexChanged: function(args) {

                let newIndex = args.value;
                this.selectedIndex = newIndex;
                console.log('Current tab index: ' + newIndex, this.selectedIndex);

                setTimeout(() => {
                    this['tab' + newIndex] = true
                }, 100)

            },
            // BADGE UNTUK TABVIEW
            // CSS yang diimplementasikan ada di app.scss
            onTabViewLoaded(args) {
                if (args.object == undefined) return;

                const tabView = args.object;
                if (isIOS) {
                    tabView.items.forEach((item) => {
                        if (item.bageValue) {
                            item.__controller.tabBarItem.badgeValue = item.bageValue;
                        }
                    });
                }
                if (isAndroid) {

                    tabView._badges = {};
                    const nativeTabView = tabView._tabLayout.getChildAt(0);
                    for (let i = 0; i < nativeTabView.getChildCount(); i++) {
                        this.addBadges(tabView, i, nativeTabView.getChildAt(i), tabView.items[i].bageValue);
                    }

                }
            },
            onTabViewUnloaded(args) {
                if (args.object == undefined) return;

                const tabView = args.object;
                if (isAndroid) {
                    const nativeTabView = tabView._tabLayout.getChildAt(0);
                    for (let i = 0; i < nativeTabView.getChildCount(); i++) {
                        this.removeBadges(tabView, i, nativeTabView.getChildAt(i));
                    }
                    tabView._badges = null;
                }
            },
            addBadges(tabView, tabIndex, view, count) {
                console.log(count)
                if (count) {
                    const contentView = new ContentView();
                    contentView.className = "badge";

                    const label = new Label();
                    label.className = "badge-text";
                    label.text = count;

                    contentView.content = label;
                    (contentView)._inheritStyleScope((tabView)._styleScope);
                    contentView._setupUI(tabView._context);
                    contentView.onLoaded();

                    view.addView(contentView.nativeView);
                    tabView._badges[tabIndex] = contentView;
                }
                view.setOrientation(android.widget.LinearLayout.HORIZONTAL);
            },
            removeBadges(tabView, tabIndex, view) {
                const contentView = tabView._badges[tabIndex];
                if (contentView) {
                    contentView.content = null;
                    view.removeView(contentView.nativeView);
                    contentView.onUnloaded();
                }
            },

    }
}

</script>
