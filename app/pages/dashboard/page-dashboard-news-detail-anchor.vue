<style scoped>

#headerLabel2 {
    font-size: 45;
    horizontal-align: center;
    margin-top: -25;
    color: #B2EBF2;
}

#headerLabel {
    font-size: 45;
    horizontal-align: center;
    padding-top: 75;
    color: #B2EBF2;
}

.header-template {
    /* background-color: #212121; */
    background-image: url('~/assets/images/star-ocean.jpg');
    background-position: fill;
    /* background-size: cover; */
    height: 275;
}

/* .body-template TextView {
    font-size: 20;
    padding: 5 15;
    border: none;
} */

.anchor {
    height: 70;
    width: 100%;
    background-color: white;
}

#titleLabel {
    font-weight: bold;
    font-size: 25;
    padding: 5 15;
    color: #fff;
}

</style>

<template>
<GridLayout @loaded="onLoaded" rows="*,auto">
  <StackLayout  @loaded="onLoaded_Rendering(0, 300)">
    <Label style="text-alignment:right; margin:0; padding:10 5; border-bottom-width:0;" :text="String.fromCharCode('0xf4bf') + ' 08/03/2020 13:25'" class="ion" />

    <Label
      #title
      ref="title"
      fontSize="18"
      margin="15 5"
      color="black"
      fontWeight="normal"
      text="The trouble with implementing SSR into a Laravel/Vue app"
      textWrap="true" />

      <ParallaxView :bounce="false" @anchored="onAnchored" @scroll="onScroll" @unanchored="onUnanchored" controlsToFade="headerLabel,headerLabel2,titleLabel2">
          <Header class="header-template">
              <!-- <Label id="headerLabel" text="Parallax"></Label>
              <Label id="headerLabel2" text="Component"></Label> -->
          </Header>
          <Content class="body-template" height="auto" ref="Content" >
            <ScrollView height="100%" ref="Scroll">
                <DashboardNewsCardDetail @newHeight="onNewHeight" v-if="!rendering0"/>
            </ScrollView>
          </Content>
          <Anchored ref="anchor" class="anchor" :dropShadow="true">
            <DashboardMiniProfileNewsDetail margin="5"  v-if="!rendering0"/>
          </Anchored>
      </ParallaxView>
  </StackLayout>

  <DashboardNewsCardDetailCommentToolbar  v-if="!rendering0" rowSpan="2" />

  <!-- <Fab @tap="onScrollTop" ref="fabButton" rowSpan="2" icon="~/assets/icons/scroll-to-top.png" rippleColor="#f1f1f1" class="fab-button"></Fab> -->

</GridLayout>
</template>

<script>
const delayrendering = require("@/mixins/delayrendering");


export default {
    mixins: [delayrendering],
    data() {
        return {
          parallex: null,
  			  heightAdded: false,
  		}
  	},

		methods: {

			onNewHeight(args) {
        if(!this.heightAdded) {
          this.$refs.Content.nativeView.height = args
          this.heightAdded = true;
        }
	    },

      onLoaded(){
        return
        // karena belum ketemu scroll to top di ParallaxView
        // this.$refs.fabButton.nativeView.translateY = 100;
      },

      onAnchored() {
        // alert("anchored")
        // BOTTOM

        return
        // karena belum ketemu scroll to top di ParallaxView
        this.$refs.fabButton.nativeView.animate({
            translate: {
                x: 0,
                y: 0
            },
            opacity: 1
        })
        .then(() => {}, () => {});
      },
      onUnanchored() {
        // alert("unanchored")
        // HIDE FAB when scroll to top at certain point

        return
        // karena belum ketemu scroll to top di ParallaxView
        this.$refs.fabButton.nativeView.animate({
            translate: {
                x: 0,
                y: 100
            },
            opacity: 1
        })
        .then(() => {}, () => {});
      },

      onScrollTop() {
          // disini script scroll to top

          return
          // karena belum ketemu scroll to top di ParallaxView
          this.$refs.fabButton.nativeView.animate({
              translate: {
                  x: 0,
                  y: 100
              },
              opacity: 1
          })
          .then(() => {}, () => {});
      },

      onScroll(args) {
        // console.log(args.data.scrollY, args.direction)
      },
		},
		mounted(){
			console.log(this.$refs.Content.nativeView.height)
		}
};

</script>
