<style scoped>

.btn-next {
    width: 100%;
    border-radius: 10%;
    color: white;
    font-weight: bold;
    padding: 25px;
    background-color: #28ADAA;
    text-align: center;
    font-style: normal;
    border-width: 1;
    border-color: #28ADAA;
    text-transform: capitalize;
		android-elevation:0;
}

/* .btn-next:active {
    color: #28ADAA;
    font-weight: bold;
    background-color: white;
    text-align: center;
    border-width: 1;
    border-color: #28ADAA;
    text-transform: capitalize;
		android-elevation:0;
} */

/* .btn-next:highlighted{
    background-color: rgba(40,186,170,0.3);
		android-elevation:0;
} */
</style>

<template>
<!-- <Button class="btn btn-primary btn-rounded-lg" @tap="$emit('onBubbleEvent')" text="I !"></Button> -->
<Ripple @tap="$emit('onBubbleEvent')"  rippleColor="white">
  <Button :text="'Tambahkan  '+String.fromCharCode('0xf1d9')" class="btn-next fa" />
</Ripple>
</template>
