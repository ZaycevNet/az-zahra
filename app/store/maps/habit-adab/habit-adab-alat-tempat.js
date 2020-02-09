const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_adab_alat_tempat
} = require("@/store/namespaces/index");

const {
  get_habit_adab_alat_tempat_payload,
  get_habit_adab_alat_tempat_payload_length,
  get_habit_adab_alat_tempat_payload_checked,

  set_habit_adab_alat_tempat_payload,
  set_habit_adab_alat_tempat_payload_checked,

  action_habit_adab_alat_tempat_payload
} = habit_adab_alat_tempat;


const map_habit_adab_alat_tempat = {
    computed: {
        ...mapGetters({
					get_habit_adab_alat_tempat_payload,
				  get_habit_adab_alat_tempat_payload_length,
				  get_habit_adab_alat_tempat_payload_checked,
        }),

    },
    methods: {
        ...mapActions({
				  action_habit_adab_alat_tempat_payload
        }),
        ...mapMutations({
          set_habit_adab_alat_tempat_payload,
				  set_habit_adab_alat_tempat_payload_checked,
        })
    },
}

export default map_habit_adab_alat_tempat
