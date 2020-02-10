import Vue from 'nativescript-vue'

const PageHabitAdab = resolve => {
    require.ensure(
        ['./page-habit-adab'],
        () => {
            resolve(require('./page-habit-adab'))
        }, 'page-habit-adab'
    )
}

const PageHabitBerpikir = resolve => {
    require.ensure(
        ['./page-habit-berpikir'],
        () => {
            resolve(require('./page-habit-berpikir'))
        }, 'page-habit-berpikir'
    )
}

const PageHabitSholat = resolve => {
    require.ensure(
        ['./page-habit-sholat'],
        () => {
            resolve(require('./page-habit-sholat'))
        }, 'page-habit-sholat'
    )
}


const PageHabitOrganisasiNew = resolve => {
    require.ensure(
        ['./page-habit-organisasi-new'],
        () => {
            resolve(require('./page-habit-organisasi-new'))
        }, 'page-habit-organisasi-new'
    )
}

const PageHabitOrganisasi = resolve => {
    require.ensure(
        ['./page-habit-organisasi'],
        () => {
            resolve(require('./page-habit-organisasi'))
        }, 'page-habit-organisasi'
    )
}

const PageHabitMajelis = resolve => {
    require.ensure(
        ['./page-habit-majelis'],
        () => {
            resolve(require('./page-habit-majelis'))
        }, 'page-habit-majelis'
    )
}

const PageHabitMajelisNew = resolve => {
    require.ensure(
        ['./page-habit-majelis-new'],
        () => {
            resolve(require('./page-habit-majelis-new'))
        }, 'page-habit-majelis-new'
    )
}

const PageHabitMembaca = resolve => {
    require.ensure(
        ['./page-habit-membaca'],
        () => {
            resolve(require('./page-habit-membaca'))
        }, 'page-habit-membaca'
    )
}

const PageHabitMembacaNew = resolve => {
    require.ensure(
        ['./page-habit-membaca-new'],
        () => {
            resolve(require('./page-habit-membaca-new'))
        }, 'page-habit-membaca-new'
    )
}

const PageHabitTadarusAlquran = resolve => {
    require.ensure(
        ['./page-habit-tadarus-alquran'],
        () => {
            resolve(require('./page-habit-tadarus-alquran'))
        }, 'page-habit-tadarus-alquran'
    )
}

const PageHabitTadarusIqra = resolve => {
    require.ensure(
        ['./page-habit-tadarus-iqra'],
        () => {
            resolve(require('./page-habit-tadarus-iqra'))
        }, 'page-habit-tadarus-iqra'
    )
}

const PageHabitTadarusNew = resolve => {
    require.ensure(
        ['./page-habit-tadarus-new'],
        () => {
            resolve(require('./page-habit-tadarus-new'))
        }, 'page-habit-tadarus-new'
    )
}

const PageHabitTadarusModal = resolve => {
    require.ensure(
        ['./page-habit-tadarus-modal'],
        () => {
            resolve(require('./page-habit-tadarus-modal'))
        }, 'page-habit-tadarus-modal'
    )
}

// const PageHabitZisSedekah = resolve => {
//     require.ensure(
//         ['./habit-zis/page-habit-zis-sedekah'],
//         () => {
//             resolve(require('./habit-zis/page-habit-zis-sedekah'))
//         }, 'habit-zis/page-habit-zis-sedekah'
//     )
// }
//
// const PageHabitZisInfaq = resolve => {
//     require.ensure(
//         ['./habit-zis/page-habit-zis-infaq'],
//         () => {
//             resolve(require('./habit-zis/page-habit-zis-infaq'))
//         }, 'habit-zis/page-habit-zis-infaq'
//     )
// }
//
// const PageHabitZisWaqaf = resolve => {
//     require.ensure(
//         ['./habit-zis/page-habit-zis-waqaf'],
//         () => {
//             resolve(require('./habit-zis/page-habit-zis-waqaf'))
//         }, 'habit-zis/page-habit-zis-waqaf'
//     )
// }
//
// const PageHabitZisZakatFitri = resolve => {
//     require.ensure(
//         ['./habit-zis/page-habit-zis-zakat-fitri'],
//         () => {
//             resolve(require('./habit-zis/page-habit-zis-zakat-fitri'))
//         }, 'habit-zis/page-habit-zis-zakat-fitri'
//     )
// }
//
// const PageHabitZisZakatMal = resolve => {
//     require.ensure(
//         ['./habit-zis/page-habit-zis-zakat-mal'],
//         () => {
//             resolve(require('./habit-zis/page-habit-zis-zakat-mal'))
//         }, 'habit-zis/page-habit-zis-zakat-mal'
//     )
// }

const PageHabitZisMal = resolve => {
    require.ensure(
        ['./page-habit-zis-mal'],
        () => {
            resolve(require('./page-habit-zis-mal'))
        }, 'page-habit-zis-mal'
    )
}

const PageHabitZisNonMal = resolve => {
    require.ensure(
        ['./page-habit-zis-non-mal'],
        () => {
            resolve(require('./page-habit-zis-non-mal'))
        }, 'page-habit-zis-non-mal'
    )
}

const PageHabitZisNew = resolve => {
    require.ensure(
        ['./page-habit-zis-new'],
        () => {
            resolve(require('./page-habit-zis-new'))
        }, 'page-habit-zis-new'
    )
}

const PageHabitPuasa = resolve => {
    require.ensure(
        ['./page-habit-puasa'],
        () => {
            resolve(require('./page-habit-puasa'))
        }, 'page-habit-puasa'
    )
}

const PageHabitPuasaNew = resolve => {
    require.ensure(
        ['./page-habit-puasa-new'],
        () => {
            resolve(require('./page-habit-puasa-new'))
        }, 'page-habit-puasa-new'
    )
}

Vue.component('PageHabitTadarusModal', PageHabitTadarusModal);
Vue.component('PageHabitAdab', PageHabitAdab);
Vue.component('PageHabitBerpikir', PageHabitBerpikir);
Vue.component('PageHabitSholat', PageHabitSholat);

Vue.component('PageHabitOrganisasiNew', PageHabitOrganisasiNew);
Vue.component('PageHabitOrganisasi', PageHabitOrganisasi);
Vue.component('PageHabitMajelis', PageHabitMajelis);
Vue.component('PageHabitMajelisNew', PageHabitMajelisNew);
Vue.component('PageHabitMembaca', PageHabitMembaca);
Vue.component('PageHabitMembacaNew', PageHabitMembacaNew);
Vue.component('PageHabitTadarusAlquran', PageHabitTadarusAlquran);
Vue.component('PageHabitTadarusIqra', PageHabitTadarusIqra);
Vue.component('PageHabitTadarusNew', PageHabitTadarusNew);

Vue.component('PageHabitZisMal', PageHabitZisMal);
Vue.component('PageHabitZisNonMal', PageHabitZisNonMal);
Vue.component('PageHabitZisNew', PageHabitZisNew);

Vue.component('PageHabitPuasa', PageHabitPuasa);
Vue.component('PageHabitPuasaNew', PageHabitPuasaNew);

// Vue.component('PageHabitZisSedekah', PageHabitZisSedekah);
// Vue.component('PageHabitZisInfaq', PageHabitZisInfaq);
// Vue.component('PageHabitZisWaqaf', PageHabitZisWaqaf);
// Vue.component('PageHabitZisZakatFitri', PageHabitZisZakatFitri);
// Vue.component('PageHabitZisZakatMal', PageHabitZisZakatMal);
// Vue.component('PageHabitZisNew', PageHabitZisNew);
