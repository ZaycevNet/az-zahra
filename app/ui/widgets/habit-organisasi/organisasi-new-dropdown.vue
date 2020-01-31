<style scoped>

.changed-styles {
    padding: 10 0;
    font-size: 14;
		width: auto;
    text-align: left;
}

.default:disabled {
    opacity: 0.5
}

/* StackLayout {
    horizontal-align: center;
} */
</style>

<template>
		<StackLayout row="1" colSpan="2" borderBottomWidth="1" width="auto" marginBottom="10">
			<DropDown :items="items" :selectedIndex="selectedIndex" class="changed-styles"  @opened="dropDownOpened" @closed="dropDownClosed" isEnabled="true"
			 @selectedIndexChanged="dropDownSelectedIndexChanged" />
		</StackLayout>
</template>

<script>


import { SelectedIndexChangedEventData } from "nativescript-drop-down";



export default {
	data(){
		return {
			items: [
        'osis','ekstrakurikuler','pramuka','umum'
      ],
			selectedIndex: 0,
		}
	},
	methods: {
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
