
import ViewJurnal from "@/views/jurnal/view-jurnal";

export const group = {
	'/view-jurnal': {
		component: ViewJurnal,
		meta: { needsAuth: false }
	},

}
