<style scoped>
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
</Frame>

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


      <HabitHeadlineNonTab habit="Dakwah & Berorganisasi" />
      <GridLayout rows="*,auto" v-if="!rendering">

    		<ScrollView height="100%" paddingBottom="75" v-if="!rendering1">
          <StackLayout >
            <PageHabitOrganisasi v-for="(i, index) in itemList" :key="index" v-if="index <= renderingLimit"  :renderingTime="index*renderingChild" class="tabviewitem-container"/>
          </StackLayout>
    		</ScrollView>
        <Fab
          @tap=""
          rowSpan="2"
          icon="~/assets/icons/baseline_add_white.png"
          rippleColor="#f1f1f1"
          class="fab-button"
        ></Fab>
      </GridLayout>
    </StackLayout>
	</Page>
</Frame>
</template>

<script>
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
      rendering1: true,
      renderingChild: 5,
      renderingLimit: 25,

      itemList: function(){
          let n = [];
          for (var i = 0; i < 100; i++) {
            n.push(i+1);
          }
          return n;
      }(),
    }
  },
  methods: {
    onBack(){
      this.rendering = true;
      // alert(this.routeProps.origin);
      // this.$router.replace('/');

      this.$modal.close("Aku Pulang")
      // this.$navigateBack();
    },
    onItemTap({ item }) {
       console.log(`Tapped on ${item.name}`);
     },
  },
  mounted(){
    console.log(this.routeProps.origin, this.$route.path);

    const application = require('tns-core-modules/application');
    application.android.on('activityBackPressed', args => {
      this.rendering = true;
      args.cancel = true //

      this.$modal.close("Aku Pulang")
      // this.$navigateBack();

      console.log("this.rendering", this.rendering)
    })

    setTimeout(() => {
      this.rendering = false
    }, 250);

    setTimeout(() => {
      this.rendering1 = false
    }, 500);

    status.setNavigationBarColor("white");
    status.setStatusBarColor("#28ADAA");
  },
}

</script>
