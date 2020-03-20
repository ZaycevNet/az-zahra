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

				<StackLayout
					marginTop="0"
					borderTopWidth="1"
					borderTopColor="#ebe7e6"
					padding="15">

					<Label
						#title
						fontSize="18"
						marginBottom="15"
						fontWeight="bold"
						text="The trouble with implementing SSR into a Laravel/Vue app"
						textWrap="true" />

					<Label
						#content
						fontSize="14"
						:text="content+'...'"
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

<script>
export default {
	data(){
		return {
			content: `This is an overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.`
		}
	}
}
</script>

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
