
import ViewJurnalDetail from "@/views/jurnal/view-jurnal-detail";
import ViewJurnalMainContent from "@/views/jurnal/view-jurnal-main-content";
import ViewJurnal from "@/views/jurnal/view-jurnal";

export const jurnal = {
	'/view-jurnal': {
		component: ViewJurnal,
		meta: { needsAuth: false }
	},

	'/view-jurnal-detail': {
		component: ViewJurnalDetail,
		meta: { needsAuth: false }
	},

	'/view-jurnal-main-content': {
		component: ViewJurnalMainContent,
		meta: { needsAuth: false }
	},

}
