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

.fab-button {
    height: 50;
    /* width: 70; /// this is required on iOS - Android does not require width so you might need to adjust styles */
    width: 50;
    margin: 15;
    background-color: #ff4081;
    horizontal-align: right;
    vertical-align: bottom;
}

</style>

<template>

<Page actionBarHidden="false">
    <ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <Ripple rippleColor="#28ADAA" @tap="onBack">
                <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            </Ripple>
            <Label class="action-bar-title" text="Kebiasaan" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <StackLayout @loaded="onLoaded_Rendering(0, 250)">
        <!-- jika menggunakan showModal, ini pengganti ActionBar -->
        <!-- <ModalActionbar @onBack="onBack" /> -->


        <HabitHeadlineNonTab habit="Dakwah & Berorganisasi" />
        <GridLayout rows="*,auto" v-if="!rendering0" @loaded="onLoaded_Rendering(1, 500)">

            <ScrollView height="100%" v-if="!rendering1">
                <StackLayout  paddingBottom="75">
                    <PageHabitOrganisasi v-for="(i, index) in itemList" :key="index" :index="index" :renderingTime="index*renderingChild" class="tabviewitem-container" />
                </StackLayout>
            </ScrollView>
            <Fab @tap="" rowSpan="2" icon="~/assets/icons/baseline_add_white.png" rippleColor="#f1f1f1" class="fab-button"></Fab>
        </GridLayout>
    </StackLayout>
</Page>

</template>

<script>

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
            renderingChild: 5,

            itemList: function() {
                let n = [];
                for (var i = 0; i < 30; i++) {
                    n.push(i + 1);
                }
                return n;
            }(),
        }
    },
    methods: {
        onBack() {
              new Promise(resolve => {
                  this.rendering0 = true;
                  this.rendering1 = true;
                  resolve();
              }).then(result => {
                  this.$navigateBack();
                  // this.$modal.close("Aku Pulang")
              });
            },
            onItemTap({
                item
            }) {
                console.log(`Tapped on ${item.name}`);
            },
    },
    mounted() {
        const application = require('tns-core-modules/application');
        application.android.on('activityBackPressed', args => {
            new Promise(resolve => {
                this.rendering0 = true;
                this.rendering1 = true;
                resolve();
            }).then(result => {
                this.$navigateBack();
                // this.$modal.close("Aku Pulang")
            });

            args.cancel = true //
        })

        // this.statusbar.setStatusBarColor("#28ADAA");
    },
}

</script>
