<style scoped>
Label {
  font-weight: normal;
}
</style>
<template>
	<StackLayout @loaded="onEnabledCheckbox">
		<GridLayout columns="110,10,*" color="white" rows="*" height="auto" padding="5 5">
			<Label textAlignment="left"  paddingLeft="10" fontSize="14px" verticalAlignment="top" :text="title" textWrap="true" col="0"/>

			<Label textAlignment="left" fontSize="14px" verticalAlignment="top" text=":" col="1"/>

			<Label textAlignment="left" paddingRight="10" fontSize="14px" verticalAlignment="top" :text="description" textWrap="true" col="2"/>

		</GridLayout>
</StackLayout>
</template>

<script>

export default {
	props: [ 'description', 'title' ],
}

</script>
