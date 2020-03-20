const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    onboarding
} = require("@/store/namespaces/index");

const {
  get_onboarding,
  set_onboarding,
  action_onboarding
} = onboarding;

const map_onboarding = {
    computed: {
        ...mapGetters({
					get_onboarding,
        }),
    },
    methods: {
        ...mapActions({
				  action_onboarding
        }),
        ...mapMutations({
          set_onboarding,
        })
    },
}

export default map_onboarding
