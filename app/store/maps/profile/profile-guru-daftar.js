const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    profile_guru_daftar
} = require("@/store/namespaces/index");

const {
  get_profile_guru_daftar_payload,
  // get_profile_guru_daftar_payload_skm,

  set_profile_guru_daftar_payload,
  // set_profile_guru_daftar_payload_skm,

  action_profile_guru_daftar_payload,
	// action_profile_guru_daftar_payload_skm,
} = profile_guru_daftar;


const map_profile_guru_daftar = {
    computed: {
        ...mapGetters({
          get_profile_guru_daftar_payload,
          // get_profile_guru_daftar_payload_skm,
        }),

    },
    methods: {
        ...mapActions({
            action_profile_guru_daftar_payload,
            // action_profile_guru_daftar_payload_skm,
        }),
        ...mapMutations({
            set_profile_guru_daftar_payload,
            // set_profile_guru_daftar_payload_skm,/
        })
    },
}

export default map_profile_guru_daftar
