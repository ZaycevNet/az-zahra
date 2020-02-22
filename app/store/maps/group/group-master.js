const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    group_master
} = require("@/store/namespaces/index");

const {
  get_group_master_payload,
  get_group_master_payload_length,
  get_group_master_payload_aktif,

  set_group_master_payload,
  set_group_master_payload_aktif,

  action_group_master_payload,
  action_group_master_payload_aktif,
} = group_master;


const map_group_master = {
    computed: {
        ...mapGetters({
          get_group_master_payload,
          get_group_master_payload_length,
          get_group_master_payload_aktif,
        }),

    },
    methods: {
        ...mapActions({
            action_group_master_payload,
            action_group_master_payload_aktif,
        }),
        ...mapMutations({
            set_group_master_payload,
            set_group_master_payload_aktif,
        })
    },
}

export default map_group_master
