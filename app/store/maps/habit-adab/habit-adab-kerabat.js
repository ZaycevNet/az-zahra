const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_adab_kerabat
} = require("@/store/namespaces/index");

const {
  get_habit_adab_kerabat_payload,
  get_habit_adab_kerabat_payload_length,
  get_habit_adab_kerabat_payload_checked,

  set_habit_adab_kerabat_payload,
  set_habit_adab_kerabat_payload_checked,

  action_habit_adab_kerabat_payload
} = habit_adab_kerabat;


const map_habit_adab_kerabat = {
    computed: {
        ...mapGetters({
					get_habit_adab_kerabat_payload,
				  get_habit_adab_kerabat_payload_length,
				  get_habit_adab_kerabat_payload_checked,
        }),

    },
    methods: {
        ...mapActions({
				  action_habit_adab_kerabat_payload
        }),
        ...mapMutations({
          set_habit_adab_kerabat_payload,
				  set_habit_adab_kerabat_payload_checked,
        })
    },
}

export default map_habit_adab_kerabat
