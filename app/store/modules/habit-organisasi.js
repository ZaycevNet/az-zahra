const {
    habit_organisasi
} = require("@/store/namespaces/index");

const {
  get_habit_organisasi_payload,
  get_habit_organisasi_payload_length,
  get_habit_organisasi_payload_checked,

  set_habit_organisasi_payload,
  set_habit_organisasi_payload_checked,

  action_habit_organisasi_payload
} = habit_organisasi;

const JSON = require("@/data/habit-organisasi.json");
// console.log(organisasiJSON);

const state = {
	payload:JSON
};

const getters = {
	[get_habit_organisasi_payload]:(state) => {
		return state.payload;
	},
  [get_habit_organisasi_payload_length]:(state) => {
		return state.payload.length;
	},
  [get_habit_organisasi_payload_checked]:(state) => {
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
	[set_habit_organisasi_payload]:(state) => {
		state.payload = data
	},
  [set_habit_organisasi_payload_checked]:(state, data) => {

    const { payload } = state;

    for (var i = 0; i < payload.length; i++) {

      if(payload.code == payload[i].code) {
        payload[i].selected = data.value;
      }
    }
  }
};

const actions = {
	[action_habit_organisasi_payload]: ({commit}, payload) => {
			commit('set_habit_organisasi_payload', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
