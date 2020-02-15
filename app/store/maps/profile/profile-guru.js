const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    profile_guru
} = require("@/store/namespaces/index");

const {
  get_profile_guru_payload,

  get_profile_guru_is_edit,

  set_profile_guru_payload,

  set_profile_guru_is_edit,

  set_profile_guru_payload_add,
  set_profile_guru_payload_edit,

  set_profile_guru_payload_kelas_add,
  set_profile_guru_payload_kelas_edit,

  set_profile_guru_payload_biodata_add,
  set_profile_guru_payload_biodata_edit,

  set_profile_guru_payload_group_add,
  set_profile_guru_payload_group_edit,

  action_profile_guru_payload,

  action_profile_guru_is_edit,

  action_profile_guru_payload_add,
  action_profile_guru_payload_edit,

  action_profile_guru_payload_kelas_add,
  action_profile_guru_payload_kelas_edit,

  action_profile_guru_payload_biodata_add,
  action_profile_guru_payload_biodata_edit,

  action_profile_guru_payload_group_add,
  action_profile_guru_payload_group_edit,
} = profile_guru;


const map_profile_guru = {
    computed: {
        ...mapGetters({
          get_profile_guru_payload,
          get_profile_guru_is_edit,
        }),
    },
    methods: {
        ...mapActions({
          action_profile_guru_payload,
          action_profile_guru_is_edit,

          action_profile_guru_payload_add,
          action_profile_guru_payload_edit,

          action_profile_guru_payload_kelas_add,
          action_profile_guru_payload_kelas_edit,

          action_profile_guru_payload_biodata_add,
          action_profile_guru_payload_biodata_edit,

          action_profile_guru_payload_group_add,
          action_profile_guru_payload_group_edit,
        }),
        ...mapMutations({
          set_profile_guru_payload,
          set_profile_guru_is_edit,

          set_profile_guru_payload_add,
          set_profile_guru_payload_edit,

          set_profile_guru_payload_kelas_add,
          set_profile_guru_payload_kelas_edit,

          set_profile_guru_payload_biodata_add,
          set_profile_guru_payload_biodata_edit,

          set_profile_guru_payload_group_add,
          set_profile_guru_payload_group_edit,
        })
    },
}

export default map_profile_guru
