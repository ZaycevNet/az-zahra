

<template>

<CardView elevation="0" radius="40" width="40" height="40" backgroundColor="rgba(0,0,0,0)" color="white">
    <Ripple  @tap="$emit('onBubbleEvent')" rippleColor="white">
        <!-- <Gradient direction="top down" colors="#28ADAA, #28BAAA"> -->
            <StackLayout height="40" backgroundColor="rgba(0,0,0,0)" verticalAlignment="middle">
                <Label fontWeight="normal" fontSize="20" textAlignment="center" :text="''+String.fromCharCode('0xf33b')" class="ion" />
            </StackLayout>
        <!-- </Gradient> -->
    </Ripple>
</CardView>

</template>
