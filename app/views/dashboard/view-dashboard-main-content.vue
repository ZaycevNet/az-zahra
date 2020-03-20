<style scoped>

TabView > * {
    text-transform: none;
}

</style>

<template>

<GridLayout rows="*,auto" @loaded="onLoaded_Rendering(0, 300)">

    <TabView id="subTabview" @selectedIndexChange="onSelectedIndexChanged" v-if="!rendering0" selectedTabTextColor="rgba(255,255,255,1)" androidSelectedTabHighlightColor="rgba(1,1,1,0)" tabTextColor="rgba(255,255,255,0.5)" tabBackgroundColor="rgba(1,1,1,0)"
    iosIconRenderingMode="alwaysOriginal" marginTop="75">

        <TabViewItem title="Beranda">
            <ScrollView :isUserInteractionEnabled="isUserInteractionEnabled" ref="Container" scrollBarIndicatorVisible="false" height="100%">

                    <Gradient direction="top down" colors="rgb(0,0,0,0), #fff, #fff, #fff" paddingBottom="5">

                        <StackLayout @loaded="onLoaded_Rendering(1, 100)">
                            <PageDashboardQuicknews v-if="!rendering1" />
                        </StackLayout>

                        <StackLayout @loaded="onLoaded_Rendering(2, 200)">
                            <Label style="color:black;font-size:18;font-weight:normal;padding:5 0 5 5;" text="Aktivitas Harian" v-if="!rendering2" />
                            <Label style="color:gray;font-size:14;font-weight:normal;padding:0 0 5 5;" text="Wajib diisi setiap hari" v-if="!rendering2" />
                            <PageDashboardHabitHarian v-if="!rendering2" />
                        </StackLayout>

                        <StackLayout @loaded="onLoaded_Rendering(3, 200)">
                            <Label style="color:black;font-size:18;font-weight:normal;padding:15 0 5 5;" text="Aktivitas Tak Terbatas" v-if="!rendering3" />
                            <Label style="color:gray;font-size:14;font-weight:normal;padding:0 0 5 5;" text="Dapat diisi kapan saja" v-if="!rendering3" />
                            <PageDashboardHabitTentatif v-if="!rendering3" />
                        </StackLayout>

                        <!-- <StackLayout @loaded="onLoaded_Rendering(3, 300)">
                    <PageDashboardActivity v-if="!rendering3"/>
                  </StackLayout> -->
                    </Gradient>

            </ScrollView>
        </TabViewItem>
        <TabViewItem title="Berita">
            <GridLayout @loaded="onLoaded1" rows="*,auto">
                <ContentPreloader v-if="!tab1" />

                <RadListView v-if="tab1" ref="Container1" for="i in items" @scrolled="onScroll1" height="100%">
                    <v-template>
                        <StackLayout id="stackList1" :marginBottom="$index < items_length ? 5 : 60">
                            <!-- <Label :text="$index < items_length" /> -->
                            <LocalPageDashboardNews />

                        </StackLayout>
                    </v-template>
                </RadListView>

                <Fab @tap="onScrollTop1" ref="fabButton1" rowSpan="2" icon="~/assets/icons/scroll-to-top.png" rippleColor="#f1f1f1" class="fab-button"></Fab>

            </GridLayout>
        </TabViewItem>

        <TabViewItem title="Jejak">
            <StackLayout>
              <ContentPreloader v-if="!tab2" />
              <PageDashboardActivity v-if="tab2" />
            </StackLayout>
        </TabViewItem>
    </TabView>

    <ContentPreloader marginTop="100" v-if="rendering0" />
    <!-- <Fab @tap="onScrollTop" ref="fabButton" rowSpan="2" icon="~/assets/icons/scroll-to-top.png" rippleColor="#f1f1f1" class="fab-button"></Fab> -->

</GridLayout>

</template>

<script>

import LocalPageDashboardNews from '@/pages/dashboard/page-dashboard-news'

const delayrendering = require("@/mixins/delayrendering");
export default {
    mixins: [delayrendering],
    components: {
        LocalPageDashboardNews
    },
    data() {
        return {
            isUserInteractionEnabled: false,
            tab1: false,
            tab2: false,
            items: [1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7],
        }
    },
    watch: {
        rendering2(val) {
            if (!val)
                this.isUserInteractionEnabled = true
        }
    },
    computed: {
        items_length() {
            return this.items.length - 1
        }
    },
    methods: {
        // TABVIEW
        onSelectedIndexChanged: function(args) {

            let newIndex = args.value;

            setTimeout(() => {
                this['tab' + newIndex] = true
            }, 100)

        },

        onLoaded1() {
            this.$refs.fabButton1.nativeView.translateY = 100;
        },
        onScrollTop1() {
            this.$refs.Container1.nativeView.scrollToIndex(0, true)
            this.$refs.fabButton1.nativeView.animate({
                    translate: {
                        x: 0,
                        y: 100
                    },
                    opacity: 1
                })
                .then(() => {}, () => {});
        },

        onScroll1(args) {
            console.log(`Scrolled to ${args.scrollOffset} offset`)
                // BOTTOM
            if (args.scrollOffset >= (args.object.getViewById("stackList1").getActualSize().height - args.object.getActualSize().height)) {

                this.$refs.fabButton1.nativeView.animate({
                        translate: {
                            x: 0,
                            y: 0
                        },
                        opacity: 1
                    })
                    .then(() => {}, () => {});
            }

            // HIDE FAB when scroll to top at certain point
            if (args.scrollOffset <= args.object.getViewById("stackList1").getActualSize().height) {
                this.$refs.fabButton1.nativeView.animate({
                        translate: {
                            x: 0,
                            y: 100
                        },
                        opacity: 1
                    })
                    .then(() => {}, () => {});
            }
        },
        // onBack() {
        //         new Promise(resolve => {
        //             // this.rendering0 = true;
        //             // this.rendering1 = true;
        //             resolve();
        //         }).then(result => {
        //             this.$navigateBack();
        //             // this.$modal.close("Aku Pulang")
        //         });
        //     },

    },
    mounted() {
        // Import the EventBus we just created.
        // const { EventBus } = require('@/event-bus.js');
        //
        // EventBus.$on('onEventBus_isUserInteractionEnabled', data => {
        // 	this.isUserInteractionEnabled = data;
        // });

        // const application = require('tns-core-modules/application');
        // application.android.on('activityBackPressed', args => {
        //     new Promise(resolve => {
        //         // this.rendering0 = true;
        //         // this.rendering1 = true;
        //         resolve();
        //     }).then(result => {
        //         this.$navigateBack();
        //         // this.$modal.close("Aku Pulang")
        //     });
        //
        //     args.cancel = true //
        //
        // })
    },
}

</script>
