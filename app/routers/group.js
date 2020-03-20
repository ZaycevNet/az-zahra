
import ViewGroup from "@/views/group/view-group";
import ViewGroupSKM from "@/views/group/view-group-skm";
import ViewGroupAnggota from "@/views/group/view-group-anggota";
import ViewGroupHasil from "@/views/group/view-group-hasil";
import ViewGroupHasilDetail from "@/views/group/view-group-hasil-detail";

export const group = {

	'/view-group': {
		component: ViewGroup,
		meta: { needsAuth: false }
	},

	'/view-group-skm': {
		component: ViewGroupSKM,
		meta: { needsAuth: false }
	},

	'/view-group-anggota': {
		component: ViewGroupAnggota,
		meta: { needsAuth: false }
	},

	'/view-group-hasil': {
		component: ViewGroupHasil,
		meta: { needsAuth: false }
	},

	'/view-group-hasil-detail': {
		component: ViewGroupHasilDetail,
		meta: { needsAuth: false }
	},
}
