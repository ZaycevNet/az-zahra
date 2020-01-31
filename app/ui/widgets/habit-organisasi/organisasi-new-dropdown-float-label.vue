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
  <GridLayout rows="25, auto" marginBottom="10">
          <StackLayout ref="textField" row="1" colSpan="2" borderBottomWidth="1" width="auto">
      			<DropDown :items="items" class="changed-styles" hint="" @opened="dropDownOpened" @closed="dropDownClosed" isEnabled="true"
      			 @selectedIndexChanged="dropDownSelectedIndexChanged" />
      		</StackLayout>
          <Label ref="label" paddingTop="20" rowSpan="2" text="placeholder" opacity="0.4" verticalAlignment="middle"
              fontSize="14" class="input" />
  </GridLayout>

</template>

<script>
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import {
    Color
} from "color";
export default {
	data(){
		return {
			items: [
        'osis','ekstrakurikuler','pramuka','umum'
      ],
			selectedIndex: null,
		}
	},
  watch: {
    selectedIndex(){

    }
  },
	methods: {
		dropDownOpened(args) {
		    console.log("Drop Down opened");
        // get our elments to maninpulate.
        const label = this.$refs.label.nativeView;
        const textField = this.$refs.textField.nativeView;

        // animate the label sliding up and less transparent.
        label
            .animate({
                translate: {
                    x: 0,
                    y: -20
                },
                opacity: 1
            })
            .then(() => {}, () => {});

        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new Color("#00b47e");
		},

		dropDownClosed(args) {
      setTimeout(() => {
        const label = this.$refs.label.nativeView;
        const textField = this.$refs.textField.nativeView;

        console.log(`Drop Down closed`);

        if (this.selectedIndex == null) {
            label
                .animate({
                    translate: {
                        x: 0,
                        y: 0
                    },
                    opacity: 0.4
                })
                .then(
                    () => {
                        dropdown.selectedIndex = null
                    },
                    () => {}
                );
        }

        // reset border bottom color.
        textField.borderBottomColor = new Color("#cec8c8");
      }, 300);
		},

		dropDownSelectedIndexChanged(args) {
      this.selectedIndex = args.newIndex;
		    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
		},

	}
}
</script>
