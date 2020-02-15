<template>
	<StackLayout>
		<!-- <ContentPreloader /> -->
		<Navigator :defaultRoute="!isLoggedIn ? '/home' : '/view-profile-guru'"/>
	</StackLayout>
</template>

<script>
export default {
	data(){
		return {
			isLoggedIn: true,
		}
	}
}
</script>
