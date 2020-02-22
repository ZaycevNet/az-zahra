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
	<Gradient direction="top down" colors="#28ADAA, #28BAAA" color="white" height="auto" >
			<GridLayout columns="*,65" rows="65" margin="0" borderRadius="10"  borderWidth="0" borderColor="rgba(40,186,170,0.5)" padding="0 25">
					<StackLayout col="1" row="0" padding="5">
							<Image src="~/assets/images/love.jpg" stretch="aspectFill" width="100%" height="100%" borderRadius="50%" borderColor="rgba(255,255,255,0.5)" borderWidth="2.5"/>
					</StackLayout>
					<StackLayout col="0" row="0" padding="0 5" verticalAlignment="middle">
							<Label class="ranking-activity" text="Daisy Disney" />
							<Label class="info-activity" text="NIS: 7456, Kelas - 1D" />
					</StackLayout>
			</GridLayout>
	</Gradient>
</template>

<script>
export default {
	props: ["habit"]
}
</script>
