<template>
	<GridLayout rows="25, auto" marginBottom="10">
			<Label ref="label" row="1" :text="placeholder" opacity="0.4"
					fontSize="14" class="input" />

					<DatePickerField :date="date" dateFormat="dd MMMM yyyy" :minDate="minDate" :maxDate="maxDate" @tap="onFocus" ref="textField" locale="id_ID" row="1" fontSize="14" borderBottomWidth="1" borderBottomColor="#cec8c8"
					paddingLeft="3.5"></DatePickerField>

	</GridLayout>
</template>

<script>
    import { DateTimePicker } from "nativescript-datetimepicker";

    import {
        Color
    } from "color";
    export default {
				data(){
					const dateToday = new Date();
					const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1);
					const dateNextWeek = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 7);

					return {
						dateText: "tap to select date",
						// timeText: "tap to select time",
						date: null,
						minDate: dateTomorrow,
						maxDate: dateNextWeek,
					}
				},
        props: {
            placeholder: {
                type: String
            },
        },
				watch: {
					date(val) {
						// console.log(val)
						// alert(val)
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
					getFormattedDate: function(date) {
							if(date == null) return
							const d = date.getDate();
							const m = date.getMonth() + 1;
							const y = date.getFullYear();
							return (d < 10 ? '0' : '') + d + '-' + (m < 10 ? '0' : '') + m + '-' + y;
					},
					onFocus: function(args) {
							this.date = this.getFormattedDate(this.$refs.textField.nativeView.date)

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
