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
      <Label ref="popup" verticalAlignment="center" color="white" fontSize="24" class="ion" :text="'ion-ios-trophy' | fonticon" margin="0 5" />
  </Ripple> -->

  <Ripple rippleColor="white" @tap="showPopup">
      <Label ref="popup" textWrap="true" padding="10" textAlignment="center">
        <FormattedString >
          <Span color="white" fontSize="24" class="ion" :text="'ion-ios-trophy' | fonticon" />
          <Span text=" Nilai" color="white" />
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
        height: (30+30+30+30+30),
        width: 125,
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
      // lbl.text = 'Nilai';
      // lbl.color = "white";
      // lbl.fontSize = 15;
      // lbl.padding = "10px 10px 5px 10px";
      // stack.addChild(lbl);

      const lblA = new Label();
      lblA.text = 'Sangat Baik (A)';
      // lbl.backgroundColor = 'red';
      // lbl.marginTop = 5;
      lblA.fontSize = 15;
      lblA.padding = "10px 10px 5px 10px";
      lblA.on('tap', args => {
        lblA.color = "black";
        lblA.fontWeight = "bold";
        setTimeout(() => {
          this.hidePopup("Sangat Baik (A)");
        }, 100)
      });
      stack.addChild(lblA);

      const lblB = new Label();
      lblB.text = 'Baik (B)';
      // lbl.backgroundColor = 'red';
      // lbl.marginTop = 5;
      lblB.fontSize = 15;
      lblB.padding = "10px 10px 5px 10px";
      lblB.on('tap', args => {
        lblB.color = "black";
        lblB.fontWeight = "bold";
        setTimeout(() => {
          this.hidePopup("Baik (B)");
        }, 100)
      });
      stack.addChild(lblB);

      const lblC = new Label();
      lblC.text = 'Cukup Baik (C)';
      // lbl.backgroundColor = 'red';
      // lbl.marginTop = 5;
      lblC.fontSize = 15;
      lblC.padding = "10px 10px 5px 10px";
      lblC.on('tap', args => {
        lblC.color = "black";
        lblC.fontWeight = "bold";
        setTimeout(() => {
          this.hidePopup("Cukup Baik (C)");
        }, 100)
      });
      stack.addChild(lblC);

      const lblD = new Label();
      lblD.text = 'Kurang Baik (D)';
      // lbl.backgroundColor = 'red';
      // lbl.marginTop = 5;
      lblD.fontSize = 15;
      lblD.padding = "10px 10px 5px 10px";
      lblD.on('tap', args => {
        lblD.color = "black";
        lblD.fontWeight = "bold";
        setTimeout(() => {
          this.hidePopup("Kurang Baik (D)");
        }, 100)
      });
      stack.addChild(lblD);

      const lblOther = new Label();
      lblOther.text = 'Semua';
      // lblOther.backgroundColor = 'blue';
      // lblOther.height = 40;
      lblOther.fontSize = 15;
      lblOther.padding = "10px 10px 5px 10px";
      lblOther.on('tap', args => {
        lblOther.color = "black";
        lblOther.fontWeight = "bold";
        setTimeout(() => {
          this.hidePopup("Semua");
        }, 100)
      });
      stack.addChild(lblOther);

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
