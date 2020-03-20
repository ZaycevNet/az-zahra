const {
    group_master
} = require("@/store/namespaces/index");

const {
  get_group_master_payload,
  get_group_master_payload_length,
  get_group_master_payload_aktif,

  set_group_master_payload,
  set_group_master_payload_aktif,

  action_group_master_payload,
	action_group_master_payload_aktif,
} = group_master;

const JSON = require("@/data/group/group-master");
// console.log(JSON);

const state = {
	payload:JSON
};

const getters = {
	[get_group_master_payload]:(state) => {
		return state.payload;
	},
  [get_group_master_payload_length]:(state) => {
		return state.payload.length;
	},
  [get_group_master_payload_aktif]:(state) => (data) => {
    const { payload } = state;

    let array = [];

    for (var i = 0; i < payload.length; i++) {
        if(payload[i].aktif == data) {
					array.push(payload[i]);
        }
    }

    return array;
  }
};

const mutations = {
	[set_group_master_payload]:(state, data) => {
		state.payload = data
	},
  [set_group_master_payload_aktif]:(state, data) => {

		const { payload } = state;

    for (var i = 0; i < payload.length; i++) {
        if(data.code == payload[i].code) {
					payload[i].aktif = data.value;
        }
    }
  }
};

const actions = {
	[action_group_master_payload]: ({commit}, payload) => {
			commit('set_group_master_payload', payload);
	},
	[action_group_master_payload_aktif]: ({commit}, payload) => {
			commit('set_group_master_payload_aktif', payload);
	},
};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
