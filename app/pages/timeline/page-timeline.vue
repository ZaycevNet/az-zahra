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
	<GridLayout rows="auto,*,10">

    <TimelineSubtitleCalendar row="0" />

    <!-- <StackLayout row="1" margin="5">
  		<JurnalSegmentedCalendar @onBubbleEvent="onBubbleEvent" height="40" />
    </StackLayout> -->

		<!-- <RadCalendar row="2" ref="calendar" height="100%" @dateSelected="onDateSelected"
			:selectionMode="selectionMode">
		</RadCalendar> -->

		<RadCalendar row="1"
			:eventSource="events"
			@dayViewEventSelected="onDayViewEventSelected"
			:dayViewStyle="dayViewStyle"
			viewMode="Day">
		</RadCalendar>

		<!-- <GridLayout row="3" height="auto" columns="*,*">
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
		</GridLayout> -->

	</GridLayout>
</template>


<script>
import {
  AllDayEventsViewStyle,
  CalendarMonthViewStyle,
  CalendarWeekViewStyle,
  CalendarYearViewStyle,
  CalendarMonthNamesViewStyle,
  CalendarSelectionShape,
  CalendarCellAlignment,
  CalendarDayViewStyle,
  CellStyle,
  DayCellStyle,
  DayEventsViewStyle,
  MonthCellStyle,
  CalendarFontStyle,
} from 'nativescript-ui-calendar';
import { Color } from "tns-core-modules/color";

import { getCalendarDayEvents } from '@/data/timeline/timeline-log';

export default {
	data() {
		return {
			// selectionMode:CalendarSelectionMode.Single,
			events: getCalendarDayEvents(),
      // title: description

			brownColor: new Color("#745151"),
      lightYellowColor: new Color("#f1e8ca"),
      greenBlueColor: new Color("#66bbae"),
      darkBrownColor: new Color("#5b391e"),
      lightGreenColor: new Color("#9ebd9e"),
      orangeColor: new Color("#dd855c"),
      lightBrownColor: new Color("#dbcbbb"),
      lightGrayColor: new Color("#bbcbdb"),
      lightBlueColor: new Color("#B5B5F9"),
      brightBlueColor: new Color("#0023ff"),
      cyanColor: new Color("#00ffff"),
      whiteColor: new Color("White"),
      blackColor: new Color("Black"),
      grayColor: new Color("Gray"),
      redColor: new Color("Red"),
      blueColor: new Color("Blue"),
      blueVioletColor: new Color("BlueViolet"),
      preferredFontName: "Times New Roman",
      title: "Styling",
		}
	},
	computed: {
		dayViewStyle() {
      const dayViewStyle = new CalendarDayViewStyle();
      // dayViewStyle.backgroundColor = this.orangeColor;
      dayViewStyle.showWeekNumbers = true;
      dayViewStyle.showDayNames = true;
      dayViewStyle.showTitle = true;

      const todayCellStyle = new DayCellStyle();
      todayCellStyle.cellBackgroundColor = new Color("#FFDEE7");
      todayCellStyle.cellBorderWidth = 1;
      // todayCellStyle.cellBorderColor = new Color("white");
      // todayCellStyle.cellTextColor = new Color("white");
      todayCellStyle.cellTextFontName = this.preferredFontName;
      todayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      todayCellStyle.cellTextSize = 14;
      dayViewStyle.todayCellStyle = todayCellStyle;

      // const dayCellStyle = new DayCellStyle();
      // dayCellStyle.showEventsText = true;
      // dayCellStyle.eventTextColor = this.whiteColor;
      // dayCellStyle.eventFontName = this.preferredFontName;
      // dayCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
      // dayCellStyle.eventTextSize = 8;
      // dayCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      // dayCellStyle.cellPaddingHorizontal = 10;
      // dayCellStyle.cellPaddingVertical = 5;
      // dayCellStyle.cellBackgroundColor = this.lightGreenColor;
      // dayCellStyle.cellBorderWidth = 1;
      // dayCellStyle.cellBorderColor = this.lightYellowColor;
      // dayCellStyle.cellTextColor = this.brownColor;
      // dayCellStyle.cellTextFontName = this.preferredFontName;
      // dayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      // dayCellStyle.cellTextSize = 10;
      // dayViewStyle.dayCellStyle = dayCellStyle;

      // const weekendCellStyle = new DayCellStyle();
      // weekendCellStyle.eventTextColor = this.blueVioletColor;
      // weekendCellStyle.eventFontName = this.preferredFontName;
      // weekendCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
      // weekendCellStyle.eventTextSize = 8;
      // weekendCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      // weekendCellStyle.cellPaddingHorizontal = 10;
      // weekendCellStyle.cellPaddingVertical = 5;
      // weekendCellStyle.cellBackgroundColor = this.lightYellowColor;
      // weekendCellStyle.cellBorderWidth = 1;
      // weekendCellStyle.cellBorderColor = this.lightYellowColor;
      // weekendCellStyle.cellTextColor = this.brownColor;
      // weekendCellStyle.cellTextFontName = this.preferredFontName;
      // weekendCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      // weekendCellStyle.cellTextSize = 12;
      // dayViewStyle.weekendCellStyle = weekendCellStyle;

      const selectedCellStyle = new DayCellStyle();
      // selectedCellStyle.eventTextColor = new Color("white");
      // selectedCellStyle.eventFontName = this.preferredFontName;
      // selectedCellStyle.eventFontStyle = CalendarFontStyle.Bold;
      // selectedCellStyle.eventTextSize = 8;
      // selectedCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      // selectedCellStyle.cellPaddingHorizontal = 10;
      // selectedCellStyle.cellPaddingVertical = 5;
      selectedCellStyle.cellBackgroundColor = new Color("#EFFDF2");
      selectedCellStyle.cellBorderWidth = 1;
      // selectedCellStyle.cellBorderColor = new Color("white");
      // selectedCellStyle.cellTextColor = new Color("white");
      // selectedCellStyle.cellTextFontName = this.preferredFontName;
      // selectedCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      // selectedCellStyle.cellTextSize = 18;
      dayViewStyle.selectedDayCellStyle = selectedCellStyle;

      // const weekNumberCellStyle = new CellStyle();
      // weekNumberCellStyle.cellBackgroundColor = this.lightGrayColor;
      // weekNumberCellStyle.cellBorderWidth = 1;
      // weekNumberCellStyle.cellBorderColor = this.lightYellowColor;
      // weekNumberCellStyle.cellTextColor = this.brownColor;
      // weekNumberCellStyle.cellTextFontName = this.preferredFontName;
      // weekNumberCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      // weekNumberCellStyle.cellTextSize = 8;
      // dayViewStyle.weekNumberCellStyle = weekNumberCellStyle;

      // const dayNameCellStyle = new CellStyle();
      // dayNameCellStyle.cellBackgroundColor = this.lightYellowColor;
      // dayNameCellStyle.cellBorderWidth = 1;
      // dayNameCellStyle.cellBorderColor = this.brownColor;
      // dayNameCellStyle.cellTextColor = this.brownColor;
      // dayNameCellStyle.cellTextFontName = this.preferredFontName;
      // dayNameCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      // dayNameCellStyle.cellTextSize = 10;
      // dayViewStyle.dayNameCellStyle = dayNameCellStyle;

      // const titleCellStyle = new DayCellStyle();
      // titleCellStyle.cellBackgroundColor = this.orangeColor;
      // titleCellStyle.cellBorderWidth = 1;
      // titleCellStyle.cellBorderColor = this.lightYellowColor;
      // titleCellStyle.cellTextColor = this.brownColor;
      // titleCellStyle.cellTextFontName = this.preferredFontName;
      // titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      // titleCellStyle.cellTextSize = 18;
      // dayViewStyle.titleCellStyle = titleCellStyle;

      const dayEventsViewStyle = new DayEventsViewStyle();
      // dayEventsViewStyle.backgroundColor = this.lightBlueColor;
      dayEventsViewStyle.timeLabelFormat = 'HH:mm';
      // dayEventsViewStyle.timeLabelTextColor = this.brightBlueColor;
      dayEventsViewStyle.timeLabelTextSize = 12;
      dayViewStyle.dayEventsViewStyle = dayEventsViewStyle;

      // const allDayEventsViewStyle = new AllDayEventsViewStyle();
      // allDayEventsViewStyle.backgroundColor = this.cyanColor;
      // allDayEventsViewStyle.allDayText = 'DAILY';
      // allDayEventsViewStyle.allDayTextIsVisible = true;
      // dayViewStyle.allDayEventsViewStyle = allDayEventsViewStyle;

      return dayViewStyle;
    },
	},
	methods: {
		onDayViewEventSelected({ eventData }) {
      alert({
        title: 'Event Selected',
        message: eventData.title,
        okButtonText: 'OK'
      });
    },


		// onBubbleEvent(val){
		// 	if(val == 0) {
		// 		this.onRangeTap()
		// 	} else {
		// 		this.onMultipleTap()
		// 	}
		// },
    // onSubmit(){
    //     // this.$showModal()
    //     this.$navigator.navigate("/view-jurnal-detail");
    // },
		// onDateSelected(eventData) {
    //   // const myItems = this.$refs.calendar.nativeView.getEventsForDate(eventData.date);
		// 	console.log(this.$refs.calendar.nativeView.displayedDate);
		// 	console.log(this.$refs.calendar.nativeView.selectedDate);
		// 	console.log(this.$refs.calendar.nativeView.selectedDateRange);
		// 	console.log(this.$refs.calendar.nativeView.selectedDates);
		// 	console.log("------------")
    // },
    // onNoneTap() {
    //   this.$refs.calendar.nativeView.clearSelection();
    //   // this.onSingleTap()
    // },
    // onSingleTap() {
    //   this.selectionMode = CalendarSelectionMode.Single;
    // },
    // onMultipleTap() {
    //   this.selectionMode = CalendarSelectionMode.Multiple;
    // },
    // onRangeTap() {
    //   this.selectionMode = CalendarSelectionMode.Range;
    // },
  },
}
</script>
