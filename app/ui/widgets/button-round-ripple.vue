

<template>

<CardView elevation="0" radius="40" width="200" height="40"  color="white" fontSize="16">
    <Ripple rippleColor="white">
        <Gradient direction="top down" colors="#28ADAA, #28BAAA">
            <StackLayout height="40" backgroundColor="" verticalAlignment="middle">
                <Label textAlignment="center" :text="'Kirim '+String.fromCharCode('0xf1d9')" class="fa" />
            </StackLayout>
        </Gradient>
    </Ripple>
</CardView>

</template>
