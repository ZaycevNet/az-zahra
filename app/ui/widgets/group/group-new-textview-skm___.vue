<style scoped>
Label {
  font-weight: normal;
}
</style>
<template>
    <GridLayout rows="25, auto, *" height="auto" marginBottom="15">
        <TextView ref="textField" row="1" fontSize="14" @focus="onFocus"
            @blur="onBlur" borderWidth="1" borderColor="#cec8c8"
            :hint="placeholder"/>

            <Label text="opsional" horizontalAlignment="right" verticalAlignment="bottom" fontSize="12" row="2" />

    </GridLayout>
</template>

<script>
    import {
        Color
    } from "color";
    export default {
        props: {
            placeholder: {
                type: String
            },
        },
    };
</script>

<style>
</style>
