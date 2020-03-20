<style scoped>

.name {
    color: white;
    /* margin-top:-4; */
    font-size: 18;
    text-alignment: left;
    font-weight: bold;
    text-wrap:true;
}

.info {
    font-size: 13;
    text-alignment: left;
    color:white;
    /* font-style: italic; */
    text-wrap:true;
}

.pattern {
  /* background-image: url("~/assets/pattern.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>

<template>
	<Gradient direction="top down" colors="#28ADAA, #28BAAA" color="white" height="auto" >
    <GridLayout height="100%" class="pattern">

      <!-- Brightness -->
      <!-- <StackLayout height="100%" width="100%" backgroundColor="rgba(0,0,0,0.40)" /> -->

			<GridLayout columns="65,*" rows="65" margin="15 0 0 0" borderRadius="10"  borderWidth="0" borderColor="rgba(40,186,170,0.5)" padding="0 15" verticalAlignment="middle">
          <Ripple rippleColor="#fff" col="1" row="0" @tap="$emit('onBubbleEvent')">
  					<StackLayout padding="0 5" verticalAlignment="middle">
  							<Label class="name" text="Muhamad Duki" />
  							<Label class="info" text="NIS: 7456, SD: Kelas - 1D" />
  					</StackLayout>
          </Ripple>
          <Ripple rippleColor="#fff" col="0" row="0" @tap="onFotoZoom('~/assets/images/ukik.jpg')">
            <StackLayout col="0" row="0" padding="5">
  							<Image src="~/assets/images/ukik.jpg" stretch="aspectFill" width="100%" height="100%" borderRadius="50%" borderColor="rgba(255,255,255,0.5)" borderWidth="2.5"/>
  					</StackLayout>
          </Ripple>
			</GridLayout>

      <Ripple @tap="$emit('onBubbleEvent')" rippleColor="#28ADAA" margin="17" horizontalAlignment="right">
          <Label color="white" fontSize="24" :text="'ion-md-settings' | fonticon" class="ion" horizontalAlignment="right" />
      </Ripple>

    </GridLayout>
	</Gradient>
</template>

<script>
export default {
	props: ["habit"]
}
</script>
