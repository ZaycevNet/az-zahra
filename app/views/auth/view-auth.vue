<style scoped>
Page {
  /* margin-bottom: 0; */
}

</style>

<template>

<Page ref="page" actionBarHidden="true" backgroundColor="#28ADAA" backgroundSpanUnderStatusBar="true">

      <Gradient direction="top down" colors="rgb(64,204,155), rgb(5,175,170)" @loaded="onLoaded_Rendering(0, 300)">
        <GridLayout rows="*,auto">
          <StackLayout marginTop="0" ref="tron" row="0">
            <AuthTron />
          </StackLayout>
          <StackLayout verticalAlignment="bottom" v-if="!rendering0">
            <Gradient direction="top down" colors="rgb(64,204,155), rgb(5,175,170)">
              <AuthContent :height="carousel_index != 2 ? '58%':'96%' " ref="form" @onBubbleCarousel="onBubbleCarousel" paddingBottom="0" />
            </Gradient>
          </StackLayout>
        </GridLayout>
      </Gradient>
</Page>

</template>

<script>

import AuthContent from "./view-auth-content"

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    components: {
        AuthContent
    },
    data() {
        return {
          carousel_index: 0,
        }
    },
    created() {
      // this.statusbar.enableFullScreen.stickyImmersive();
      // this.statusbar.hideNavigationBar();
    },
    methods: {
      onBubbleCarousel(val){
        this.carousel_index = val

        const el = this.$refs.tron.nativeView;
        const form = this.$refs.form.nativeView;
        const page = this.$refs.page.nativeView;

        el.originX =  0.5; // default 0.5 (center), 0 is most left, 1 is most right
        el.originY = 0.5; // default 0.5 (middle), 0 is top, 1 is bottom

        const zoomIn = el.createAnimation({
            scale: { x: 1, y: 1},
            duration: 250
        });

        const zoomOut = el.createAnimation({
            scale: { x: 0.0, y: 0.0},
            duration: 250
        });

        const translateOut = el.createAnimation({
            translate: {
                x: -250,
                y: 0
            },
            duration: 250
        });

        const translateIn = el.createAnimation({
            translate: {
                x: 0,
                y: 0
            },
            duration: 250
        });

        const opacityIn = el.createAnimation({
            opacity: 1,
            duration: 350
        });

        const opacityOut = el.createAnimation({
            opacity: 0,
            duration: 350
        });


        if(val != 2) {
          opacityIn.play();
          translateIn.play();
          // zoomIn.play()

        } else {
          opacityOut.play();
          translateOut.play();
          // zoomOut.play()
        }
      }
    }
};

</script>
