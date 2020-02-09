const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_zis_sedekah
} = require("@/store/namespaces/index");

const {
  get_habit_zis_sedekah_payload,
  get_habit_zis_sedekah_payload_length,

  set_habit_zis_sedekah_payload,
  set_habit_zis_sedekah_payload_add,
  set_habit_zis_sedekah_payload_remove,
  set_habit_zis_sedekah_payload_edit,

  action_habit_zis_sedekah_payload,
  action_habit_zis_sedekah_payload_add,
  action_habit_zis_sedekah_payload_remove,
  action_habit_zis_sedekah_payload_edit
} = habit_zis_sedekah;


const map_habit_zis_sedekah = {
    computed: {
        ...mapGetters({
          get_habit_zis_sedekah_payload,
          get_habit_zis_sedekah_payload_length,
        }),
    },
    methods: {
        ...mapActions({
        	action_habit_zis_sedekah_payload,
          action_habit_zis_sedekah_payload_add,
          action_habit_zis_sedekah_payload_remove,
          action_habit_zis_sedekah_payload_edit
        }),
        ...mapMutations({
          set_habit_zis_sedekah_payload,
          set_habit_zis_sedekah_payload_add,
          set_habit_zis_sedekah_payload_remove,
          set_habit_zis_sedekah_payload_edit,
        })
    },
}

export default map_habit_zis_sedekah
