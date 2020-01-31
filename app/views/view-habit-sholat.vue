<style scoped>

.full-border-last-item {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
}

.off-top-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
}

.off-bottom-border {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-width: 0;
}

.off-top-bottom-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
    border-bottom-width: 0;
}

.tabviewitem-container {
  padding-bottom: 10;
}

ActionBar {
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

</style>

<template>

<Page @loaded="onNavigatingTo">

    <ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <!-- <Ripple rippleColor="orange" @tap="onNavigationButtonTap"> -->
            <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            <!-- </Ripple> -->
            <Label class="action-bar-title" text="Kebiasaan" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <StackLayout>
        <HabitHeadline :habit="$store.getters.get_habit_adab" />
        <TabView
            ref="tabview"
            id="tabview"
            :selectedIndex="selectedIndex"
            @selectedIndexChange="onSelectedIndexChanged"
            @loaded="onTabViewLoaded"
            @unloaded="onTabViewUnloaded"
            height="100%"
            tabTextFontSize="15"
            selectedTabTextColor="white"
            androidSelectedTabHighlightColor="white"
            tabTextColor="rgb(255,255,255,0.5)"
            tabBackgroundColor="#28BAAA"
            iosIconRenderingMode="alwaysOriginal">

            <TabViewItem
              v-for="(item, index) in $store.getters.items_payload_habit.payload_title"
              :key="index"
              :title="item.title" bageValue="" wrapContent="false">
              <ScrollView height="100%" scrollBarIndicatorVisible="false">
                  <PageHabitSholat :items="item.payload_subtitle" class="tabviewitem-container"/>
              </ScrollView>
            </TabViewItem>



            <!-- <TabViewItem title="Diri Sendiri" bageValue="" wrapContent="false">
              <ScrollView height="100%" scrollBarIndicatorVisible="false">
                  <HabitAdabAlat class="tabviewitem-container"/>
              </ScrollView>
            </TabViewItem>
            <TabViewItem title="Ayah/Ibu" bageValue="" wrapContent="false">
              <ScrollView height="100%" scrollBarIndicatorVisible="false">
                  <HabitAdabAlat class="tabviewitem-container"/>
              </ScrollView>
            </TabViewItem>
            <TabViewItem title="Saudara" bageValue="" wrapContent="false">
              <ScrollView height="100%" scrollBarIndicatorVisible="false">
                  <HabitAdabAlat class="tabviewitem-container"/>
              </ScrollView>
            </TabViewItem>
            <TabViewItem title="Kerabat" bageValue="" wrapContent="false">
              <ScrollView height="100%" scrollBarIndicatorVisible="false">
                  <HabitAdabAlat class="tabviewitem-container"/>
              </ScrollView>
            </TabViewItem>
            <TabViewItem title="Guru" bageValue="" wrapContent="false">
              <ScrollView height="100%" scrollBarIndicatorVisible="false">
                  <HabitAdabAlat class="tabviewitem-container"/>
              </ScrollView>
            </TabViewItem>
            <TabViewItem title="Orang Lain" bageValue="" wrapContent="false">
              <ScrollView height="100%" scrollBarIndicatorVisible="false">
                  <HabitAdabAlat class="tabviewitem-container"/>
              </ScrollView>
            </TabViewItem>
            <TabViewItem title="Alat/Tempat" bageValue="" wrapContent="false">
              <ScrollView height="100%" scrollBarIndicatorVisible="false">
                  <HabitAdabAlat class="tabviewitem-container"/>
              </ScrollView>
            </TabViewItem> -->
        </TabView>
    </StackLayout>
</Page>

</template>

<script>
import { Label } from 'ui/label';
import { isIOS, isAndroid } from 'platform';
import { ContentView } from 'ui/content-view';
import { Statusbar } from "nativescript-plugin-statusbar";
let status = new Statusbar();

export default {
    data() {
            return {
                selectedIndex: 0,

            }
        },
        mounted(){
          // console.log(this.$store)
          // alert(this.$refs.tabviewitem.nativeView.fontSize)
        },
        methods: {
            onNavigatingTo(args) {
                const page = args.object;

                // status.enableFullScreen.leanBack();
                status.setNavigationBarColor("#28ADAA");
                status.setStatusBarColor("#28ADAA");
            },

            // TABVIEW
            onSelectedIndexChanged: function(args) {

                let newIndex = args.value;
                this.selectedIndex = newIndex;
                console.log('Current tab index: ' + newIndex, this.selectedIndex);

            },
            // BADGE UNTUK TABVIEW
            // CSS yang diimplementasikan ada di app.scss
            onTabViewLoaded(args) {
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
