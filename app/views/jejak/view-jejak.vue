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

</style>

<template>

<Page actionBarHidden="false">

    <ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <Ripple rippleColor="#28ADAA" @tap="onBack">
                <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            </Ripple>
            <Label @tap="onBack" class="action-bar-title" text="Jejak" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <GridLayout rows="*">

        <Gradient verticalAlignment="top" direction="top down" colors="#28ADAA, #28BAAA, #CDF6CE" color="white" height="25%" />

        <StackLayout @loaded="onLoaded_Rendering(0, 300)">

          <ContentPreloader v-if="rendering0" />
          <PageDashboardActivity v-if="!rendering0" />

        </StackLayout>

    </GridLayout>

</Page>

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
            items: [1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7],
        }
    },
    computed: {
        items_length() {
            return this.items.length - 1
        }
    },
    methods: {

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
            //     new Promise(resolve => {
            //         resolve();
            //     }).then(result => {
            //         this.$navigateBack();
            //         // this.$modal.close("Aku Pulang")
            //     });
            // },

    },
    mounted() {

        // const application = require('tns-core-modules/application');
        // application.android.on('activityBackPressed', args => {
        //     new Promise(resolve => {
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
