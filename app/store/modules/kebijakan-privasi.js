const {
    kebijakan_privasi
} = require("@/store/namespaces/index");

const {

  get_kebijakan_privasi_payload,
  set_kebijakan_privasi_payload,
  action_kebijakan_privasi_payload

} = kebijakan_privasi;

const JSON = require("@/data/kebijakan-privasi");
// console.log(majelisJSON);

const state = {
	payload:JSON
};

const getters = {
	[get_kebijakan_privasi_payload]:(state) => {
		return state.payload;
	},
};

const mutations = {
	[set_kebijakan_privasi_payload]:(state, data) => {
		state.payload = data
	},
};

const actions = {
	[action_kebijakan_privasi_payload]: ({commit}, payload) => {
			commit('set_kebijakan_privasi_payload', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
