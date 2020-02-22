const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    group_hasil
} = require("@/store/namespaces/index");

const {
  get_group_hasil_payload,
  // get_group_hasil_payload_skm,

  set_group_hasil_payload,
  // set_group_hasil_payload_skm,

  action_group_hasil_payload,
	// action_group_hasil_payload_skm,
} = group_hasil;


const map_group_hasil = {
    computed: {
        ...mapGetters({
          get_group_hasil_payload,
          // get_group_hasil_payload_skm,
        }),

    },
    methods: {
        ...mapActions({
            action_group_hasil_payload,
            // action_group_hasil_payload_skm,
        }),
        ...mapMutations({
            set_group_hasil_payload,
            // set_group_hasil_payload_skm,/
        })
    },
}

export default map_group_hasil
