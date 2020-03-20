const {
    onboarding
} = require("@/store/namespaces/index");

const {
  get_onboarding,
	set_onboarding,
	action_onboarding,
} = onboarding;

const JSON = require("@/data/onboarding");

const state = {
	payload:JSON
};

const getters = {
	[get_onboarding]:(state) => {
		return state.payload;
	},
};

const mutations = {
    [set_onboarding]: (state, data) => {
        state.payload = data
    },
};

const actions = {
	[action_onboarding]: ({commit}, payload) => {
			commit('set_onboarding', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
