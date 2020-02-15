<style scoped>

.changed-styles {
    padding: 10 0;
    font-size: 14;
		width: auto;
    color: black;
    text-align: left;
}

.default:disabled {
    opacity: 0.5
}

/* StackLayout {
    horizontal-align: center;
} */

Label {
  font-weight: normal;
}
</style>
<template>
  <GridLayout rows="25, auto, *" marginBottom="10">
          <StackLayout ref="textField" row="1" colSpan="2" borderBottomWidth="1" borderBottomColor="#cec8c8" width="auto">
      			<DropDown :items="items" class="changed-styles" hint="" @opened="dropDownOpened" @closed="dropDownClosed" isEnabled="true" paddingLeft="5"
      			 @selectedIndexChanged="dropDownSelectedIndexChanged" />
      		</StackLayout>
          <Label ref="label" paddingBottom="2.5" rowSpan="2" text="Jenis" opacity="0.4" verticalAlignment="bottom"
              fontSize="14" class="input" />

          <Label text="wajib diisi" horizontalAlignment="right" verticalAlignment="bottom" color="rgba(255,0,51,0.6)" fontSize="12" row="2" />

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
        ' Zakat Mal (Harta)',
        ' Zakat Fitri',
        ' Infaq Wajib',
        ' Infaq Sunnah',
        ' Sedekah Jariyah',
        ' Sedekah Biasa',
        " Waqaf Umum (Ghaira Mu'ayyan)",
        " Waqaf Khusus (Mu'ayyan)",
      ],
			selectedIndex: 0,
		}
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
                  y: -33
              },
              opacity: 1
          })
          .then(() => {
            textField.borderBottomColor = new Color("#28BAAA");
          }, () => {});
    },100)
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
                    y: -32
                },
                opacity: 1
            })
            .then(() => {}, () => {});

        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new Color("#00b47e");
		},

		dropDownClosed(args) {
      return

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

			this.$emit('onBubbleTap', this.selectedIndex)
		},

	}
}
</script>
