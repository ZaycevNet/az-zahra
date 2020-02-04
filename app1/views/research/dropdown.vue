<style scoped>
.default {
    padding: 15;
    background-color: red;
    color: yellow;
    font-size: 25;
    font-weight: bold;
    font-style: italic;
    text-align: left;
    text-decoration: underline;
    margin: 20;
    border-width: 2;
    border-color: black;
}
.changed-styles {
    padding: 10;
    font-size: 14;
		width: 250;
    text-align: left;
}
.changed-styles-1 {
    padding: 10;
    font-size: 35;
    text-decoration: line-through;
    background-color: blue;
    color: green;
    text-align: right;
}
.default:disabled {
    opacity: 0.5
}

StackLayout {
    horizontal-align: center;
}
</style>

<template>
	<Page @loaded="pageLoaded">
	  <GridLayout rows="auto, auto, *" columns="auto, *">
	    <DropDown :items="items" :selectedIndex="selectedIndex" class="default" hint=""
	                 @opened="dropDownOpened" @closed="dropDownClosed" isEnabled="false"
	                 @selectedIndexChanged="dropDownSelectedIndexChanged"
	                 row="0" colSpan="2" />

			<StackLayout row="1" colSpan="2" borderWidth="1" width="auto">
				<DropDown :items="items" :selectedIndex="selectedIndex" class="changed-styles" hint="dropdown" @opened="dropDownOpened" @closed="dropDownClosed" isEnabled="true"
				 @selectedIndexChanged="dropDownSelectedIndexChanged" />
			</StackLayout>

	    <!-- <Label text="Selected Index:" row="1" col="0" fontSize="18" verticalAlignment="bottom"/>
	    <TextField :text="selectedIndex" row="1" col="1" /> -->
	  </GridLayout>
	</Page>
</template>

<script>


import { SelectedIndexChangedEventData } from "nativescript-drop-down";



export default {
	data(){
		return {
			items: [],
			selectedIndex: 0,
		}
	},
	methods: {
		pageLoaded(args) {
		    var page = args.object;

		    for (var loop = 0; loop < 4; loop++) {
		        this.items.push("Item " + loop.toString());
		    }

		    this.selectedIndex = 15;

		},

		dropDownOpened(args) {
		    console.log("Drop Down opened");
		},

		dropDownClosed(args) {
		    console.log("Drop Down closed");
		},

		dropDownSelectedIndexChanged(args) {
		    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
		}

	}
}
</script>
