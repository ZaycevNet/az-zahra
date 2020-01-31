const {
    habit_adab
} = require("@/store/namespaces/index");

// const {
//     config: {
//         static: {
//             columns,
//             selectedColumns,
//             displayColumns,
//         },
//         dynamic: {
//             separator,
//             visibleColumns,
//             selected,
//             loading,
//         }
//     },
//     data: {
//         pagination,
//         payload: {
//             data,
//             replace,
//             last_page,
//             current_page,
//         },
//     },
//     action,
// } = karyawan_biodata

function capitalize(str) {
    if (str == undefined)
        return str
    if (str == null)
        return str

    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
}


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
    // [current_page]: (state) => {
    //     return state.data.payload.current_page
    // },
};

const mutations = {
    // [separator]: (state, data) => {
    //     state.config.dynamic.separator = data
    // },

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

    // [replace]: (state, params) => {
    //     // me-replace data di payload.data[] setelah berhasil update oleh axios
    //     const data = state.data.payload.data;
    //     if (data.length > 0) {
    //         for (let i = 0; i < data.length; i++) {
    //             const element = data[i];
    //             if (params.uuid == element.uuid) {
    //                 data[i] = params;
    //                 // state.data.payload.data[i] = params;
    //             }
    //         }
    //     }
    // },
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
