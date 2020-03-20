const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    syarat_ketentuan
} = require("@/store/namespaces/index");

const {
  get_syarat_ketentuan_payload,
  set_syarat_ketentuan_payload,
  action_syarat_ketentuan_payload
} = syarat_ketentuan;


const map_syarat_ketentuan = {
    computed: {
        ...mapGetters({
					get_syarat_ketentuan_payload,
        }),
    },
    methods: {
        ...mapActions({
				  action_syarat_ketentuan_payload
        }),
        ...mapMutations({
          set_syarat_ketentuan_payload,
        })
    },
}

export default map_syarat_ketentuan
