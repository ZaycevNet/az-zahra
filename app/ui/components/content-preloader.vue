<style scoped>
ListView {
    separator-color: transparent;
}
</style>

<template>
	<StackLayout height="500" margin="0 0 0 0" padding="10 0">
		<ListView class="list-group" for="item in [1,1,1,1]" backgroundColor="white" opacity="0.6" style="height:100%">
			<v-template>
				<FlexboxLayout flexDirection="row" opacity="0.7">
					<GridLayout rows="*, *, 2*" columns="100, *, 10" backgroundColor="rgba(255,255,255,0.2)" height="100" margin="2.5 15" padding="10 0" borderRadius="10">
						<StackLayout row="0" rowSpan="3" col="0" backgroundColor="rgba(0,0,0,0.25)" height="80" width="80" verticalAlignment="center" horizontalAlignment="center" borderRadius="5"></StackLayout>
						<StackLayout row="0" col="1" backgroundColor="rgba(0,0,0,0.25)" height="14" width="20%" verticalAlignment="center" horizontalAlignment="left" borderRadius="5"></StackLayout>
						<StackLayout row="1" col="1" backgroundColor="rgba(0,0,0,0.25)" height="12" width="40%" verticalAlignment="center" horizontalAlignment="left" borderRadius="5"></StackLayout>
						<StackLayout row="2" col="1" backgroundColor="rgba(0,0,0,0.25)" height="40" width="100%" verticalAlignment="center" horizontalAlignment="left" borderRadius="5"></StackLayout>
					</GridLayout>
				</FlexboxLayout>
	  </v-template>
		</ListView>
	</StackLayout>
</template>
