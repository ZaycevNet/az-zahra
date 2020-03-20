const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    kebijakan_privasi
} = require("@/store/namespaces/index");

const {
  get_kebijakan_privasi_payload,
  set_kebijakan_privasi_payload,
  action_kebijakan_privasi_payload
} = kebijakan_privasi;


const map_kebijakan_privasi = {
    computed: {
        ...mapGetters({
					get_kebijakan_privasi_payload,
        }),
    },
    methods: {
        ...mapActions({
				  action_kebijakan_privasi_payload
        }),
        ...mapMutations({
          set_kebijakan_privasi_payload,
        })
    },
}

export default map_kebijakan_privasi
