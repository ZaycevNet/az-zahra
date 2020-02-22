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
	<StackLayout>
		<GroupSegmentedCalendar @onBubbleEvent="onBubbleEvent" height="40" />
		<RadCalendar ref="calendar" height="80%" @dateSelected="onDateSelected"
			:selectionMode="selectionMode">
		</RadCalendar>
		<GridLayout height="auto" columns="*,*">
			<StackLayout col="0" padding="5 2.5 5 5">
				<Ripple  @tap="onNoneTap" rippleColor="white">
					<Button backgroundColor="#ff4081" :text="'Bersihkan  '+String.fromCharCode('0xf12d')" class="btn-next fa" />
				</Ripple>
			</StackLayout>
			<StackLayout col="1" padding="5 5 5 2.5">
				<Ripple @tap="" rippleColor="white">
					<Button :text="'Proses  '+String.fromCharCode('0xf1d9')" class="btn-next fa" />
				</Ripple>
			</StackLayout>
		</GridLayout>

	</StackLayout>
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
      this.onSingleTap()
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
