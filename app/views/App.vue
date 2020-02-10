<template>
	<StackLayout>
		<!-- <ContentPreloader /> -->
		<Navigator :defaultRoute="!isLoggedIn ? '/home' : '/view-habit-organisasi'"/>
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
