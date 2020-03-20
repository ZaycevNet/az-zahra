<style lang="css" scoped>


</style>

<template lang="html">

    <CardView radius="0" elevation="0" margin="0 0 10 0">
    <!-- <CardView radius="15" elevation="10" margin="0 6 10 6"> -->
      <StackLayout>

        <CardView row="0" elevation="15" radius="15" margin="5">
            <Gradient direction="top down" colors="rgb(165,150,255), rgb(210,184,255)" color="white" height="auto">

                <GridLayout columns="40,*" rows="50" margin="0" borderRadius="10" borderWidth="0" padding="5">

                    <Label col="0" row="0" textWrap="true" verticalAlignment="middle" textAlignment="center" color="" fontSize="36" class="ion" :text="'ion-md-chatboxes' | fonticon" fontWeight="normal"/>

                    <StackLayout paddingLeft="5" col="1" row="0" verticalAlignment="middle">
                        <Label fontSize="14" fontWeight="bold" text="Komentar Pembaca" />
                        <Label textWrap="true" fontWeight="normal" fontSize="12" text="Silahkan beri tanggapan pada artikel ini" />
                    </StackLayout>

                </GridLayout>

            </Gradient>

        </CardView>

        <!-- My Comments -->
        <StackLayout margin="5 5 10 5" >
          <Label style="font-size:18;padding:0 0 5 0;" text="Komentar Anda" />
          <CommentMe style="padding:5 5 10 0;" borderRadius="9" borderWidth="1" borderColor="rgb(210,184,255)" :parentPayload="parentPayload"/>
        </StackLayout>

        <!-- Other User Comments -->
        <StackLayout margin="5 5 10 5" >
          <Label style="font-size:18;padding:0 0 5 0;" text="Komentar Lainnya" />
          <Comments style="padding:5 5 10 0;" borderRadius="9" borderWidth="1" borderColor="rgb(210,184,255)" :parentPayload="parentPayload"/>
        </StackLayout>

      </StackLayout>
    </CardView>


</template>

<script>

import Comments from "./components/comment"
import CommentMe from "./components/comment-me"

export default {
    components: {
        Comments,
        CommentMe
    },
    props: {
        parentPayload: {
            default: {
                title: "",
                color: "",
            }
        }
    },
}

</script>
