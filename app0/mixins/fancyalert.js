const { TNSFancyAlert, TNSFancyAlertButton } = require("nativescript-fancyalert");
const { isIOS } = require("tns-core-modules/platform");
const { Color } = require("tns-core-modules/color");

module.exports = {
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
	  showSuccessFancyAlert() {
	    TNSFancyAlert.showSuccess(
	      "Success!",
	      "Fancy alerts are nice.",
	      "Yes they are!"
	    ).then(args => {
				alert(123);
			});
	  },
		showSuccessCustomEffectsFancyAlert() {
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
		showSuccessDelayFancyAlert() {
	    TNSFancyAlert.showSuccess(
	      "Success!",
	      "Fancy alerts are nice. This will disappear in 5 seconds.",
	      "Close Now!",
	      1
	    );
	  },
		showErrorFancyAlert() {
	    TNSFancyAlert.showError(
	      "Gagal!",
	      "Maaf jaringan internet terputus",
	      "Mengerti"
			).then(args => {

				// penempatan menyesuaikan algoritma axios
				this.$store.dispatch('set_indicator_loading', false);
				this.hideFeedback();
			});
	  },
		showNoticeFancyAlert() {
	    TNSFancyAlert.showNotice(
	      "Notice",
	      `You've been officially notified that NativeScript is awesome.`,
	      "Yeah it is!"
	    );
	  },
		showWarningFancyAlert() {
	    TNSFancyAlert.showWarning("Warning", `#nowebview here.`, "Ok, Got It!");
	  },
		showCustomWidthFancyAlert() {
	    TNSFancyAlert.showSuccess(
	      "Success!",
	      "This uses a custom width of 300.",
	      `Oh that's nice.`,
	      0,
	      300
	    );
	  },
		resetFancyAlert() {
	    setTimeout(() => {
	      TNSFancyAlert.showAnimationType = undefined;
	      TNSFancyAlert.hideAnimationType =
	        TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToBottom;
	      TNSFancyAlert.backgroundType = undefined;
	      TNSFancyAlert.soundURL = undefined;
	    }, 1000);
	  },


		showInfoFancyAlert() {
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
		showEditFancyAlert() {
			if (isIOS) {
		    TNSFancyAlert.showEdit(
		      "Edit",
		      `We could edit something but won't right now.`,
		      "Sounds Good"
		    );
			}
	  },
		showWaitingFancyAlert() {
			if (isIOS) {
		    TNSFancyAlert.showWaiting(
		      "Waiting...",
		      `It's like waiting for a WebView to render ;)`,
		      "Uh yeah it is."
		    );
			}
	  },
		showQuestionFancyAlert() {
			if (isIOS) {
		    TNSFancyAlert.showQuestion(
		      "Question",
		      `Do you like developing with NativeScript?`,
		      "Well yes I do!"
		    );
			}
	  },
		showCustomImageFancyAlert() {
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
		showCustomButtonTimerFancyAlert() {
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
		showCustomButtonsFancyAlert() {
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
		customTextFancyAlert() {
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
		showTextFieldFancyAlert() {
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
		showSwitchFancyAlert() {
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
		showCustomViewFancyAlert() {
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

	}
}
