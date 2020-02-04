const { EasyNotificationBanner } = require('nativescript-easy-notification-banner');


module.exports = {
	template: `
	<Page>
		<ScrollView>
	    <StackLayout class="p-20">
	      <Button text="Alert Info" @tap="showInfo" class="p-20" />
	      <Button text="Alert Success" @tap="showSuccess" class="p-20" />
	      <Button text="Alert Warning" @tap="showWarning" class="p-20" />
	      <Button text="Alert Error" @tap="showError" class="p-20" />
	    </StackLayout>
	  </ScrollView>
	</Page>
	`,

  data() {
		return {
			notificationBanner: new EasyNotificationBanner()
		}
  },
	mounted(){
		// this.notificationBanner = new EasyNotificationBanner()
	},
	methods: {
	  showInfo() {
			// console.log(this.notificationBanner.showInfo('Info', 'Some information'))
	    this.notificationBanner.showInfo('Info', 'Some information');
	  },

	  showSuccess() {
	    this.notificationBanner.showSuccess('Success', 'Some success message');
	  },

	  showWarning() {
	    this.notificationBanner.showWarning('Warning', 'Some warning');
	  },

	  showError() {
	    this.notificationBanner.showError('Error', 'Some error');
	  }
	}
}
