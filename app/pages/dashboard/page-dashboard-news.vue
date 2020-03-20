<style scoped>


</style>

<template>
<StackLayout @loaded="onLoaded_Rendering(0, 250)">
    <DashboardNewsCard v-if="!rendering0">
      <Gradient direction="to right" slot='mini-profile' colors="#709BF8, #7BCBEA" color="white">
        <DashboardMiniProfileNews />
      </Gradient>
    </DashboardNewsCard>
</StackLayout>
</template>

<script>

// import Vue from 'nativescript-vue'
// import LocalDashboardNewsCard from '@/ui/widgets/dashboard/dashboard-news-card'
// import LocalDashboardMiniProfileNews from '@/ui/widgets/dashboard/dashboard-mini-profile-news'

const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
    props: ["items"],
    components: {
      // LocalDashboardNewsCard, LocalDashboardMiniProfileNews
    }
}

</script>
