const {
    habit_zis_infaq
} = require("@/store/namespaces/index");

const {
  get_habit_zis_infaq_payload,
  set_habit_zis_infaq_payload,

  set_habit_zis_infaq_payload_add,
  set_habit_zis_infaq_payload_remove,
  set_habit_zis_infaq_payload_edit,

  action_habit_zis_infaq_payload,
  action_habit_zis_infaq_payload_add,
  action_habit_zis_infaq_payload_remove,
  action_habit_zis_infaq_payload_edit
} = habit_zis_infaq;

const JSON = require("@/data/habit-zis/habit-zis-infaq");
// console.log(zis_infaqJSON);

const state = {
	payload:JSON
};

const getters = {
	[get_habit_zis_infaq_payload]:(state) => {
		return state.payload;
	},
};

const mutations = {
	[set_habit_zis_infaq_payload]:(state, data) => {
		state.payload = data
	},
  [set_habit_zis_infaq_payload_add]:(state, data) => {
		state.payload.push(data)
	},
  [set_habit_zis_infaq_payload_remove]: (state, data) => {
      state.splice(data.index, 1);
  },
  [set_habit_zis_infaq_payload_edit]:(state, data) => {

    // "id":"1",
		// "code":"729ca0eb-2422-388e-95bb-120ffea771e1",
		// "initial": "HABIT-zis_infaq",

		// "tempat":"Rumah",
		// "waktu":"Siang",
		// "topik":"Pengetahuan",
		// "durasi":0,
		// "rangkuman":"Rumah",

		// "type":"0",
		// "interval":"bulanan",
		// "max_point":"5",
		// "countable":"1",
		// "selected":true

    state[data.index].tempat = data.tempat;
    state[data.index].waktu = data.waktu;
    state[data.index].topik = data.topik;
    state[data.index].durasi = data.durasi;
    state[data.index].rangkuman = data.rangkuman;

  }
};

const actions = {
	[action_habit_zis_infaq_payload]: ({commit}, payload) => {
			commit('action_habit_zis_infaq_payload', payload);
	},
  [action_habit_zis_infaq_payload_add]: ({commit}, payload) => {
			commit('action_habit_zis_infaq_payload_add', payload);
	},
  [action_habit_zis_infaq_payload_remove]: ({commit}, payload) => {
      commit('action_habit_zis_infaq_payload_remove', payload);
  },
  [action_habit_zis_infaq_payload_edit]: ({commit}, payload) => {
      commit('action_habit_zis_infaq_payload_edit', payload);
  },
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
