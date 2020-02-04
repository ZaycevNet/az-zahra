<template>
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
</template>

<script>
import { EasyNotificationBanner } from 'nativescript-easy-notification-banner';



export default {
  data() {
		return {
			notificationBanner: null
		}
  },
	mounted(){
		this.notificationBanner = new EasyNotificationBanner()
	},
	methods: {
	  showInfo() {
			console.log(this.notificationBanner.showInfo('Info', 'Some information'))
	    // notificationBanner.showInfo('Info', 'Some information');
	  },

	  showSuccess() {
	    notificationBanner.showSuccess('Success', 'Some success message');
	  },

	  showWarning() {
	    notificationBanner.showWarning('Warning', 'Some warning');
	  },

	  showError() {
	    notificationBanner.showError('Error', 'Some error');
	  }
	}
}
</script>
