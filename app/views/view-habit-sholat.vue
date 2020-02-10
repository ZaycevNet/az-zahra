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


    <StackLayout @loaded="onLoaded_Rendering(0, 400)">

        <!-- jika menggunakan showModal, ini pengganti ActionBar -->
        <!-- <ModalActionbar @onBack="onBack" /> -->

        <SholatHeadline habit="Sholat" />
        <StackLayout v-if="!rendering0" @loaded="onLoad">

            <TabView ref="tabview" id="tabview" :selectedIndex="selectedIndex" @selectedIndexChange="onSelectedIndexChanged" @loaded="onTabViewLoaded" @unloaded="onTabViewUnloaded" height="100%" tabTextFontSize="15" selectedTabTextColor="white" androidSelectedTabHighlightColor="white"
            tabTextColor="rgb(255,255,255,0.5)" tabBackgroundColor="#28BAAA" iosIconRenderingMode="alwaysOriginal">

                <TabViewItem title="Fardhu" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <ContentPreloader v-if="!tab0" />

                        <PageHabitSholat v-if="tab0" :items="get_habit_sholat_fardhu_payload" vuex="sholat_fardhu" class="tabviewitem-container" />

                        <ActivityIndicator v-if="busy" ref="indicator" color="#28ADAA" :busy="busy" @busyChange="onBusyChange" />
                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Jum'at" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <ContentPreloader v-if="!tab1" />

                        <PageHabitSholat v-if="tab1" :items="get_habit_sholat_jumat_payload" vuex="sholat_jumat" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>
                <TabViewItem title="Malam" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <ContentPreloader v-if="!tab2" />

                        <PageHabitSholat v-if="tab2" :items="get_habit_sholat_malam_payload" vuex="sholat_malam" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Pagi" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <ContentPreloader v-if="!tab3" />

                        <PageHabitSholat v-if="tab3" :items="get_habit_sholat_pagi_payload" vuex="sholat_pagi" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Hari Raya" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <ContentPreloader v-if="!tab4" />

                        <PageHabitSholat v-if="tab4" :items="get_habit_sholat_hari_raya_payload" vuex="sholat_hari_raya" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>

                <TabViewItem title="Tambahan" bageValue="" wrapContent="false">
                    <ScrollView height="100%" scrollBarIndicatorVisible="false">
                      <StackLayout>
                        <ContentPreloader v-if="!tab5" />

                        <PageHabitSholat v-if="tab5" :items="get_habit_sholat_tambahan_payload" vuex="sholat_tambahan" class="tabviewitem-container" />

                      </StackLayout>
                    </ScrollView>
                </TabViewItem>


            </TabView>
        </StackLayout>

        <ContentPreloader v-if="rendering0 && initContentPreloader" />

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
          busy: false,

            selectedIndex: 0,

            tab0: false,
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
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
