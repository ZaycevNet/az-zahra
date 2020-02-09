const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_tadarus_iqra
} = require("@/store/namespaces/index");

const {
  get_habit_tadarus_iqra_payload,
  get_habit_tadarus_iqra_payload_length,

  set_habit_tadarus_iqra_payload,
  set_habit_tadarus_iqra_payload_add,
  set_habit_tadarus_iqra_payload_remove,
  set_habit_tadarus_iqra_payload_edit,

  action_habit_tadarus_iqra_payload,
  action_habit_tadarus_iqra_payload_add,
  action_habit_tadarus_iqra_payload_remove,
  action_habit_tadarus_iqra_payload_edit
} = habit_tadarus_iqra;


const map_habit_tadarus_iqra = {
    computed: {
        ...mapGetters({
          get_habit_tadarus_iqra_payload,
          get_habit_tadarus_iqra_payload_length,
        }),
    },
    methods: {
        ...mapActions({
        	action_habit_tadarus_iqra_payload,
          action_habit_tadarus_iqra_payload_add,
          action_habit_tadarus_iqra_payload_remove,
          action_habit_tadarus_iqra_payload_edit
        }),
        ...mapMutations({
          set_habit_tadarus_iqra_payload,
          set_habit_tadarus_iqra_payload_add,
          set_habit_tadarus_iqra_payload_remove,
          set_habit_tadarus_iqra_payload_edit,
        })
    },
}

export default map_habit_tadarus_iqra
