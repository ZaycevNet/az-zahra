<template>
	<GridLayout rows="25, auto,*" marginBottom="10">
			<Label ref="label" row="1" :text="placeholder" opacity="0.4"
					fontSize="14" class="input" />

					<StackLayout row="1" @tap="onFocus" ref="textField" borderBottomWidth="1" borderBottomColor="#cec8c8"
					padding="9 0 12 3.5" >
					<Label :text="dateText" color="black" fontSize="14" />
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
				data(){
					return {
						dateText: "",
					}
				},
        props: {
            placeholder: {
                type: String
            },
        },
        mounted(){
					if(this.$refs.label == undefined) return;
					if(this.$refs.textField == undefined) return;

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
					getFormattedDate: function(date) {
							if(date == null) return
							const d = date.getDate();
							const m = date.getMonth() + 1;
							const y = date.getFullYear();
							return (d < 10 ? '0' : '') + d + '-' + (m < 10 ? '0' : '') + m + '-' + y;
					},
					onFocus: function(args) {
							// this.date = this.getFormattedDate(this.$refs.textField.nativeView.date)

							const dateToday = new Date();
							const dateTomorrow = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1-365);
							const dateNextWeek = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 7-7);

							DateTimePicker
									.pickDate({
											context: args.object._context,
											date: dateTomorrow,
											minDate: dateTomorrow,
											maxDate: dateNextWeek,
											// okButtonText: "OK",
											// cancelButtonText: "Cancel",
											title: "Pilih Tanggal",
											locale: "id_ID"
									})
									.then(selectedDate => {
											if (selectedDate) {
													this.dateText = this.getFormattedDate(selectedDate);
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
