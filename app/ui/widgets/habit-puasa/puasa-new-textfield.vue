<style scoped>
Label {
  font-weight: normal;
}
</style>
<template>
    <GridLayout rows="25, auto, *" marginBottom="10">
        <Label ref="label" row="1" :text="placeholder" opacity="0.4"
            fontSize="14" class="input" />
        <TextField ref="textField" row="1" fontSize="14" @focus="onFocus"
            @blur="onBlur" borderBottomWidth="1" borderBottomColor="#cec8c8"
            paddingLeft="3.5" />

            <Label text="wajib diisi" horizontalAlignment="right" verticalAlignment="bottom" color="rgba(255,0,51,0.6)" fontSize="12" row="2" />

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
        mounted(){
          if(this.$refs.label == undefined) return;

          const label = this.$refs.label.nativeView;
          const textField = this.$refs.textField.nativeView;

          setTimeout(() => {
            label
                .animate({
                    translate: {
                        x: 0,
                        y: -15
                    },
                    opacity: 1
                })
                .then(() => {
                  textField.borderBottomColor = new Color("#28BAAA");
                }, () => {});
          },500)
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
                            x: 0,
                            y: -15
                        },
                        opacity: 1
                    })
                    .then(() => {}, () => {});

                // set the border bottom color to green to indicate focus
                textField.borderBottomColor = new Color("#28BAAA");
            },
            onBlur: function() {
                return

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
                                y: 0
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
                textField.borderBottomColor = new Color("#28BAAA");
            }
        }
    };
</script>

<style>
</style>
