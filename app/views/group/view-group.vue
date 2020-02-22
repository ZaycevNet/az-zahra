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
    font-size: 26;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.action-bar-icon {
    font-size: 35px;
    width: 30;
}

.top-radius {
    border-top-right-radius: 10;
    border-top-left-radius: 10;
    border-width: 0;
}

</style>

<template lang="html">

<Page ref="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true" backgroundImage="" backgroundRepeat="no-repeat" backgroundSize="cover">


    <RadSideDrawer ref="drawerBottom" drawerContentSize="Auto" drawerLocation="Bottom" showOverNavigation="true" @drawerOpening="onOpeningDrawerTriggered($event)" @drawerClosed="onClosedDrawerTriggered($event)" @drawerClosing="onClosingDrawerTriggered($event)"
    :gesturesEnabled="gesturesEnabled">

        <ScrollView ~drawerContent ref="drawerContent" backgroundColor="white" marginLeft="10" marginTop="0" marginRight="10" horizontalAlignment="center" class="top-radius">

            <StackLayout height="35%" class="top-radius" backgroundColor="#28ADAA">
                <StackLayout backgroundColor="#28ADAA" height="10" width="100%" class="top-radius" />

                <Gradient direction="top down" colors="#28ADAA, #28BAAA" borderRadius="0">
                    <Label color="white" fontSize="16" textAlignment="center" text="Formulir Kelompok" padding="5 10 15 10" />
                </Gradient>

                <DockLayout backgroundColor="white" stretchLastChild="true" height="100%" padding="0 10 10 10">
                    <GroupNewTextfield dock="top" placeholder="Isikan dengan nama kelompok" />

                    <StackLayout verticalAlignment="bottom">
                        <GroupButtonConfirm @onBubbleEvent="onCloseDrawerTap" width="50%" padding="0" />
                    </StackLayout>
                </DockLayout>

                <!-- <Gradient direction="top down" colors="#28ADAA, #28BAAA"  borderRadius="8">
                  <Label color="white" fontSize="16" textAlignment="center" text="Buat Kelompok Baru" padding="15 10"/>
              </Gradient> -->

                <!-- <Button @tap="onCreateNew" verticalAlignment="top" v-shadow="10" :text="String.fromCharCode('0xf040')" fontSize="20px" width="50" height="50" margin="50 25 0 0" class="fa" color="white" horizontalAlignment="right" backgroundColor="red"
                borderRadius="25%" /> -->

            </StackLayout>
        </ScrollView>

        <Frame ~mainContent>
            <Page ref="pageContent" actionBarHidden="false" backgroundColor="#28ADAA" >

              <ActionBar ref="actionbar" color="white" flat="true">
                  <GridLayout width="100%" columns="auto, *, 60%">
                      <Ripple rippleColor="#28ADAA">
                          <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
                      </Ripple>

                      <Label @tap="" class="action-bar-title" text="Kelompok" col="1" />
                      <Ripple rippleColor="#28ADAA" col="2" @tap="onNew">
                          <Label class="action-bar-right ion" :text="'ion-md-add' | fonticon" />
                      </Ripple>
                  </GridLayout>
              </ActionBar>


                <!-- <Button @tap="onOpenDrawerTap()" text="OK" /> -->
                <ViewGroupContent backgroundColor="white" />
            </Page>
        </Frame>

    </RadSideDrawer>
</Page>

</template>

<script>

import {
    isIOS, isAndroid
}
from 'platform';
import {
    EventData
}
from 'data/observable';
import {
    Page
}
from 'ui/page';
import {
    ContentView
}
from 'ui/content-view';
import {
    Label
}
from 'ui/label';

const application = require('tns-core-modules/application')

// import JurnalComment from "./jurnal-comment"

import ViewGroupContent from "./view-group-content";

export default {
    components: {
        // JurnalCard,
        // JurnalComment,

        ViewGroupContent,
    },
    data() {
        return {
            isDrawer: false,


            selectedIndex: 0,


            // selectedComponent: "",
            gesturesEnabled: false,
            drawerBottom: null,

            // url: '~/assets/logo/logo1.png',
            // android: "",

            // drawerPayload: {
            //     title: "",
            //     color: "",
            // }
        }
    },
    mounted() {
        this.drawerBottom = this.$refs.drawerBottom;


        // Import the EventBus we just created.
        const { EventBus } = require('@/event-bus.js');
        EventBus.$on('ViewGroup', data => {

          this.isDrawer = true;
          this.onOpenDrawerTap();

          // this.$refs.actionbar.nativeView.animate({
          //   translate: {
          //       x: 0,
          //       y: -100
          //   },
          //   duration:1000
          // })

        });


        const application = require('tns-core-modules/application');
        application.android.on('activityBackPressed', args => {

            if(this.isDrawer) {
              this.onCloseDrawerTap()
              return
            }

            new Promise(resolve => {
                this.rendering0 = true;
                resolve();
            }).then(result => {
                this.$navigateBack();
                // this.$modal.close("Aku Pulang")
            });

            args.cancel = true //
        })

    },
    methods: {

        onNew(){
          this.onBubbleEvent("new");
          this.isDrawer = true;

          // this.$refs.actionbar.nativeView.animate({
          //   translate: {
          //       x: 0,
          //       y: -100
          //   },
          //   duration:1000
          // })

        },
        onBubbleEvent(args) {
            switch (args) {
                case "new":
                    this.onOpenDrawerTap()
                    break;
                case "edit":
                    this.onOpenDrawerTap()
                    break;
            }
        },

            // TABVIEW
            indexChange: function(args) {
                let newIndex = args.value
                console.log('Current tab index: ' + newIndex)
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

            /**
             * Sidedrawer Event
             */
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            onOpenDrawerTap() {
                this.$refs.drawerBottom.nativeView.showDrawer();

                this.gesturesEnabled = true
                    // this.actionBarHidden = true
                //
                // this.$store.commit("activityBackPressed", "no-backward")
                //
                // application.android.on('activityBackPressed', args => {
                //     args.cancel = true // no backward
                //     if (!this.$store.getters.gotoRoute) {
                //         this.drawerBottom.nativeView.closeDrawer();
                //     }
                // })
            },
            onCloseDrawerTap() {
                this.$refs.drawerBottom.nativeView.closeDrawer();
            },
            onOpeningDrawerTriggered(arg) {
                // trigger when sidedrawer opening
            },
            onClosedDrawerTriggered(arg) {
                // trigger when sidedrawer closed

                this.gesturesEnabled = false

                // this.$refs.actionbar.nativeView.animate({
                //   translate: {
                //       x: 0,
                //       y: 0
                //   },
                // })
            },
            onClosingDrawerTriggered(arg) {
                // trigger when sidedrawer closing
            },
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    }
}

</script>
