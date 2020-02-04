const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    habit_majelis
} = require("@/store/namespaces/index");

const {
  get_habit_majelis_payload,
  get_habit_majelis_payload_length,
  get_habit_majelis_payload_checked,

  set_habit_majelis_payload,
  set_habit_majelis_payload_checked,

  action_habit_majelis_payload
} = habit_majelis;


const map_habit_majelis = {
    computed: {
        ...mapGetters({
					get_habit_majelis_payload,
				  get_habit_majelis_payload_length,
				  get_habit_majelis_payload_checked,

				  set_habit_majelis_payload,
				  set_habit_majelis_payload_checked,
        }),
    },
    methods: {
        ...mapActions({
				  action_habit_majelis_payload
        }),
    },
}

export default map_habit_majelis
