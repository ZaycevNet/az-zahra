<template>
	<StackLayout>
		<!-- <ContentPreloader /> -->
		<Navigator :defaultRoute="!isLoggedIn ? '/home' : '/view-group-hasil-detail'"/>
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
