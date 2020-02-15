<style>
/* SegmentedBar{
	selected-background-color:yellow;
	font-size: 10;
	background-color: blue;
} */
.segmented-bar {
		selected-background-color: #4d7ea8;
		color: #4d7ea8;
		background-color: #f4faff;
		font-size: 10;
}

.segButton{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    selected-background-color: #f4faff;
}
.seg1{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    selected-background-color: #f4faff;
}
.seg2{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    selected-background-color: orange;
}
.seg3{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    selected-background-color: green;
}
.seg4{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    selected-background-color: white;
	}
</style>

<template>
	<Page>
		<ScrollView>
			<StackLayout>
				<DatePickerField pickerOkText="Pilih" pickerCancelText="Batal" pickerTitle="Dessi Indah Fitri" :pickerDefaultDate="someDate" hint="select date"></DatePickerField>
				<TimePickerField hint="select time"></TimePickerField>
				<DateTimePickerFields hintDate="select date" hintTime="select time"></DateTimePickerFields>

				<SegmentedBar row="4" @loaded="sbLoaded" :selectedIndex="sbSelectedIndex" class="segButton" id="segbuttonid" marginTop="20px" height="40">

						<SegmentedBarItem title="1" />
						<SegmentedBarItem title="2" />
						<SegmentedBarItem title="3" />
						<SegmentedBarItem title="4" />

				</SegmentedBar>
				<DatePicker :date="someDate" />
				<StackLayout>
			    <label class="form__label" :color="$v.name.$error ? 'red' : 'green'">Name</label>
			    <TextField class="form__input" v-model.trim="$v.name.$model"/>
				  <label class="error" v-if="!$v.name.required">Field is required</label>
				  <label class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</label>
					<label textWrap="true">{{ treeName }}</label>
				</StackLayout>

				<StackLayout>
			    <label class="form__label" :color="$v.age.$error ? 'red' : 'green'" >Age</label>
			    <TextField class="form__input" v-model.trim.lazy="$v.age.$model"/>
				  <label class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}
					</label>
				  <label textWrap="true">{{ treeAge }}</label>
				</StackLayout>
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
			sbSelectedIndex: 1,

			someDate: '',
			// someDate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      name: '',
      age: 0
    }
  },
	mounted(){
		var d =  new Date('Sun May 11,2014'), // new Date(), // 
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    this.someDate = [year, month, day].join('-');
	},
	methods:{
		sbLoaded(args) {
		    // handle selected index change
		    const segmentedBarComponent = args.object;

		    segmentedBarComponent.on("selectedIndexChange", (sbargs) => {
		        const page = sbargs.object.page;
		        const vm = page.bindingContext;
		        const selectedIndex = sbargs.object.selectedIndex;
		        switch (selectedIndex) {
		            case 0:
		                segmentedBarComponent.className = "seg1";
		                break;
		            case 1:
		                segmentedBarComponent.className = "seg2";
		                break;
		            case 2:
		                segmentedBarComponent.className = "seg3";
		                break;
		            case 3:
		                segmentedBarComponent.className = "seg4";
		                break;
		            default:
		                break;
		        }
		    });
			}
	},
	computed: {
		treeAge() {
			return {rootObjectKey: this.$v.age, maxDepth: 2, model: this.$v.age.$model };
		},
		treeName() {
			return {rootObjectKey: this.$v.name, maxDepth: 2, model: this.$v.name.$model };
		},
	},
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  }
}
</script>
