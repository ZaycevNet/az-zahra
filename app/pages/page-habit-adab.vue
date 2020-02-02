<style scoped>

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

<StackLayout @loaded="onRendering">
    <AdabAccordion v-if="!rendering" v-for="(item, index) in items" :key="index" :subtitle="item.subtitle" :description_length="item.payload_description.length">
        <StackLayout v-for="(_item, _index) in item.payload_description" :key="_index+'a'" slot="item">
            <AdabItemCheckbox :description="_item.description" :checked="_item.selected" :items="_item" :class="_index+1 >= item.payload_description.length ? 'full-border-last-item' : 'off-bottom-border'" />
        </StackLayout>
    </AdabAccordion>
</StackLayout>

</template>

<script>

export default {
    props: ["items", "renderingTime"], // items is payload_subtitle
    data() {
        return {
            rendering: true,
        }
    },
    methods: {
        onRendering(args) {
            console.log(this.renderingTime)
            setTimeout(() => {
                this.rendering = false;
            }, this.renderingTime)
        },
    }
}

</script>
