<template>
	<Gradient direction="top down" colors="#28ADAA, #28BAAA" color="white" height="auto" verticalAlignment="middle">
			<Label textWrap="true" textAlignment="center" fontWeight="bold" fontSize="20"  :text="habit" />

			<Label textAlignment="center" fontSize="14" marginBottom="10" text="Dihitung sejak: 20-10-2019 s/d 19-08-2020" />

			<!-- <Label textWrap="true" textAlignment="center" marginBottom="5" fontSize="14">
			  <FormattedString>
			    <Span text="Dihitung sejak: " />
			    <Span text="20-10-2019 sd 19-08-2020" fontWeight="bold" />
			  </FormattedString>
			</Label> -->

	</Gradient>
</template>


<script>
export default {
	props: ["habit"]
}
</script>
