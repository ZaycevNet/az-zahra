<style scoped>

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

.tabviewitem-container {
    padding-bottom: 10;
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
                <ScrollView ref="scroll0" @scroll="onScroll($event, 0)" height="100%" scrollBarIndicatorVisible="false">
                    <StackLayout id="stackList0" ref="stackList0" paddingBottom="10">

                        <ContentPreloader v-if="!tab0" />

                        <PageProfileSiswaBiodata v-if="tab0" :items="get_profile_siswa_payload.payload_biodata" class="tabviewitem-container" />

                    </StackLayout>
                </ScrollView>
            </TabViewItem>


            <TabViewItem title="Orangtua" bageValue="" wrapContent="false">
                <StackLayout>

                    <TabView ref="tabview_child" id="tabview_child" @loaded="onLoad" @selectedIndexChange="onSelectedIndexChangedChild" height="100%" tabTextFontSize="14" selectedTabTextColor="#28BAAA" androidSelectedTabHighlightColor="#28BAAA" tabTextColor="rgba(40,186,170,0.3)"
                    tabBackgroundColor="white" iosIconRenderingMode="alwaysOriginal">

                        <TabViewItem v-for="(item, index) in get_profile_siswa_payload.payload_orangtua" :key="index" :title="item.jenis | capitalize" bageValue="" wrapContent="false">
                            <StackLayout>
                                <StackLayout v-shadow="{
                                elevation: 0,
                                bgcolor: '#6DBAB1'
                            }" height="1" width="100%" backgroundColor="rgba(40,186,170,0.3)" />

                                <ScrollView :ref="'scroll_child_'+index" @scroll="onScrollChild($event, index)" height="100%" scrollBarIndicatorVisible="false">
                                    <StackLayout :id="'stackList_child_'+index" :ref="'stackList_child_'+index" paddingBottom="10">

                                        <ContentPreloader v-if="!content_preloader(index)" />

                                        <PageProfileSiswaOrangtua v-if="content_preloader(index)" :items="item" class="tabviewitem-container" />

                                    </StackLayout>
                                </ScrollView>
                            </StackLayout>
                        </TabViewItem>

                    </TabView>

                </StackLayout>
            </TabViewItem>


            <!-- <TabViewItem title="Kelompok" bageValue="" wrapContent="false">
                <StackLayout>

                    <TabView ref="tabview_child1" id="tabview_child1" @loaded="onLoad1" @selectedIndexChange="onSelectedIndexChangedChild1" height="100%" tabTextFontSize="14" selectedTabTextColor="#28BAAA" androidSelectedTabHighlightColor="white" tabTextColor="rgba(40,186,170,0.3)"
                    tabBackgroundColor="white" iosIconRenderingMode="alwaysOriginal">

                        <TabViewItem title="Yang diikuti" bageValue="" wrapContent="false">
                            <StackLayout>
                                <StackLayout v-shadow="{
                                  elevation: 0,
                                  bgcolor: '#6DBAB1'
                              }" height="1" width="100%" backgroundColor="rgba(40,186,170,0.3)" />
                                <ScrollView ref="scroll_child1_0" @scroll="onScrollChild1($event, 0)" height="100%" scrollBarIndicatorVisible="false">
                                    <StackLayout id="stackList_child1_0" ref="stackList_child1_0" paddingBottom="0">

                                        <ContentPreloader v-if="!tab_child1_0" />

                                        <PageProfileSiswaGroup v-if="tab_child1_0" :items="get_profile_siswa_payload.payload_group" class="tabviewitem-container" />

                                        <ActivityIndicator ref="indicator_child1_0" color="#28ADAA" :busy="busy_child1_0" @busyChange="onBusyChangeChild1($event, 0)" />

                                    </StackLayout>
                                </ScrollView>
                            </StackLayout>
                        </TabViewItem>

                    </TabView>
                </StackLayout>
            </TabViewItem> -->

            <TabViewItem title="Kelompok" bageValue="" wrapContent="false">
              <StackLayout>
                <Label color="#28BAAA" text="Yang diikuti" padding="10" backgroundColor="white" v-shadow="{
                    elevation: 0,
                    bgcolor: '#6DBAB1'
                }" borderBottomWidth="1" borderBottomColor="#28BAAA" />

                    <!-- <StackLayout>
                        <StackLayout v-shadow="{
                        elevation: 0,
                        bgcolor: '#6DBAB1'
                    }" height="1" width="100%" backgroundColor="rgba(40,186,170,0.3)">
                    </StackLayout> -->

                    <ScrollView ref="scroll2" @scroll="onScroll($event, 2)" height="100%" scrollBarIndicatorVisible="false">
                        <StackLayout id="stackList2" ref="stackList2" paddingBottom="25" paddingTop="5">

                            <ContentPreloader v-if="!tab2" />

                            <PageProfileSiswaGroup v-if="tab2" :items="get_profile_siswa_payload.payload_group" class="tabviewitem-container" />

                            <ActivityIndicator ref="indicator2" color="#28ADAA" :busy="busy2" @busyChange="onBusyChange($event, 2)" />
                        </StackLayout>
                    </ScrollView>
                </StackLayout>
            </TabViewItem>

            <TabViewItem title="Kebiasaan" bageValue="" wrapContent="false">
                <ScrollView ref="scroll3" @scroll="onScroll($event, 3)" height="100%" scrollBarIndicatorVisible="false">
                    <StackLayout id="stackList3" ref="stackList3" paddingBottom="25" paddingTop="5">

                        <ContentPreloader v-if="!tab3" />

                        <PageProfileSiswaHabit v-if="tab3" :items="get_habit_zis_waqaf_payload" class="tabviewitem-container" />

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
    data() {
        return {
            busy_child_0: false,
            busy_child_1: false,
            busy_child_2: false,
            busy_child_3: false,

            tab_child_0: false,
            tab_child_1: false,
            tab_child_2: false,
            tab_child_3: false,

            // busy_child1_0: false,
            // tab_child1_0: false,

            busy0: false,
            busy1: false,
            busy2: false,
            busy3: false,

            selectedIndex: 0,

            tab0: false,

            tab1: false,
            tab2: false,
            tab3: false,
        }
    },
    computed: {
        content_preloader() {
            return function(index) {
                return this['tab_child_' + index];
            }
        }
    },

    methods: {
        reAdjustDefaultScrollY(args, index) {
                // TIDAK WAJIB
                // menerapkan ini akan banyak setting sana-sini
                // biar saja user memahami UI sendiri


                // digunakan agar nested scrollview tidak perlu di scroll dulu untuk reset
                // jika x default dari nested scrollview 0, harus di scroll ke bawah minimal 1 x baru bisa di reset pake gesture


                return
                setTimeout(() => {
                    // args.object.scrollToVerticalOffset(args.object.scrollableHeight, true)
                    args.object.scrollToVerticalOffset(25, true)
                }, 3000)

            },
            onLoad() {
                if (!isIOS) {
                    this.$refs.tabview_child.nativeView.android.tabLayout.setBackgroundResource(0);
                }
            },
            // onLoad1() {
            //     if (!isIOS) {
            //         this.$refs.tabview_child1.nativeView.android.tabLayout.setBackgroundResource(0);
            //     }
            // },
            onBusyChange(event, index) {
                console.log(event.value, index)
            },
            onBusyChangeChild(event, index) {
                console.log(event.value, index)
            },
            // onBusyChangeChild1(event, index) {
            //     console.log(event.value, index)
            // },
            onScrollChild(args, index) {
                // console.log(index);
                // console.log(args.scrollY)

                if (args.scrollY >= (args.object.getViewById("stackList_child_" + index).getActualSize().height - args.object.getActualSize().height)) {
                    this['busy_child_' + index] = true;
                    setTimeout(() => {
                        this['busy_child_' + index] = false;

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
            // onScrollChild1(args, index) {
            //     if (args.scrollY >= (args.object.getViewById("stackList_child1_" + index).getActualSize().height - args.object.getActualSize().height)) {
            //         this['busy_child1_' + index] = true;
            //         setTimeout(() => {
            //             this['busy_child1_' + index] = false;
            //         }, 1000);
            //     }
            //
            //     // untuk reset parallex
            //     if (args.scrollY <= 0) {
            //         this.$emit('onBubbleParallex', true);
            //     }
            // },
            // onScrollNested(args) {
            //       // untuk reset parallex
            //     if(args.scrollY <= 0) {
            //         this.$emit('onBubbleParallex', true);
            //     }
            // },
            onScroll(args, index) {
                // console.log(index);
                // if (args.scrollY >= (args.object.getViewById("stackList" + index).getActualSize().height - args.object.getActualSize().height)) {
                //     this['busy' + index] = true;
                //     setTimeout(() => {
                //         this['busy' + index] = false;
                //
                //         // let n = [];
                //         // for (var i = 0; i < 30; i++) {
                //         //     n.push(i + 1);
                //         // }
                //         // this.itemList.push(n);
                //
                //     }, 1000);
                // }

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
            onSelectedIndexChangedChild: function(args) {
                // this.selectedIndex = 1;

                setTimeout(() => {
                    this['tab_child_' + args.value] = true
                }, 100)

            },
            // onSelectedIndexChangedChild1: function(args) {
            //     // this.selectedIndex = 1;
            //
            //     setTimeout(() => {
            //         this['tab_child1_' + args.value] = true
            //     }, 100)
            //
            // },
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
