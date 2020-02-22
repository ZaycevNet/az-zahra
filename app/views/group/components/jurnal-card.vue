<template>

		<CardView class="cardStyle" margin="0 0 10 0"
			elevation="0"
			radius="0"
			shadowOffsetWidth="15"
			shadowOffsetHeight="15"
			shadowColor="black"
			shadowOpacity="1.0"
			shadowRadius="10">
			<StackLayout>
				<GridLayout height="70" rows="70" columns="70,*,40" borderTopWidth="1" borderTopColor="#ebe7e6">
					<StackLayout
						verticalAlignment="middle"
						height="60"
						width="60"
						row="0"
						col="0"
						borderRadius="50%"
						backgroundImage="~/assets/team/ukik.jpg"
						backgroundSize="cover">
					</StackLayout>

					<StackLayout row="0" col="1" verticalAlignment="middle">
						<Label textAlignment="left" fontSize="17px" color="black" text="Dessy Indah Fitri"/>
						<Label textAlignment="left" color="gray" text="8 mins" />
					</StackLayout>

					<StackLayout row="0" col="3" verticalAlignment="middle" @tap="$emit('onBubbleEvent', 'detail')">
						<Label textAlignment="center" fontSize="24px" :text="String.fromCharCode('0xf33b')" class="ion" />
					</StackLayout>

				</GridLayout>

				<StackLayout
					marginTop="15px"
					borderTopWidth="1"
					borderTopColor="#ebe7e6"
					padding="20px 10px 25px 0px">

					<FlexboxLayout flexWrap="wrap" paddingLeft="5px">
					  <Label text="Laporan" class="tags type" />
					  <Label text="Samarinda" class="tags city" />
					  <Label text="Sempaja" class="tags location" />
					  <Label text="Kriminal" class="tags category" />
					</FlexboxLayout>

					<Label
						paddingLeft="10px"
						paddingTop="10px"
						text="This is an overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout."
						textWrap="true" />
				</StackLayout>

				<Image margin="0 10px 30px 10px" src="~/assets/star-ocean.jpg" stretch="fill" height="auto" />

				<DockLayout stretchLastChild="false" width="100%" padding="0 20px 0 20px" borderTopWidth="1" borderTopColor="#ebe7e6"  borderBottomWidth="1" borderBottomColor="#ebe7e6">

					<GridLayout
						@tap="$emit('onBubbleEvent', 'like')"
						padding="10 0 10 0"
						paddingRight="10"
						horizontalAlignment="center" columns="*" rows="*" dock="left" :width="100/3.85+'%'" >

						<!-- jika badge 0 maka textAlignment="center" jika badge > 0 maka textAlignment="left" -->

						<Label row="0" col="0" textAlignment="left" class="ion" fontSize="14px" textWrap="false" verticalAlignment="middle">
						  <FormattedString>
							<Span fontSize="22px" :text="String.fromCharCode('0xf443')" color="#c93e3e" class="ion" />
							<Span text=" Suka" />
						  </FormattedString>
						</Label>

						<StackLayout
							v-if="true"
							marginTop="-10px"
							row="0" col="0"
							width="15"
							height="15"
							color="white"
							backgroundColor="#c93e3e"
							borderRadius="25%"
							horizontalAlignment="right"
							verticalAlignment="middle">
							<Label :text="1" fontSize="9" textAlignment="center" />
						</StackLayout>

					</GridLayout>

					<GridLayout
						@tap="$emit('onBubbleEvent', 'comment')"
						padding="10 0 10 0"
						paddingLeft="10"
						paddingRight="10"

						borderLeftWidth="1"
						borderLeftColor="#ebe7e6"
						borderRightWidth="1"
						borderRightColor="#ebe7e6"
						horizontalAlignment="center" columns="*" rows="*" dock="left" :width="100/2.60+'%'" >

						<!-- jika badge 0 maka textAlignment="center" jika badge > 0 maka textAlignment="left" -->

						<Label row="0" col="0" textAlignment="left" class="ion" fontSize="14px" textWrap="false" verticalAlignment="middle">
						  <FormattedString>
							<Span fontSize="22px" :text="String.fromCharCode('0xf3fa')" color="#3e96c9" class="ion" />
							<Span text=" Komentar" />
						  </FormattedString>
						</Label>

						<StackLayout
							v-if="true"
							marginTop="-10px"
							row="0" col="0"
							width="15"
							height="15"
							color="white"
							backgroundColor="#3e96c9"
							borderRadius="25%"
							horizontalAlignment="right"
							verticalAlignment="middle">
							<Label :text="1" fontSize="9" textAlignment="center" />
						</StackLayout>

					</GridLayout>

					<GridLayout
						@tap="$emit('onBubbleEvent', 'validasi')"
						padding="10 0 10 0"
						horizontalAlignment="center" columns="*" rows="*" dock="right" :width="100/3.70+'%'" >

						<!-- jika badge 0 maka textAlignment="center" jika badge > 0 maka textAlignment="left" -->

						<Label row="0" col="0" textAlignment="left" class="ion" fontSize="14px" textWrap="false" verticalAlignment="middle">
						  <FormattedString>
							<Span fontSize="22px" :text="String.fromCharCode('0xf148')" color="#5ebd5c" class="ion" />
							<Span text=" Validasi" />
						  </FormattedString>
						</Label>

						<StackLayout
							v-if="true"
							marginTop="-10px"
							row="0" col="0"
							width="15"
							height="15"
							color="white"
							backgroundColor="#5ebd5c"
							borderRadius="25%"
							horizontalAlignment="right"
							verticalAlignment="middle">
							<Label :text="1" fontSize="9" textAlignment="center" />
						</StackLayout>

					</GridLayout>


				<!--
					<
					<Label class="ion" fontSize="16px" dock="left" :width="100/4.25+'%'" textWrap="false" verticalAlignment="middle">
					  <FormattedString>
						<Span fontSize="22px" :text="String.fromCharCode('0xf443')" style="color: gray" class="ion" />
						<Span text=" Suka" />
					  </FormattedString>
					</Label>


					<Label class="ion" fontSize="16px"
						borderLeftWidth="1"
						borderLeftColor="#ebe7e6"
						borderRightWidth="1"
						borderRightColor="#ebe7e6"
						dock="left"
						:width="100/2.25+'%'" textAlignment="center" textWrap="false" verticalAlignment="middle">
					  <FormattedString>
						<Span fontSize="22px" :text="String.fromCharCode('0xf3fa')" style="color: gray" class="ion" />
						<Span text=" Komentar" />
					  </FormattedString>
					</Label>

					<Label class="ion" fontSize="16px" dock="left" textWrap="false" textAlignment="right" verticalAlignment="middle">
					  <FormattedString>
						<Span fontSize="22px" :text="String.fromCharCode('0xf170')" style="color: gray" class="ion" />
						<Span text=" Validasi" />
					  </FormattedString>
					</Label>
				-->

				</DockLayout>

			</StackLayout>
		</CardView>

</template>

<style scoped>
.tags {
	padding:5 10 5 10;
	margin-left: 5px;
	margin-bottom: 5px;
	border-radius: 5%;
	width: auto;
	font-size: 12px;
	border-width: 1;
}

.city {
	color: red;
	border-color: red;
}
.location {
	color: green;
	border-color: green;
}
.category {
	color: blue;
	border-color: blue;
}
.type {
	color: orange;
	border-color: orange;
}
</style>
