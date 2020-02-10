const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_puasa_khusus
} = require("@/store/namespaces/index");

const {
  get_habit_puasa_khusus_payload,
  get_habit_puasa_khusus_payload_length,

  set_habit_puasa_khusus_payload,
  set_habit_puasa_khusus_payload_add,
  set_habit_puasa_khusus_payload_remove,
  set_habit_puasa_khusus_payload_edit,

  action_habit_puasa_khusus_payload,
  action_habit_puasa_khusus_payload_add,
  action_habit_puasa_khusus_payload_remove,
  action_habit_puasa_khusus_payload_edit
} = habit_puasa_khusus;


const map_habit_puasa_khusus = {
    computed: {
        ...mapGetters({
          get_habit_puasa_khusus_payload,
          get_habit_puasa_khusus_payload_length,
        }),
    },
    methods: {
        ...mapActions({
        	action_habit_puasa_khusus_payload,
          action_habit_puasa_khusus_payload_add,
          action_habit_puasa_khusus_payload_remove,
          action_habit_puasa_khusus_payload_edit
        }),
        ...mapMutations({
          set_habit_puasa_khusus_payload,
          set_habit_puasa_khusus_payload_add,
          set_habit_puasa_khusus_payload_remove,
          set_habit_puasa_khusus_payload_edit,
        })
    },
}

export default map_habit_puasa_khusus
