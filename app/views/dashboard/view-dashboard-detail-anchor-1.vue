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

<Page>
	<!-- <Gradient direction="top down" colors="#28ADAA, #28BAAA" color="white" height="auto" > -->
    <ParallaxView controlsToFade="headerLabel,headerLabel2,titleLabel2">
        <Header class="header-template" dropShadow="true">
            <!-- <Label id="headerLabel" text="Parallax"></Label>
            <Label id="headerLabel2" text="Component"></Label> -->
        </Header>
        <Content class="body-template" height="auto" ref="Content" >

					<ScrolLView>
						<JurnalCardDetail @newHeight="onNewHeight" />
					</ScrolLView>

        </Content>
        <Anchored class="anchor">

						<MiniProfileNewsDetail />

            <!-- profile -->
            <!-- <GridLayout height="75" rows="70" columns="70,*,40" ref="Profile" backgroundColor="white">
                <StackLayout verticalAlignment="middle" height="60" width="60" row="0" col="0" borderRadius="50%" backgroundImage="~/assets/team/ukik.jpg" backgroundSize="cover">
                </StackLayout>

                <StackLayout row="0" col="1" verticalAlignment="middle">
                    <Label textAlignment="left" fontSize="17px" color="black" text="Dessy Indah Fitri" />
                    <Label textAlignment="left" color="gray" text="8 mins" />
                </StackLayout>

                <StackLayout row="0" col="3" verticalAlignment="middle" @tap="$emit('onBubbleEvent', 'detail')">
                    <Label textAlignment="center" fontSize="24px" :text="String.fromCharCode('0xf33b')" class="ion" />
                </StackLayout>

            </GridLayout> -->


						<!-- <DockLayout stretchLastChild="false" width="100%" padding="0 20px 0 20px" borderTopWidth="1" borderTopColor="#ebe7e6" backgroundColor="white" borderBottomWidth="1" borderBottomColor="#ebe7e6">

                <GridLayout @tap="$emit('onBubbleEvent', 'like')" padding="10 0 10 0" paddingRight="10" horizontalAlignment="center" columns="*" rows="*" dock="left" :width="100/3.85+'%'">

                    <Label row="0" col="0" textAlignment="left" class="ion" fontSize="14px" textWrap="false" verticalAlignment="middle">
                        <FormattedString>
                            <Span fontSize="22px" :text="String.fromCharCode('0xf443')" color="#c93e3e" class="ion" />
                            <Span text=" Suka" />
                        </FormattedString>
                    </Label>

                    <StackLayout v-if="true" marginTop="-10px" row="0" col="0" width="15" height="15" color="white" backgroundColor="#c93e3e" borderRadius="25%" horizontalAlignment="right" verticalAlignment="middle">
                        <Label :text="1" fontSize="9" textAlignment="center" />
                    </StackLayout>

                </GridLayout>

                <GridLayout @tap="$emit('onBubbleEvent', 'comment')" padding="10 0 10 0" paddingLeft="10" paddingRight="10" borderLeftWidth="1" borderLeftColor="#ebe7e6" borderRightWidth="1" borderRightColor="#ebe7e6" horizontalAlignment="center" columns="*" rows="*"
                dock="left" :width="100/2.60+'%'">

                    <Label row="0" col="0" textAlignment="left" class="ion" fontSize="14px" textWrap="false" verticalAlignment="middle">
                        <FormattedString>
                            <Span fontSize="22px" :text="String.fromCharCode('0xf3fa')" color="#3e96c9" class="ion" />
                            <Span text=" Komentar" />
                        </FormattedString>
                    </Label>

                    <StackLayout v-if="true" marginTop="-10px" row="0" col="0" width="15" height="15" color="white" backgroundColor="#3e96c9" borderRadius="25%" horizontalAlignment="right" verticalAlignment="middle">
                        <Label :text="1" fontSize="9" textAlignment="center" />
                    </StackLayout>

                </GridLayout>

                <GridLayout @tap="$emit('onBubbleEvent', 'validasi')" padding="10 0 10 0" horizontalAlignment="center" columns="*" rows="*" dock="right" :width="100/3.70+'%'">

                    <Label row="0" col="0" textAlignment="left" class="ion" fontSize="14px" textWrap="false" verticalAlignment="middle">
                        <FormattedString>
                            <Span fontSize="22px" :text="String.fromCharCode('0xf148')" color="#5ebd5c" class="ion" />
                            <Span text=" Validasi" />
                        </FormattedString>
                    </Label>

                    <StackLayout v-if="true" marginTop="-10px" row="0" col="0" width="15" height="15" color="white" backgroundColor="#5ebd5c" borderRadius="25%" horizontalAlignment="right" verticalAlignment="middle">
                        <Label :text="1" fontSize="9" textAlignment="center" />
                    </StackLayout>

                </GridLayout>


            </DockLayout>
 -->

        </Anchored>

    </ParallaxView>
<!-- </Gradient>		 -->
</Page>

</template>

<script>

import JurnalCardDetail from "./components/jurnal-card-detail"

export default {
	components: {
		JurnalCardDetail
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
			console.log(this.$refs.Content.nativeView.height)
		}
};

</script>
