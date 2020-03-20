const {
    profile_siswa_daftar
} = require("@/store/namespaces/index");

const {
  get_profile_siswa_daftar_payload,
  // get_profile_siswa_daftar_payload_search,

  set_profile_siswa_daftar_payload,
  // set_profile_siswa_daftar_payload_search,

  action_profile_siswa_daftar_payload,
	// action_profile_siswa_daftar_payload_search,
} = profile_siswa_daftar;

const JSON = require("@/data/profile/profile-siswa-daftar");
// console.log(JSON);

const state = {
	payload:JSON
};

const getters = {
	[get_profile_siswa_daftar_payload]:(state) => {
		return state.payload;
	},
};

const mutations = {
	[set_profile_siswa_daftar_payload]:(state, data) => {
		state.payload = data
	},
};

const actions = {
	[action_profile_siswa_daftar_payload]: ({commit}, payload) => {
			commit('set_profile_siswa_daftar_payload', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
