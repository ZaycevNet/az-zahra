
import ViewMain from "@/views/main/view-main";
import ViewMainRender from "@/views/main/view-main-render";

export const main = {
	'/view-main': {
		component: ViewMain,
		meta: { needsAuth: false }
	},
	'/view-main-render': {
		component: ViewMainRender,
		meta: { needsAuth: false }
	},
}
