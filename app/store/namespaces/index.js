// const auth = require('./auth')
// const tab = require('./tab')
// const init = require('./init')
// const notification = require('./notification')

const indicator = require('./indicator');

const habit_organisasi = require('./habit-organisasi');
const habit_majelis = require('./habit-majelis');

const habit_membaca_islami = require('./habit-membaca-islami');
const habit_membaca_umum = require('./habit-membaca-umum');

const habit_tadarus_alquran = require('./habit-tadarus-alquran');
const habit_tadarus_iqra = require('./habit-tadarus-iqra');

const habit_adab_alat_tempat = require('./habit-adab/habit-adab-alat-tempat');
const habit_adab_diri_sendiri = require('./habit-adab/habit-adab-diri-sendiri');
const habit_adab_guru = require('./habit-adab/habit-adab-guru');
const habit_adab_kerabat = require('./habit-adab/habit-adab-kerabat');
const habit_adab_oranglain = require('./habit-adab/habit-adab-oranglain');
const habit_adab_orangtua = require('./habit-adab/habit-adab-orangtua');
const habit_adab_saudara = require('./habit-adab/habit-adab-saudara');

const habit_berpikir_pertama = require('./habit-berpikir/habit-berpikir-1');
const habit_berpikir_kedua = require('./habit-berpikir/habit-berpikir-2');
const habit_berpikir_ketiga = require('./habit-berpikir/habit-berpikir-3');
const habit_berpikir_keempat = require('./habit-berpikir/habit-berpikir-4');
const habit_berpikir_kelima = require('./habit-berpikir/habit-berpikir-5');
const habit_berpikir_keenam = require('./habit-berpikir/habit-berpikir-6');
const habit_berpikir_ketujuh = require('./habit-berpikir/habit-berpikir-7');
const habit_berpikir_kedelapan = require('./habit-berpikir/habit-berpikir-8');
const habit_berpikir_kesembilan = require('./habit-berpikir/habit-berpikir-9');
const habit_berpikir_kesepuluh = require('./habit-berpikir/habit-berpikir-10');

const habit_zis_zakat_fitri = require('./habit-zis/habit-zis-zakat-fitri');
const habit_zis_zakat_mal = require('./habit-zis/habit-zis-zakat-mal');
const habit_zis_infaq = require('./habit-zis/habit-zis-infaq');
const habit_zis_sedekah = require('./habit-zis/habit-zis-sedekah');
const habit_zis_waqaf = require('./habit-zis/habit-zis-waqaf');

module.exports = {
    indicator,

    habit_majelis,
    habit_organisasi,

    habit_adab_alat_tempat,
    habit_adab_diri_sendiri,
    habit_adab_guru,
    habit_adab_kerabat,
    habit_adab_oranglain,
    habit_adab_orangtua,
    habit_adab_saudara,

    habit_zis_zakat_fitri,
    habit_zis_zakat_mal,
    habit_zis_infaq,
    habit_zis_sedekah,
    habit_zis_waqaf,

    habit_berpikir_pertama,
    habit_berpikir_kedua,
    habit_berpikir_ketiga,
    habit_berpikir_keempat,
    habit_berpikir_kelima,
    habit_berpikir_keenam,
    habit_berpikir_ketujuh,
    habit_berpikir_kedelapan,
    habit_berpikir_kesembilan,
    habit_berpikir_kesepuluh,


    habit_tadarus_alquran,
    habit_tadarus_iqra,

    habit_membaca_islami,
    habit_membaca_umum,

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
