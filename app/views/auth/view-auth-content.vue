<style scoped>
.forget {
  font-size: 15;
  /* font-weight: bold; */
  text-alignment: right;
  color: rgba(255,255,255,1);
  margin: 15 5 10 0;
}
.register {
  font-size: 15;
  /* font-weight: bold; */
  /* text-alignment: right; */
  color: rgba(255,255,255,0.75);
  margin: 15 0;
}
.btn-next {
    width: 100%;
    border-radius: 10%;
    color: white;
    /* font-weight: bold; */
    padding: 15;
    /* background-color: #28ADAA; */
    text-align: center;
    font-style: normal;
    border-width: 0;
    border-color: #28ADAA;
    text-transform: capitalize;
		android-elevation:0;
}
.breakline {
  height: 1;
  background-color: rgba(255,255,255,0.5);
  vertical-alignment: middle;
}
.subtitle {
  font-size: 18;
  color: white;
  /* background-color: rgba(255,255,255,0.15); */
  padding: 15 20;
  border-bottom-width: 1;
  border-color: rgba(255,255,255,0.8);
  text-alignment:center;
}
</style>

<template>
<StackLayout height="100%">

  <Gradient direction="top down" colors="rgba(255,255,255,0), rgba(255,255,255,0.15)" >
    <Label :text="subtitle" class="subtitle" />
  </Gradient>

  <Carousel ref="myCarousel" :selectedPage="selectedPage" id="carousel" @pageChanged="myChangePageEvent" ios:indicatorOffset="0,-30" ios:finite="false" ios:bounce="false" showIndicator="false" indicatorAnimation="SWAP" indicatorColor="#66ccff" indicatorColorUnselected="#cceeff" height="100%" width="100%" debug="false">

    <CarouselItem id="slide1" verticalAlignment="middle">
      <ScrollView height="100%">
        <StackLayout>
          <GridLayout rows="auto,auto,auto,*" padding="0 20">
            <AuthTextfield row="0" :item="username" />
            <AuthTextfield row="1" :item="password" />
            <Label @tap="onTap('carousel-forget')" class="forget" text="Lupa password?" row="2" />
          </GridLayout>
          <CardView elevation="10" radius="50" row="3" margin="10 20">
            <Ripple @tap="onTap('login')" rippleColor="white">
              <Gradient direction="top down" colors="rgba(255,119,143,1), rgba(255,180,170,1)" >
                <Label class="btn-next">
                  <FormattedString>
                    <Span fontSize="20" :text="'ion-ios-lock' | fonticon" class="ion" />
                    <Span text=" Masuk Akun Saya "  />
                  </FormattedString>
                </Label>
              </Gradient>
            </Ripple>
          </CardView>
          <Label textAlignment="center" marginTop="10" @tap="onTap('carousel-register')" >
            <FormattedString>
              <Span class="register" text="Tidak punya akun?" />
              <Span color="white" text=" Mendaftar "  />
            </FormattedString>
          </Label>
        </StackLayout>
      </ScrollView>
    </CarouselItem>

    <CarouselItem id="slide2" verticalAlignment="middle">
      <ScrollView height="100%">
        <StackLayout>
          <GridLayout rows="auto,auto,auto,*" padding="0 20">
            <AuthTextfield row="0" :item="forget" />
            <!-- <AuthTextfield row="1" :item="password" /> -->
            <!-- <Label class="forget" text="Lupa password?" row="2" /> -->
          </GridLayout>

          <CardView elevation="10" radius="50" row="3" margin="20">
            <Ripple @tap="onTap('forget')" rippleColor="white">
              <Gradient direction="top down" colors="rgba(255,119,143,1), rgba(255,180,170,1)" >
                <Label class="btn-next">
                  <FormattedString>
                    <Span fontSize="20" :text="'ion-ios-send' | fonticon" class="ion" />
                    <Span text=" Kirim Password "  />
                  </FormattedString>
                </Label>
              </Gradient>
            </Ripple>
          </CardView>

          <Label textAlignment="center" marginBottom="10" @tap="onTap('carousel-login')" >
            <FormattedString>
              <Span class="register" text="Punya akun?" />
              <Span color="white" text=" Login "  />
            </FormattedString>
          </Label>

          <GridLayout columns="*,50,*" margin="0 25">
            <StackLayout class="breakline" col="0" />
            <Label textAlignment="center" fontWeight="bold" color="white" text="ATAU" col="1" />
            <StackLayout class="breakline" col="2" />
          </GridLayout>

          <Label textAlignment="center" marginTop="10" @tap="onTap('carousel-register')" >
            <FormattedString>
              <Span class="register" text="Tidak punya akun?" />
              <Span color="white" text=" Mendaftar "  />
            </FormattedString>
          </Label>
        </StackLayout>
      </ScrollView>
    </CarouselItem>

    <CarouselItem id="slide3" verticalAlignment="middle">
      <ScrollView height="100%">
        <StackLayout>
          <GridLayout columns="*" rows="*,*,*,*,*" padding="0 20">
            <AuthTextfield col="0" row="0" :item="username" />
            <AuthTextfield col="0" row="1" :item="username" />
            <AuthTextfield col="0" row="2" :item="username" />
            <AuthTextfield col="0" row="3" :item="username" />
            <AuthTextfield col="0" row="4" :item="username" />
            <!-- <Label class="forget" text="Lupa password?" row="2" /> -->
          </GridLayout>

          <CardView elevation="10" radius="50" row="3" margin="20">
            <Ripple @tap="onTap('register')" rippleColor="white">
              <Gradient direction="top down" colors="rgba(255,119,143,1), rgba(255,180,170,1)" >
                <Label class="btn-next">
                  <FormattedString>
                    <Span fontSize="20" :text="'ion-ios-checkbox-outline' | fonticon" class="ion" />
                    <Span text=" Daftar Sekarang "  />
                  </FormattedString>
                </Label>
              </Gradient>
            </Ripple>
          </CardView>

          <Label textAlignment="center" marginBottom="10" @tap="onTap('carousel-login')" >
            <FormattedString>
              <Span class="register" text="Punya akun?" />
              <Span color="white" text=" Login "  />
            </FormattedString>
          </Label>

          <GridLayout columns="*,50,*" margin="0 25">
            <StackLayout class="breakline" col="0" />
            <Label textAlignment="center" fontWeight="bold" color="white" text="ATAU" col="1" />
            <StackLayout class="breakline" col="2" />
          </GridLayout>

          <Label textAlignment="center" marginTop="10" marginBottom="20" @tap="onTap('carousel-forget')" >
            <FormattedString>
              <Span class="register" text="Punya akun?" />
              <Span color="white" text=" Lupa password "  />
            </FormattedString>
          </Label>
        </StackLayout>
      </ScrollView>
    </CarouselItem>

</Carousel>
</StackLayout>
</template>

<script>

export default {
  data(){
    return {
      selectedPage: 0,
      subtitle:"Login",
      username: {
        placeholder:"Username",
        icon:'ion-ios-contact',
        secure:false,
        info:'wajib diisi dengan NIS / NIP'
      },
      forget: {
        placeholder:"Email",
        icon:'ion-ios-mail',
        secure: false,
        info:'wajib diisi dengan email'
      },
      password: {
        placeholder:"Password",
        icon:'ion-ios-key',
        secure:true,
        info:'wajib diisi dengan kata sandi'
      }
    }
  },
  methods: {
    myTapPageEvent(args) {
        console.log('Tapped page index: ' + this.$refs.myCarousel.nativeView.selectedPage);
    },
    gotoMain() {
      this.statusbar.setStatusBarColor("#28ADAA");
      this.$navigator.navigate("/view-main",	{
        clearHistory: true
      })
    },
    onTap(val) {
      switch (val) {
        case "carousel-forget":
          this.selectedPage = 1
          break;
        case "carousel-register":
          this.selectedPage = 2
          break;
        case "carousel-login":
          this.selectedPage = 0
          break;
        case "forget":
          this.gotoMain()
          break;
        case "login":
          this.gotoMain()
          break;
        case "register":
          this.gotoMain()
          break;
      }
    },
    myChangePageEvent(args) {
        console.log('Page changed to index: ' + args.index);
        switch (args.index) {
          case 0:
              this.subtitle="Login"
              this.$emit("onBubbleCarousel", 0)
              break;
          case 1:
              this.subtitle="Lupa Password"
              this.$emit("onBubbleCarousel", 1)
              break;
          case 2:
              this.subtitle="Pendaftaran"
              this.$emit("onBubbleCarousel", 2)
              break;
        }
    }
  }
}

</script>
