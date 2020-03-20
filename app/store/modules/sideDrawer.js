const state = {
  // this toggles the sidedrawer
  sideDrawer: false,

  bottomDrawer: false,
};

const mutations = {
  // always and only change vuex state through mutations.
  setSideDrawer(state, data) {
    state.sideDrawer = data;
  },

  setBottomDrawer(state, data) {
    state.bottomDrawer = data;
  },

};

const getters = {
  // the 'sideDrawer' getter will be available to listen to on the front end.
  // this is the change that we're watching in /app/mixins/sideDrawer.js
  sideDrawer: state => state.sideDrawer,

  bottomDrawer: state => state.bottomDrawer,

};

const actions = {
	// "asyncMyMode": ({commit}, data) => {
	// 	commit('setMyMode', data)
	// },
}

// export this module.
export default {
  state,
  mutations,
  getters,
  actions
};
