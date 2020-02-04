const {
    mapActions,
    mapGetters
} = require('vuex')

const {
    habit_organisasi
} = require("@/store/namespaces/index");

const {
  get_habit_organisasi_payload,
  get_habit_organisasi_payload_length,
  get_habit_organisasi_payload_checked,

  set_habit_organisasi_payload,
  set_habit_organisasi_payload_checked,

  action_habit_organisasi_payload
} = habit_organisasi;


const map_habit_organisasi = {
    computed: {
        ...mapGetters({
					get_habit_organisasi_payload,
				  get_habit_organisasi_payload_length,
				  get_habit_organisasi_payload_checked,

				  set_habit_organisasi_payload,
				  set_habit_organisasi_payload_checked,
        }),
    },
    methods: {
        ...mapActions({
				  action_habit_organisasi_payload
        }),
    },
}

export default map_habit_organisasi
