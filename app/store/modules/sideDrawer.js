const state = {
	// to control activityBackPressed
	activityBackPressed: "",
	gotoRoute: false,

  // this toggles the sidedrawer
  sideDrawer: false,

  myVideo: '',
  myMode: '', // gambar
};

const mutations = {
	// current Route
	activityBackPressed(state, data) {
		state.activityBackPressed = data;
	},
	// apakah overlay modal?
	gotoRoute(state, data) {
		state.gotoRoute = data;
	},

  // always and only change vuex state through mutations.
  setSideDrawer(state, data) {
    state.sideDrawer = data;
  },
  setMyVideo(state, data) {
    state.myVideo = data
  },
  setMyMode(state, data) {
    return state.myMode = data
  }
};

const getters = {
	// current Route
  activityBackPressed(state){
	  return state.activityBackPressed;
  },
	// apakah overlay modal?
	gotoRoute(state) {
		return state.gotoRoute;
	},

  // the 'sideDrawer' getter will be available to listen to on the front end.
  // this is the change that we're watching in /app/mixins/sideDrawer.js
  sideDrawer: state => state.sideDrawer,
  myVideo(state){
	  return state.myVideo;
  },
  myMode(state){
	  return state.myMode;
  }
};

const actions = {
	"asyncMyMode": ({commit}, data) => {
		commit('setMyMode', data)
	},

	"gotoRoute": ({commit}, data) => {
		commit('gotoRoute', data)
	}

}

// export this module.
export default {
  state,
  mutations,
  getters,
  actions
};
