<style scoped>
.modal-action-bar {
    background-color: black;
    padding-left: 8px;
		padding-top: 10;
    android-elevation: 0;
}

.modal-action-bar-title {
    text-align: left;
    font-size: 18px;
    padding-right: 16;
		font-weight: normal;
		color: white;
    /* background-color: black; */
    vertical-alignment: middle;
}

.modal-action-bar-right {
    text-align: right;
    font-size: 18px;
    padding-right: 16;
    /* background-color: black; */
    vertical-alignment: middle;
}

.modal-action-bar-icon {
    font-size: 35px;
    width: 30;
}
</style>


<template>

<StackLayout @loaded="onLoaded" height="100%" width="100%">
		<!-- jika menggunakan showModal, ini pengganti ActionBar -->
		<StackLayout height="50" class="modal-action-bar" color="white">
				<GridLayout width="100%" columns="auto, *, 60%">
						<Ripple rippleColor="" @tap="$modal.close('Aku Pulang')">
							<Label verticalAlignment="middle" marginLeft="12.5" :text="'ion-ios-arrow-back' | fonticon" class="modal-action-bar-icon ion" />
						</Ripple>
						<Label @tap="$modal.close('Aku Pulang')" class="modal-action-bar-title" text="Kembali" col="1" />
				</GridLayout>
		</StackLayout>

    <StackLayout backgroundColor="black" height="100%" verticalAlignment="middle">
        <ImageZoom margin="0" padding="0" :src="image" maxZoom="2" minZoom="1" />
    </StackLayout>
</StackLayout>

</template>

<script>

export default {
		props: ["image"],
    methods: {
        onLoaded() {

						const application = require('tns-core-modules/application');
            application.android.on('activityBackPressed', args => {

                this.$modal.close("Aku Pulang")

                args.cancel = true //
            })

        }
    }
}

</script>
