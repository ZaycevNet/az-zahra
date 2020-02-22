<style lang="css" scoped>

.drawer-header {
    /*padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: #53ba82;*/
    color: #ffffff;
    font-size: 24;
}

.drawer-item {
    padding: 8 16;
    color: #333333;
    font-size: 16;
}

</style>

<template lang="html">

<GridLayout rows="*" margin="10 0 10 0" columns="70,70,*,40" verticalAlignment="top">

    <StackLayout row="0" col="0" horizontalAlignment="center">
        <Label fontSize="20px" width="25" height="25" margin="10px" color="white" :backgroundColor="parentPayload.color" borderRadius="25%" />
    </StackLayout>

    <StackLayout row="0" col="1" horizontalAlignment="middle" verticalAlignment="top">
        <StackLayout height="60" width="60" rowSpan="5" borderRadius="50%" backgroundImage="~/assets/team/ukik.jpg" backgroundSize="cover">
        </StackLayout>
    </StackLayout>

    <StackLayout row="0" col="2" verticalAlignment="middle">
        <Label textAlignment="left" fontSize="15px" paddingBottom="10px" fontWeight="bold" color="black" text="Dessy Indah Fitri" />
        <Label textAlignment="left" fontSize="12px" textWrap="true" color="gray" text="This repo is a port to Nativescript-Vue of @JoshDSommer's NativeScript Angular Shadow Directive project. As such, a good portion of the code is inspired by it, but many changes were made to fit into how Vue does Directives."
        />
        <StackLayout @tap="gotoComment">
            <Label textAlignment="left" fontSize="12px" paddingTop="5px" :color="parentPayload.color" text="Beri Komentar" />
        </StackLayout>
    </StackLayout>

    <StackLayout row="0" col="3" verticalAlignment="middle">
        <Label textAlignment="center" fontSize="24px" :text="String.fromCharCode('0xf443')" class="ion" />
    </StackLayout>

</GridLayout>

</template>

<script>

export default {
    props: {
        parentPayload: {
            default: {
                title: "",
                color: "",
            }
        }
    },
    methods: {
        gotoComment() {
          const { title, color } = this.parentPayload

          this.$showModal(this.$routes.JurnalCommentReplyModalCreate, {
            fullscreen: false,
            cancelable: false,
            props: {
              parentPayload: {
                title,
                color,
              }
            }
          }).then(data => {
            console.log(data)
            this.$store.commit("gotoRoute", false)
          });
        }
    }
}

</script>
