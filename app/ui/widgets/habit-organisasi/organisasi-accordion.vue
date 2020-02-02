<style>

.full-border {
    border-width: 1;
    border-color: #28ADAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

</style>

<template>
    <StackLayout padding="10 10 0 10">
        <OrganisasiSubtitle ref="subtitle"
          borderBottomLeftRadius="5"
          borderBottomRightRadius="5"
          :visibility="visibility.status"
          subtitle="subtitle"
          description_length="description_length"
          class="full-border"
          @onBubbleTriggered="onBubbleTriggered" />

        <StackLayout ref="habitContainer" v-if="firstClick" :visibility="visibility.string">
            <slot name="item" />
        </StackLayout>
    </StackLayout>
</template>

<script>

export default {
    props: ['subtitle', 'description_length'],
    data() {
        return {
            firstClick: false, // optimasi agar rendering cepat, jadi di v-if=true saat dibuka saja

            visibility: {
              status: true,
              string: "collapse"
            }
        }
    },
    methods: {
      onBubbleTriggered(value) {

        new Promise(resolve => {
          this.firstClick = true;
          resolve();

        }).then(result => {
          if(this.$refs.habitContainer == undefined) return;

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

          if(!value) {
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

        })


      }
    }
}

</script>
