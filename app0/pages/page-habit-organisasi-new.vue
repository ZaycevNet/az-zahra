<style scoped>

.full-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

.full-border-last-item {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
    border-top-width: 0;
}

.off-top-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
}

.off-bottom-border {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-width: 0;
    border-top-width: 0;
}

.off-top-bottom-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
    border-bottom-width: 0;
}

.btn-next {
	width: 100%;
	border-radius: 5%;
	color: white;
	font-weight: bold;
	padding: 25px;
	background-color: #28BAAA;
	text-align: center;
	/* margin-top: 20px; */
	/* margin-bottom: 20px; */
}
</style>


<template>
	<StackLayout padding="10 10 0 10" marginBottom="75">

    <OrganisasiNewSubtitle ref="subtitle" class="full-border" />

    <StackLayout v-if="delayRender" class="off-bottom-border" padding="10 15 0 15">
      <GridLayout columns="*,*" rows="*">
        <OrganisasiNewTimepicker col="0" width="45%" horizontalAlignment="left" placeholder="Waktu Mulai"/>
        <OrganisasiNewTimepicker col="1" width="50%" placeholder="Waktu Selesai"/>
      </GridLayout>
      <OrganisasiNewDatepicker placeholder="Tanggal"/>
      <!-- <OrganisasiNewRaddataformDropdown :bus="bus" placeholder="Rangkuman Kegiatan"/> -->
      <!-- <OrganisasiNewRaddataform :bus="bus" ref="dataform" /> -->
      <OrganisasiNewTextfield placeholder="Tempat"/>
      <!-- <OrganisasiNewDropdown /> -->
      <OrganisasiNewDropdownFloatLabel />
      <OrganisasiNewTextview placeholder="Rangkuman Kegiatan"/>
    </StackLayout>

		<StackLayout
      v-if="delayRender1"

      v-for="(item, index) in items"
      :key="index"
      slot="item">
				<OrganisasiItemCheckboxBasic
          :description="item.description"
          :checked="item.selected"
          :items="item"
          :class="index+1 >= items.length ? 'full-border-last-item' : 'off-bottom-border'" />
		</StackLayout>

		<!-- <StackLayout marginTop="20px" marginBottom="20px" >
			<Ripple  @tap="onNext" rippleColor="#d50000" class="ripple-btn-next">
				<Label class="btn-next" text="Selanjutnya"/>
			</Ripple>
		</StackLayout> -->
	</StackLayout>
</template>

<script>
import Vue from 'nativescript-vue'

  export default {
    data(){
      return {
        delayRender: false, // optimasi agar rendering cepat, jadi di v-if=true nunggu
        delayRender1: false, // optimasi agar rendering cepat, jadi di v-if=true nunggu

        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
        // untuk mengetahui jika parent sedang memanggil event
        bus: new Vue(),
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      }
    },
    mounted(){
      setTimeout(() => {
        this.delayRender = true;
      }, 100);
      setTimeout(() => {
        this.delayRender1 = true;
      }, 200);
    },
    computed: {
      items(){
        return this.$store.getters.get_habit_organisasi_payload_description;
      }
    },
    methods: {
      onNext(){
  			// console.log(this.$refs.dataform.nativeView)
        console.log('onSubmit')
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
            // untuk mengetahui jika parent sedang memanggil event
        this.bus.$emit('onSubmitParent')
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  		},
    }
  }
</script>
