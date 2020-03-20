<style lang="css" scoped>

.drawer-header {
    padding: 50 16 16 16;
    margin-bottom: 16;
    background-color: #53ba82;
    color: #ffffff;
    font-size: 24;
}

.drawer-item {
    padding: 8 16;
    color: #333333;
    font-size: 16;
}

.parent-menu {
    margin: 0 20;
    padding: 15 0;
    font-size: 18;
    /* color: rgba(7, 48, 79, 0.75); */
    color: black;
    /* font-weight: bold; */
    /* #28ADAA */
    border-bottom-width: 0;
    border-bottom-color: rgba(50, 50, 50, 0.15);
    /* rgba(40,186,170,0.3); */
}

.parent-menu:active {
  background-color: red;
}

.child-menu {
    margin: 0 20 0 40;
    padding: 15 0;
    font-size: 16;
    color: rgba(7, 48, 79, 0.75);
    /* #28ADAA */
    border-bottom-width: 0;
    border-bottom-color: rgba(50, 50, 50, 0.15);
    /* rgba(40,186,170,0.3); */
    /* font-weight: bold; */
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

</style>

<template>

<StackLayout padding="0 0 0 0">
    <MiniProfileDrawer @onBubbleEvent="goTo('/view-profile-siswa')" verticalAlignment="middle" habit="Hasil Kelompok" height="15%" />

    <ScrollView scrollBarIndicatorVisible="false" height="100%" @loaded="onLoaded_Rendering(0, 750)">
    <!-- <RadListView for="i in [0]"> -->
    <!-- <ListView for="i in [0]">
      <v-template> -->
        <StackLayout width="100%" paddingTop="15" v-if="!rendering0">

            <!-- KEBIASAAN -->

            <!-- <Ripple rippleColor="rgba(255, 139, 38, 0.1)"> -->
                <GridLayout columns="*,15" class="parent-menu">
                  <Label col="0" width="100%" text="Kebiasaan" />
                  <!-- <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'fa-lightbulb-o' | fonticon" class="fa"  verticalAlignment="middle" /> -->
                </GridLayout>
            <!-- </Ripple> -->

            <!-- Harian -->
            <Ripple @tap="goTo('/view-habit-sholat')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Sholat" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-plus' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-habit-berpikir')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Berpikir Positif" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-plus' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-habit-adab')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Adab Islami" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-plus' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <!-- Bebas -->
            <Ripple @tap="goTo('/view-habit-puasa')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Puasa" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-plus' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-habit-zis')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Zakat Infaq Sedekah" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-plus' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-habit-tadarus')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Tadarus" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-plus' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-habit-membaca')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Membaca" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-plus' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-habit-majelis')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Majelis" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-plus' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-habit-organisasi')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Organisasi" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-plus' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <!-- PROFILE -->
            <GridLayout columns="*,15" class="parent-menu">
              <Label col="0" width="100%" text="Daftar Profile" />
              <!-- <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'fa-lightbulb-o' | fonticon" class="fa"  verticalAlignment="middle" /> -->
            </GridLayout>

            <Ripple @tap="goTo('/view-profile-guru-daftar')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Daftar Guru" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="18" :text="'ion-ios-contact' | fonticon" class="ion"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-profile-siswa-daftar')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Daftar Siswa" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="18" :text="'ion-ios-contact' | fonticon" class="ion"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <!-- KELOMPOK -->

            <Ripple @tap="goTo('/view-group')" rippleColor="rgba(255, 139, 38, 0.1)">
                <GridLayout columns="*,15" class="parent-menu">
                  <Label col="0" width="100%" text="Kelompok" />
                  <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'ion-ios-contacts' | fonticon" class="ion"  verticalAlignment="middle" />
                </GridLayout>
            </Ripple>

            <!-- TIMELINE -->

            <Ripple  @tap="goTo('/view-timeline')"  rippleColor="rgba(255, 139, 38, 0.1)">
                <GridLayout columns="*,15" class="parent-menu">
                  <Label col="0" width="100%" text="Timeline" />
                  <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'ion-md-alarm' | fonticon" class="ion"  verticalAlignment="middle" />
                </GridLayout>
            </Ripple>

            <!-- JURNAL -->

            <Ripple @tap="goTo('/view-jurnal')" rippleColor="rgba(255, 139, 38, 0.1)">
                <GridLayout columns="*,15" class="parent-menu">
                  <Label col="0" width="100%" text="Jurnal" />
                  <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'ion-md-clipboard' | fonticon" class="ion"  verticalAlignment="middle" />
                </GridLayout>
            </Ripple>

            <!-- MASUKKAN -->

            <Ripple @tap="goTo('/view-kirim-masukkan')" rippleColor="rgba(255, 139, 38, 0.1)">
                <GridLayout columns="*,15" class="parent-menu">
                  <Label col="0" width="100%" text="Kirim Masukkan" />
                  <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'ion-md-send' | fonticon" class="ion"  verticalAlignment="middle" />
                </GridLayout>
            </Ripple>

            <!-- BERITA -->

            <Ripple @tap="goTo('/view-news')" rippleColor="rgba(255, 139, 38, 0.1)">
                <GridLayout columns="*,15" class="parent-menu">
                  <Label col="0" width="100%" text="Semua Berita" />
                  <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'ion-md-list' | fonticon" class="ion"  verticalAlignment="middle" />
                </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-news-like')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Berita Saya Sukai" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-heart' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-news-mark')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Berita Saya Tandai" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="14" :text="'fa-tags' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <Ripple @tap="goTo('/view-news-comment')" rippleColor="rgba(255, 139, 38, 0.1)">
              <GridLayout columns="*,15" class="child-menu">
                <Label col="0" width="100%" text="Berita Saya Komentari" />
                <Label col="1" color="rgba(219, 15, 148, 0.35)" fontSize="15" :text="'fa-comments' | fonticon" class="fa"  verticalAlignment="middle" />
              </GridLayout>
            </Ripple>

            <!-- JEJAK -->

            <Ripple @tap="goTo('/view-jejak')" rippleColor="rgba(255, 139, 38, 0.1)">
                <GridLayout columns="*,15" class="parent-menu">
                  <Label col="0" width="100%" text="Jejak" />
                  <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'fa-lightbulb-o' | fonticon" class="fa"  verticalAlignment="middle" />
                </GridLayout>
            </Ripple>

            <!-- TENTANG -->

            <Ripple @tap="goTo('/view-tentang-kami')" rippleColor="rgba(255, 139, 38, 0.1)">
                <GridLayout columns="*,15" class="parent-menu">
                  <Label col="0" width="100%" text="Tentang Kami" />
                  <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'ion-md-alert' | fonticon" class="ion"  verticalAlignment="middle" />
                </GridLayout>
            </Ripple>

            <!-- SYARAT KETENTUAN -->

            <Ripple @tap="goTo('/view-syarat-ketentuan')" rippleColor="rgba(255, 139, 38, 0.1)">
                <GridLayout columns="*,15" class="parent-menu">
                  <Label col="0" width="100%" text="Syarat Ketentuan" />
                  <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'fa-unlock-alt' | fonticon" class="fa"  verticalAlignment="middle" />
                </GridLayout>
            </Ripple>

            <!-- KEBIJAKAN PRIVASI -->

            <Ripple @tap="goTo('/view-kebijakan-privasi')" rippleColor="rgba(255, 139, 38, 0.1)">
                <GridLayout columns="*,15" class="parent-menu">
                  <Label col="0" width="100%" text="Kebijakan Privasi" />
                  <Label col="1" color="rgba(219, 15, 148, 0.35)" :text="'fa-shield' | fonticon" class="fa"  verticalAlignment="middle" />
                </GridLayout>
            </Ripple>

            <CardView elevation="5" width="70%" radius="50" row="1" margin="20 0">
              <Ripple @tap="goTo('/view-auth')" rippleColor="white">
                <Gradient direction="top down" colors="#FE4950, #D80F36" >
                  <Label class="btn-next">
                    <FormattedString>
                      <Span fontSize="20" :text="'fa-power-off' | fonticon" class="fa" />
                      <Span text=" Keluar "  />
                    </FormattedString>
                  </Label>
                </Gradient>
              </Ripple>
            </CardView>
        </StackLayout>
      <!-- </v-template>
    </ListView>
    </RadListView> -->
    </ScrollView>
</StackLayout>

</template>

<script>

// import sideDrawer from "~/mixins/sideDrawer";
const delayrendering = require("@/mixins/delayrendering");
export default {
    mixins: [delayrendering],
    // mixins: [sideDrawer],
    data() {
            return {
                // berandaPage: true,
                // define our pages, making sure the component matches that defined in /app/router/index.js
                pages: [{
                        name: "ViewHabitAdab",
                        component: "/view-habit-adab", //this.$views.ViewHabitAdab
                    }, {
                        name: "ViewHabitOrganisasiNew",
                        component: "/view-habit-organisasi-new", //this.$views.ViewHabitOrganisasiNew
                    }, {
                        name: "ViewHabitOrganisasi",
                        component: "/view-habit-organisasi", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitMejelis",
                        component: "/view-habit-majelis", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitMejelisNew",
                        component: "/view-habit-majelis-new", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitMembaca",
                        component: "/view-habit-membaca", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitMembacaNew",
                        component: "/view-habit-membaca-new", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitTadarus",
                        component: "/view-habit-tadarus", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitTadarusNew",
                        component: "/view-habit-tadarus-new", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitTadarusModal",
                        component: "/view-habit-tadarus-modal", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitBerpikir",
                        component: "/view-habit-berpikir", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitZis",
                        component: "/view-habit-zis", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitZisNew",
                        component: "/view-habit-zis-new", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitPuasa",
                        component: "/view-habit-puasa", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitPuasaNew",
                        component: "/view-habit-puasa-new", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewHabitSholat",
                        component: "/view-habit-sholat", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewProfileSiswa",
                        component: "/view-profile-siswa", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewProfileGuru",
                        component: "/view-profile-guru", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewGroup",
                        component: "/view-group", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewGroupSKM",
                        component: "/view-group-skm", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewGroupAnggota",
                        component: "/view-group-anggota", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewGroupHasil",
                        component: "/view-group-hasil", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewGroupHasilDetail",
                        component: "/view-group-hasil-detail", //this.$views.ViewHabitOrganisasi
                    },

                    {
                        name: "ViewJurnalDetail",
                        component: "/view-jurnal-detail", //this.$views.ViewHabitOrganisasi
                    }, {
                        name: "ViewMain",
                        component: "/view-main", //this.$views.ViewHabitOrganisasi
                    },

                ],
            }
        },
        methods: {
            navigateTo(name) {
              this.$navigateTo(this.$views[name])
            },
            goTo(url) {
              const { EventBus } = require('@/event-bus.js');
              EventBus.$emit('onCloseDrawer', true);

              this.gotoPage({
                path: url,
                // options: {
                // 		 fullscreen: true, // modal only
                //     transition: {
                // 	      name: 'flipRight', // not modal only
                // 	      duration: 100,
                //     },
                //     clearHistory: true,
                // 		 props: {
                // 				parentPayload: {
                // 						// title,
                // 						// color,
                // 				}
                // 		 }
                // }
              })

                return
                // this.$navigator.navigate(pageComponent.component, {
                //         transition: 'slideRight'
                //     }
                //     // { clearHistory: true }
                // )
                this.$navigateTo(this.$views[pageComponent.name], {
                    transition: 'slideBottom'

                    // curl (same as curlUp) (iOS only)
                    // curlUp (iOS only)
                    // curlDown (iOS only)
                    // explode (Android Lollipop(21) and up only)
                    // fade
                    // flip (same as flipRight)
                    // flipRight
                    // flipLeft
                    // slide (same as slideLeft)
                    // slideLeft
                    // slideRight
                    // slideTop
                    // slideBottom
                });
                return

            }


        }
};

</script>
