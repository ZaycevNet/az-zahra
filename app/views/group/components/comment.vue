<template>
  <RadListView marginTop="0" ref="listView" for="item in itemList" pullToRefresh="false" loadOnDemandMode="None">
      <v-template ~itemTemplate>

          <GridLayout rows="*" margin="10 0 10 0" columns="*" horizontalAlignment="left">

            <StackLayout borderLeftWidth="1" :borderLeftColor="parentPayload.color" marginLeft="9.5%" />

            <GridLayout row="0" col="0" rows="*,*" columns="70,*,40">

              <StackLayout row="0" col="0" rowSpan="5" verticalAlignment="top">
                  <StackLayout height="60" width="60" borderRadius="50%" backgroundImage="~/assets/team/ukik.jpg" backgroundSize="cover">
                  </StackLayout>
              </StackLayout>

              <StackLayout row="0" col="1" verticalAlignment="middle">

                  <Label textAlignment="left" fontSize="15px" paddingBottom="10px" fontWeight="bold" color="black" text="Dessy Indah Fitri" />

                  <Label textAlignment="left" fontSize="12px" textWrap="true" color="gray" text="This repo is a port to Nativescript-Vue of @JoshDSommer's NativeScript Angular Shadow Directive project. As such, a good portion of the code is inspired by it, but many changes were made to fit into how Vue does Directives."
                  />

                  <Label textAlignment="left" fontSize="12px" @tap="gotoComment" paddingTop="5px" :color="parentPayload.color" text="Beri Komentar" />

              </StackLayout>

              <StackLayout row="0" col="3" verticalAlignment="middle">
                  <Label textAlignment="center" fontSize="24px" :text="String.fromCharCode('0xf443')" class="ion" />
              </StackLayout>

              <CommentReply row="1" col="0" colSpan="4" :parentPayload="parentPayload" />

            </GridLayout>

          </GridLayout>

          <!--
  <Label
    marginLeft="5"
    height="40"
    textWrap="true"
    :text="item.description"
    style="color: #1B76C6"
  />
  -->
      </v-template>
  </RadListView>
</template>

<script>
import CommentReply from "./comment-reply"

export default {
  components: {
      CommentReply,
  },
  props: {
      parentPayload: {
          default: {
              title: "",
              color: "",
          }
      }
  },
    data() {
        return {
            itemList: (function() {
                let itemList = [];
                for (let i = 1; i <= 2; i++) {
                    itemList.push({
                        id: i,
                        name: `Item ${i}`,
                        description: `Item ${i} description`
                    });
                }
                return itemList;
            })(),
        }
    },
    methods: {
      gotoComment(){
          const { title, color } = this.parentPayload

          this.$showModal(this.$routes.JurnalCommentReplyModalCreate, {
            fullscreen: false,
            cancelable: true,
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
