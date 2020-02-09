const {
    mapActions,
    mapMutations,
    mapGetters
} = require('vuex')

const {
    indicator
} = require("@/store/namespaces/index");

const {
  get_indicator_loading,
	set_indicator_loading,
	action_indicator_loading,

  get_accordion_first_open,
	set_accordion_first_open,
	action_accordion_first_open

} = indicator;


const map_indicator = {
    computed: {
        ...mapGetters({
          get_indicator_loading,
          get_accordion_first_open,
        }),
    },
    methods: {
        ...mapActions({
        	action_indicator_loading,
          action_accordion_first_open
        }),
        ...mapMutations({
          set_accordion_first_open,
          set_indicator_loading,
        })
    },
}

export default map_indicator
