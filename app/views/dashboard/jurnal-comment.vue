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

<GridLayout height="100%" width="100%" rows="75%,*" columns="*">
    <StackLayout v-shadow="5" row="0" col="0" height="90%" :borderTopColor="parentPayload.color" borderTopWidth="27" :borderBottomColor="parentPayload.color" borderBottomWidth="1" verticalAlignment="bottom">
        <Label textAlignment="left" class="drawer-header ion" paddingBottom="5" paddingLeft="6" fontSize="14px" :color="parentPayload.color" textWrap="false">

            <FormattedString>
                <Span fontSize="35px" text="Y" />
                <Span fontSize="20px" :text="'ang '+parentPayload.title " />
            </FormattedString>
        </Label>
    </StackLayout>

    <ScrollView col="0" row="1" verticalAlignment="top" padding="5" scrollBarIndicatorVisible="false">

      <Comment :parentPayload="parentPayload"/>

    </ScrollView>

</GridLayout>

</template>

<script>

import Comment from "./components/comment"

export default {
    components: {
        Comment,
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
