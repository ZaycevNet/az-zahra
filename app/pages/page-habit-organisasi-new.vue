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

</style>


<template>
	<StackLayout padding="10 10 0 10">

    <OrganisasiNewSubtitle ref="subtitle" class="full-border" />

    <StackLayout class="off-bottom-border" padding="10 10 0 10">
      <OrganisasiNewTextfield placeholder="Tempat"/>
      <!-- <OrganisasiNewDropdown /> -->
      <OrganisasiNewDropdownFloatLabel />
      <OrganisasiNewTextview placeholder="Rangkuman Kegiatan"/>
    </StackLayout>

		<StackLayout
      v-for="(item, index) in items"
      :key="index"
      slot="item">
				<OrganisasiItemCheckbox
          :description="item.description"
          :checked="item.selected"
          :items="item"
          :class="index+1 >= items.length ? 'full-border-last-item' : 'off-bottom-border'" />
		</StackLayout>
	</StackLayout>
</template>

<script>
  export default {
    computed: {
      items(){
        return this.$store.getters.get_habit_organisasi_payload_description;
      }
    }
  }
</script>
