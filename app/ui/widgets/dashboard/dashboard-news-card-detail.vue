<template>
				<StackLayout ref="Container" padding="0" @loaded="onLoaded_Rendering(0, 300)">

					<!-- <FlexboxLayout flexWrap="wrap" paddingLeft="5">
					  <Label text="Laporan" class="tags type" />
					  <Label text="Samarinda" class="tags city" />
					  <Label text="Sempaja" class="tags location" />
					  <Label text="Kriminal" class="tags category" />
					</FlexboxLayout> -->

					<Label
						paddingLeft="10"
						paddingTop="10"
						paddingBottom="5"
						text="This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout. This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout. XXXX"
						textWrap="true" />

						<StackLayout marginTop="5" backgroundColor='white' v-if="!rendering0">
							<DashboardNewsCardDetailComments @loaded="getSize" />
						</StackLayout>

				</StackLayout>


</template>

<script>
const delayrendering = require("@/mixins/delayrendering");

export default {
    mixins: [delayrendering],
		methods: {
			getSize(args) {
	        setTimeout(() => {
	            // let stack= args.object;
	            // var stackSize = args.object.getActualSize();
	            // var stackWidth = stackSize.width;
	            // var stackHeight = stackSize.height;
	            // console.log("stackWidth: " + stackWidth);
	            // console.log("stackHeight: " + stackHeight);

	            // this.testWidth = stackWidth;

							this.$emit("newHeight", this.$refs.Container.nativeView.getActualSize().height + 110)
	        }, 200);
	    }
		},
};

</script>

<style scoped>
.tags {
	padding:5 10 5 10;
	margin-left: 5;
	margin-bottom: 5;
	border-radius: 5%;
	width: auto;
	font-size: 12;
	border-width: 1;
}

/* .city {
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
