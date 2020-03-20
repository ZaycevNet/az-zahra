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
    padding-right: 20;
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

TabView > .bottom-navigation {
    font-size: 16;
    font-weight: bold;
}

TabView {
    /* selected-tab-text-color: $theme-primary-color;
  border-bottom-color: $theme-primary-color;
  android-selected-tab-highlight-color: $theme-primary-color; */
    font-size: 15;
}

Page {
  /* margin-bottom: 50;   */
}
</style>

<template>

<Page actionBarHidden="false" @loaded="onPageLoaded">

    <ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <!-- <Ripple rippleColor="#28ADAA" @tap="onBack"> -->
              <Image height="40" width="40" src="~/assets/logo_1.png" />
                <!-- <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" /> -->
            <!-- </Ripple> -->
            <StackLayout  col="1" paddingLeft="10">
              <Label @tap="onBack" class="action-bar-title">
                <FormattedString>
                  <Span text="Az-Zahra" class="FB" fontWeight="bold" fontSize="20"/>
                </FormattedString>
              </Label>
              <Label @tap="onBack">
                <FormattedString>
                  <Span text="Untuk Generasi Islami" class="CG" fontSize="13" />
                </FormattedString>
              </Label>
              <!-- <Label text="Az-Zahra" class="FB" /> -->
            </StackLayout>
            <Ripple rippleColor="#28ADAA" @tap="openDrawer" col="2">
                <Label :text="'ion-ios-menu' | fonticon" class="action-bar-right ion" fontSize="30" />
            </Ripple>
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <!-- jika menggunakan showModal, ini pengganti ActionBar -->

    <GridLayout rows="*" @loaded="onLoaded_Rendering(0, 300)" >

      <MiniProfile verticalAlignment="top" habit="Hasil Kelompok" height="25%" v-if="!rendering0"/>

      <!-- selectedTabTextColor="rgba(255,119,143,1)" -->
      <!-- tabTextColor="rgba(255,222,231,1)" -->
      <TabView row="0" ref="tabview" id="tabview" :selectedIndex="selectedIndex" v-if="!rendering0" @selectedIndexChange="onSelectedIndexChanged" @loaded="onTabViewLoaded" @unloaded="onTabViewUnloaded" height="100%" tabTextFontSize="15" selectedTabTextColor="rgba(255,119,143,1)" androidSelectedTabHighlightColor="transparant" tabTextColor="rgba(255,222,231,1)" tabBackgroundColor="white" iosIconRenderingMode="alwaysOriginal" androidTabsPosition="bottom">

          <TabViewItem :title="String.fromCharCode('0xf30c') + ' Beranda'" bageValue="" wrapContent="false" class="bottom-navigation ion">

            <ViewDashboardMainContent :items="get_habit_membaca_islami_payload" />

          </TabViewItem>

          <TabViewItem :title="String.fromCharCode('0xf274') + ' Timeline'" bageValue="" wrapContent="false" class="bottom-navigation ion">

              <ViewTimelineMainContent :items="get_habit_membaca_islami_payload" />

          </TabViewItem>

          <TabViewItem :title="String.fromCharCode('0xf2bd') + ' Jurnal'" bageValue="" wrapContent="false" class="bottom-navigation ion">

              <ViewJurnalMainContent :items="get_habit_membaca_islami_payload" />

          </TabViewItem>

          <!-- <TabViewItem :title="String.fromCharCode('0xf345') + ' Profile'" bageValue="" wrapContent="false" class="bottom-navigation ion">

              <ViewJurnalMainContent :items="get_habit_membaca_islami_payload" />

          </TabViewItem> -->
      </TabView>

    </GridLayout>

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

import ViewJurnalMainContent from "@/views/jurnal/view-jurnal-main-content"
import ViewDashboardMainContent from "@/views/dashboard/view-dashboard-main-content"
import ViewTimelineMainContent from "@/views/timeline/view-timeline-main-content"

export default {
    mixins: [delayrendering],
    // props: {
    //   routeProps: {
    //     default: () => ({
    //         origin: "before route", // pada dasarnya data inspeksi masih invalid (belum divalidasi oleh
    //     })
    //   }
    // },
    components: {
      ViewJurnalMainContent,
      ViewDashboardMainContent,
      ViewTimelineMainContent,
    },
    created() {
      // this.statusbar.setStatusBarColor("#28ADAA");
      // this.statusbar.enableFullScreen.leanBack();
      // this.statusbar.hideNavigationBar();
      this.statusbar.setStatusBarColorTransparent();
    },
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
        setTimeout(() =>{
          // this.openDrawer();
        }, 500)
        // this.itemList = this.get_habit_membaca_payload;

        // setTimeout(() => {
        //   this.rendering = false;
        // }, 400);
        // console.log(this.$store)
        // alert(this.$refs.tabviewitem.nativeView.fontSize)

        // this.statusbar.setNavigationBarColor("white");
        // this.statusbar.setStatusBarColor("#28ADAA");
    },
    methods: {
      onPageLoaded() {
        // const application = require('tns-core-modules/application');
        // application.android.on('activityBackPressed', args => {
        //
        //     new Promise(resolve => {
        //         resolve();
        //     }).then(result => {
        //         // this.$navigateBack();
        //         // this.$modal.close("Aku Pulang")
        //     });
        //
        //     args.cancel = true //
        //
        // })
      },
        // onBack() {
        //         // alert(this.routeProps.origin);
        //         // this.$router.replace('/');
        //         new Promise(resolve => {
        //             this.rendering0 = true;
        //             resolve();
        //         }).then(result => {
        //             this.$navigateBack();
        //             // this.$modal.close("Aku Pulang")
        //         });
        //     },
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


                // var myTabView = this.$refs.tabview.nativeView;
                // if (isIOS) {
                //     myTabView.ios.tabBar.hidden = true;
                // } else {
                //     // myTabView.android.removeViewAt(0);
                //     const tabLayout = myTabView.android.tabLayout;
                //     tabLayout.setVisibility(android.view.View.GONE);
                // }

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
