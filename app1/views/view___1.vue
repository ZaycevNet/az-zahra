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
				:text="page.name"
				:key="i"
			/>

			<!-- <Button
				v-for="(page, i) in pagesRoute"
				@tap="goToPageRoute(page)"
				class="drawer-item"
				:text="page.name"
				:key="i"
			/> -->

			<KeepAlive>
				<!-- <Frame> -->
					<router-view></router-view>
				<!-- </Frame> -->
			</KeepAlive>
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
			],
			pagesRoute: [
        {
          name: "RouterViewHabitAdab",
          component: "habit-adab", //this.$views.ViewHabitAdab
        },
				{
          name: "RouterViewHabitOrganisasiNew",
          component: "habit-organisasi-new", //this.$views.ViewHabitOrganisasiNew
        },
				{
          name: "RouterViewHabitOrganisasi",
          component: "habit-organisasi", //this.$views.ViewHabitOrganisasi
        },
			]
		}
	},
	watch: {
		"$route.path":function(val){
			// this.berandaPage = false;
			// if(val == "/") {
			// 	this.berandaPage = true
			// }
		}
	},
	mounted(){
		// penting! jadi saat apps di minimize lalu dibuka kembali lewat icon di homescreen, akan diarahkan langsung ke halaman home, sehingga vue-router tidak macet
		// console.log(this.$navigateBack()); // untuk kembali ke halaman sebelumnya
		this.$router.push('/home');
	},
	methods: {
		goToPageRoute(pageComponent){

			console.log(pageComponent.component)
			this.$router.push({ name:pageComponent.component });

			// this.$router.push({
			// 	path:"/"+pageComponent,
			// 	query: {
			// 		// dynamic props
			// 		routeProps: {
			// 			origin: this.$route.path,
			// 		}
			// 	}
			// });
		},
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
