const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_berpikir_kedelapan
} = require("@/store/namespaces/index");

const {
  get_habit_berpikir_kedelapan_payload,
  get_habit_berpikir_kedelapan_payload_length,
  get_habit_berpikir_kedelapan_payload_checked,

  set_habit_berpikir_kedelapan_payload,
  set_habit_berpikir_kedelapan_payload_checked,

  action_habit_berpikir_kedelapan_payload
} = habit_berpikir_kedelapan;


const map_habit_berpikir_kedelapan = {
    computed: {
        ...mapGetters({
					get_habit_berpikir_kedelapan_payload,
				  get_habit_berpikir_kedelapan_payload_length,
				  get_habit_berpikir_kedelapan_payload_checked,
        }),

    },
    methods: {
        ...mapActions({
				  action_habit_berpikir_kedelapan_payload
        }),
        ...mapMutations({
          set_habit_berpikir_kedelapan_payload,
				  set_habit_berpikir_kedelapan_payload_checked,
        })
    },
}

export default map_habit_berpikir_kedelapan
