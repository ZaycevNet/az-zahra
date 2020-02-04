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
			],
		}
	},
	methods: {
    goToPage(pageComponent) {
			this.$showModal(this.$views[pageComponent.name], {
					fullscreen: true,
					// clearHistory: true,
					// transition: {
					// 	name: 'flipRight',
					// 	duration: 100,
					// },
					props: {
							parentPayload: {
									// title,
									// color,
							}
					}
			}).then(data => {
					console.log(data)
					// this.$store.commit("gotoRoute", false)
			});
      // this.$navigateTo(this.$views[pageComponent.name]);
			return

    }
  }
}
</script>
