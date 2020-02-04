// const auth = require('./auth')
// const tab = require('./tab')
// const init = require('./init')
// const notification = require('./notification')

const indicator = require('./indicator');
const habit_organisasi = require('./habit-organisasi');
const habit_majelis = require('./habit-majelis');
const habit_adab_diri_sendiri = require('./habit-adab-diri-sendiri');


module.exports = {
    indicator,

    habit_majelis,
    habit_organisasi,
    habit_adab_diri_sendiri
    // auth,
    // tab,
    // init,
    // notification,

    // habit_adab,

}

// only works without param in getters
// inline access
// this.$store.getters['status/REQUEST_STATUS'] // GETTERS
// this.$store.commit('yourModuleName/doSomething', {payload: data}) // MUTATIONS
// this.$store.dispatch('yourModuleName/doSomething', {payload: data}) // ACTION
