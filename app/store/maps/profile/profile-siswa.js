const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    profile_siswa
} = require("@/store/namespaces/index");

const {
  get_profile_siswa_payload,

  get_profile_siswa_is_edit,

  set_profile_siswa_payload,

  set_profile_siswa_is_edit,

  set_profile_siswa_payload_add,
  set_profile_siswa_payload_edit,

  set_profile_siswa_payload_orangtua_add,
  set_profile_siswa_payload_orangtua_edit,

  set_profile_siswa_payload_biodata_add,
  set_profile_siswa_payload_biodata_edit,

  set_profile_siswa_payload_group_add,
  set_profile_siswa_payload_group_edit,

  action_profile_siswa_payload,

  action_profile_siswa_is_edit,

  action_profile_siswa_payload_add,
  action_profile_siswa_payload_edit,

  action_profile_siswa_payload_orangtua_add,
  action_profile_siswa_payload_orangtua_edit,

  action_profile_siswa_payload_biodata_add,
  action_profile_siswa_payload_biodata_edit,

  action_profile_siswa_payload_group_add,
  action_profile_siswa_payload_group_edit,
} = profile_siswa;


const map_profile_siswa = {
    computed: {
        ...mapGetters({
          get_profile_siswa_payload,
          get_profile_siswa_is_edit,
        }),
    },
    methods: {
        ...mapActions({
          action_profile_siswa_payload,
          action_profile_siswa_is_edit,

          action_profile_siswa_payload_add,
          action_profile_siswa_payload_edit,

          action_profile_siswa_payload_orangtua_add,
          action_profile_siswa_payload_orangtua_edit,

          action_profile_siswa_payload_biodata_add,
          action_profile_siswa_payload_biodata_edit,

          action_profile_siswa_payload_group_add,
          action_profile_siswa_payload_group_edit,
        }),
        ...mapMutations({
          set_profile_siswa_payload,
          set_profile_siswa_is_edit,

          set_profile_siswa_payload_add,
          set_profile_siswa_payload_edit,

          set_profile_siswa_payload_orangtua_add,
          set_profile_siswa_payload_orangtua_edit,

          set_profile_siswa_payload_biodata_add,
          set_profile_siswa_payload_biodata_edit,

          set_profile_siswa_payload_group_add,
          set_profile_siswa_payload_group_edit,
        })
    },
}

export default map_profile_siswa
