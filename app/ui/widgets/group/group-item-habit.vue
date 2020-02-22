<template>
	<CardView margin="5 10 5 10" elevation="5" radius="10">
		<GridLayout rows="*" columns="100,*" verticalAlignment="middle">
			<StackLayout col="0" borderWidth="0" borderColor="#28ADAA" borderBottomLeftRadius="5" borderTopLeftRadius="5">
				<Image width="100%" height="100%" src="~/assets/icons/adab.png" />
			</StackLayout>

			<Gradient col="1" direction="top down" colors="#white, #white">
				<StackLayout padding="10">
					<Label textWrap="true" text="Sholat" paddingBottom="5" color="#28ADAA" textAlignment="left" fontWeight="bold" fontSize="16" borderBottomWidth="1" borderBottomColor="#28ADAA" />

					<Label textWrap="true" text="250" fontWeight="bold" color="#28ADAA" fontStyle="underline" textAlignment="right" fontSize="24" />

					<Label text="Sudah melakukan aktivitas" fontWeight="normal" color="#28ADAA" textAlignment="right" fontSize="13" />

				</StackLayout>
			</Gradient>



			<!-- <StackLayout col="1" padding="10 20 10 5">
				<Label textWrap="true" text="Sholat" paddingBottom="5" color="#28ADAA" textAlignment="left" fontWeight="bold" fontSize="16" borderBottomWidth="1" borderBottomColor="#28BAAA" />

				<Label textWrap="true" text="250" fontWeight="bold" color="#28BAAA" fontStyle="underline" textAlignment="right" fontSize="24" />

				<Label text="Sudah melakukan aktivitas" fontWeight="normal" color="#28BAAA" textAlignment="right" fontSize="12" />

			</StackLayout> -->

		</GridLayout>
	</CardView>
</template>


<script>

export default {
	// props: [ 'description', 'title' ],
}

</script>
