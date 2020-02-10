const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    habit_sholat_fardhu
} = require("@/store/namespaces/index");

const {
  get_habit_sholat_fardhu_payload,
  get_habit_sholat_fardhu_payload_length,
  get_habit_sholat_fardhu_payload_checked,

  set_habit_sholat_fardhu_payload,
  set_habit_sholat_fardhu_payload_checked,

  action_habit_sholat_fardhu_payload
} = habit_sholat_fardhu;


const map_habit_sholat_fardhu = {
    computed: {
        ...mapGetters({
					get_habit_sholat_fardhu_payload,
				  get_habit_sholat_fardhu_payload_length,
				  get_habit_sholat_fardhu_payload_checked,
        }),
    },
    methods: {
        ...mapActions({
				  action_habit_sholat_fardhu_payload
        }),
        ...mapMutations({
          set_habit_sholat_fardhu_payload,
				  set_habit_sholat_fardhu_payload_checked,
        })
    },
}

export default map_habit_sholat_fardhu
