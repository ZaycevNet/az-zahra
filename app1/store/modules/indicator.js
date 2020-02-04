const {
    indicator
} = require("@/store/namespaces/index");

const {
  get_indicator_loading,
	set_indicator_loading,
	action_indicator_loading
} = indicator;

const state = {
		isLoading: false,
};

const getters = {
	get_indicator_loading(state) {
		return state.isLoading;
	},
};

const mutations = {
    set_indicator_loading: (state, data) => {
        state.isLoading = data
    },
};

const actions = {
	action_indicator_loading: ({commit}, payload) => {
			commit('set_indicator_loading', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
