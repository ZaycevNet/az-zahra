<style>

.full-border {
    border-width: 1;
    border-color: #2538AA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

.full-border-last-item {
    border-width: 1;
    border-color: #2538AA;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
}

.off-top-border {
    border-width: 1;
    border-color: #2538AA;
    border-top-width: 0;
}

.off-bottom-border {
    border-width: 1;
    border-color: #2538AA;
    border-bottom-width: 0;
}

.off-top-bottom-border {
    border-width: 1;
    border-color: #2538AA;
    border-top-width: 0;
    border-bottom-width: 0;
}

ActionBar {
    background-color: #2538AA;
    padding-left: 0px;
    android-elevation: 0;
}

.action-bar-title {
    text-align: left;
    font-size: 18px;
    padding-right: 16;
    background-color: #2538AA;
    vertical-alignment: middle;
}

.action-bar-right {
    text-align: right;
    font-size: 18px;
    padding-right: 16;
    background-color: #2538AA;
    vertical-alignment: middle;
}

.action-bar-icon {
    font-size: 35px;
    /* padding-left: 12px; */
    width: 30;
}


/* ActionBar { */


/* background-color: #53ba82; */


/* background-color: #2538AA;
    android-elevation: 0;
    color: #ffffff;
} */


/* .message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
} */

</style>

<template>

<Page>
    <!-- <ActionBar>
        <GridLayout width="100%" columns="auto, *">
            <Label class="title" text="Welcome to NativeScript-Vue!" col="1" />
        </GridLayout>
    </ActionBar> -->

    <ActionBar color="white">
        <GridLayout width="100%" columns="auto, *, 60%">
            <!-- <Ripple rippleColor="orange" @tap="onNavigationButtonTap"> -->
            <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
            <!-- </Ripple> -->
            <Label class="action-bar-title" text="Kebiasaan" col="1" />
            <!-- <Label class="action-bar-right" text="1/2" col="2" /> -->
        </GridLayout>
    </ActionBar>

    <ScrollView>
        <StackLayout>

            <Gradient direction="top down" colors="#2538AA, #7B00E7" color="white" height="auto" verticalAlignment="middle">
                <Label textAlignment="center" fontWeight="bold" fontSize="18" verticalAlignment="left" text="Adab" />
                <Label textAlignment="center" marginBottom="5" fontSize="14" verticalAlignment="left" text="Jum'at 20 Januari 2019" />
            </Gradient>



            <StackLayout padding="10">
                <!-- <Button text="Hallo" @tap="visibility = !visibility" /> -->
                <HabitItemSubtitle :visibility="visibility" class="full-border" @onBubbleTriggered="visibility = !visibility" />
                <StackLayout :visibility="visibility ? 'visible' : 'collapse'">
                    <HabitItemCheckbox class="off-top-bottom-border" />
                    <HabitItemCheckbox class="off-bottom-border" />
                    <HabitItemCheckbox class="off-bottom-border" />
                    <HabitItemCheckbox class="off-bottom-border" />
                    <HabitItemCheckbox class="full-border-last-item" />
                </StackLayout>
            </StackLayout>
        </StackLayout>
        <!-- <router-view></router-view> -->
    </ScrollView>
</Page>

</template>

<script>

export default {
    data() {
            return {
                visibility: true,
            }
        },
        methods: {

        }
}

</script>
