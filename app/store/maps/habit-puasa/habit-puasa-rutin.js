const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_puasa_rutin
} = require("@/store/namespaces/index");

const {
  get_habit_puasa_rutin_payload,
  get_habit_puasa_rutin_payload_length,

  set_habit_puasa_rutin_payload,
  set_habit_puasa_rutin_payload_add,
  set_habit_puasa_rutin_payload_remove,
  set_habit_puasa_rutin_payload_edit,

  action_habit_puasa_rutin_payload,
  action_habit_puasa_rutin_payload_add,
  action_habit_puasa_rutin_payload_remove,
  action_habit_puasa_rutin_payload_edit
} = habit_puasa_rutin;


const map_habit_puasa_rutin = {
    computed: {
        ...mapGetters({
          get_habit_puasa_rutin_payload,
          get_habit_puasa_rutin_payload_length,
        }),
    },
    methods: {
        ...mapActions({
        	action_habit_puasa_rutin_payload,
          action_habit_puasa_rutin_payload_add,
          action_habit_puasa_rutin_payload_remove,
          action_habit_puasa_rutin_payload_edit
        }),
        ...mapMutations({
          set_habit_puasa_rutin_payload,
          set_habit_puasa_rutin_payload_add,
          set_habit_puasa_rutin_payload_remove,
          set_habit_puasa_rutin_payload_edit,
        })
    },
}

export default map_habit_puasa_rutin
