const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    group_hasil_siswa
} = require("@/store/namespaces/index");

const {
  get_group_hasil_siswa_payload,

  set_group_hasil_siswa_payload,

  action_group_hasil_siswa_payload,

} = group_hasil_siswa;


const map_group_hasil_siswa = {
    computed: {
        ...mapGetters({
          get_group_hasil_siswa_payload,
        }),

    },
    methods: {
        ...mapActions({
            action_group_hasil_siswa_payload,
        }),
        ...mapMutations({
            set_group_hasil_siswa_payload,
        })
    },
}

export default map_group_hasil_siswa
