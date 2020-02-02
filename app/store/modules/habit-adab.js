const {
    habit_adab
} = require("@/store/namespaces/index");

const dataAdab = require("@/data/adab.json");
console.log(dataAdab);

const state = {
    data: {
			items: dataAdab,
    }
};

const getters = {
  get_habit_adab(state) {
    return state.data.items.habit;
  },
	items_payload_habit(state) {
		return state.data.items;
	},
  get_item_only_checked:(state) => (payload) => {
    const { payload_title } = state.data.items;

    let payload_description_checked = 0;

    for (var i = 0; i < payload_title.length; i++) {

      let payload_subtitle = payload_title[i].payload_subtitle;

      for (var j = 0; j < payload_subtitle.length; j++) {

          if(payload_subtitle[j].subtitle == payload) {

            let payload_description = payload_subtitle[j].payload_description;

            for (var k = 0; k < payload_description.length; k++) {

              if(payload_description[k].selected) {
                payload_description_checked++;
              }
            }
          }
      }

    }

    return payload_description_checked;

  }
};

const mutations = {
    set_item_checked_counter(state, payload) {
      const { payload_title } = state.data.items;

      let payload_description_checked = 0;

      for (var i = 0; i < payload_title.length; i++) {

        let payload_subtitle = payload_title[i].payload_subtitle;

        for (var j = 0; j < payload_subtitle.length; j++) {

            let payload_description = payload_subtitle[j].payload_description;

            for (var k = 0; k < payload_description.length; k++) {

              if(payload.code == payload_description[k].code) {
                payload_description[k].selected = payload.value;
              }
            }
        }

      }

    }

};

const actions = {
    // [action]: ({
    //     commit
    // }, payload) => {
		//
    //     switch (payload.type) {
    //         case 'separator':
    //             commit(separator, payload.data);
    //             break;
    //     }
    // },

};

// export this module.
export default {
    state,
    mutations,
    getters,
    actions,
}
