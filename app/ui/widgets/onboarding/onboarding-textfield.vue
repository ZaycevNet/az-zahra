<style scoped>
TextField {
  padding-left: 50;
  padding-right: 30;
  border-width: 1;
  border-radius: 50%;
  border-color: rgba(255,255,255,0.35);
  background-color: rgba(255,255,255,0.25);
  color: black;
  /* font-weight: bold; */
  text-alignment:right;
}
.input {
  padding:0 0 0 50;
  color: rgba(255,255,255,0.65);
}
.icon {
  padding:0 0 0 15;
  color: rgba(255,255,255,0.65);
  font-size: 25;
}
.info {
  padding:0 0 0 15;
  color: rgba(255,255,255,0.75);
  font-size: 25;
  text-alignment:right;
  font-size: 12;
}

</style>
<template>
  <GridLayout rows="30, auto, *" marginBottom="0">
      <Label ref="label" row="1" :text="item.placeholder" opacity="1"
          fontSize="14" class="input" />
      <Label ref="icon" row="1" :text="item.icon | fonticon" opacity="1"
          class="icon ion" />
      <Gradient direction="to right" borderRadius="50" row="1" colors="rgba(255,255,255,0.0),rgba(255,255,255,0.0),rgba(255,255,255,0.35)">
        <TextField ref="textField" :secure="item.secure" @focus="onFocus"
          @blur="onBlur" />
      </Gradient>
      <Label :text="item.info" class="info" row="2"/>
  </GridLayout>
</template>

<script>
    import {
        Color
    } from "color";
    export default {
        props: {
            item: {
                default: () => ({
                  placeholder:"Label",
                  icon:'ion-ios-contact',
                  secure:false,
                  info:"wajib diisi"
                })
            }
        },

        // props: {
        //     placeholder: {
        //         type: String,
        //         default:"123"
        //
        //     },
        //     secure: {
        //         type: String,
        //     }
        // },
        mounted(){
          if(this.$refs.label == undefined) return;

          const icon = this.$refs.icon.nativeView;
          const label = this.$refs.label.nativeView;
          const textField = this.$refs.textField.nativeView;

          label.translateY = 12;
          icon.translateY = 10;
          // label.opacity = 1;
          // textField.borderBottomColor = new Color("#28BAAA");

        },
        methods: {
            onFocus: function() {
                // get our elments to maninpulate.
                const label = this.$refs.label.nativeView;
                const textField = this.$refs.textField.nativeView;

                // animate the label sliding up and less transparent.
                label
                    .animate({
                        translate: {
                            x: -45,
                            y: -25
                        },
                        opacity: 0.75,
                        duration:400,
                    })
                    .then(() => {}, () => {});

                // set the border bottom color to green to indicate focus
                // textField.borderBottomColor = new Color("#00b47e");
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
                                x: 0,
                                y: 12
                            },
                            opacity: 1,
                            duration:500,
                        })
                        .then(
                            () => {
                                textField.text = "";
                            },
                            () => {}
                        );
                }
                // reset border bottom color.
                // textField.borderBottomColor = new Color("#cec8c8");
            }
        }
    };
</script>

<style>
</style>
