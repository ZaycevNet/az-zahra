<style>

.full-border-last-item {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
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
}

.off-top-bottom-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-width: 0;
    border-bottom-width: 0;
}

</style>

<template>
	<StackLayout>
		<Accordion>
			<StackLayout slot="item" >
				<HabitItemCheckbox class="off-bottom-border" />
				<HabitItemCheckbox class="off-bottom-border" />
				<HabitItemCheckbox class="off-bottom-border" />
				<HabitItemCheckbox class="full-border-last-item" />
			</StackLayout>
    </Accordion>
	</StackLayout>
</template>

<script>

export default {
    data() {
        return {

        }
    },
}

</script>
