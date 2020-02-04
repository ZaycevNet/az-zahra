<style scoped>
.modal-action-bar {
    background-color: #28ADAA;
    padding-left: 8px;
    android-elevation: 0;
}

.modal-action-bar-title {
    text-align: left;
    font-size: 18px;
    padding-right: 16;
		font-weight: normal;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.modal-action-bar-right {
    text-align: right;
    font-size: 18px;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.modal-action-bar-icon {
    font-size: 35px;
    width: 30;
}
</style>

<template>
	<!-- jika menggunakan showModal, ini pengganti ActionBar -->
	<StackLayout height="50" class="modal-action-bar" color="white">
			<GridLayout width="100%" columns="auto, *, 60%">
					<Ripple rippleColor="#28ADAA" @tap="$emit('onBack')">
						<Label verticalAlignment="middle" marginLeft="12.5" :text="'ion-ios-arrow-back' | fonticon" class="modal-action-bar-icon ion" />
					</Ripple>
					<Label class="modal-action-bar-title" text="Kebiasaan" col="1" />
			</GridLayout>
	</StackLayout>
</template>
