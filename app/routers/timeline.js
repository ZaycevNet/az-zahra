
import ViewTimeline from "@/views/timeline/view-timeline";

export const timeline = {
	'/view-timeline': {
		component: ViewTimeline,
		meta: { needsAuth: false }
	},
}
