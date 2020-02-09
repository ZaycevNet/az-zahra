const {
    indicator
} = require("@/store/namespaces/index");

const {
  get_indicator_loading,
	set_indicator_loading,
	action_indicator_loading,

  get_accordion_first_open,
	set_accordion_first_open,
	action_accordion_first_open
} = indicator;

const state = {
		isLoading: false,
    // accordionFirstOpen: false
};

const getters = {
	[get_indicator_loading]:(state) => {
		return state.isLoading;
	},
  // [get_accordion_first_open]:(state) => {
	// 	return state.accordionFirstOpen;
	// },
};

const mutations = {
    [set_indicator_loading]: (state, data) => {
        state.isLoading = data
    },
    // [set_accordion_first_open]: (state, data) => {
    //     state.accordionFirstOpen = data
    // },
};

const actions = {
	[action_indicator_loading]: ({commit}, payload) => {
			commit('set_indicator_loading', payload);
	},
  // [action_accordion_first_open]: ({commit}, payload) => {
  //   alert("set_accordion_first_open: "+payload)
	// 		commit('set_accordion_first_open', payload);
	// },
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
