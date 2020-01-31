<style>

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

ActionBar {
    background-color: #28ADAA;
    padding-left: 0px;
    android-elevation: 0;
}

.action-bar-title {
    text-align: left;
    font-size: 18px;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.action-bar-right {
    text-align: right;
    font-size: 18px;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.action-bar-icon {
    font-size: 35px;
    /* padding-left: 12px; */
    width: 30;
}



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

            <HabitPageHeadline />

            <StackLayout padding="10">
                <!-- <Button text="Hallo" @tap="visibility = !visibility" /> -->
                <HabitItemSubtitle ref="subtitle"
                  :visibility="visibility.status"
                  class="full-border"

                  @onBubbleTriggered="onBubbleTriggered" />
                <StackLayout ref="habitContainer" :visibility="visibility.string">
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
            visibility: {
              status: true,
              string: "visible"
            }
        }
    },
    methods: {
      onBubbleTriggered(value) {

        const sub = this.$refs.subtitle.nativeView;
        const el = this.$refs.habitContainer.nativeView;

        el.originX =  0.5; // default 0.5 (center), 0 is most left, 1 is most right
        el.originY = 0; // default 0.5 (middle), 0 is top, 1 is bottom

        const zoomIn = el.createAnimation({
            scale: { x: 1, y: 1},
            duration: 100
        });

        const zoomOut = el.createAnimation({
            scale: { x: 1, y: 0},
            duration: 100
        });

        const opacityIn = el.createAnimation({
            opacity: 1,
            duration: 75
        });

        const opacityOut = el.createAnimation({
            opacity: 0,
            duration: 75
        });



        if(value) {
          opacityIn.play();
          zoomIn.play()
              // .then(function () { return opacityIn.play(); })
              .then(function () {
                this.visibility = {
                  status: value,
                  string: "visible",
                }
                console.log("Animation finished");
          })
              .catch(function (e) {
              console.log(e.message);
          });

          sub.borderBottomLeftRadius = 0;
          sub.borderBottomRightRadius = 0;

        } else {
          opacityOut.play();
          zoomOut.play()
              // .then(function () { return opacityOut.play(); })
              .then(function () {
                this.visibility = {
                  status: value,
                  string: "collapse",
                }
                console.log("Animation finished");
          })
              .catch(function (e) {
              console.log(e.message);
          });

          setTimeout(() => {
            sub.borderBottomLeftRadius = 5;
            sub.borderBottomRightRadius = 5;
          }, 100)
        }

      }
    }
}

</script>
