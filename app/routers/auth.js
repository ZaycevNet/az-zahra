import ViewAuth from "@/views/auth/view-auth";

// import ViewAuthGuru from "@/views/auth/view-auth-guru";
//
// import ViewAuthSiswa from "@/views/auth/view-auth-siswa";

export const auth = {
	'/view-auth': {
		component: ViewAuth,
		meta: { needsAuth: false }
	},


	// '/view-auth-guru': {
	// 	component: ViewAuthGuru,
	// 	meta: { needsAuth: false }
	// },


	// '/view-auth-siswa': {
	// 	component: ViewAuthSiswa,
	// 	meta: { needsAuth: false }
	// },
}
