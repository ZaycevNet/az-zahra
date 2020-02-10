const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_sholat_hari_raya
} = require("@/store/namespaces/index");

const {
  get_habit_sholat_hari_raya_payload,
  get_habit_sholat_hari_raya_payload_length,
  get_habit_sholat_hari_raya_payload_checked,

  set_habit_sholat_hari_raya_payload,
  set_habit_sholat_hari_raya_payload_checked,

  action_habit_sholat_hari_raya_payload
} = habit_sholat_hari_raya;


const map_habit_sholat_hari_raya = {
    computed: {
        ...mapGetters({
					get_habit_sholat_hari_raya_payload,
				  get_habit_sholat_hari_raya_payload_length,
				  get_habit_sholat_hari_raya_payload_checked,
        }),
    },
    methods: {
        ...mapActions({
				  action_habit_sholat_hari_raya_payload
        }),
        ...mapMutations({
          set_habit_sholat_hari_raya_payload,
				  set_habit_sholat_hari_raya_payload_checked,
        })
    },
}

export default map_habit_sholat_hari_raya
