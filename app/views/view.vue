<style scoped>
Button {
	padding:15;
	background-color: blue;
	color: white;
}

</style>

<template>
	<Page actionBarHidden="true">
		<ScrollView>
		<StackLayout>

				<Button
					v-for="(page, i) in pages"
					@tap="goToPage(page)"
					class="drawer-item"
					:text="page.component"
					:key="i"
				/>

		</StackLayout>
	</ScrollView>
	</Page>
</template>

<script>

export default {
	data() {
    return {
			// berandaPage: true,
      // define our pages, making sure the component matches that defined in /app/router/index.js
      pages: [
        {
          name: "ViewHabitAdab",
          component: "/view-habit-adab", //this.$views.ViewHabitAdab
        },
				{
          name: "ViewHabitOrganisasiNew",
          component: "/view-habit-organisasi-new", //this.$views.ViewHabitOrganisasiNew
        },
				{
          name: "ViewHabitOrganisasi",
          component: "/view-habit-organisasi", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitMejelis",
          component: "/view-habit-majelis", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitMejelisNew",
          component: "/view-habit-majelis-new", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitMembaca",
          component: "/view-habit-membaca", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitMembacaNew",
          component: "/view-habit-membaca-new", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitTadarus",
          component: "/view-habit-tadarus", //this.$views.ViewHabitOrganisasi
				},
				{
          name: "ViewHabitTadarusNew",
          component: "/view-habit-tadarus-new", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitTadarusModal",
          component: "/view-habit-tadarus-modal", //this.$views.ViewHabitOrganisasi
				},
				{
          name: "ViewHabitBerpikir",
          component: "/view-habit-berpikir", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitZis",
          component: "/view-habit-zis", //this.$views.ViewHabitOrganisasi
				},
				{
          name: "ViewHabitZisNew",
          component: "/view-habit-zis-new", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitPuasa",
          component: "/view-habit-puasa", //this.$views.ViewHabitOrganisasi
				},
				{
          name: "ViewHabitPuasaNew",
          component: "/view-habit-puasa-new", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitSholat",
          component: "/view-habit-sholat", //this.$views.ViewHabitOrganisasi
				},
				{
          name: "ViewProfileSiswa",
          component: "/view-profile-siswa", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewProfileGuru",
          component: "/view-profile-guru", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewGroup",
          component: "/view-group", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewGroupSKM",
          component: "/view-group-skm", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewGroupAnggota",
          component: "/view-group-anggota", //this.$views.ViewHabitOrganisasi
				},
				{
          name: "ViewGroupHasil",
          component: "/view-group-hasil", //this.$views.ViewHabitOrganisasi
				},
				{
          name: "ViewGroupHasilDetail",
          component: "/view-group-hasil-detail", //this.$views.ViewHabitOrganisasi
        },

				{
          name: "ViewJurnalDetail",
          component: "/view-jurnal-detail", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewJurnal",
          component: "/view-jurnal", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewMain",
          component: "/view-main", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewOnboarding",
          component: "/view-onboarding", //this.$views.ViewHabitOrganisasi
        },
			],
		}
	},
	methods: {
    goToPage(pageComponent) {
			// this.$showModal(this.$views[pageComponent.name], {
			// 		fullscreen: true,
			// 		transition: 'slideLeft', // not working on modal
			// 		// clearHistory: true,
			// 		// transition: {
			// 		// 	name: 'flipRight',
			// 		// 	duration: 100,
			// 		// },
			// 		props: {
			// 				parentPayload: {
			// 						// title,
			// 						// color,
			// 				}
			// 		}
			// }).then(data => {
			// 		console.log(data)
			// 		// this.$store.commit("gotoRoute", false)
			// });

			this.$navigator.navigate(pageComponent.component,
				// { clearHistory: true }
			)

			return
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
}
</script>
