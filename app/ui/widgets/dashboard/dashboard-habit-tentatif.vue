

<template>

<StackLayout backgroundColor="rgba(255,255,255,0)">
    <CardView  row="0" elevation="10" radius="15" margin="5 5 10 5" width="10%">
      <!-- , rgb(15,180,166) rgb(103,224,147), rgb(66,207,115)-->
      <!-- rgb(64,204,155), rgb(5,175,170) -->
      <Ripple @tap="gotoPage({ path: habit.path })" rippleColor="#fff">
        <Gradient direction="top down" colors="rgb(142,222,255), rgb(9,176,255)" color="white" height="auto">
          <GridLayout rows="*,50">
            <StackLayout row="0" borderColor="#28ADAA" padding="15 20 0 20">
      				<Image width="100%" height="100%" :src="habit.image" />
      			</StackLayout>
            <StackLayout row="1" padding="5 5" >
              <Label text="Kebiasaan" fontWeight="bold" fontSize="13" textAlignment="center"/>
              <Label textAlignment="center" fontWeight="normal" textWrap="true" fontSize="13" :text="habit.title" />
            </StackLayout>
          </GridLayout>
        </Gradient>
      </Ripple>
    </CardView>

</StackLayout>

</template>

<script>
// import { SwipeDirection } from "ui/gestures";

export default {
    props: ["habit"],
}

</script>
