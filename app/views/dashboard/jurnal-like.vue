<template lang="html">
	<GridLayout height="100%" width="100%" rows="75%,*" columns="*">
		<StackLayout
			v-shadow="5"
			row="0" col="0"
			height="90%"
			:borderTopColor="parentPayload.color"
			borderTopWidth="27"
			:borderBottomColor="parentPayload.color"
			borderBottomWidth="1"
			verticalAlignment="bottom" >
			<Label
				textAlignment="left"
				class="drawer-header ion"
				paddingBottom="5"
				paddingLeft="6"
				fontSize="14px"
				:color="parentPayload.color"
				textWrap="false">

			  <FormattedString>
				<Span fontSize="35px" text="Y" />
				<Span fontSize="20px" :text="'ang '+parentPayload.title " />
			  </FormattedString>
			</Label>
		</StackLayout>

		<ScrollView col="0" row="1" verticalAlignment="top" padding="5" scrollBarIndicatorVisible="false">
			<RadListView
				marginTop="0"
				ref="listView"
				for="item in itemList"
				pullToRefresh="false"
				loadOnDemandMode="None"
				>
			  <v-template ~itemTemplate>

				<GridLayout rows="*" margin="10 0 10 0" columns="70,*" verticalAlignment="top">
					<StackLayout>
						<StackLayout
							height="60"
							width="60"
							row="0"
							col="0"
							rowSpan="5"
							borderRadius="50%"
							backgroundImage="~/assets/images/love.jpg"
							backgroundSize="cover">
						</StackLayout>
					</StackLayout>

					<StackLayout row="0" col="1" verticalAlignment="middle">
						<Label textAlignment="left" fontSize="15px" fontWeight="bold" color="black" text="Dessy Indah Fitri"/>
						<Label textAlignment="left" fontSize="12px" paddingTop="5px" color="gray" text="28 Januari 2019"/>
					</StackLayout>

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
	props:{
		parentPayload: {
			default: {
				title: "",
				color: "",
			}
		}
	},
	data(){
		return {
		  itemList: (function() {
			let itemList = [];
			for (let i = 1; i <= 100; i++) {
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
