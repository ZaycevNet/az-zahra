<template>
	<Page ref="page">
		<GridLayout class="page p-20" columns="*" rows="auto,auto,auto,*">
		    <Button text="Show Popup" @tap="showPopup" ref="btn" id="btn" ></Button>

		    <Label row="1" horizontalAlignment="right" text="Show Popup List" @tap="showPopupList" id="btnList" ></Label>
		    <Button row="2" text="Show Template Popup" @tap="showTemplatePopup" ></Button>
				<StackLayout  row="3">
					<Placeholder @creatingView="creatingView" />
					<Button text="Show myPopup" @tap="myPopup" ref="btn1" id="btn1" ></Button>

					<Label>
						<ContentComponent :html="htmlString" />
					</Label>
				</StackLayout>
		</GridLayout>
	</Page>
</template>

<script>

// import { Item } from './item';
// import { ItemService } from './item.service';
import { Page } from 'tns-core-modules/ui/page';
import * as fs from 'tns-core-modules/file-system';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
import { Popup } from 'nativescript-popup';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Button } from 'tns-core-modules/ui/button';
import { Label } from 'tns-core-modules/ui/label';
import { ScrollView } from 'tns-core-modules/ui/scroll-view';
import * as builder from 'tns-core-modules/ui/builder';

import { isIOS } from "tns-core-modules/platform";

import Bomb from "./bomb";

export default {
	components:{
		Bomb,
		ContentComponent: {
				functional: true,
				render: (h, {props}) => h({
					template: props.html
				})
		},
	},
	data() {
		return {
      htmlString: `
				<FormattedString>
					<Span text="foo" color="red" />
					<Span text="bar" color="blue" fontWeight="bold" />
				</FormattedString>`,

			popup: Popup,
			page: Page,
			// page: null,
			items: [
		    { name: 'Osei' },
		    { name: 'Sean' },
		    { name: 'Brad' },
		    { name: 'Some' },
		    { name: 'More' },
		    { name: 'Names' },
		    { name: 'To' },
		    { name: 'Make' },
		    { name: 'This' },
		    { name: 'List' },
		    { name: 'Scroll' }
		  ]
		}
	},
	methods: {
		myPopup(args){
	    const popup = new Popup({
	        backgroundColor:'white',
	        height:100,
	        width:100,
	        unit: "100px", //'dp' | 'px' | '%',
	        elevation: 10, // android only
	        borderRadius: 25, // android only
	        outsideTouchble: true,
	    });
	    const view = new Label();
	    view.text = "Test";

			popup.showPopup(args.object.nativeView , view);



	    /* IOS */
	    // const nativeView = UILabel.new();
	    // nativeView.text = "Native Button";
	    // nativeView.frame = CGRectMake(0,0,50,50);
	    /* -- IOS */

	    /* Android */
	    // const nativeView = new new android.widget.TextView(context);
	    // nativeView.setText("Native Button");
	    // nativeView.setWidth(50);
	    // nativeView.setHeight(50);
	    /* -- Android */

	    // popup.showPopup(anchor: View | nativeView , view: View | nativeView);

		},

		creatingView: function(args) {
			if(isIOS) {

				const nativeView = new UILabel();
				nativeView.text = "Native View - iOS";
				args.view = nativeView;
			} else {
				const nativeView = new android.widget.TextView(args.context);
	      nativeView.setSingleLine(true);
	      nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
	      nativeView.setText("Native View - Android");
	      args.view = nativeView;

			}

	  },

		onLoaded(args) {
			// this.page = args.object;
		},
	  itemTap(args) {
	    this.hidePopup(`${this.items[args.index]['name']} : ${args.index}`);
	  },

	  _showPopup(source, view) {
	    this.popup = new Popup({
	      height: 30,
	      width: 80,
	      unit: '%',
	      elevation: 10,
	      borderRadius: 25
	    });
	    this.popup.showPopup(source, view).then(data => {
	      console.log(data);
	    });
	  },
	  hidePopup(index) {
	    this.popup.hidePopup(index);
	  },
	  showPopup(args) {
			const popup = new Popup({
					height: 30,
		      width: 80,
		      unit: '%',
	        backgroundColor:'white',
	        elevation: 10, // android only
	        borderRadius: 25, // android only
	        outsideTouchble: true,
	    });


	    const stack = new StackLayout();
	    stack.height = '100%';

	    const lbl = new Label();
	    lbl.text = 'Osei';
	    lbl.backgroundColor = 'red';
	    lbl.marginTop = 5;
	    lbl.height = 40;
	    stack.addChild(lbl);

	    const lblOther = new Label();
	    lblOther.text = 'Fortune';
	    lblOther.backgroundColor = 'blue';
	    lblOther.height = 40;
	    stack.addChild(lblOther);

	    const btn = new Button();
	    btn.text = 'Push';
	    btn.height = 40;
	    stack.addChild(btn);

	    const dismissBtn = new Button();
	    dismissBtn.text = 'Hide';
	    dismissBtn.on('tap', _args => {
				console.log(_args);
				popup.hidePopup();
	      // this.hidePopup();
	    });
	    stack.addChild(dismissBtn);

	    const sv = new ScrollView();
	    sv.content = stack;
	    // this._showPopup(args.object.nativeView, this);


			popup.showPopup(args.object.nativeView , sv).then(data => {
	      console.log(data);
	    });
	  },

	  showPopupList() {
	    const listPath = fs.path.join(
	      fs.knownFolders.currentApp().path,
	      '~/assets/popup-item.vue'
	    );


	    const component = builder.load(listPath);
	    component.bindingContext = this;
	    this._showPopup(this.page.getViewById('btnList'), component);
	  },

	  showTemplatePopup(args) {
			// alert(13);
			const popup = new Popup({
					height: 30,
		      width: 80,
		      unit: '%',
	        backgroundColor:'white',
	        elevation: 10, // android only
	        borderRadius: 25, // android only
	        outsideTouchble: true,
	    });



			popup.showPopup(args.object.nativeView , this.Bomb).then(data => {
	      console.log(data);
	    });
	  }
	}
}
</script>
