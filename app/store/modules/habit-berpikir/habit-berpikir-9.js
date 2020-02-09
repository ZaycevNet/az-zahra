const {
    habit_berpikir_kesembilan
} = require("@/store/namespaces/index");

const {
  get_habit_berpikir_kesembilan_payload,
  get_habit_berpikir_kesembilan_payload_length,
  get_habit_berpikir_kesembilan_payload_checked,

  set_habit_berpikir_kesembilan_payload,
  set_habit_berpikir_kesembilan_payload_checked,

  action_habit_berpikir_kesembilan_payload
} = habit_berpikir_kesembilan;

const JSON = require("@/data/habit-berpikir/berpikir-kesembilan.js");
// console.log(JSON);

const state = {
	payload:JSON
};

const getters = {
	[get_habit_berpikir_kesembilan_payload]:(state) => {
		return state.payload;
	},
  [get_habit_berpikir_kesembilan_payload_length]:(state) => (data) => {
		return state.payload[data].payload_description.length;
	},
  [get_habit_berpikir_kesembilan_payload_checked]:(state) => (data) => {
    const { payload } = state;

    let payload_checked = 0;

    for (var i = 0; i < payload.length; i++) {

        if(i == data) {
          for (var j = 0; j < payload[i].payload_description.length; j++) {

            if(payload[i].payload_description[j].selected) {
              payload_checked++;
            }
          }
        }

    }

    return payload_checked;

  }
};

const mutations = {
	[set_habit_berpikir_kesembilan_payload]:(state) => {
		state.payload = data
	},
  [set_habit_berpikir_kesembilan_payload_checked]:(state, data) => {

    const { payload } = state;

    console.log(data.code)

    for (var i = 0; i < payload.length; i++) {

        for (var j = 0; j < payload[i].payload_description.length; j++) {

          if(data.code == payload[i].payload_description[j].code) {
            payload[i].payload_description[j].selected = data.value;
          }
        }

    }
  }
};

const actions = {
	[action_habit_berpikir_kesembilan_payload]: ({commit}, payload) => {
			commit('set_habit_berpikir_kesembilan_payload', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
