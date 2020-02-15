import Vue from 'nativescript-vue'

// import auth from './auth'
// import tab from './tab'
// import init from './init'
// import notification from './notification'
import indicator from './indicator';

import habit_adab_alat_tempat from './habit-adab/habit-adab-alat-tempat';
import habit_adab_diri_sendiri from './habit-adab/habit-adab-diri-sendiri';
import habit_adab_guru from './habit-adab/habit-adab-guru';
import habit_adab_kerabat from './habit-adab/habit-adab-kerabat';
import habit_adab_oranglain from './habit-adab/habit-adab-oranglain';
import habit_adab_orangtua from './habit-adab/habit-adab-orangtua';
import habit_adab_saudara from './habit-adab/habit-adab-saudara';

import habit_berpikir_pertama from './habit-berpikir/habit-berpikir-1';
import habit_berpikir_kedua from './habit-berpikir/habit-berpikir-2';
import habit_berpikir_ketiga from './habit-berpikir/habit-berpikir-3';
import habit_berpikir_keempat from './habit-berpikir/habit-berpikir-4';
import habit_berpikir_kelima from './habit-berpikir/habit-berpikir-5';
import habit_berpikir_keenam from './habit-berpikir/habit-berpikir-6';
import habit_berpikir_ketujuh from './habit-berpikir/habit-berpikir-7';
import habit_berpikir_kedelapan from './habit-berpikir/habit-berpikir-8';
import habit_berpikir_kesembilan from './habit-berpikir/habit-berpikir-9';
import habit_berpikir_kesepuluh from './habit-berpikir/habit-berpikir-10';

import habit_zis_sedekah from './habit-zis/habit-zis-sedekah';
import habit_zis_infaq from './habit-zis/habit-zis-infaq';
import habit_zis_waqaf from './habit-zis/habit-zis-waqaf';
import habit_zis_zakat_mal from './habit-zis/habit-zis-zakat-mal';
import habit_zis_zakat_fitri from './habit-zis/habit-zis-zakat-fitri';

import habit_puasa_rutin from './habit-puasa/habit-puasa-rutin';
import habit_puasa_khusus from './habit-puasa/habit-puasa-khusus';
import habit_puasa_ramadhan from './habit-puasa/habit-puasa-ramadhan';
import habit_puasa_nazar from './habit-puasa/habit-puasa-nazar';
import habit_puasa_kafarat from './habit-puasa/habit-puasa-kafarat';
import habit_puasa_new from './habit-puasa/habit-puasa-new';

import habit_tadarus_alquran from './habit-tadarus/habit-tadarus-alquran';
import habit_tadarus_iqra from './habit-tadarus/habit-tadarus-iqra';

import habit_majelis from './habit-majelis';
import habit_organisasi from './habit-organisasi';

import habit_membaca_islami from './habit-membaca/habit-membaca-islami';
import habit_membaca_umum from './habit-membaca/habit-membaca-umum';

import habit_sholat_pagi from "./habit-sholat/habit-sholat-pagi";
import habit_sholat_tambahan from "./habit-sholat/habit-sholat-tambahan";
import habit_sholat_malam from "./habit-sholat/habit-sholat-malam";
import habit_sholat_jumat from "./habit-sholat/habit-sholat-jumat";
import habit_sholat_hari_raya from "./habit-sholat/habit-sholat-hari-raya";
import habit_sholat_fardhu from "./habit-sholat/habit-sholat-fardhu";

import profile_siswa from "./profile/profile-siswa";

// const map_habit_adab_diri_sendiri = require('./habit-adab-diri-sendiri')
// Vue.mixin(auth)
// Vue.mixin(tab)
// Vue.mixin(init)
// Vue.mixin(notification)
Vue.mixin(indicator);

Vue.mixin(habit_adab_alat_tempat);
Vue.mixin(habit_adab_diri_sendiri);
Vue.mixin(habit_adab_guru);
Vue.mixin(habit_adab_kerabat);
Vue.mixin(habit_adab_oranglain);
Vue.mixin(habit_adab_orangtua);
Vue.mixin(habit_adab_saudara);

Vue.mixin(habit_berpikir_pertama);
Vue.mixin(habit_berpikir_kedua);
Vue.mixin(habit_berpikir_ketiga);
Vue.mixin(habit_berpikir_keempat);
Vue.mixin(habit_berpikir_kelima);
Vue.mixin(habit_berpikir_keenam);
Vue.mixin(habit_berpikir_ketujuh);
Vue.mixin(habit_berpikir_kedelapan);
Vue.mixin(habit_berpikir_kesembilan);
Vue.mixin(habit_berpikir_kesepuluh);

Vue.mixin(habit_zis_zakat_fitri);
Vue.mixin(habit_zis_zakat_mal);
Vue.mixin(habit_zis_infaq);
Vue.mixin(habit_zis_sedekah);
Vue.mixin(habit_zis_waqaf);

Vue.mixin(habit_puasa_rutin);
Vue.mixin(habit_puasa_khusus);
Vue.mixin(habit_puasa_ramadhan);
Vue.mixin(habit_puasa_nazar);
Vue.mixin(habit_puasa_kafarat);
Vue.mixin(habit_puasa_new);

Vue.mixin(habit_sholat_pagi);
Vue.mixin(habit_sholat_tambahan);
Vue.mixin(habit_sholat_malam);
Vue.mixin(habit_sholat_jumat);
Vue.mixin(habit_sholat_hari_raya);
Vue.mixin(habit_sholat_fardhu);

Vue.mixin(habit_tadarus_alquran);
Vue.mixin(habit_tadarus_iqra);

Vue.mixin(habit_organisasi);
Vue.mixin(habit_majelis);

Vue.mixin(habit_membaca_islami);
Vue.mixin(habit_membaca_umum);

Vue.mixin(profile_siswa);
