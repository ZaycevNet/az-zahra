<style scoped>

.name {
    color: white;
    /* margin-top:-4; */
    font-size: 18;
    text-alignment: left;
    font-weight: normal;
    text-wrap:true;
    /* font-weight: normal; */
}

.info {
    font-size: 13;
    text-alignment: left;
    color: white;
    /* font-style: italic; */
    text-wrap:true;
    font-weight: normal;
}

.pattern {
  /* background-image: url("~/assets/pattern-1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

  /* background: linear-gradient(-0deg, #28ADAA, #28BAAA); */
  /* background-color: white; */
}

</style>

<template>
  <!-- #709BF8, #7BCBEA -->
  <!-- #6784FF,#EA68FD -->

  <Gradient borderRadius="9" direction="top down" colors="#709BF8, #7BCBEA" color="white" height="60" >
    <GridLayout height="100%" class="pattern">
      <!-- ini membuat brightness -->
      <!-- <StackLayout height="100%" width="100%" backgroundColor="rgba(0,0,0,0.40)" /> -->

			<GridLayout columns="*,60" rows="60" margin="0" borderRadius="10"  borderWidth="0" borderColor="rgba(40,186,170,0.5)" padding="0 5" verticalAlignment="middle">

					<StackLayout col="0" row="0" padding="0 5" verticalAlignment="middle">
							<Label class="name" text="Muhamad Duki" />
							<Label class="info" text="Narasumber" />
					</StackLayout>

          <StackLayout col="1" row="0" padding="5">
							<Image @tap="onFotoZoom('~/assets/images/ukik.jpg')" src="~/assets/images/ukik.jpg" stretch="aspectFill" width="100%" height="100%" borderRadius="50%" borderColor="rgba(255,255,255,0.5)" borderWidth="2"/>
					</StackLayout>
			</GridLayout>

    </GridLayout>
	</Gradient>
</template>

<script>
export default {
	props: ["habit"]
}
</script>
