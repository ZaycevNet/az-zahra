const {
    profile_siswa
} = require("@/store/namespaces/index");

const {
  get_profile_siswa_payload,
  get_profile_siswa_is_edit,

  set_profile_siswa_payload,
  set_profile_siswa_is_edit,

  set_profile_siswa_payload_add,
  // set_profile_siswa_payload_remove,
  set_profile_siswa_payload_edit,

  set_profile_siswa_payload_orangtua_add,
  // set_profile_siswa_payload_orangtua_remove,
  set_profile_siswa_payload_orangtua_edit,

  set_profile_siswa_payload_biodata_add,
  // set_profile_siswa_payload_biodata_remove,
  set_profile_siswa_payload_biodata_edit,

  set_profile_siswa_payload_group_add,
  // set_profile_siswa_payload_group_remove,
  set_profile_siswa_payload_group_edit,

  action_profile_siswa_payload,
  action_profile_siswa_is_edit,

  action_profile_siswa_payload_add,
  // action_profile_siswa_payload_remove,
  action_profile_siswa_payload_edit,

  action_profile_siswa_payload_orangtua_add,
  // action_profile_siswa_payload_orangtua_remove,
  action_profile_siswa_payload_orangtua_edit,

  action_profile_siswa_payload_biodata_add,
  // action_profile_siswa_payload_biodata_remove,
  action_profile_siswa_payload_biodata_edit,

  action_profile_siswa_payload_group_add,
  // action_profile_siswa_payload_group_remove,
  action_profile_siswa_payload_group_edit,

} = profile_siswa;

const JSON = require("@/data/profile/profile-siswa");
// console.log(zis_infaqJSON);

const state = {
  isEdit: false,
	payload:JSON,
};

const getters = {
	[get_profile_siswa_payload]:(state) => {
		return state.payload;
	},
  [get_profile_siswa_is_edit]:(state) => {
		return state.isEdit;
	},
};

const mutations = {
	[set_profile_siswa_payload]:(state, data) => {
		state.payload = data
	},
  [set_profile_siswa_is_edit]:(state, data) => {
		state.isEdit = data
	},
  [set_profile_siswa_payload_add]:(state, data) => {
		state.payload.push(data)
	},
  // [set_profile_siswa_payload_remove]: (state, data) => {
  //   state.splice(data.index, 1);
  // },
  [set_profile_siswa_payload_edit]:(state, data) => {
    // state.jenis = data.jenis;
    state.username = data.username;
    state.password = data.password;

  },

  [set_profile_siswa_payload_orangtua_add]:(state, data) => {
    for (var i = 0; i < state.payload.payload_orangtua.length; i++) {
      if(state.payload.payload_orangtua[i].code != data.code) {
        state.payload.payload_orangtua[i].push(data);
      }
    }
	},
  [set_profile_siswa_payload_orangtua_edit]:(state, data) => {
    for (var i = 0; i < state.payload.payload_orangtua.length; i++) {
      if(state.payload.payload_orangtua[i].code == data.code) {
        new Promise(resolve => {
          resolve(state.payload.payload_orangtua.splice(i,1));
        }).then(result => {
          state.payload.payload_orangtua[i].push(data);
        })
      }
    }
  },

  [set_profile_siswa_payload_biodata_add]:(state, data) => {
    state.payload.payload_biodata = data;
	},
  [set_profile_siswa_payload_biodata_edit]:(state, data) => {
    state.payload.payload_biodata = data;
  },

  [set_profile_siswa_payload_group_add]:(state, data) => {
    for (var i = 0; i < state.payload.payload_group.length; i++) {
      if(state.payload.payload_group[i].code != data.code) {
        state.payload.payload_group[i].push(data);
      }
    }
	},
  [set_profile_siswa_payload_group_edit]:(state, data) => {
    for (var i = 0; i < state.payload.payload_group.length; i++) {
      if(state.payload.payload_group[i].code == data.code) {
        new Promise(resolve => {
          resolve(state.payload.payload_group.splice(i,1));
        }).then(result => {
          state.payload.payload_group[i].push(data);
        })
      }
    }
  },

};

const actions = {
	[action_profile_siswa_payload]: ({commit}, payload) => {
			commit('set_profile_siswa_payload', payload);
	},
  [action_profile_siswa_is_edit]: ({commit}, payload) => {
			commit('set_profile_siswa_is_edit', payload);
	},
  [action_profile_siswa_payload_add]: ({commit}, payload) => {
			commit('set_profile_siswa_payload_add', payload);
	},
  [action_profile_siswa_payload_edit]: ({commit}, payload) => {
      commit('set_profile_siswa_payload_edit', payload);
  },
  [action_profile_siswa_payload_orangtua_add]: ({commit}, payload) => {
      commit('set_profile_siswa_payload_orangtua_add', payload);
  },

	[action_profile_siswa_payload_orangtua_edit]: ({commit}, payload) => {
			commit('set_profile_siswa_payload_orangtua_edit', payload);
	},
  [action_profile_siswa_payload_biodata_add]: ({commit}, payload) => {
			commit('set_profile_siswa_payload_biodata_add', payload);
	},
  [action_profile_siswa_payload_biodata_edit]: ({commit}, payload) => {
			commit('set_profile_siswa_payload_biodata_edit', payload);
	},
  [action_profile_siswa_payload_group_add]: ({commit}, payload) => {
			commit('set_profile_siswa_payload_group_add', payload);
	},
  [action_profile_siswa_payload_group_edit]: ({commit}, payload) => {
			commit('set_profile_siswa_payload_group_edit', payload);
	},

};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
