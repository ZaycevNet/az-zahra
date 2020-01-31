<template>
    <StackLayout backgroundColor="#28BAAA" color="white">
        <GridLayout columns="*,40%" rows="*" height="auto" padding="10 5">
            <Label textAlignment="left" fontWeight="bold" paddingLeft="10" fontSize="16px" verticalAlignment="left" text="Dakwah & Berorganisasi" textWrap="true" col="0" />
						<StackLayout ref="iconContainer" col="1" row="0" verticalAlignment="middle">
                <Label fontSize="16px" textAlignment="center" :text="counter" />
            </StackLayout>
            <!-- <StackLayout ref="iconContainer" col="2" row="0" verticalAlignment="middle">
                <Label ref="icon" fontWeight="bold" fontSize="18px" textAlignment="center" :text="'ion-md-arrow-up' | fonticon" class="ion" />
            </StackLayout> -->
        </GridLayout>
    </StackLayout>
</template>

<script>

export default {
	computed: {
		counter(){
			return this.$store.getters.get_habit_organisasi_payload_description_checked+'/'+this.$store.getters.get_habit_organisasi_payload_description_length;
		}
	},
}

</script>
