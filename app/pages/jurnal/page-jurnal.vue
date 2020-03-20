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
    /* border-width: 1; */
    border-color: #28ADAA;
    text-transform: capitalize;
		android-elevation:0;
}

</style>

<template>
	<GridLayout rows="auto,auto,*,50">

    <JurnalSubtitleCalendar row="0" />

    <StackLayout row="1" margin="5">
  		<JurnalSegmentedCalendar @onBubbleEvent="onBubbleEvent" height="40" />
    </StackLayout>

		<RadCalendar row="2" ref="calendar" height="100%" @dateSelected="onDateSelected"
			:selectionMode="selectionMode">
		</RadCalendar>

		<GridLayout row="3" height="auto" columns="*,*">
			<StackLayout col="0" padding="5 2.5 5 5">
				<Ripple  @tap="onNoneTap" rippleColor="white">
					<Button backgroundColor="#ff4081" :text="'Bersihkan  '+String.fromCharCode('0xf12d')" class="btn-next fa" />
				</Ripple>
			</StackLayout>
			<StackLayout col="1" padding="5 5 5 2.5">
				<Ripple @tap="onSubmit" rippleColor="white">
					<Button :text="'Proses  '+String.fromCharCode('0xf1d9')" class="btn-next fa" />
				</Ripple>
			</StackLayout>
		</GridLayout>

	</GridLayout>
</template>


<script>
import { CalendarSelectionMode } from 'nativescript-ui-calendar';

export default {
	data() {
		return {
			selectionMode:CalendarSelectionMode.Single
		}
	},
	methods: {
		onBubbleEvent(val){
			if(val == 0) {
				this.onRangeTap()
			} else {
				this.onMultipleTap()
			}
		},
    onSubmit(){
      this.$emit("onBubbleEvent")
        // this.$showModal()
        // this.$navigator.navigate("/view-jurnal-detail");
    },
		onDateSelected(eventData) {
      // const myItems = this.$refs.calendar.nativeView.getEventsForDate(eventData.date);
			console.log(this.$refs.calendar.nativeView.displayedDate);
			console.log(this.$refs.calendar.nativeView.selectedDate);
			console.log(this.$refs.calendar.nativeView.selectedDateRange);
			console.log(this.$refs.calendar.nativeView.selectedDates);
			console.log("------------")
    },
    onNoneTap() {
      this.$refs.calendar.nativeView.clearSelection();
      // this.onSingleTap()
    },
    onSingleTap() {
      this.selectionMode = CalendarSelectionMode.Single;
    },
    onMultipleTap() {
      this.selectionMode = CalendarSelectionMode.Multiple;
    },
    onRangeTap() {
      this.selectionMode = CalendarSelectionMode.Range;
    },
  },
}
</script>
