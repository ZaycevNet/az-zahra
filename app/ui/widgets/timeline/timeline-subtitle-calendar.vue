<style scoped>

.ranking-activity {
    color: white;
    /* margin-top:-4; */
    font-size: 20;
    text-alignment: left;
    font-weight: bold;
}

/* .total-activity {

    font-size: 18;
    text-alignment: right;
} */

.info-activity {
    font-size: 13;
    text-alignment: left;
    color:white;
    /* font-style: italic; */
}
</style>

<template>
  <Gradient direction="to right" colors="rgba(255,119,143,1), rgba(255,180,170,1)" color="white" height="auto">
			<GridLayout columns="40,*" rows="50" margin="0" borderRadius="10"  borderWidth="0" padding="5 10 5 10">
          <Label col="0" row="0" textWrap="true" textAlignment="center" margin="5 0" color="" fontSize="40" class="ion" :text="'ion-md-clipboard' | fonticon" fontWeight="normal"/>

					<StackLayout col="1" row="0" padding="0 10" verticalAlignment="middle">
							<Label fontSize="16" fontWeight="bold" text="Timeline Harian" />
							<Label fontSize="12" fontWeight="normal" text="Perkembangan harian kebiasaan islami siswa " />
					</StackLayout>
			</GridLayout>
    </Gradient>
</template>

<script>
export default {
	props: ["habit"]
}
</script>
