

<template>

<CardView elevation="5" radius="40" width="200" height="40"  color="white" fontSize="16">
    <Ripple @tap="$emit('onBubbleEvent')" rippleColor="white">
        <Gradient direction="top down" colors="#28ADAA, #28BAAA">
            <StackLayout height="40" backgroundColor="" verticalAlignment="middle">
                <Label textAlignment="center" :text="getIcon" class="fa" />
            </StackLayout>
        </Gradient>
    </Ripple>
</CardView>

</template>

<script>
export default {
  props: ['icon','text'],
  computed: {
    getIcon() {
        return this.text+' '+String.fromCharCode(`0x${this.icon}`)
    }
  }
}
</script>
