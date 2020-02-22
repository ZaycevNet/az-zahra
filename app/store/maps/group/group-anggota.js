const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    group_anggota
} = require("@/store/namespaces/index");

const {
  get_group_anggota_payload,
  // get_group_anggota_payload_skm,

  set_group_anggota_payload,
  // set_group_anggota_payload_skm,

  action_group_anggota_payload,
	// action_group_anggota_payload_skm,
} = group_anggota;


const map_group_anggota = {
    computed: {
        ...mapGetters({
          get_group_anggota_payload,
          // get_group_anggota_payload_skm,
        }),

    },
    methods: {
        ...mapActions({
            action_group_anggota_payload,
            // action_group_anggota_payload_skm,
        }),
        ...mapMutations({
            set_group_anggota_payload,
            // set_group_anggota_payload_skm,/
        })
    },
}

export default map_group_anggota
