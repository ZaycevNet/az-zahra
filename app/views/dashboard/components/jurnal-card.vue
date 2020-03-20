<template>

		<CardView margin="0 10 10 10"
			elevation="10"
			radius="15"
			shadowOffsetWidth="15"
			shadowOffsetHeight="15"
			shadowColor="black"
			shadowOpacity="1.0"
			shadowRadius="10">

			<StackLayout>
				<DashboardMiniProfileNews />
				<!-- <GridLayout height="70" rows="70" columns="70,*,40" borderTopWidth="1" borderTopColor="#ebe7e6" padding="5">
					<StackLayout
						verticalAlignment="middle"
						height="100%"
						width="100%"
						row="0"
						col="0"
						borderRadius="50%"
						backgroundImage="~/assets/images/love.jpg"
						backgroundSize="cover">
					</StackLayout>

					<StackLayout row="0" col="1" verticalAlignment="middle">
						<Label textAlignment="left" fontSize="17" color="black" text="Dessy Indah Fitri"/>
						<Label textAlignment="left" color="gray" text="8 mins" />
					</StackLayout>

					<StackLayout row="0" col="3" verticalAlignment="middle" @tap="$emit('onBubbleEvent', 'detail')">
						<Label textAlignment="center" fontSize="24" :text="String.fromCharCode('0xf33b')" class="ion" />
					</StackLayout>

				</GridLayout> -->

				<StackLayout
					marginTop="0"
					borderTopWidth="1"
					borderTopColor="#ebe7e6"
					padding="15">

					<Label
						text="This is an overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout."
						textWrap="true" />
				</StackLayout>

				<!-- <Image margin="0 10 30 10" src="~/assets/star-ocean.jpg" stretch="fill" height="auto" /> -->

				<DockLayout stretchLastChild="false" width="100%"  borderTopWidth="1" borderTopColor="#ebe7e6"  borderBottomWidth="0" borderBottomColor="#ebe7e6">

					<GridLayout
						@tap="$emit('onBubbleEvent', 'like')"
						padding="10 30"
						horizontalAlignment="center" columns="*" rows="*" dock="left" :width="100/2+'%'" >

						<!-- jika badge 0 maka textAlignment="center" jika badge > 0 maka textAlignment="left" -->

						<Label row="0" col="0" textAlignment="left" class="ion" fontSize="14" textWrap="false" verticalAlignment="middle">
						  <FormattedString>
							<Span fontSize="22" :text="String.fromCharCode('0xf443')" color="#c93e3e" class="ion" />
							<Span text=" Disukai" />
						  </FormattedString>
						</Label>

						<StackLayout
							v-if="true"

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
						padding="10 30"

						borderLeftWidth="1"
						borderLeftColor="#ebe7e6"
						borderRightWidth="1"
						borderRightColor="#ebe7e6"
						horizontalAlignment="center" columns="*" rows="*" dock="left" :width="100/2+'%'" >

						<!-- jika badge 0 maka textAlignment="center" jika badge > 0 maka textAlignment="left" -->

						<Label row="0" col="0" textAlignment="left" class="ion" fontSize="14" textWrap="false" verticalAlignment="middle">
						  <FormattedString>
							<Span fontSize="22" :text="String.fromCharCode('0xf3fa')" color="#3e96c9" class="ion" />
							<Span text=" Komentar" />
						  </FormattedString>
						</Label>

						<StackLayout
							v-if="true"

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


				</DockLayout>

			</StackLayout>
		</CardView>

</template>

<style scoped>
Label {
	font-weight: normal;
}
/* .tags {
	padding:5 10 5 10;
	margin-left: 5;
	margin-bottom: 5;
	border-radius: 5%;
	width: auto;
	font-size: 12;
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
} */
</style>
