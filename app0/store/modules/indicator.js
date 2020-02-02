// const {
//     habit_adab
// } = require("@/store/namespaces/index");

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
	set_indicator_loading: ({commit}, payload) => {
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
