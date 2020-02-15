
import ViewProfileGuruBiodata from "@/views/profile/view-profile-guru-biodata";

import ViewProfileSiswa from "@/views/profile/view-profile-siswa";

export const profile = {
	'/view-profile-guru-biodata': {
		component: ViewProfileGuruBiodata,
		meta: { needsAuth: false }
	},


	'/view-profile-siswa': {
		component: ViewProfileSiswa,
		meta: { needsAuth: false }
	},
}
