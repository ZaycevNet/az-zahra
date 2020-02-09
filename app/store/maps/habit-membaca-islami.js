const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_membaca_islami
} = require("@/store/namespaces/index");

const {
  get_habit_membaca_islami_payload,
  set_habit_membaca_islami_payload,

  set_habit_membaca_islami_payload_add,
  set_habit_membaca_islami_payload_remove,
  set_habit_membaca_islami_payload_edit,

  action_habit_membaca_islami_payload,
  action_habit_membaca_islami_payload_add,
  action_habit_membaca_islami_payload_remove,
  action_habit_membaca_islami_payload_edit
} = habit_membaca_islami;


const map_habit_membaca_islami = {
    computed: {
        ...mapGetters({
          get_habit_membaca_islami_payload,
        }),
    },
    methods: {
        ...mapActions({
        	action_habit_membaca_islami_payload,
          action_habit_membaca_islami_payload_add,
          action_habit_membaca_islami_payload_remove,
          action_habit_membaca_islami_payload_edit
        }),
        ...mapMutations({
          set_habit_membaca_islami_payload,

          set_habit_membaca_islami_payload_add,
          set_habit_membaca_islami_payload_remove,
          set_habit_membaca_islami_payload_edit
        })
    },
}

export default map_habit_membaca_islami
