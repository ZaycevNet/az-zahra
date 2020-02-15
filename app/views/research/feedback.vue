<template>
	<Page>
	  <ScrollView>
	    <StackLayout>
	      <Label text="NativeScript Feedback" class="message" textWrap="true"/>
	      <Image src="~/assets/images/feedback4u.jpg" />
	      <WrapLayout>
	        <Button text="Success, 2.5s" @tap="showSuccess" class="button button-success" />
	        <Button text="Success, black text" @tap="showSuccessAltColors" class="button button-success-alt" />
	        <Button text="Info, 2s" @tap="showInfo" class="button button-info" />
	        <Button text="Warning, 4s" @tap="showWarning" class="button button-warning" />
	        <Button text="Error, 1s" @tap="showError" class="button button-error" />
	        <Button text="Error, 5s, Bottom (iOS)" @tap="showErrorBottom" class="button button-error" />
	        <Button text="No icon" @tap="showNoIcon" class="button button-custom" />
	        <Button text="Custom icon" @tap="showCustomIcon" class="button button-custom-alt" />
	        <Button text="Custom font" @tap="showCustomFont" class="button button-font" />
	        <Button text="Another custom font" @tap="showCustomFont2" class="button button-font" />
	        <Button text="Black icon" @tap="showBlackCustomIcon" class="button button-custom-alt" />
	        <Button text="Hide!" @tap="hide" class="button button-hide" />
	      </WrapLayout>
	    </StackLayout>
	  </ScrollView>
	</Page>
</template>

<script>
import { Feedback, FeedbackPosition, FeedbackType } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";
import { Observable } from "tns-core-modules/data/observable";
import { isIOS } from "tns-core-modules/platform";

export default {
	data(){
		return {
			feedback: Feedback
		}
	},
  mounted() {
    this.feedback = new Feedback();
  },
	methods: {
	  showSuccess() {
	    this.feedback.success({
	      title: "Successfully shown myself!",
	      message: "I'm configured to hide after 2.5 seconds.",
	      duration: 2500,
	      onTap: () => console.log("showSuccess tapped")
	    });
	  },

	  showSuccessAltColors() {
	    this.feedback.show({
	      title: "Custom colors :)",
	      titleColor: new Color("black"),
	      message: "Custom text colors and background color.",
	      messageColor: new Color("#516a78"),
	      duration: 2500,
	      type: FeedbackType.Success,
	      backgroundColor: new Color("lightskyblue"),
	      onTap: () => console.log("showSuccessAltColor tapped")
	    });
	  },

	  showInfo() {
	    this.feedback.show({
	      title: "Some info for you",
	      message: "This is the default Info style.",
	      duration: 2000,
	      type: FeedbackType.Info,
	      onTap: () => console.log("showInfo tapped"),
	      onShow: (animating) => console.log(`showInfo ${animating ? 'animating' : 'shown'}`),
	      onHide: () => console.log("showInfo hidden")
	    });
	  },

	  showWarning() {
	    this.feedback.show({
	      // title: "The warning title",
	      message: "This one doesn't have a title, but a very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
	      duration: 4000,
	      position: FeedbackPosition.Top,
	      type: FeedbackType.Warning,
	      onTap: () => console.log("showWarning tapped")
	    });
	  },

	  showNoIcon() {
	    this.feedback.show({
	      title: "Title only, not even an icon..",
	      duration: 3000,
	      // type: FeedbackType.Custom,
	      onTap: () => console.log("showNoIcon tapped")
	    });
	  },

	  showCustomIcon() {
	    this.feedback.show({
	      title: "Thumbs up!",
	      titleColor: new Color("#222222"),
	      message: "Custom colors and icon. Loaded from the App_Resources folder.",
	      messageColor: new Color("#333333"),
	      duration: 3000,
	      backgroundColor: new Color("yellowgreen"),
	      icon: "customicon", // in App_Resources/platform folders
	      onTap: () => console.log("showCustomIcon tapped")
	    });
	  },

	  showBlackCustomIcon() {
	    console.log("showBlackCustomIcon");
	    this.feedback.show({
	      title: "Dude!",
	      titleColor: new Color("#222222"),
	      message: "Custom colors and icon - loaded from the App_Resources folder.",
	      messageColor: new Color("#333333"),
	      duration: 3000,
	      backgroundColor: new Color("yellowgreen"),
	      icon: "issue7icon", // in App_Resources/platform folders
	      android: {
	        iconColor: new Color("black"),
	        iconPulseEnabled: false
	      },
	      onTap: () => console.log("showAnotherCustomIcon tapped")
	    });
	  },

	  showError() {
	    this.feedback.show({
	      title: "The error title",
	      message: "Not too long a text here. But it could be..",
	      duration: 1000,
	      type: FeedbackType.Error,
	      onTap: () => console.log("showError tapped")
	    });
	  },

	  showErrorBottom() {
	    this.feedback.show({
	      title: "The title",
	      titleSize: 18.0,
	      message: "A very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
	      messageSize: 14.0,
	      duration: 5000,
	      position: FeedbackPosition.Bottom,
	      type: FeedbackType.Error,
	      onTap: () => console.log("showErrorBottom tapped")
	    });
	  },

	  showCustomFont() {
	    this.feedback.success({
	      title: "With custom font",
	      titleSize: 19,
	      message: "I'm configured to show with a custom font.",
	      messageSize: 14,
	      duration: 2500,
	      titleFont: isIOS ? "Indie Flower" : "IndieFlower.ttf",
	      messageFont: isIOS ? "Indie Flower" : "IndieFlower.ttf",
	      onTap: () => console.log("customFont tapped")
	    });
	  },

	  showCustomFont2() {
	    this.feedback.success({
	      title: "With custom font",
	      titleSize: 17,
	      messageSize: 14,
	      message: "I'm configured to show with a custom font. With a bold title even.",
	      duration: 3000,
	      titleFont: isIOS ? "SourceSansPro-Bold" : "SourceSansPro-Bold.otf",
	      messageFont: isIOS ? "Source Sans Pro" : "SourceSansPro.otf",
	      onTap: () => console.log("customFont2 tapped")
	    });
	  },

	  hide() {
	    this.feedback.hide();
	  }
	}
}
</script>
