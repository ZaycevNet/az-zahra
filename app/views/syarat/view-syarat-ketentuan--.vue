<style scoped>

ActionBar,
.action-bar {
    background-color: #fff;
    padding-left: 0px;
    android-elevation: 0;
}

.action-bar-title {
    text-align: left;
    font-size: 18px;
    padding-right: 16;
    background-color: #fff;
    vertical-alignment: middle;
}

.action-bar-right {
    text-align: right;
    font-size: 18px;
    padding-right: 16;
    background-color: #fff;
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

.sub-salam {
  font-size: 16;
  text-alignment:center;
  margin-bottom: 10;
  color:#28ADAA;
}
.title {
  font-size: 30;
  font-weight: bold;
  text-alignment:center;
  margin-top: 10;
  color:#28ADAA;
}

</style>

<template>

<Page actionBarHidden="false">

    <ActionBar color="#28ADAA">
        <GridLayout width="100%" columns="auto, *, 60%">
            <Ripple rippleColor="#28ADAA" @tap="onBack">
                <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            </Ripple>
            <Label @tap="onBack" class="action-bar-title" text="Syarat & Ketentuan" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <ScrollView ref="Container" @scroll="onScroll" scrollBarIndicatorVisible="false" :isUserInteractionEnabled="isUserInteractionEnabled">
        <StackLayout id="stackList" ref="stackList">

          <StackLayout @loaded="onLoaded_Rendering(0, 400)">

              <StackLayout>
                <Image src="~/assets/logo_1_besar.png" stretch="aspectFill" width="100" height="100" />
          			<Label class="title FB" text="Az-Zahra" />
          			<Label class="sub-salam CG" text="Untuk Generasi Islami" />
              </StackLayout>


              <GridLayout ref="container" rows="*,auto" v-if="!rendering0" @loaded="onLoaded_Rendering(1, 250)" >

                  <TabView ref="tabview" id="tabview" :selectedIndex="selectedIndex" @selectedIndexChange="onSelectedIndexChanged" @loaded="onTabViewLoaded" @unloaded="onTabViewUnloaded" height="100%" tabTextFontSize="15" selectedTabTextColor="#28BAAA" androidSelectedTabHighlightColor="#28BAAA"
                  tabTextColor="rgb(40, 186, 170,0.5)" tabBackgroundColor="#fff" iosIconRenderingMode="alwaysOriginal">

                      <TabViewItem title="Bacaan Islami" bageValue="" wrapContent="false">
                          <ScrollView ref="scroll0" @scroll="onScroll($event, 0)" height="100%" scrollBarIndicatorVisible="false">
                              <ContentPreloader v-if="!tab0" />

                            <StackLayout id="stackList0" ref="stackList0" paddingBottom="30" >
                              <PageHabitMembaca v-if="tab0" :items="get_habit_membaca_islami_payload" class="tabviewitem-container" />

                              <ActivityIndicator ref="indicator0" color="#28ADAA" :busy="busy0" @busyChange="onBusyChange($event, 0)" />
                            </StackLayout>
                          </ScrollView>
                      </TabViewItem>
                      <TabViewItem title="Bacaan Umum" bageValue="" wrapContent="false">
                        <ScrollView ref="scroll1" @scroll="onScroll($event, 1)" height="100%" scrollBarIndicatorVisible="false">
                          <ContentPreloader v-if="!tab1" />

                          <StackLayout id="stackList1" ref="stackList1" paddingBottom="30" >
                            <PageHabitMembaca v-if="tab1" :items="get_habit_membaca_umum_payload" class="tabviewitem-container" />

                            <ActivityIndicator v-if="tab1" ref="indicator0" color="#28ADAA" :busy="busy1" @busyChange="onBusyChange($event, 1)" />
                          </StackLayout>
                        </ScrollView>
                      </TabViewItem>
                  </TabView>

                  <Fab @tap="" rowSpan="2" icon="~/assets/icons/baseline_add_white.png" rippleColor="#f1f1f1" class="fab-button"></Fab>

              </GridLayout>
              <ContentPreloader v-if="rendering0 && initContentPreloader" />
          </StackLayout>

        </StackLayout>
    </ScrollView>

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
// import { Statusbar } from "nativescript-plugin-statusbar";
// let status = new Statusbar();

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    // props: {
    //   routeProps: {
    //     default: () => ({
    //         origin: "before route", // pada dasarnya data inspeksi masih invalid (belum divalidasi oleh
    //     })
    //   }
    // },
    data() {
        return {
            // itemList: [],

            busy0: false,
            busy1: false,

            selectedIndex: 0,

            tab0: false,
            tab1: false,
        }
    },
    mounted() {

        // this.itemList = this.get_habit_membaca_payload;

        const application = require('tns-core-modules/application');
        application.android.on('activityBackPressed', args => {

            new Promise(resolve => {
                this.rendering0 = true;
                resolve();
            }).then(result => {
                this.$navigateBack();
                // this.$modal.close("Aku Pulang")
            });

            args.cancel = true //
        })

        // setTimeout(() => {
        //   this.rendering = false;
        // }, 400);
        // console.log(this.$store)
        // alert(this.$refs.tabviewitem.nativeView.fontSize)

        // this.statusbar.setNavigationBarColor("white");
        // this.statusbar.setStatusBarColor("#28ADAA");
    },
    methods: {
        onBusyChange(event, index) {
          console.log(event.value, index)
        },
        onScroll(args, index) {
            console.log(index);
            if (args.scrollY >= (args.object.getViewById("stackList"+index).getActualSize().height - args.object.getActualSize().height)) {

                this['busy'+index] = true;
                setTimeout(() => {
                    this['busy'+index] = false;

                    // let n = [];
                    // for (var i = 0; i < 30; i++) {
                    //     n.push(i + 1);
                    // }
                    // this.itemList.push(n);

                }, 1000);
            }
        },
        onBack() {
                // alert(this.routeProps.origin);
                // this.$router.replace('/');
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
