const {
    habit_majelis
} = require("@/store/namespaces/index");

const {
  get_habit_majelis_payload,
  get_habit_majelis_payload_length,
  get_habit_majelis_payload_checked,

  set_habit_majelis_payload,
  set_habit_majelis_payload_checked,

  action_habit_majelis_payload
} = habit_majelis;

const JSON = require("@/data/majelis.json");
// console.log(majelisJSON);

const state = {
	payload:JSON
};

const getters = {
	[get_habit_majelis_payload]:(state) => {
		return state.payload;
	},
  [get_habit_majelis_payload_length]:(state) => {
		return state.payload.length;
	},
  [get_habit_majelis_payload_checked]:(state) => {
    const { payload } = state;

    let payload_checked = 0;

    for (var i = 0; i < payload.length; i++) {

      if(payload[i].selected) {
        payload_checked++;
      }

    }

    return payload_checked;

  }
};

const mutations = {
	[set_habit_majelis_payload]:(state) => {
		state.payload = data
	},
  [set_habit_majelis_payload_checked]:(state, data) => {

    const { payload } = state;

    for (var i = 0; i < payload.length; i++) {

      if(payload.code == payload[i].code) {
        payload[i].selected = data.value;
      }
    }
  }
};

const actions = {
	[action_habit_majelis_payload]: ({commit}, payload) => {
			commit('set_habit_majelis_payload', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
