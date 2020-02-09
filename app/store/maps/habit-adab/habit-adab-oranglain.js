const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_adab_oranglain
} = require("@/store/namespaces/index");

const {
  get_habit_adab_oranglain_payload,
  get_habit_adab_oranglain_payload_length,
  get_habit_adab_oranglain_payload_checked,

  set_habit_adab_oranglain_payload,
  set_habit_adab_oranglain_payload_checked,

  action_habit_adab_oranglain_payload
} = habit_adab_oranglain;


const map_habit_adab_oranglain = {
    computed: {
        ...mapGetters({
					get_habit_adab_oranglain_payload,
				  get_habit_adab_oranglain_payload_length,
				  get_habit_adab_oranglain_payload_checked,
        }),

    },
    methods: {
        ...mapActions({
				  action_habit_adab_oranglain_payload
        }),
        ...mapMutations({
          set_habit_adab_oranglain_payload,
				  set_habit_adab_oranglain_payload_checked,
        })
    },
}

export default map_habit_adab_oranglain
