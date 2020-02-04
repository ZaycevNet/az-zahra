
<template>
    <Page @loaded="onLoaded">
      <ActionBar title="Fancy Alerts Demo" />
			<ScrollView>
		    <StackLayout>
		      <Button text="Alert Success" @tap="showSuccess" />
		      <Button text="Alert Success w/ Sound" @tap="showSuccessCustomEffects" />
		      <Button text="Alert Error" @tap="showError" />
		      <Button text="Alert Notice" @tap="showNotice" />
		      <Button text="Alert Warning" @tap="showWarning" />
		      <Button text="Alert Info" @tap="showInfo" />
		      <Button text="Alert Edit" @tap="showEdit" />
		      <Button text="Alert Waiting" @tap="showWaiting" />
		      <Button text="Alert Question" @tap="showQuestion" />
		      <Button text="Alert Custom Image" @tap="showCustomImage" />
		      <Button text="Alert Button with Timer" @tap="showCustomButtonTimer" />
		      <Button text="Alert Custom Buttons" @tap="showCustomButtons" />
		      <Button text="Alert Success w/ Auto-Close Delay" @tap="showSuccessDelay" />
		      <Button text="Alert Success Custom Width" @tap="showCustomWidth" />
		      <Button text="Alert Text Color" @tap="customText" />
		      <Button text="Alert Text Field" @tap="showTextField" />
		      <Button text="Alert w/ Switch" @tap="showSwitch" />
		      <Button text="Alert Custom View" @tap="showCustomView" />

		    </StackLayout>
		  </ScrollView>
    </Page>
</template>

<script>
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";
import { Color } from "tns-core-modules/color";
import { isIOS } from "tns-core-modules/platform";

export default {
	data(){
		return {
			// NSMutableAttributedString: null,
			// NSForegroundColorAttributeName: null,
			// NSCaseInsensitiveSearch: null,
			// NSUnderlineStyleSingle: null,
			// UIView: null,
			// CGRectMake: null,
			// SCLAlertViewShowAnimation: null,
			// SCLAlertViewHideAnimation: null,
			// SCLAlertViewBackground: null,
			// NSString: null,
			// NSUnderlineStyleAttributeName: null
		}
	},
  mounted() {
    if (isIOS) {
      TNSFancyAlert.hideAnimationType =
        TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToBottom;
    }
  },
	methods: {
	  showSuccess() {
	    TNSFancyAlert.showSuccess(
	      "Success!",
	      "Fancy alerts are nice.",
	      "Yes they are!"
	    );
	  },
		showSuccessCustomEffects() {
	    if (isIOS) {
	      TNSFancyAlert.showAnimationType =
	        TNSFancyAlert.SHOW_ANIMATION_TYPES.SlideInFromLeft;
	      TNSFancyAlert.hideAnimationType =
	        TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToRight;
	      TNSFancyAlert.backgroundType = TNSFancyAlert.BACKGROUND_TYPES.Blur;
	      TNSFancyAlert.soundURL = "bell.mp3";
	      TNSFancyAlert.showSuccess(
	        "Sound?",
	        "You can use sound and customize many aspects like animation in/out, color, background style and much more.",
	        "Amazing!"
	      );
	      this.reset();
	    }
	  },
		showSuccessDelay() {
	    TNSFancyAlert.showSuccess(
	      "Success!",
	      "Fancy alerts are nice. This will disappear in 5 seconds.",
	      "Close Now!",
	      1
	    );
	  },
		showError() {
	    TNSFancyAlert.showError(
	      "Error!",
	      "At least it looks good :)",
	      "Yeah it does."
	    );
	  },
		showNotice() {
	    TNSFancyAlert.showNotice(
	      "Notice",
	      `You've been officially notified that NativeScript is awesome.`,
	      "Yeah it is!"
	    );
	  },
		showWarning() {
	    TNSFancyAlert.showWarning("Warning", `#nowebview here.`, "Ok, Got It!");
	  },
		showInfo() {
	    if (isIOS) {
	      TNSFancyAlert.showAnimationType =
	        SCLAlertViewShowAnimation.SlideInFromBottom;
	      TNSFancyAlert.hideAnimationType =
	        SCLAlertViewHideAnimation.SlideOutToRight;
	    }
	    TNSFancyAlert.showInfo(
	      "Info",
	      `You can integrate any CocoaPod or Android library with NativeScript.`,
	      "Sweet!"
	    );
	    if (isIOS) {
	      this.reset();
	    }
	  },
		showEdit() {
			if (isIOS) {
		    TNSFancyAlert.showEdit(
		      "Edit",
		      `We could edit something but won't right now.`,
		      "Sounds Good"
		    );
			}
	  },
		showWaiting() {
			if (isIOS) {
		    TNSFancyAlert.showWaiting(
		      "Waiting...",
		      `It's like waiting for a WebView to render ;)`,
		      "Uh yeah it is."
		    );
			}
	  },
		showQuestion() {
			if (isIOS) {
		    TNSFancyAlert.showQuestion(
		      "Question",
		      `Do you like developing with NativeScript?`,
		      "Well yes I do!"
		    );
			}
	  },
		showCustomImage() {
			if (isIOS) {
		    TNSFancyAlert.showCustomImage(
		      "nativescript.png",
		      "#2B33FF",
		      "Custom Image",
		      `Using your own images is sure nice.`,
		      "Yes!"
		    );
			}
	  },
		showCustomButtonTimer() {
			if (isIOS) {
		    TNSFancyAlert.showCustomButtonTimer(
		      0,
		      true,
		      undefined,
		      undefined,
		      "Mission Impossible",
		      `This will self-destruct in 5 seconds.`,
		      "Ok"
		    );
			}
	  },
		showCustomButtons() {
			if (isIOS) {
		    let buttons = [
		      new TNSFancyAlertButton({
		        label: "One",
		        action: () => {
		          console.log("One");
		        }
		      }),
		      new TNSFancyAlertButton({
		        label: "Two",
		        action: () => {
		          console.log("Two");
		        }
		      }),
		      new TNSFancyAlertButton({
		        label: "Three",
		        action: () => {
		          console.log("Three");
		        }
		      }),
		      new TNSFancyAlertButton({
		        label: "Four",
		        action: () => {
		          console.log("Four");
		        }
		      }),
		      new TNSFancyAlertButton({
		        label: "Really? More?",
		        action: () => {
		          console.log("more");
		        }
		      })
		    ];
		    TNSFancyAlert.showCustomButtons(
		      buttons,
		      undefined,
		      undefined,
		      "Got Buttons?",
		      `Add as many as you'd like.`,
		      "Ok"
		    );
			}
	  },
		showCustomWidth() {
	    TNSFancyAlert.showSuccess(
	      "Success!",
	      "This uses a custom width of 300.",
	      `Oh that's nice.`,
	      0,
	      300
	    );
	  },
		customText() {
			if(isIOS) {
		    let textAttribution = (value) => {
		      let nsString = NSString.alloc().initWithString(value);
		      let subTitle = NSMutableAttributedString.alloc().initWithString(value);

		      let redRange = nsString.rangeOfStringOptions(
		        "Yep",
		        NSCaseInsensitiveSearch
		      );
		      subTitle.addAttributeValueRange(
		        NSForegroundColorAttributeName,
		        new Color("#BC1224").ios,
		        redRange
		      );

		      let greenRange = nsString.rangeOfStringOptions(
		        "that can be done",
		        NSCaseInsensitiveSearch
		      );
		      subTitle.addAttributeValueRange(
		        NSForegroundColorAttributeName,
		        new Color("#528100").ios,
		        greenRange
		      );

		      let underline = nsString.rangeOfStringOptions(
		        "too!",
		        NSCaseInsensitiveSearch
		      );
		      subTitle.addAttributeValueRange(
		        NSUnderlineStyleAttributeName,
		        NSUnderlineStyleSingle,
		        underline
		      );

		      return subTitle;
		    };
		    TNSFancyAlert.showCustomTextAttributes(
		      textAttribution,
		      new TNSFancyAlertButton({
		        label: "Wow, ok.",
		        action: (value) => {
		          console.log(`Clicked ok.`);
		        }
		      }),
		      undefined,
		      undefined,
		      "Custom text color?",
		      `Yep, that can be done too!`,
		      null
		    );
			}
	  },
		showTextField() {
			if(isIOS) {
		    TNSFancyAlert.showTextField(
		      "Enter your name",
		      "",
		      new TNSFancyAlertButton({
		        label: "Save",
		        action: (value) => {
		          console.log(`User entered ${value}`);
		        }
		      }),
		      undefined,
		      undefined,
		      "User Input?",
		      `Yeah, sure we can.`,
		      "Ok, lots of options."
		    );
			}
	  },
		showSwitch() {
			if (isIOS) {
		    TNSFancyAlert.showSwitch(
		      `Don't show again`,
		      "#58B136",
		      new TNSFancyAlertButton({
		        label: "Save",
		        action: (isSelected) => {
		          console.log(`Don't show again was selected: ${isSelected}`);
		        }
		      }),
		      "switch.png",
		      "#B3714F",
		      "Need a switch?",
		      `It can be useful.`,
		      "Got it."
		    );
			}
	  },
		showCustomView() {
			if(isIOS) {
				let customView = UIView.alloc().initWithFrame(CGRectMake(0, 0, 215, 80));
		    customView.backgroundColor = new Color("#FE00FC").ios;
		    TNSFancyAlert.showCustomView(
		      customView,
		      undefined,
		      undefined,
		      "Add any view?",
		      `Just pass in a any UIView.`,
		      "Nice!"
		    );
			}
	  },
		reset() {
	    setTimeout(() => {
	      TNSFancyAlert.showAnimationType = undefined;
	      TNSFancyAlert.hideAnimationType =
	        TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToBottom;
	      TNSFancyAlert.backgroundType = undefined;
	      TNSFancyAlert.soundURL = undefined;
	    }, 1000);
	  }
	}
}

// import { isIOS, isAndroid } from 'tns-core-modules/platform'
// import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert'
//
// export default {
// 	data() {
//     return {
//     }
//   },
// 	methods: {
//     showSuccess () {
//       TNSFancyAlert.showSuccess(
//         'Success!',
//         'Fancy alerts are nice.',
//         'Yes they are!',
//       ).then(() => {
//         console.log('shown')
//       }).catch((error) => {
//         console.error(error)
//       })
//     },
//     onLoaded () {
//       if (isIOS) {
//         TNSFancyAlert.hideAnimationType = TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToBottom
//       }
//     },
//   },
// }

</script>
