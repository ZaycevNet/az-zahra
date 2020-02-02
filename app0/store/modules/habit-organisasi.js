const {
    habit_organisasi
} = require("@/store/namespaces/index");

const organisasiJSON = require("@/data/organisasi.json");
console.log(organisasiJSON);

const state = {
	payload_description:organisasiJSON
};

const getters = {
	get_habit_organisasi_payload_description(state) {
		return state.payload_description;
	},
  get_habit_organisasi_payload_description_length(state) {
		return state.payload_description.length;
	},
  get_habit_organisasi_payload_description_checked(state) {
    const { payload_description } = state;

    let payload_description_checked = 0;

    for (var i = 0; i < payload_description.length; i++) {

      if(payload_description[i].selected) {
        payload_description_checked++;
      }

    }

    return payload_description_checked;

  }
};

const mutations = {
	set_habit_organisasi_payload_description(state) {
		state.payload_description = data
	},
  set_habit_organisasi_payload_description_checked(state, payload) {

    const { payload_description } = state;

    for (var i = 0; i < payload_description.length; i++) {

      if(payload.code == payload_description[i].code) {
        payload_description[i].selected = payload.value;
      }
    }
  }
};

const actions = {
	action_habit_organisasi_payload_description: ({commit}, payload) => {
			commit('set_habit_organisasi_payload_description', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
