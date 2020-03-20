<style scoped>

.subtitle-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

.full-border-radius {
    border-width: 0;
    border-color: #28BAAA;
    border-radius: 5;
}

</style>

<template>

<StackLayout padding="0 0 10 0" marginBottom="0">

    <AuthNewTextview placeholder="Alamat" text="items.alamat" />

</StackLayout>

</template>

<script>

export default {
    props: ["items"],
    data() {
        return {

        }
    },
    methods: {
        

    }
}

</script>
