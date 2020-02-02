<template>
	<Gradient direction="top down" colors="#28ADAA, #28BAAA" color="white" height="auto" verticalAlignment="middle">
			<Label textAlignment="center" fontWeight="bold" fontSize="20" verticalAlignment="left" :text="habit" />
			<Label textAlignment="center" marginBottom="5" fontSize="14" verticalAlignment="left" text="Jum'at 20 Januari 2019" />
	</Gradient>
</template>

<script>
export default {
	props: ["habit"]
}
</script>
