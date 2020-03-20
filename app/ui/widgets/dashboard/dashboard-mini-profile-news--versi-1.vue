<style scoped>

.name {
    color: white;
    font-size: 18;
    text-alignment: left;
    font-weight: bold;
    text-wrap:true;
}

.info {
    font-size: 13;
    text-alignment: left;
    color: white;
    text-wrap:true;
    font-weight: normal;
}

</style>

<template>
  <!-- #709BF8, #7BCBEA -->
  <!-- #6784FF,#EA68FD -->
  <!-- #FE619D,#FFAA69 -->


	<!-- <Gradient direction="to right" colors="#709BF8, #7BCBEA" color="white" height="65" > -->
    <GridLayout height="100%">
      <!-- ini membuat brightness -->
      <!-- <StackLayout height="100%" width="100%" backgroundColor="rgba(0,0,0,0.40)" /> -->

			<GridLayout columns="50,*" rows="50" margin="0" borderRadius="1"  borderWidth="0" borderColor="rgba(40,186,170,0.5)" padding="5 15 5 5" verticalAlignment="middle">

					<StackLayout col="1" row="0" padding="0 5" verticalAlignment="middle">
							<Label class="name" text="Ferynda Regular A" />
							<Label class="info" text="Narasumber" />
					</StackLayout>


          <StackLayout col="0" row="0" padding="5">
							<Image src="~/assets/images/love.jpg" stretch="aspectFill" width="100%" height="100%" borderRadius="50%" borderColor="rgba(255,255,255,0.5)" borderWidth="2.5"/>
					</StackLayout>
			</GridLayout>

      <!-- <Ripple rippleColor="rgba(255,255,255)" horizontalAlignment="right"> -->
      <StackLayout horizontalAlignment="right" verticalAlignment="middle">
        <ButtonRipple margin="0 10" @tap="gotoPage({ path:'/view-dashboard-detail-anchor' })" />
      </StackLayout>

          <!-- <Label color="white" margin="10" fontSize="24" :text="String.fromCharCode('0xf33b')" class="ion" horizontalAlignment="right" @tap="gotoPage({ path:'/view-dashboard-detail-anchor' })" /> -->
      <!-- </Ripple> -->

    </GridLayout>
	<!-- </Gradient> -->
</template>

<script>
export default {
	props: ["habit"]
}
</script>
