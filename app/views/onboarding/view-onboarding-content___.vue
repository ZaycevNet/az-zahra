<style scoped>

.register {
    font-size: 15;
    /* font-weight: bold; */
    /* text-alignment: right; */
    color: rgba(255, 255, 255, 0.75);
    margin: 15 0;
}

#slide1 {
  /* background: linear-gradient(45deg, #f06f7e, #f34a30); */
  vertical-align: center;
}

#slide2 {
  /* background: linear-gradient(-45deg, #1d976c, #93f9b9); */
  vertical-align: center;
}

#slide3 {
  /* background: linear-gradient(45deg, #1d2b64, #f8cdda); */
  vertical-align: center;
}

#slide4 {
  /* background: linear-gradient(tobottom, #003973, #e5e5be); */
  vertical-align: center;
}

.carousel-layout-fix{
  padding: 0.1 0;
  margin: -0.1 0;
  vertical-alignment:top;
}

.description {
  font-size: 16;
  text-wrap: true;
  margin: 30;
  font-family: sans-serif;
  text-alignment: center;
  /* color: #28ADAA; */
}

.btn-next {
    /* width: 70%; */
    border-radius: 10%;
    color: white;
    /* font-weight: bold; */
    padding: 10;
    /* background-color: #28ADAA; */
    text-align: center;
    font-style: normal;
    border-width: 0;
    border-color: #28ADAA;
    text-transform: capitalize;
		android-elevation:0;
}

.container-title {
  font-size: 25;
  font-weight: bold;
  padding: 30;
  color: rgba(255,255,255,1);
  background-color: rgba(0,0,0,0.25);
  /* vertical-alignment:top; */
}

.title {
  border-bottom-width: 2;
  padding-bottom: 10;
  border-bottom-color: rgba(255,255,255, 0.75);
}

</style>

<template>
  <Page ref="page" actionBarHidden="true" backgroundColor="white" backgroundSpanUnderStatusBar="true">

<GridLayout class="carousel-layout-fix" rows="*,65">
    <Carousel id="carousel" @pageChanged="myChangeEvent" indicatorOffset="0,0" ios:finite="true" ios:bounce="false" showIndicator="true" indicatorAnimation="SWAP"
        indicatorColor="#66ccff" indicatorColorUnselected="#cceeff" height="90%" width="100%" debug="true">

        <CarouselItem v-for="(item, index) in get_onboarding" :key="index" id="slide1" verticalAlignment="middle">
          <GridLayout rows="auto,*" height="455">
            <Image width="100%" height="100%" stretch="aspectFill" :src="item.image" />
            <StackLayout class="container-title" row="0" >
              <Label class="title" :text="item.judul" textWrap="true" />
            </StackLayout>
          </GridLayout>

          <StackLayout marginBottom="50" height="100%" backgroundColor="white">
            <Label class="description" :text="item.description" />
          </StackLayout>

        </CarouselItem>

    </Carousel>

    <CardView elevation="5" width="70%" radius="50" row="1" margin="10">
      <Ripple rippleColor="white">
        <Gradient direction="top down" colors="#28ADAA, #28BAAA" >
          <Label class="btn-next">
            <FormattedString>
              <Span fontSize="20" :text="'ion-ios-lock' | fonticon" class="ion" />
              <Span text=" Masuk Akun Saya "  />
            </FormattedString>
          </Label>
        </Gradient>
      </Ripple>
    </CardView>
</GridLayout>

</Page>

</template>

<script>
  const carousel = require("nativescript-carousel");
  export default {
    data() {
      return {
        message: "Fear not, young Skywalker"
      }
    },
    created() {
      this.statusbar.hideStaturbar();
      // this.statusbar.hideNavigationBar();
    },
    methods: {
      onTextRecognitionResult() {
        console.log("onTextRecognitionResult");
      },
  	  myChangeEvent: function(args) {
    		var changeEventText = 'Page changed to index: ' + args.index;
    		console.log(changeEventText);
      },
    }
  }
</script>
