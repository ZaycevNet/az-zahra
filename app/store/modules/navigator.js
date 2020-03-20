const state = {
  current_path: "",
};

const mutations = {
  setCurrentPath(state, data) {
    state.current_path = data;
  },
};

const getters = {
  getCurrentPath: state => state.current_path,
};

const actions = {
	"setCurrentPath": ({commit}, data) => {
		commit('setCurrentPath', data)
	},
}

// export this module.
export default {
  state,
  mutations,
  getters,
  actions
};
