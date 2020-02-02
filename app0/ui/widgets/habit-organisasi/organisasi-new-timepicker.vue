<template>
	<GridLayout rows="25, auto, *" marginBottom="10">
			<Label ref="label" row="1" :text="placeholder" opacity="0.4"
					fontSize="14" class="input" />

					<StackLayout row="1" @tap="onFocus" ref="textField" borderBottomWidth="1" borderBottomColor="#cec8c8"
					padding="9 0 12 3.5" >
					<Label :text="timeText" color="black" fontSize="14" />
				</StackLayout>

				<Label text="wajib diisi" horizontalAlignment="right" verticalAlignment="bottom" color="rgba(255,0,51,0.6)" fontSize="12" row="2" />

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
					timeText: "",
				}
			},
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
					getFormattedTime: function(date) {
							if(date == null) return

							const h = date.getHours();
							const m = date.getMinutes();
							return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
					},
					onFocus: function(args) {
						// this.time = this.getFormattedTime(this.$refs.textField.nativeView.time)

						// const dateToday = new Date();
						// const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
						// dateTomorrow.setHours(8);
						// dateTomorrow.setMinutes(0);

						alert(args.object);

						DateTimePicker
								.pickTime({
										// context: args.object._context,
										// time: dateTomorrow,
										// okButtonText: "OK",
										// cancelButtonText: "Cancel",
										title: this.placeholder,
										locale: "id_ID",
										is24Hours: true
								})
								.then(selectedTime => {
										if (selectedTime) {
												this.timeText = this.getFormattedTime(selectedTime);
										}
								});

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
