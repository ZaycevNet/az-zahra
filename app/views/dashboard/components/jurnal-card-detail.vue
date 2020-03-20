<template>


				<StackLayout @loaded="getSize"
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
						text="This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout. This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout.This is an 123 overview of the most common usage of FlexboxLayout. For more information about the available properties, methods, or events, head over to the complete API documentation for FlexboxLayout. XXXX"
						textWrap="true" />
				</StackLayout>


</template>

<script>

export default {
		methods: {
			getSize(args) {
	        setTimeout(() => {
	            let stack= args.object;
	            var stackSize = args.object.getActualSize();
	            var stackWidth = stackSize.width;
	            var stackHeight = stackSize.height;
	            console.log("stackWidth: " + stackWidth);
	            console.log("stackHeight: " + stackHeight);
	            // this.testWidth = stackWidth;

							this.$emit("newHeight", stackHeight + 130)
	        }, 200);
	    }
		},
};

</script>

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
