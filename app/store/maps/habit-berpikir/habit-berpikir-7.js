const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_berpikir_ketujuh
} = require("@/store/namespaces/index");

const {
  get_habit_berpikir_ketujuh_payload,
  get_habit_berpikir_ketujuh_payload_length,
  get_habit_berpikir_ketujuh_payload_checked,

  set_habit_berpikir_ketujuh_payload,
  set_habit_berpikir_ketujuh_payload_checked,

  action_habit_berpikir_ketujuh_payload
} = habit_berpikir_ketujuh;


const map_habit_berpikir_ketujuh = {
    computed: {
        ...mapGetters({
					get_habit_berpikir_ketujuh_payload,
				  get_habit_berpikir_ketujuh_payload_length,
				  get_habit_berpikir_ketujuh_payload_checked,
        }),

    },
    methods: {
        ...mapActions({
				  action_habit_berpikir_ketujuh_payload
        }),
        ...mapMutations({
          set_habit_berpikir_ketujuh_payload,
				  set_habit_berpikir_ketujuh_payload_checked,
        })
    },
}

export default map_habit_berpikir_ketujuh
