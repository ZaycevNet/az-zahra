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

<Page actionBarHidden="false"  @loaded="onLoaded_Rendering(0, 300)">
  <ActionBar color="white">
      <GridLayout width="100%" columns="auto, *, 60%">
          <Ripple rippleColor="#28ADAA" @tap="onBack">
              <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
          </Ripple>
          <Label @tap="onBack" class="action-bar-title" text="Kebiasaan" col="1" />
          <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
      </GridLayout>
  </ActionBar>

  <StackLayout>
    <PageDashboardNewsDetailAnchor v-if="!rendering0"/>
  </StackLayout>
</Page>

</template>

<script>
const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
};

</script>
