<style scoped>

.tabviewitem-container {
  padding-bottom: 10;
}

ActionBar, .action-bar {
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

<Page>
    <ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <Ripple rippleColor="#28ADAA" @tap="onBack">
            <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            </Ripple>
            <Label class="action-bar-title" text="Kebiasaan" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <StackLayout >

        <!-- jika menggunakan showModal, ini pengganti ActionBar -->
        <StackLayout height="50" class="action-bar" color="white">
            <GridLayout width="100%" columns="auto, *, 60%">
                <Ripple rippleColor="#28ADAA" @tap="onBack">
                  <Label verticalAlignment="middle" marginLeft="12.5" :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
                </Ripple>
                <Label class="action-bar-title" text="Kebiasaan" col="1" />
            </GridLayout>
        </StackLayout>

        <HabitHeadline :habit="$store.getters.get_habit_adab" />
        <StackLayout   v-if="!rendering">
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
                  <PageHabitAdab :items="item.payload_subtitle" class="tabviewitem-container"/>
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
    props: {
      routeProps: {
        default: () => ({
            origin: "before route", // pada dasarnya data inspeksi masih invalid (belum divalidasi oleh
        })
      }
    },
    data() {
            return {
              rendering: true,
                selectedIndex: 0,
            }
        },
        mounted(){
          const application = require('tns-core-modules/application');
          application.android.on('activityBackPressed', args => {

            // this.rendering = true; // jika v-if gunakan pada tabview yang sudah ke render, akan error
            args.cancel = true //

            this.$modal.close("Aku Pulang")
            // this.$navigateBack();

            console.log("this.rendering", this.rendering)
          })

          setTimeout(() => {
            this.rendering = false;
          }, 500);
          // console.log(this.$store)
          // alert(this.$refs.tabviewitem.nativeView.fontSize)

          status.setNavigationBarColor("white");
          status.setStatusBarColor("#28ADAA");
        },
        methods: {
          onBack(){
            // alert(this.routeProps.origin);
            // this.$router.replace('/');

            this.$modal.close("Aku Pulang")
            // this.$navigateBack();
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
              if(args.object == undefined) return;

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
                if(args.object == undefined) return;

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
