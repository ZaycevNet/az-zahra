const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_sholat_tambahan
} = require("@/store/namespaces/index");

const {
  get_habit_sholat_tambahan_payload,
  get_habit_sholat_tambahan_payload_length,
  get_habit_sholat_tambahan_payload_checked,

  set_habit_sholat_tambahan_payload,
  set_habit_sholat_tambahan_payload_checked,

  action_habit_sholat_tambahan_payload
} = habit_sholat_tambahan;


const map_habit_sholat_tambahan = {
    computed: {
        ...mapGetters({
					get_habit_sholat_tambahan_payload,
				  get_habit_sholat_tambahan_payload_length,
				  get_habit_sholat_tambahan_payload_checked,
        }),
    },
    methods: {
        ...mapActions({
				  action_habit_sholat_tambahan_payload
        }),
        ...mapMutations({
          set_habit_sholat_tambahan_payload,
				  set_habit_sholat_tambahan_payload_checked,
        })
    },
}

export default map_habit_sholat_tambahan
