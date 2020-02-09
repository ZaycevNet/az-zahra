const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_membaca_umum
} = require("@/store/namespaces/index");

const {
  get_habit_membaca_umum_payload,
  set_habit_membaca_umum_payload,

  set_habit_membaca_umum_payload_add,
  set_habit_membaca_umum_payload_remove,
  set_habit_membaca_umum_payload_edit,

  action_habit_membaca_umum_payload,
  action_habit_membaca_umum_payload_add,
  action_habit_membaca_umum_payload_remove,
  action_habit_membaca_umum_payload_edit
} = habit_membaca_umum;


const map_habit_membaca_umum = {
    computed: {
        ...mapGetters({
          get_habit_membaca_umum_payload,
        }),
    },
    methods: {
        ...mapActions({
        	action_habit_membaca_umum_payload,
          action_habit_membaca_umum_payload_add,
          action_habit_membaca_umum_payload_remove,
          action_habit_membaca_umum_payload_edit
        }),
        ...mapMutations({
          set_habit_membaca_umum_payload,

          set_habit_membaca_umum_payload_add,
          set_habit_membaca_umum_payload_remove,
          set_habit_membaca_umum_payload_edit
        })
    },
}

export default map_habit_membaca_umum
