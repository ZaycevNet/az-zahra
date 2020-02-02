<template>
	<GridLayout rows="25, auto" marginBottom="10">
			<Label ref="label" row="1" :text="placeholder" opacity="0.4"
					fontSize="14" class="input" />

					<TimePickerField @tap="onFocus" :time="time" ref="textField" timeFormat="h:mm a" locale="id_ID" row="1" fontSize="14" borderBottomWidth="1" borderBottomColor="#cec8c8"
					paddingLeft="3.5"></TimePickerField>

	</GridLayout>
</template>

<script>
import { DateTimePicker } from "nativescript-datetimepicker";


    import {
        Color
    } from "color";
    export default {
			data() {
				return {
					time: null,
				}
			},
        props: {
            placeholder: {
                type: String
            },
        },
				watch: {
					time(val) {
						alert(val)
					}
				},
        mounted(){
					setTimeout(() => {
            const label = this.$refs.label.nativeView;
            const textField = this.$refs.textField.nativeView;
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
					getFormattedTime: function(date) {
							if(date == null) return

							const h = date.getHours();
							const m = date.getMinutes();
							return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
					},
					onFocus: function(args) {
						this.time = this.getFormattedTime(this.$refs.textField.nativeView.time)

						return

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
							textField.borderBottomColor = new Color("#00b47e");
					},
				}
		}
</script>
