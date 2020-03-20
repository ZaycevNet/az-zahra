
import ViewProfileGuru from "@/views/profile/view-profile-guru";
import ViewProfileSiswa from "@/views/profile/view-profile-siswa";

import ViewProfileGuruDaftar from "@/views/profile/view-profile-guru-daftar";
import ViewProfileSiswaDaftar from "@/views/profile/view-profile-siswa-daftar";

export const profile = {
	'/view-profile-guru': {
		component: ViewProfileGuru,
		meta: { needsAuth: false }
	},
	'/view-profile-siswa': {
		component: ViewProfileSiswa,
		meta: { needsAuth: false }
	},

	'/view-profile-guru-daftar': {
		component: ViewProfileGuruDaftar,
		meta: { needsAuth: false }
	},
	'/view-profile-siswa-daftar': {
		component: ViewProfileSiswaDaftar,
		meta: { needsAuth: false }
	},
}
