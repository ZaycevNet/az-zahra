const state = {
	// menunggu rendering UI, tidak boleh kembali
	waitingUI: false,
};


const getters = {
	// current Route
  waitingUI(state){
	  return state.waitingUI;
  },

};

const mutations = {
	// current Route
	waitingUI(state, data) {
		state.waitingUI = data;
	},

};

const actions = {
	"waitingUI": ({commit}, data) => {
		commit('waitingUI', data)
	},
}

// export this module.
export default {
  state,
  mutations,
  getters,
  actions
};
