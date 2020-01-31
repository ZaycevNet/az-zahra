<style scoped>
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

</style>

<template>
	<Page>
		<ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <!-- <Ripple rippleColor="orange" @tap="onNavigationButtonTap"> -->
            <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            <!-- </Ripple> -->
            <Label class="action-bar-title" text="Formulir" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

		<ScrollView>
			<StackLayout>
					<PageHabitOrganisasiNew class="tabviewitem-container"/>
			</StackLayout>

		</ScrollView>
	</Page>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
				payload:[
				]
    }
  },
  mounted(){
    console.log(this.payload[0])
  },
	methods:{

	},
	computed: {

	},
  validations: {

  }
}
</script>
