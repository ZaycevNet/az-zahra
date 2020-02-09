const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_adab_orangtua
} = require("@/store/namespaces/index");

const {
  get_habit_adab_orangtua_payload,
  get_habit_adab_orangtua_payload_length,
  get_habit_adab_orangtua_payload_checked,

  set_habit_adab_orangtua_payload,
  set_habit_adab_orangtua_payload_checked,

  action_habit_adab_orangtua_payload
} = habit_adab_orangtua;


const map_habit_adab_orangtua = {
    computed: {
        ...mapGetters({
					get_habit_adab_orangtua_payload,
				  get_habit_adab_orangtua_payload_length,
				  get_habit_adab_orangtua_payload_checked,
        }),

    },
    methods: {
        ...mapActions({
				  action_habit_adab_orangtua_payload
        }),
        ...mapMutations({
          set_habit_adab_orangtua_payload,
				  set_habit_adab_orangtua_payload_checked,
        })
    },
}

export default map_habit_adab_orangtua
