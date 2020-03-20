<template lang="html">
  <RadSideDrawer
    ref="drawer"
    drawerLocation="Left"
    @drawerClosed="onClosedDrawerTriggered($event)"
    :gesturesEnabled="gesturesEnabled"
  >
    <StackLayout ~drawerContent backgroundColor="#ffffff">
      <slot name="drawerContent"></slot>
    </StackLayout>
    <Frame ~mainContent>
        <!-- <ViewOnboarding /> -->
        <slot v-if="true" name="mainContent"></slot>
    </Frame>
  </RadSideDrawer>
</template>

<script>
// import sideDrawer from "~/mixins/sideDrawer";

import ViewOnboarding from "~/views/profile/view-profile-guru"

export default {
  // mixins: [sideDrawer]
    components: {
      ViewOnboarding
    },
    mounted(){
      const { EventBus } = require('@/event-bus.js');

      // Listen for the i-got-clicked event and its payload.
      EventBus.$on('onCloseDrawer', data => {
          new Promise(resolve => {
              this.$refs.drawer.nativeView.closeDrawer();
              setTimeout(() => {
                  resolve()
              }, 250)
          }).then(result => {
              this.changePage(this.$store.getters.getCurrentPath);
          })
      });
    }
};
</script>

<style lang="css"></style>
