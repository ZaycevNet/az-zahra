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

    <Ripple rippleColor="white" @tap="showPopup">
        <Label ref="popup" textWrap="true" padding="10" textAlignment="center">
          <FormattedString >
            <Span color="white" fontSize="24" class="ion" :text="'ion-md-funnel' | fonticon" />
            <Span text=" Urutan" color="white" />
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
        height: (30+30),
        width: 150,
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

      const lblA = new Label();
      lblA.text = 'Tinggi ke Rendah';
      // lbl.backgroundColor = 'red';
      // lbl.marginTop = 5;
      lblA.fontSize = 15;
      lblA.padding = "10px 10px 5px 10px";
      lblA.on('tap', args => {
        lblA.color = "black";
        lblA.fontWeight = "bold";
        setTimeout(() => {
          this.hidePopup("Tinggi ke Rendah");
        }, 100)
      });
      stack.addChild(lblA);

      const lblB = new Label();
      lblB.text = 'Rendah Ke Tinggi';
      // lbl.backgroundColor = 'red';
      // lbl.marginTop = 5;
      lblB.fontSize = 15;
      lblB.padding = "10px 10px 5px 10px";
      lblB.on('tap', args => {
        lblB.color = "black";
        lblB.fontWeight = "bold";
        setTimeout(() => {
          this.hidePopup("Rendah Ke Tinggi");
        }, 100)
      });
      stack.addChild(lblB);


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
