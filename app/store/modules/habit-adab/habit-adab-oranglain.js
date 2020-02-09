const {
    habit_adab_oranglain
} = require("@/store/namespaces/index");

const {
  get_habit_adab_oranglain_payload,
  get_habit_adab_oranglain_payload_length,
  get_habit_adab_oranglain_payload_checked,

  set_habit_adab_oranglain_payload,
  set_habit_adab_oranglain_payload_checked,

  action_habit_adab_oranglain_payload
} = habit_adab_oranglain;

const JSON = require("@/data/adab-oranglain.js");
// console.log(adabDiriSendiriJSON);

const state = {
	payload:JSON
};

const getters = {
	[get_habit_adab_oranglain_payload]:(state) => {
		return state.payload;
	},
  [get_habit_adab_oranglain_payload_length]:(state) => (data) => {
		return state.payload[data].payload_description.length;
	},
  [get_habit_adab_oranglain_payload_checked]:(state) => (data) => {
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
	[set_habit_adab_oranglain_payload]:(state) => {
		state.payload = data
	},
  [set_habit_adab_oranglain_payload_checked]:(state, data) => {

    const { payload } = state;

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
	[action_habit_adab_oranglain_payload]: ({commit}, payload) => {
			commit('set_habit_adab_oranglain_payload', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
