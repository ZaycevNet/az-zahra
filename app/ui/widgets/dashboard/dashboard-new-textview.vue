<style scoped>
Label {
  font-weight: normal;
}
</style>
<template>
  <StackLayout>

    <TextView backgroundColor="white" maxLength="200" height="150" ref="textField" row="1" fontSize="14" @focus="onFocus" @blur="onBlur" borderWidth="0" padding="5" marginBottom="10" />

    <Label text="maksimal 200 karakter" horizontalAlignment="right" color="#cec8c8" fontSize="12"/>

  </StackLayout>
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
        mounted(){

        },
        methods: {
            onFocus: function() {

            },
            onBlur: function() {

            }
        }
    };
</script>

<style>
</style>
