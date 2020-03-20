<template>
	<StackLayout>
		<!-- <ContentPreloader /> -->
		<Navigator :defaultRoute="isLoggedIn ? '/view-main' : '/view-tentang-kami'"/>
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
