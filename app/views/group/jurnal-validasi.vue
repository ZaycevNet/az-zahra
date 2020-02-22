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

.tags {
	padding:5 10 5 10;
	margin-left: 5px;
	margin-bottom: 5px;
	border-radius: 5%;
	width: auto;
	font-size: 12px;
	border-width: 1;
}

.validasi1 {
	color: red;
	border-color: red;
}
.validasi2 {
	color: green;
	border-color: green;
}
.validasi3 {
	color: blue;
	border-color: blue;
}
.validasi4 {
	color: orange;
	border-color: orange;
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

        <RadListView marginTop="0" ref="listView" for="item in itemList" pullToRefresh="false" loadOnDemandMode="None" >
            <v-template ~itemTemplate>

                <GridLayout rows="*" padding="0 10 10 0" columns="*" horizontalAlignment="left">

                    <StackLayout borderLeftWidth="0" marginTop="10" :borderLeftColor="parentPayload.color" marginLeft="9.5%" />

                    <GridLayout row="0" col="0" rows="*,*" columns="70,*">

                        <StackLayout paddingTop="10" verticalAlignment="top">
                            <StackLayout height="60" width="60" borderRadius="50%" backgroundImage="~/assets/images/love.jpg" backgroundSize="cover">
                            </StackLayout>
                        </StackLayout>

                        <StackLayout row="0" col="1" verticalAlignment="middle" >

                            <Label textAlignment="left" fontSize="15px" paddingBottom="10px" paddingTop="10" fontWeight="bold" color="black" text="Dessy Indah Fitri" />

                            <Label textAlignment="left" fontSize="12px" paddingBottom="10" textWrap="true" color="gray" text="This repo is a port to Nativescript-Vue of @JoshDSommer's NativeScript Angular Shadow Directive project. As such, a good portion of the code is inspired by it, but many changes were made to fit into how Vue does Directives. "
                            />

                            <FlexboxLayout flexWrap="wrap" marginBottom="5">
                  					  <Label text="Koordinasi" class="tags validasi1" />
                  					  <Label text="Tindaklanjut" class="tags validasi2" />
                  					  <Label text="Terimakasih" class="tags validasi3" />
                  					  <!-- <Label text="Kriminal" class="tags validasi4" /> -->
                  					</FlexboxLayout>

                        </StackLayout>


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

    </ScrollView>

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
    }
}

</script>
