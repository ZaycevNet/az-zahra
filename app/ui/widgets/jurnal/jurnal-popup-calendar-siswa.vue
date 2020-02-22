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
  <!-- <Ripple rippleColor="white"  @tap="showPopup">
      <Label ref="popup" verticalAlignment="center" color="white" fontSize="24" class="ion" :text="'ion-md-calendar' | fonticon" margin="0 5" />
  </Ripple> -->

  <Ripple rippleColor="white" @tap="showPopup">
      <Label ref="popup" textWrap="true" padding="10" textAlignment="center">
        <FormattedString >
          <Span color="white" fontSize="24" class="ion" :text="'ion-md-calendar' | fonticon" />
          <Span text=" Waktu" color="white" />
        </FormattedString>
      </Label>
  </Ripple>

</template>

<script>

import { Popup } from 'nativescript-popup';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Button } from 'tns-core-modules/ui/button';
import { Label } from 'tns-core-modules/ui/label';
import { ScrollView } from 'tns-core-modules/ui/scroll-view';

import {
    Color
} from "color";
export default {
	data(){
		return {
      popup: null,
    	items: [
        ' Hari Ini',' Semua',
      ],
			selectedIndex: 0,
		}
	},

	methods: {
    // itemTap(args) {
    //   this.hidePopup(`${this.items[args.index]['name']} : ${args.index}`);
    // },

    _showPopup(source, view) {
      this.popup = new Popup({
        height: (30+30+30),
        width: 100,
        // unit: '%', //'dp' | 'px' | '%',
        elevation: 10,
        // borderRadius: 25
      });
      this.popup.showPopup(source, view).then(data => {
        console.log(data);
      });
    },
    hidePopup(param = "") {
      this.showToast("Penyaringan: "+param)
      this.popup.hidePopup(null);
    },
    showPopup(args) {

      const stack = new StackLayout();
      // stack.height = '100%';

      // const lbl = new Label();
      // lbl.backgroundColor = '#28BAAA';
      // lbl.text = 'Kalender';
      // lbl.color = "white";
      // lbl.fontSize = 15;
      // lbl.padding = "10px 10px 5px 10px";
      // stack.addChild(lbl);

      const lbl1 = new Label();
      lbl1.text = 'Hari Ini';
      // lbl.backgroundColor = 'red';
      // lbl.marginTop = 5;
      lbl1.fontSize = 15;
      lbl1.padding = "10px 10px 5px 10px";
      lbl1.on('tap', args => {
        lbl1.color = "black";
        lbl1.fontWeight = "bold";
        setTimeout(() => {
          this.hidePopup("Hari Ini");
        }, 100)
      });
      stack.addChild(lbl1);

      const lbl2 = new Label();
      lbl2.text = 'Semua';
      // lblOther.backgroundColor = 'blue';
      // lblOther.height = 40;
      lbl2.fontSize = 15;
      lbl2.padding = "5px 10px 5px 10px";
      lbl2.on('tap', args => {
        lbl2.color = "black";
        lbl2.fontWeight = "bold";
        setTimeout(() => {
          this.hidePopup("Semua");
        }, 100)
      });
      stack.addChild(lbl2);

      const lbl3 = new Label();
      lbl3.text = 'Manual';
      lbl3.fontSize = 15;
      lbl3.padding = "5px 10px 5px 10px";
      lbl3.on('tap', args => {
        lbl3.color = "black";
        lbl3.fontWeight = "bold";
        setTimeout(() => {
          this.$showModal(this.$views.ViewGroupHasilKalenderModal)

          this.hidePopup("Manual");
        }, 100)
      });
      stack.addChild(lbl3);

      // const btn = new Button();
      // btn.text = 'Push';
      // btn.height = 40;
      // stack.addChild(btn);
      //
      // const dismissBtn = new Button();
      // dismissBtn.text = 'Hide';
      // dismissBtn.on('tap', args => {
      //   this.hidePopup();
      // });
      // stack.addChild(dismissBtn);

      const sv = new ScrollView();
      sv.height="auto";
      sv.content = stack;

      this._showPopup(this.$refs.popup.nativeView, sv);
      // this._showPopup(this.page.getViewById('btn'), this);
    },

		dropDownOpened(args) {

		},

		dropDownClosed(args) {

		},

		dropDownSelectedIndexChanged(args) {
      this.selectedIndex = args.newIndex;
		    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
		},

	}
}
</script>
