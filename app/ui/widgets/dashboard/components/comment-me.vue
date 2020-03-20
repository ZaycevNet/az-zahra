<template>
  <RadListView marginTop="0" ref="listView" for="item in itemList" pullToRefresh="false" loadOnDemandMode="None">
      <v-template ~itemTemplate>

          <GridLayout rows="*" margin="10 0 10 0" columns="*" horizontalAlignment="left">

            <StackLayout borderLeftWidth="1" borderLeftColor="rgb(210,184,255)" marginLeft="10%" />

            <GridLayout row="0" col="0" rows="*,*" columns="70,*,40">

              <StackLayout row="0" col="0" rowSpan="5" verticalAlignment="top">
                  <StackLayout @tap="onFotoZoom('~/assets/images/ukik.jpg')" height="45" width="45" borderRadius="50%" backgroundImage="~/assets/images/ukik.jpg" backgroundSize="cover">
                  </StackLayout>
              </StackLayout>

              <StackLayout row="0" col="1" verticalAlignment="middle">

                  <Label textAlignment="left" fontSize="15px" paddingBottom="10px" fontWeight="bold" color="black" text="Muhamad Duki" />

                  <Label textAlignment="left" fontSize="12px" textWrap="true" color="gray" text="This repo is a port to Nativescript-Vue of @JoshDSommer's NativeScript Angular Shadow Directive project. As such, a good portion of the code is inspired by it, but many changes were made to fit into how Vue does Directives."
                  />

                  <Label textAlignment="left" fontSize="12px" @tap="gotoComment" paddingTop="5px" color="#709BF8" text="Beri Komentar" />

              </StackLayout>

              <StackLayout row="0" col="3" verticalAlignment="middle">
                  <Label textAlignment="center" fontSize="24px" :text="String.fromCharCode('0xf443')" class="ion" />
              </StackLayout>

              <!-- <StackLayout row="1" col="0" colSpan="4" >
                <CommentReply :parentPayload="parentPayload" />
                <CommentReply :parentPayload="parentPayload" />
                <CommentReply :parentPayload="parentPayload" />
              </StackLayout> -->

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
