const {
    group_hasil_siswa
} = require("@/store/namespaces/index");

const {
  get_group_hasil_siswa_payload,

  set_group_hasil_siswa_payload,

  action_group_hasil_siswa_payload,

} = group_hasil_siswa;

const JSON = require("@/data/group/group-hasil-siswa");
// alert(123);
// console.log(JSON);

const state = {
	payload:JSON
};

const getters = {
	[get_group_hasil_siswa_payload]:(state) => {
		return state.payload;
	},

};

const mutations = {
	[set_group_hasil_siswa_payload]:(state, data) => {
		state.payload = data
	},

};

const actions = {
	[action_group_hasil_siswa_payload]: ({commit}, payload) => {
			commit('set_group_hasil_siswa_payload', payload);
	},

};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
