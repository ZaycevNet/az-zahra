<style scoped>
/*
.tags {
    padding: 5 10 5 10;
    margin-left: 5px;
    margin-bottom: 5px;
    border-radius: 5%;
    width: auto;
    font-size: 12px;
    border-width: 1;
}

.city {
    color: red;
    border-color: red;
}

.location {
    color: green;
    border-color: green;
}

.category {
    color: blue;
    border-color: blue;
}

.type {
    color: orange;
    border-color: orange;
} */

#headerLabel2 {
    font-size: 45;
    horizontal-align: center;
    margin-top: -25;
    color: #B2EBF2;
}

#headerLabel {
    font-size: 45;
    horizontal-align: center;
    padding-top: 75;
    color: #B2EBF2;
}

.header-template {
    /* background-color: #212121; */
    background-image: url('~/assets/images/star-ocean.jpg');
    background-position: fill;
    /* background-size: cover; */
    height: 275;
}

/* .body-template TextView {
    font-size: 20;
    padding: 5 15;
    border: none;
} */

.anchor {
    height: 80;
    width: 100%;
    background-color: white;
}

#titleLabel {
    font-weight: bold;
    font-size: 25;
    padding: 5 15;
    color: #fff;
}

</style>

<template>

	<!-- <Gradient direction="top down" colors="#28ADAA, #28BAAA" color="white" height="auto" > -->

    <ParallaxView row="1" controlsToFade="headerLabel,headerLabel2,titleLabel2">
        <Header class="header-template" dropShadow="false">
            <!-- <Label id="headerLabel" text="Parallax"></Label>
            <Label id="headerLabel2" text="Component"></Label> -->
        </Header>
        <Content class="body-template" height="auto" ref="Content" >

					<ScrolLView>
						<DashboardNewsCardDetail @newHeight="onNewHeight" />
					</ScrolLView>

        </Content>
        <Anchored class="anchor">
            <Gradient  direction="top down" colors="#6784FF,#EA68FD" color="white" height="auto" >
              <Label text="Britney Spears - Oops!...I Did It Again (Legendado)" />
              <DashboardMiniProfileNewsDetail />
            </Gradient>

        </Anchored>

    </ParallaxView>

<!-- </Gradient>		 -->
</Page>

</template>

<script>

export default {
	components: {

	},
    data() {
        return {

				};
    },
		methods: {
			onNewHeight(args) {
					this.$refs.Content.nativeView.height = args
	    }
		},
		mounted(){
			// console.log(this.$refs.Content.nativeView.height)
		}
};

</script>
