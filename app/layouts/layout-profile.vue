<style scoped>

.btn-circle {
    width: 50;
    height: 50;
    border-radius: 25;
    border-width: 1;
    background-color: #28ADAA;
    color: white;
}

.btn-circle:active {
    background-color: #28BAAA;
}

</style>

<template>

<ScrollView ref="Container" @scroll="onScroll" @loaded="onLoaded">
    <StackLayout>

        <Gradient ref="Parallex" direction="top down" colors="#28ADAA, #28BAAA">
            <GridLayout columns="*,150,*">

                <StackLayout col="0" verticalAlignment="middle">
                    <Button text="A" class="btn-circle" />
                </StackLayout>

                <StackLayout col="1">
                    <Image src="" stretch="aspectFill" borderRadius="75" borderWidth="5" borderColor="rgba(100,255,100,0.5)" width="150" height="150" />
                </StackLayout>

                <StackLayout col="2" verticalAlignment="middle">
                    <Button text="A" class="btn-circle" />
                </StackLayout>

            </GridLayout>

            <StackLayout horizontalAlignment="center">

                <Label text="Dessy Indah Fitri" fontSize="18px" fontWeight="bold" textAlignment="center" paddingTop="15px" paddingLeft="10" paddingRight="10" paddingBottom="15px" />

                <Label text="1201 Westlake Avenue, Suite 205, Seattle, WA 98121 USA" fontSize="12px" color="gray" width="100%" textWrap="true" paddingLeft="50" paddingRight="50" textAlignment="center" />

                <FlexboxLayout alignItems="flex-starts" horizontalAlignment="center" marginTop="20" marginBottom="20">
                    <!-- Instagram -->
                    <Button :text="String.fromCharCode('0xf16d')" fontSize="20px" width="50" height="50" margin="10px" class="fa" color="white" backgroundColor="blue" borderRadius="25%" />
                    <!-- Twitter -->
                    <Button :text="String.fromCharCode('0xf099')" fontSize="20px" width="50" height="50" margin="10px" class="fa" color="white" backgroundColor="blue" borderRadius="25%" />
                    <!-- Facebook -->
                    <Button :text="String.fromCharCode('0xf09a')" fontSize="20px" width="50" height="50" margin="10px" class="fa" color="white" backgroundColor="blue" borderRadius="25%" />
                </FlexboxLayout>

            </StackLayout>
        </Gradient>

        <slot name="content" />

    </StackLayout>
</ScrollView>

</template>

<script>

import {
    Frame
}
from "tns-core-modules/ui/frame";


export default {
    methods: {
			onScroll() {
			    const scrollView = this.$refs.Container.nativeView;
			    // if the offset is less than the height of the header.
			    if (scrollView.verticalOffset < this.$refs.Parallex.nativeView.getActualSize().height) {

			        this.onScrollParallex(scrollView.verticalOffset / 2);
			        // this.bus.$emit('onScrollParent', this.scrollView.verticalOffset / 2)
			    }
			},
			onScrollParallex(offset) {

			    const scrollView = this.$refs.Container.nativeView;

			    const Parallex = this.$refs.Parallex.nativeView;

			    if (scrollView.ios) {
			        // iOS adjust the position with an animation to create a smother scrolling effect.
			        Parallex.animate({
			            translate: {
			                x: 0,
			                y: offset
			            }
			        }).then(() => {}, () => {});
			    } else {
			        // Android, animations are jerky so instead just adjust the position without animation.
			        Parallex.translateY = Math.floor(offset);
			    }
			},

			onLoaded(args) {
			    setTimeout(() => {
			        let parallex = this.$refs.Parallex.nativeView.getActualSize().height;
			        this.$emit("onBubbleParallexHeight", parallex);
			    }, 100)
			}
    }
};

</script>
