<style scoped>
Button {
	padding:15;
	background-color: blue;
	color: white;
}

</style>

<template>
	<Page actionBarHidden="true">
		<StackLayout>

				<Button
					v-for="(page, i) in pages"
					@tap="goToPage(page)"
					class="drawer-item"
					:text="page.component"
					:key="i"
				/>

		</StackLayout>
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
          component: "habit-adab", //this.$views.ViewHabitAdab
        },
				{
          name: "ViewHabitOrganisasiNew",
          component: "habit-organisasi-new", //this.$views.ViewHabitOrganisasiNew
        },
				{
          name: "ViewHabitOrganisasi",
          component: "habit-organisasi", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitMejelis",
          component: "habit-majelis", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitMejelisNew",
          component: "habit-majelis-new", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitMembaca",
          component: "habit-membaca", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitMembacaNew",
          component: "habit-membaca-new", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitTadarus",
          component: "habit-tadarus", //this.$views.ViewHabitOrganisasi
				},
				{
          name: "ViewHabitTadarusNew",
          component: "habit-tadarus-new", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitTadarusModal",
          component: "habit-tadarus-modal", //this.$views.ViewHabitOrganisasi
				},
				{
          name: "ViewHabitBerpikir",
          component: "habit-berpikir", //this.$views.ViewHabitOrganisasi
        },
				{
          name: "ViewHabitZis",
          component: "habit-zis", //this.$views.ViewHabitOrganisasi
				},
				{
          name: "ViewHabitZisZakatMalNew",
          component: "habit-zis-zakat-mal-new", //this.$views.ViewHabitOrganisasi
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
