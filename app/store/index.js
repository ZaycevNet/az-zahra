import Vue from 'nativescript-vue';
import Vuex from "vuex";

import indicator from "./modules/indicator";

import habit_adab_alat_tempat from './modules/habit-adab/habit-adab-alat-tempat';
import habit_adab_diri_sendiri from './modules/habit-adab/habit-adab-diri-sendiri';
import habit_adab_guru from './modules/habit-adab/habit-adab-guru';
import habit_adab_kerabat from './modules/habit-adab/habit-adab-kerabat';
import habit_adab_oranglain from './modules/habit-adab/habit-adab-oranglain';
import habit_adab_orangtua from './modules/habit-adab/habit-adab-orangtua';
import habit_adab_saudara from './modules/habit-adab/habit-adab-saudara';

import habit_tadarus_alquran from './modules/habit-tadarus-alquran';
import habit_tadarus_iqra from './modules/habit-tadarus-iqra';

import habit_berpikir_pertama from './modules/habit-berpikir/habit-berpikir-1';
import habit_berpikir_kedua from './modules/habit-berpikir/habit-berpikir-2';
import habit_berpikir_ketiga from './modules/habit-berpikir/habit-berpikir-3';
import habit_berpikir_keempat from './modules/habit-berpikir/habit-berpikir-4';
import habit_berpikir_kelima from './modules/habit-berpikir/habit-berpikir-5';
import habit_berpikir_keenam from './modules/habit-berpikir/habit-berpikir-6';
import habit_berpikir_ketujuh from './modules/habit-berpikir/habit-berpikir-7';
import habit_berpikir_kedelapan from './modules/habit-berpikir/habit-berpikir-8';
import habit_berpikir_kesembilan from './modules/habit-berpikir/habit-berpikir-9';
import habit_berpikir_kesepuluh from './modules/habit-berpikir/habit-berpikir-10';

import habit_zis_sedekah from './modules/habit-zis/habit-zis-sedekah';
import habit_zis_infaq from './modules/habit-zis/habit-zis-infaq';
import habit_zis_waqaf from './modules/habit-zis/habit-zis-waqaf';
import habit_zis_zakat_mal from './modules/habit-zis/habit-zis-zakat-mal';
import habit_zis_zakat_fitri from './modules/habit-zis/habit-zis-zakat-fitri';

import habit_organisasi from "./modules/habit-organisasi";
import habit_majelis from "./modules/habit-majelis";

import habit_membaca_islami from "./modules/habit-membaca-islami";
import habit_membaca_umum from "./modules/habit-membaca-umum";

Vue.use(Vuex);

let debug = process.env.NODE_ENV !== "production";

let store = new Vuex.Store({
  modules: {
    indicator,

    // sideDrawer,
    // keyboard_backpress,

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

    habit_organisasi,
    habit_majelis,

    habit_membaca_islami,
    habit_membaca_umum,

  },
  strict: debug
});

Vue.prototype.$store = store;

export default store;
