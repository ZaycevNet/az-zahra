<template>
	<page navigatedTo="onPageNavigatedTo">
	    <!-- <ActionBar title="SnackBar Demo" icon="">
	        <ActionBar.actionItems>
	            <ActionItem icon="res://nstudio" @tap="nStudioIconTap" ios.position="right" />
	        </ActionBar.actionItems>
	    </ActionBar> -->

	    <ScrollView row="0" padding="10">
	        <StackLayout horizontalAlignment="center">
	            <Label text="Made with ❤️ by nStudio" class="title" textWrap="true" />
							<button text="nStudioIconTap" class="btn-yellow" @tap="nStudioIconTap" />
							
	            <button text="Simple Snackbar" class="btn-yellow" @tap="showSimple" />

	            <Label text="" width="95%" backgroundColor="#fff000" height="2" margin="5" textWrap="true" />
	            <Label text="Action Example will pick random colors for the snackbar color and the action text color. Be sure to view the API for the methods." fontSize="18" marginTop="10" textWrap="true" />

	            <DockLayout stretchLastChild="true" margin="10">
	                <Label dock="top" text="Action Snackbar Text" horizontalAlignment="center" />
	                <TextView hint="Snack Text" text="snackText" />
	            </DockLayout>

	            <DockLayout stretchLastChild="true" margin="10">
	                <Label dock="top" text="ActionButton Text" horizontalAlignment="center"/>
	                <TextField hint="ActionButton Text" text="actionText" />
	            </DockLayout>

	            <button text="Action Snackbar" class="btn-yellow" @tap="showAction" />

	            <Label text="" width="95%" backgroundColor="#fff000" height="2" margin="5" textWrap="true" />

	            <Label text="Promise data from last snackbar..."/>
	            <Label text="jsonResult" textWrap="true" />
	        </StackLayout>
	    </ScrollView>
	</page>
</template>

<script>
// import { Observable, Page } from '@nativescript/core';

// import { Page } from 'tns-core-modules/ui/page';
const { confirm } = require('tns-core-modules/ui/dialogs');
const { openUrl } = require('tns-core-modules/utils/utils');

import { SnackBar, SnackBarOptions } from '@nstudio/nativescript-snackbar';

export default {
	data(){
		return {
			_SnackBar: SnackBar,
		  snackText: "",
		  actionText: "",
		  jsonResult: "",
			_colors: [
		    '#c61b49',
		    '#fff000',
		    '#336699',
		    '#f47742',
		    '#047c3a',
		    '#066c7a',
		    '#ed0909',
		    '#467c1a'
		  ]

		}
	},
  mounted() {

    this._SnackBar = new SnackBar();
    this.snackText =
      'Snackbar Text on a really long max line number, this is only 3 max lines but it could be more :) so I will keep rambling on and on and on and on. Hope this works well.';
    this.actionText = 'Okay';
    this.jsonResult = '';
  },
	methods: {
	  nStudioIconTap() {
	    confirm({
	      message:
					'nStudio, LLC. specializes in custom software applications ranging from mobile, web, desktop, server and more. Would you like to visit nstudio.io?',
					okButtonText: 'Yes',
					cancelButtonText: 'Close'
	    }).then(result => {
	      if (result) {
	        openUrl('https://nstudio.io');
	      }
	    });
	  },

	  showSimple() {
	    // this._SnackBar = new SnackBar();

	    this._SnackBar
	      .simple('Hello from the 🍫 SnackBar 👋'+ String.fromCharCode('0xf3cf'))
	      .then(args => {
	        console.log('SnackBar.simple() result', args);
	        this.set('jsonResult', JSON.stringify(args));
	      })
	      .catch(error => {
	        console.log('simple snackbar error', error);
	      });
	  },

	  showAction() {
			const colors =  [
					    '#c61b49',
					    '#fff000',
					    '#336699',
					    '#f47742',
					    '#047c3a',
					    '#066c7a',
					    '#ed0909',
					    '#467c1a'
					  ];

	    console.log('action snackbar', Math.floor(Math.random() * colors.length));

	    const options = {
	      actionText: this.actionText,
	      textColor: '#fff',
	      actionTextColor: colors[
	        Math.floor(Math.random() * colors.length)
	      ],
				backgroundColor: "#28ADAA",
	      // backgroundColor: colors[
	      //   Math.floor(Math.random() * colors.length)
	      // ],
	      snackText: this.snackText,
	      hideDelay: 5000
	    };

	    console.log('snackbar', this._SnackBar);

	    this._SnackBar.action(options).then(args => {
	      console.log('SnackBar.action() result', args);
	      if (args.command === 'Action') {
	        this.set('jsonResult', JSON.stringify(args));
	      } else {
	        this.set('jsonResult', JSON.stringify(args));
	      }
				if(args.command == "Swipe") {
					alert(123)
				}
	    });


			setTimeout(() => {
				this._SnackBar.dismiss().then(args => console.log(args));
			}, 3000);
	  }
	}
}
</script>
