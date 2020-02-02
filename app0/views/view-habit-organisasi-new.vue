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

.btn-next {
	width: 100%;
	border-radius: 10%;
	color: white;
	font-weight: bold;
	padding: 25px;
	background-color: #28ADAA;
	text-align: center;
	/* margin-top: 20px; */
	/* margin-bottom: 20px; */
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

    <StackLayout>
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
      <GridLayout rows="*,auto" columns="*">
    		<ScrollView height="100%" v-if="!rendering">
    			<StackLayout>
    					<PageHabitOrganisasiNew class="tabviewitem-container"/>
    			</StackLayout>
    		</ScrollView>

        <StackLayout padding="0 10" rowSpan="2" verticalAlignment="bottom" v-shadow="shadowCustom">
    			<Ripple @tap="onNext" rippleColor="white" margin="10 0">
    				<Label class="btn-next" text="Simpan" />
    			</Ripple>
    		</StackLayout>

      </GridLayout>
    </StackLayout>
	</Page>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
import { AndroidData, ShapeEnum } from "nativescript-vue-shadow";

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
      shadowCustom: {
        elevation: 25,
        shape: ShapeEnum.RECTANGLE,
        bgcolor: 'white',
        cornerRadius: 0
      }
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
  },
  mounted(){
    const application = require('tns-core-modules/application');
    application.android.on('activityBackPressed', args => {
      this.rendering = true;
      args.cancel = true //

      this.$modal.close("Aku Pulang")
      // this.$navigateBack();

      console.log("this.rendering", this.rendering)
    })


    setTimeout(() => {
      this.rendering = false;
    }, 250);

    status.setNavigationBarColor("white");
    status.setStatusBarColor("#28ADAA");
  },
}
</script>
