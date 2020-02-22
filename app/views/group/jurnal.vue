<style scoped>

ActionBar {
    /* background-color: #53ba82; */
    background-color: white;
    color: orange;
    padding-left: 0px;
}

.action-bar-title {
    text-align: left;
    /* font-weight: bold; */
    background-color: transparent;
    font-size: 18px;
    /* width: auto; */
    /* padding-right: 16; */
    vertical-alignment: middle;
}

.action-bar-icon {
    font-size: 35px;
    padding-left: 16;
    width: 30;
    vertical-alignment: middle;
}

</style>

<template lang="html">

<Page :actionBarHidden="actionBarHidden" backgroundSpanUnderStatusBar="true" backgroundImage="" backgroundRepeat="no-repeat" backgroundSize="cover">


    <RadSideDrawer ref="drawerBottom" drawerContentSize="Auto" drawerLocation="Bottom" showOverNavigation="true" @drawerOpening="onOpeningDrawerTriggered($event)" @drawerClosed="onClosedDrawerTriggered($event)" @drawerClosing="onClosingDrawerTriggered($event)"
    :gesturesEnabled="gesturesEnabled">

        <ScrollView ~drawerContent ref="drawerContent" backgroundColor="white" marginLeft="0" marginTop="0" marginRight="0" horizontalAlignment="center">

            <GridLayout height="60%" v-shadow="15">

                <v-components :parentPayload="drawerPayload" :is="selectedComponent" @onBubbleCloseTap="onCloseDrawerTap" verticalAlignment="top" />

                <Button @tap="onCreateNew" verticalAlignment="top" v-shadow="10" :text="String.fromCharCode('0xf040')" fontSize="20px" width="50" height="50" margin="50 25 0 0" class="fa" color="white" horizontalAlignment="right" :backgroundColor="drawerPayload.color"
                borderRadius="25%" />

            </GridLayout>

        </ScrollView>

        <Frame ~mainContent>
            <Page actionBarHidden="true">
                <StackLayout>
                    <TabView :selectedIndex="selectedIndex" @selectedIndexChange="indexChange" @loaded="onTabViewLoaded" @unloaded="onTabViewUnloaded">
                        <TabViewItem title="Netizen" bageValue="2">
                            <ScrollView scrollBarIndicatorVisible="false">
                                <StackLayout paddingTop="10">
                                    <StackLayout v-for="index in 10" :key="index+'tab1'">
                                      <Button text="123" @tap="onBubbleEvent('comment')"/>
                                        <!-- <JurnalCard @onBubbleEvent="onBubbleEvent" /> -->
                                    </StackLayout>
                                </StackLayout>
                            </ScrollView>
                        </TabViewItem>
                        <TabViewItem title="Pribadi" bageValue="">
                            <ScrollView scrollBarIndicatorVisible="false">
                                <StackLayout paddingTop="10">
                                    <StackLayout v-for="index in 10" :key="index+'tab2'">
                                        <!-- <JurnalCard @onBubbleEvent="onBubbleEvent" /> -->
                                    </StackLayout>
                                </StackLayout>
                            </ScrollView>
                        </TabViewItem>
                    </TabView>
                </StackLayout>
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

// import JurnalCard from "./components/jurnal-card"

import JurnalComment from "./jurnal-comment"
import JurnalLike from "./jurnal-like"
import JurnalValidasi from "./jurnal-validasi"


// import EditProfilePoliceAnak from "~/pages/edit/profile-police/profile-police-anak.vue";

export default {
    components: {
        // JurnalCard,
        JurnalComment,
        JurnalLike,
        JurnalValidasi,


        // EditProfilePoliceAnak,
    },
    data() {
        return {
            selectedIndex: 0,
            actionBarHidden: false,


            selectedComponent: "",
            gesturesEnabled: false,
            drawerBottom: null,

            url: '~/assets/logo/logo1.png',
            android: "",

            drawerPayload: {
                title: "",
                color: "",
            }
        }
    },
    mounted() {
        this.drawerBottom = this.$refs.drawerBottom

        this.selectedComponent = "JurnalLike"
        this.onOpenDrawerTap()
    },
    methods: {
        onCreateNew() {
                // this.drawerPayload.title = this.currentBubble
                // this.drawerPayload.color = this.drawerPayload.color
                // this.selectedComponent = this.selectedComponent

                const {
                    title, color
                } = this.drawerPayload

                switch (this.drawerPayload.title) {
                    case "komentar":
                        this.$showModal(this.$routes.JurnalCommentFullModalCreate, {
                            fullscreen: false,
                            props: {
                                parentPayload: {
                                    title,
                                    color,
                                }
                            }
                        }).then(data => {
                            console.log(data)
                            this.$store.commit("gotoRoute", false)
                        });

                        break;
                    case "validasi":
                        this.$showModal(this.$routes.JurnalValidasiFullModalCreate, {
                            fullscreen: true,
                            props: {
                                parentPayload: {
                                    title,
                                    color,
                                }
                            }
                        }).then(data => {
                            console.log(data)
                            this.$store.commit("gotoRoute", false)
                        });
                        break;

                }
            },
            onBubbleEvent(args) {

                console.log(args)
                switch (args) {
                    case "detail":

                        const {
                            title, color
                        } = this.drawerPayload

                        this.$navigateTo(this.$routes.JurnalDetailAnchor, {
                            props: {
                                parentPayload: {
                                    title,
                                    color,
                                }
                            }
                        });
                        break
                    case "comment":

                        this.drawerPayload.title = "komentar"
                        this.drawerPayload.color = "#3e96c9"

                        this.selectedComponent = "JurnalComment"
                        this.onOpenDrawerTap()
                        break
                    case "like":

                        this.drawerPayload.title = "suka"
                        this.drawerPayload.color = "#c93e3e"

                        this.selectedComponent = "JurnalLike"
                        this.onOpenDrawerTap()
                        break
                    case "validasi":

                        this.drawerPayload.title = "validasi"
                        this.drawerPayload.color = "#5ebd5c"

                        this.selectedComponent = "JurnalValidasi"
                        this.onOpenDrawerTap()
                        break
                }
                console.log(this.drawerPayload)
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

                this.$store.commit("activityBackPressed", "no-backward")

                application.android.on('activityBackPressed', args => {
                    args.cancel = true // no backward
                    if (!this.$store.getters.gotoRoute) {
                        this.drawerBottom.nativeView.closeDrawer();
                    }
                })
            },
            onCloseDrawerTap() {
                this.$refs.drawerBottom.nativeView.closeDrawer();
            },
            onOpeningDrawerTriggered(arg) {
                // trigger when sidedrawer opening
            },
            onClosedDrawerTriggered(arg) {
                // trigger when sidedrawer closed

                //this.selectedComponent = ""
                this.gesturesEnabled = false
                this.actionBarHidden = false
            },
            onClosingDrawerTriggered(arg) {
                // trigger when sidedrawer closing
            },
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    }
}

</script>
