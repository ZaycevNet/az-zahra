const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_adab_saudara
} = require("@/store/namespaces/index");

const {
  get_habit_adab_saudara_payload,
  get_habit_adab_saudara_payload_length,
  get_habit_adab_saudara_payload_checked,

  set_habit_adab_saudara_payload,
  set_habit_adab_saudara_payload_checked,

  action_habit_adab_saudara_payload
} = habit_adab_saudara;


const map_habit_adab_saudara = {
    computed: {
        ...mapGetters({
					get_habit_adab_saudara_payload,
				  get_habit_adab_saudara_payload_length,
				  get_habit_adab_saudara_payload_checked,
        }),

    },
    methods: {
        ...mapActions({
				  action_habit_adab_saudara_payload
        }),
        ...mapMutations({
          set_habit_adab_saudara_payload,
				  set_habit_adab_saudara_payload_checked,
        })
    },
}

export default map_habit_adab_saudara
