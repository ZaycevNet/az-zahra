<style>

.full-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

</style>

<template>
    <StackLayout padding="10 10 0 10">
        <AccordionHabitItemSubtitle ref="subtitle"
          :visibility="visibility.status"
          :subtitle="subtitle"
          :description_length="description_length"
          class="full-border"
          @onBubbleTriggered="onBubbleTriggered" />

        <StackLayout ref="habitContainer" v-if="delayRender" :visibility="visibility.string">
            <slot name="item" />
        </StackLayout>
    </StackLayout>
</template>

<script>

export default {
    props: ['subtitle', 'description_length'],
    data() {
        return {
          delayRender: false, // optimasi agar rendering cepat, jadi di v-if=true nunggu

            visibility: {
              status: true,
              string: "visible"
            }
        }
    },
    mounted(){
      setTimeout(() => {
        this.delayRender = true;
      }, 250);
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
                console.log("Animation finished");
          })
              .catch(function (e) {
              console.log(e.message);
          });

          sub.borderBottomLeftRadius = 0;
          sub.borderBottomRightRadius = 0;

          el.height = "auto";

          this.visibility = {
            status: value,
            string: "visible",
          }
        } else {
          opacityOut.play();
          zoomOut.play()
              // .then(function () { return opacityOut.play(); })
              .then(function () {
                console.log("Animation finished");
          })
              .catch(function (e) {
              console.log(e.message);
          });

          setTimeout(() => {
            this.visibility = {
              status: value,
              string: "collapse",
            }

            sub.borderBottomLeftRadius = 5;
            sub.borderBottomRightRadius = 5;

            el.height = 0;

          }, 100)
        }

      }
    }
}

</script>
