const {
    syarat_ketentuan
} = require("@/store/namespaces/index");

const {

  get_syarat_ketentuan_payload,
  set_syarat_ketentuan_payload,
  action_syarat_ketentuan_payload

} = syarat_ketentuan;

const JSON = require("@/data/syarat-ketentuan");
// console.log(majelisJSON);

const state = {
	payload:JSON
};

const getters = {
	[get_syarat_ketentuan_payload]:(state) => {
		return state.payload;
	},
};

const mutations = {
	[set_syarat_ketentuan_payload]:(state, data) => {
		state.payload = data
	},
};

const actions = {
	[action_syarat_ketentuan_payload]: ({commit}, payload) => {
			commit('set_syarat_ketentuan_payload', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
