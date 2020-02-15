
import ViewProfileGuru from "@/views/profile/view-profile-guru";

import ViewProfileSiswa from "@/views/profile/view-profile-siswa";

export const profile = {
	'/view-profile-guru': {
		component: ViewProfileGuru,
		meta: { needsAuth: false }
	},


	'/view-profile-siswa': {
		component: ViewProfileSiswa,
		meta: { needsAuth: false }
	},
}
