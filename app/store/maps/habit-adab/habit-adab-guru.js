const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_adab_guru
} = require("@/store/namespaces/index");

const {
  get_habit_adab_guru_payload,
  get_habit_adab_guru_payload_length,
  get_habit_adab_guru_payload_checked,

  set_habit_adab_guru_payload,
  set_habit_adab_guru_payload_checked,

  action_habit_adab_guru_payload
} = habit_adab_guru;


const map_habit_adab_guru = {
    computed: {
        ...mapGetters({
					get_habit_adab_guru_payload,
				  get_habit_adab_guru_payload_length,
				  get_habit_adab_guru_payload_checked,
        }),

    },
    methods: {
        ...mapActions({
				  action_habit_adab_guru_payload
        }),
        ...mapMutations({
          set_habit_adab_guru_payload,
				  set_habit_adab_guru_payload_checked,
        })
    },
}

export default map_habit_adab_guru
