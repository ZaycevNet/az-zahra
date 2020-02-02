<template>
	<Page>
		<GridLayout rows="" columns="">
	      <Image src="~/assets/images/landscape.jpg" stretch="aspectFill" />
	      <StackLayout class="p-20">
	        <Button class="btn btn-primary" text="Auto-Dismissable Alert" @tap="autoDismissableNotification" />
	        <Button class="btn btn-primary" text="Show Notification" @tap="showNotification" />
	        <Button class="btn btn-primary" text="Show Alert" @tap="showAlert" />
	        <Button class="btn btn-primary" text="Show Bottom Sheet" @tap="showBottomSheet" />
	        <Button class="btn btn-primary" text="Show Simple List (Android Only)" @tap="showSimpleList" />
	        <Button class="btn btn-primary" text="Show Single Choice List (Android Only)" @tap="showSingleChoiceList" />
	        <Button class="btn btn-primary" text="Show Multi Choice List (Android Only)" @tap="showMultiChoiceList" />
	        <Button class="btn btn-primary" text="Show Colored Alert" @tap="showColoredAlert" />
	      </StackLayout>
	  </GridLayout>
	</Page>
</template>

<script>
import { Observable } from 'tns-core-modules/data/observable';
import {
  CFAlertDialog,
  DialogOptions,
  CFAlertGravity,
  CFAlertActionAlignment,
  CFAlertActionStyle,
  CFAlertStyle,
} from 'nativescript-cfalert-dialog';

import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';
import * as frame from 'tns-core-modules/ui/frame';

export default {
	data() {
		return {
			cfalertDialog: new CFAlertDialog(),

		}
	},
  methods: {
	  showNotification() {
	    let options = {
	      dialogStyle: CFAlertStyle.NOTIFICATION,
	      title: 'This is a notification!',
	      message: 'It is shown at the top of the screen, and the background is blurry (in iOS).',
	      backgroundBlur: true,
	      cancellable: true,
	      onDismiss: function(dialog) {
	        console.log('Dialog was dismissed');
	      },
	      buttons: [
	        {
	          text: 'Okay',
	          buttonStyle: CFAlertActionStyle.POSITIVE,
	          buttonAlignment: CFAlertActionAlignment.END,
	          textColor: '#FFFFFF',
	          backgroundColor: '#F58476',
	          onClick: function(response) {
	            console.log(response);
	          },
	        },
	      ],
	    };
	    this.cfalertDialog.show(options);
	  },

	  showAlert() {
	    let options = {
	      dialogStyle: CFAlertStyle.ALERT,
	      title: 'This is an alert with a red background and no buttons!',
	      backgroundBlur: false,
	      backgroundColor: 'red',
	      message:
	        'It is shown at the center of the screen, and you can tap outside of it to dismiss it.',

					cancellable: true,
		      onDismiss: function(dialog) {
		        console.log('Dialog was dismissed');
		      },
		      buttons: [
		        {
		          text: 'Okay',
		          buttonStyle: CFAlertActionStyle.POSITIVE,
		          buttonAlignment: CFAlertActionAlignment.END,
		          textColor: '#FFFFFF',
		          backgroundColor: '#F58476',
		          onClick: function(response) {
		            console.log(response);
		          },
		        },
		      ],
	    };
	    this.cfalertDialog.show(options);
	  },

	  showBottomSheet() {
	    let options = {
	      dialogStyle: CFAlertStyle.BOTTOM_SHEET,
	      title: 'This is a bottom sheet!',
	      message: 'It is shown at the bottom of the screen',
	      buttons: [
	        {
	          text: 'Okay',
	          buttonStyle: CFAlertActionStyle.POSITIVE,
	          buttonAlignment: CFAlertActionAlignment.JUSTIFIED,
	          onClick: function(response) {
	            console.log('Inside OK Response');
	            console.log(response); // Prints Okay
	          },
	        },
	        {
	          text: 'Nope',
	          buttonStyle: CFAlertActionStyle.NEGATIVE,
	          buttonAlignment: CFAlertActionAlignment.JUSTIFIED,
	          onClick: function(response) {
	            console.log('Inside Nope Response');
	            console.log(response); // Prints Nope
	          },
	        },
	      ],
	    };
	    this.cfalertDialog.show(options)
	      .then(res => {
	        console.log('After await', res);
	      })
	  },

	  showSimpleList() {
	    let options = {
	      dialogStyle: CFAlertStyle.ALERT,
	      title: 'This is a simple list!',
	      simpleList: {
	        items: ['Tomato', 'Potato', 'Carrot', 'Spinach'],
	        onClick: function(dialogInterface, index) {
	          console.log(dialogInterface);
	          console.log(index);
	        },
	      },
	    };
	    this.cfalertDialog.show(options);
	  },

	  showSingleChoiceList() {
	    let options = {
	      dialogStyle: CFAlertStyle.ALERT,
	      title: 'This is a simple list!',
	      singleChoiceList: {
	        items: ['Tomato', 'Potato', 'Carrot', 'Spinach'],
	        selectedItem: 2,
	        onClick: function(dialogInterface, index) {
	          console.log(dialogInterface);
	          console.log(index);
	        },
	      },
	      buttons: [
	        {
	          text: 'Okay',
	          buttonStyle: CFAlertActionStyle.POSITIVE,
	          buttonAlignment: CFAlertActionAlignment.END,
	          onClick: function(response) {
	            console.log(response);
	          },
	        },
	      ],
	    };
	    this.cfalertDialog.show(options);
	  },

	  showMultiChoiceList() {
	    let itemState = [false, false, false, false];
	    let options = {
	      dialogStyle: CFAlertStyle.ALERT,
	      title: 'This is a simple list!',
	      multiChoiceList: {
	        items: ['Tomato', 'Potato', 'Carrot', 'Spinach'],
	        selectedItems: itemState,
	        onClick: function(dialogInterface, index, b) {
	          console.log(dialogInterface);
	          console.log(index);
	          console.log(b);
	        },
	      },
	      buttons: [
	        {
	          text: 'Okay',
	          buttonStyle: CFAlertActionStyle.POSITIVE,
	          buttonAlignment: CFAlertActionAlignment.END,
	          onClick: function(response) {
	            console.log(response);
	          },
	        },
	      ],
	    };
	    this.cfalertDialog.show(options);
	  },
	  showColoredAlert() {
	    let options = {
	      dialogStyle: CFAlertStyle.ALERT,
	      title: 'This is an alert!',
	      message: 'It is shown at the center of the screen',
	      titleColor: '#FF0000',
	      messageColor: '#0000FF',
	      backgroundColor: '#00FF00',
	    };
	    this.cfalertDialog.show(options);
	  },

	  autoDismissableNotification() {
	    let options = {
	      dialogStyle: CFAlertStyle.NOTIFICATION,
	      title: 'This is a notification!',
	      message: 'You cannot dismiss it. It will disappear automatically after 3 seconds',
	      backgroundBlur: true,
	      cancellable: false,
	    };
	    this.cfalertDialog.show(options);
	    setTimeout(() => this.cfalertDialog.dismiss(true), 3000);
	  }
	}
}
</script>
