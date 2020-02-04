const {
    habit_adab_diri_sendiri
} = require("@/store/namespaces/index");

const {
  get_habit_adab_diri_sendiri_payload,
  get_habit_adab_diri_sendiri_payload_length,
  get_habit_adab_diri_sendiri_payload_checked,

  set_habit_adab_diri_sendiri_payload,
  set_habit_adab_diri_sendiri_payload_checked,

  action_habit_adab_diri_sendiri_payload
} = habit_adab_diri_sendiri;

const JSON = require("@/data/adab-diri-sendiri.json");
// console.log(adabDiriSendiriJSON);

const state = {
	payload:JSON
};

const getters = {
	[get_habit_adab_diri_sendiri_payload]:(state) => {
		return state.payload;
	},
  [get_habit_adab_diri_sendiri_payload_length]:(state) => (data) => {
		return state.payload[data].payload_description.length;
	},
  [get_habit_adab_diri_sendiri_payload_checked]:(state) => {
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
	[set_habit_adab_diri_sendiri_payload]:(state) => {
		state.payload = data
	},
  [set_habit_adab_diri_sendiri_payload_checked]:(state, data) => {

    const { payload } = state;

    for (var i = 0; i < payload.length; i++) {

      if(payload.code == payload[i].code) {
        payload[i].selected = data.value;
      }
    }
  }
};

const actions = {
	[action_habit_adab_diri_sendiri_payload]: ({commit}, payload) => {
			commit('set_habit_adab_diri_sendiri_payload', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
