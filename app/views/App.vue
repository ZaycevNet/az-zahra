<template>
	<StackLayout>
		<!-- <ContentPreloader /> -->
		<Navigator :defaultRoute="isLoggedIn ? '/home' : '/view-profile-siswa'"/>
	</StackLayout>
</template>

<script>
export default {
	data(){
		return {
			isLoggedIn: false,
		}
	}
}
</script>
