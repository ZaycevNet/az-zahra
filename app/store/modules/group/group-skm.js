const {
    group_skm
} = require("@/store/namespaces/index");

const {
  get_group_skm_payload,
  // get_group_skm_payload_habit,

  set_group_skm_payload,
  set_group_skm_payload_habit,

  action_group_skm_payload,
	action_group_skm_payload_habit,
} = group_skm;

const JSON = require("@/data/group/group-skm");
// console.log(JSON);

const state = {
	payload:JSON
};

const getters = {
	[get_group_skm_payload]:(state) => {
		return state.payload;
	},
  // [get_group_skm_payload_habit]:(state) => (data) => {
  //   console.log(state.payload[data.toString()])
  //   // const { this[data] } = state.payload
  //   // return state.payload.data;
  // }
};

const mutations = {
	[set_group_skm_payload]:(state, data) => {
		state.payload = data
	},
  [set_group_skm_payload_habit]:(state, data) => {

		const { payload } = state;

    payload[data.key].skm  = data.skm
    payload[data.key].keterangan  = data.keterangan

  }
};

const actions = {
	[action_group_skm_payload]: ({commit}, payload) => {
			commit('set_group_skm_payload', payload);
	},
	[action_group_skm_payload_habit]: ({commit}, payload) => {
			commit('set_group_skm_payload_habit', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
