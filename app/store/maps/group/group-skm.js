const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    group_skm
} = require("@/store/namespaces/index");

const {
  get_group_skm_payload,
  // get_group_skm_payload_habit,

  set_group_skm_payload,
  set_group_skm_payload_habit,

  action_group_skm_payload,
	action_group_skm_payload_habit,
} = group_skm;


const map_group_skm = {
    computed: {
        ...mapGetters({
          get_group_skm_payload,
          // get_group_skm_payload_habit,
        }),

    },
    methods: {
        ...mapActions({
            action_group_skm_payload,
            action_group_skm_payload_habit,
        }),
        ...mapMutations({
            set_group_skm_payload,
            set_group_skm_payload_habit,
        })
    },
}

export default map_group_skm
