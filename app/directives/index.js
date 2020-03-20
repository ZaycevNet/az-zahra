import Vue from 'nativescript-vue';
import {
		Color
} from "color";

Vue.directive("fade", {
		inserted(el, binding, vnode) {
			el.nativeView.opacity = 0;
			el.nativeView.translateY = 100;

			const waiting = binding.value == undefined || !binding.value ? 0 : binding.value

			setTimeout(() => {
				// console.log(el.nativeView.backgroundColor = new Color("#28BAAA"))
				el.nativeView.animate({
								translate: {
										x: 0,
										y: 0,
								},
								opacity: 1,
								duration: 500,
						})
						.then(() => {}, () => {});
				}, binding.value)
		},
		update(el, binding, vnode) {
			// setTimeout(() => {
			// 	el.nativeView.animate({
		  //       // translate: { x: 100, y: 100 },
			// 			opacity: 1,
		  //       duration: 3000
		  //   });
			// }, 250)
				// console.log(el.nativeView.backgroundColor = new Color("#28BAAA"))
				// el.nativeView.animate({
				// 				translate: {
				// 						x: 0,
				// 						y: 100
				// 				},
				// 				opacity: 1
				// 		})
				// 		.then(() => {}, () => {});
		}
});
