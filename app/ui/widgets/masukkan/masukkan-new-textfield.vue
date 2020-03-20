<style scoped>
Label {
  font-weight: normal;
}
</style>
<template>
    <GridLayout @loaded="onLoaded" rows="25, auto, *" marginBottom="5">
      <Label ref="label" row="1" :text="placeholder" opacity="0.4" fontSize="14" class="input" />

      <TextField row="1" ref="textField" :text="text" fontSize="14" @focus="onFocus" @textChange="onTextChange" @blur="onBlur" borderWidth="1" borderColor="#cec8c8" padding="5" backgroundColor="rgba(0, 180, 126, 0)" />

      <Label text="wajib diisi, maksimal 250 char" horizontalAlignment="right" verticalAlignment="bottom" color="rgba(255,0,51,0.6)" fontSize="12" row="2" />

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
            text: {
              type:String,
            }
        },
        mounted(){
          // if(this.$refs.label == undefined) return;
          //

          this.$refs.label.nativeView.translateX = 3;
          this.$refs.label.nativeView.translateY = 4;

          // const textField = this.$refs.textField.nativeView;
          //
          // setTimeout(() => {
          //   label
          //       .animate({
          //           translate: {
          //               x: 0,
          //               y: -15
          //           },
          //           opacity: 1
          //       })
          //       .then(() => {
          //         textField.borderBottomColor = new Color("#28BAAA");
          //       }, () => {});
          // },500)
        },
        methods: {
            onLoaded(args){
              // this.$refs.textFieldContainer.nativeView.height = 15*5;
              // this.$refs.textField.nativeView.height = 15*5;
            },
            onFocus: function() {
                // get our elments to maninpulate.
                const label = this.$refs.label.nativeView;
                const textField = this.$refs.textField.nativeView;

                // animate the label sliding up and less transparent.
                label
                    .animate({
                        translate: {
                            x: 0,
                            y: -25
                        },
                        opacity: 1
                    })
                    .then(() => {}, () => {});

                // set the border bottom color to green to indicate focus
                textField.borderColor = new Color("#00b47e");
            },
            onBlur: function() {
                const label = this.$refs.label.nativeView;
                const textField = this.$refs.textField.nativeView;

                // console.log(textField.text.length);
                // console.log(textField.text.trim().length);
                // if there is text in our input then don't move the label back to it's initial position.
                if (!textField.text.trim()) {
                    label
                        .animate({
                            translate: {
                                x: 3,
                                y: 4
                            },
                            opacity: 0.4
                        })
                        .then(
                            () => {
                                textField.text = "";
                            },
                            () => {}
                        );
                }
                // reset border bottom color.
                textField.borderColor = new Color("#cec8c8");
            }
        }
    };
</script>

<style>
</style>
