const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_adab_diri_sendiri
} = require("@/store/namespaces/index");

const {
  get_habit_adab_diri_sendiri_payload,
  get_habit_adab_diri_sendiri_payload_length,
  get_habit_adab_diri_sendiri_payload_checked,

  set_habit_adab_diri_sendiri_payload,
  set_habit_adab_diri_sendiri_payload_checked,

  action_habit_adab_diri_sendiri_payload
} = habit_adab_diri_sendiri;


const map_habit_adab_diri_sendiri = {
    computed: {
        ...mapGetters({
					get_habit_adab_diri_sendiri_payload,
				  get_habit_adab_diri_sendiri_payload_length,
				  get_habit_adab_diri_sendiri_payload_checked,
        }),

    },
    methods: {
        ...mapActions({
				  action_habit_adab_diri_sendiri_payload
        }),
        ...mapMutations({
          set_habit_adab_diri_sendiri_payload,
				  set_habit_adab_diri_sendiri_payload_checked,
        })
    },
}

export default map_habit_adab_diri_sendiri
