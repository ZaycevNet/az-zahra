const {
    habit_organisasi
} = require("@/store/namespaces/index");

const state = {
	payload_description:[
		{
			"id":"1",
			"code":"E-IT-1",
			"parent_id": "1",
			"parent_code":"E-SB-1",
			"description":"Berdoa sebelum beraktivitas X",
			"type":"0",
			"interval":"harian",
			"max_point":"5",
			"countable":"1",
			"selected":true
		},
		{
			"id":"2",
			"code":"E-IT-2",
			"parent_id": "1",
			"parent_code":"E-SB-1",
			"description":"Berdoa selesai beraktivitas",
			"type":"0",
			"interval":"harian",
			"max_point":"5",
			"countable":"1",
			"selected":false
		},
		{
			"id":"3",
			"code":"E-IT-3",
			"parent_id": "1",
			"parent_code":"E-SB-1",
			"description":"Tidak berbicara kasar dan kotor",
			"type":"0",
			"interval":"harian",
			"max_point":"5",
			"countable":"1",
			"selected":false
		},
		{
			"id":"4",
			"code":"E-IT-4",
			"parent_id": "1",
			"parent_code":"E-SB-1",
			"description":"Tidak memfitnah orang lain",
			"type":"0",
			"interval":"harian",
			"max_point":"5",
			"countable":"1",
			"selected":false
		},
		{
			"id":"5",
			"code":"E-IT-5",
			"parent_id": "1",
			"parent_code":"E-SB-1",
			"description":"Murah senyum dan ramah",
			"type":"0",
			"interval":"harian",
			"max_point":"5",
			"countable":"1",
			"selected":false
		},
		{
			"id":"6",
			"code":"E-IT-6",
			"parent_id": "1",
			"parent_code":"E-SB-1",
			"description":"Memberi salam ke orang lain",
			"type":"0",
			"interval":"harian",
			"max_point":"5",
			"countable":"1",
			"selected":false
		}
	]
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
