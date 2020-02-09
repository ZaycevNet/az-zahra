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

</style>

<template>

<Page actionBarHidden="false">

    <ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <Ripple rippleColor="#28ADAA" @tap="onBack">
                <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            </Ripple>
            <Label @tap="onBack" class="action-bar-title" text="Kebiasaan" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>


    <StackLayout @loaded="onLoaded_Rendering(0, 500)">

        <!-- jika menggunakan showModal, ini pengganti ActionBar -->
        <!-- <ModalActionbar @onBack="onBack" /> -->

        <BerpikirHeadline habit="Berpikir Positif" />
        <StackLayout v-if="!rendering0" @loaded="onLoad">

            <TabView ref="tabview" id="tabview" :selectedIndex="selectedIndex" @selectedIndexChange="onSelectedIndexChanged" @loaded="onTabViewLoaded" @unloaded="onTabViewUnloaded" height="100%" tabTextFontSize="15" selectedTabTextColor="white" androidSelectedTabHighlightColor="white"
            tabTextColor="rgb(255,255,255,0.5)" tabBackgroundColor="#28BAAA" iosIconRenderingMode="alwaysOriginal">

                <TabViewItem title="Pertama" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <PageHabitBerpikir v-if="tab1" :items="get_habit_berpikir_pertama_payload" vuex="berpikir_pertama" class="tabviewitem-container" />

                        <ActivityIndicator v-if="busy" ref="indicator" color="#28ADAA" :busy="busy" @busyChange="onBusyChange" />
                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Kedua" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <PageHabitBerpikir v-if="tab2" :items="get_habit_berpikir_kedua_payload" vuex="berpikir_kedua" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>
                <TabViewItem title="Ketiga" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <PageHabitBerpikir v-if="tab3" :items="get_habit_berpikir_ketiga_payload" vuex="berpikir_ketiga" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Keempat" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <PageHabitBerpikir v-if="tab4" :items="get_habit_berpikir_keempat_payload" vuex="berpikir_keempat" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Kelima" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <PageHabitBerpikir v-if="tab5" :items="get_habit_berpikir_kelima_payload" vuex="berpikir_kelima" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Keenam" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <PageHabitBerpikir v-if="tab6" :items="get_habit_berpikir_keenam_payload" vuex="berpikir_keenam" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Ketujuh" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <PageHabitBerpikir v-if="tab7" :items="get_habit_berpikir_ketujuh_payload" vuex="berpikir_ketujuh" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Kedelapan" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <PageHabitBerpikir :items="get_habit_berpikir_kedelapan_payload" vuex="berpikir_kedelapan" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Kesembilan" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <PageHabitBerpikir v-if="tab9" :items="get_habit_berpikir_kesembilan_payload" vuex="berpikir_kesembilan" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Kesepuluh" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <PageHabitBerpikir v-if="tab10" :items="get_habit_berpikir_kesepuluh_payload" vuex="berpikir_kesepuluh" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>


            </TabView>
        </StackLayout>
    </StackLayout>
</Page>

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
          busy: true,

            selectedIndex: 0,

            tab1: true,
            tab2: true,
            tab3: true,
            tab4: true,
            tab5: true,
            tab6: true,
            tab7: true,
            tab8: true,
            tab9: true,
            tab10: true,
        }
    },
    mounted() {
        const application = require('tns-core-modules/application');
        application.android.on('activityBackPressed', args => {

            new Promise(resolve => {
                // this.rendering0 = true;
                resolve();
            }).then(result => {
                this.$navigateBack();
                // this.$modal.close("Aku Pulang")
            });

            args.cancel = true //
        })

    },
    methods: {
        onLoad(){
          setTimeout(() => {
            this.busy = false;
          }, 1000)
        },
        onBusyChange(event) {
          console.log(event.value)
        },
        onBack() {
                // alert(this.routeProps.origin);
                // this.$router.replace('/');
                new Promise(resolve => {
                    // this.rendering0 = true;
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

                // this.tab0 = false;
                // this.tab1 = false;
                // this.tab2 = false;
                // this.tab3 = false;
                // this.tab4 = false;
                // this.tab5 = false;
                // this.tab6 = false;

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

                    /*
                    for (let i = 0; i < nativeTabView.getChildCount(); i++) {
                        if (tabView.items[i].wrapContent) {
                            const view = nativeTabView.getChildAt(i),
                                layoutParams = view.getLayoutParams();

                            layoutParams.weight = 0;
                            // tabviewitem width will re-ajusted follows by its text, default width is fixed
                            // layoutParams.width = android.widget.LinearLayout.LayoutParams.WRAP_CONTENT;
                            layoutParams.width = 200;

                            view.setLayoutParams(layoutParams);
                        }
                    }
                    nativeTabView.invalidate();
                    */
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
