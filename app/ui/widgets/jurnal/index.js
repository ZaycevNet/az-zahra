import Vue from 'nativescript-vue';

const JurnalItemHabit = resolve => {
    require.ensure(
        ['./jurnal-item-habit'],
        () => {
            resolve(require('./jurnal-item-habit'))
        }, 'jurnal-item-habit'
    )
};

const JurnalMiniProfile = resolve => {
    require.ensure(
        ['./jurnal-mini-profile'],
        () => {
            resolve(require('./jurnal-mini-profile'))
        }, 'jurnal-mini-profile'
    )
}

const JurnalPopupCalender = resolve => {
    require.ensure(
        ['./jurnal-popup-calendar'],
        () => {
            resolve(require('./jurnal-popup-calendar'))
        }, 'jurnal-popup-calendar'
    )
};

const JurnalPopupRanking = resolve => {
    require.ensure(
        ['./jurnal-popup-ranking'],
        () => {
            resolve(require('./jurnal-popup-ranking'))
        }, 'jurnal-popup-ranking'
    )
};

const JurnalPopupFilter = resolve => {
    require.ensure(
        ['./jurnal-popup-filter'],
        () => {
            resolve(require('./jurnal-popup-filter'))
        }, 'jurnal-popup-filter'
    )
};

const JurnalPopupCalenderSiswa = resolve => {
    require.ensure(
        ['./jurnal-popup-calendar-siswa'],
        () => {
            resolve(require('./jurnal-popup-calendar-siswa'))
        }, 'jurnal-popup-calendar-siswa'
    )
};

const JurnalPopupRankingSiswa = resolve => {
    require.ensure(
        ['./jurnal-popup-ranking-siswa'],
        () => {
            resolve(require('./jurnal-popup-ranking-siswa'))
        }, 'jurnal-popup-ranking-siswa'
    )
};

const JurnalPopupFilterSiswa = resolve => {
    require.ensure(
        ['./jurnal-popup-filter-siswa'],
        () => {
            resolve(require('./jurnal-popup-filter-siswa'))
        }, 'jurnal-popup-filter-siswa'
    )
};

const JurnalSegmentedCalendar = resolve => {
    require.ensure(
        ['./jurnal-segmented-calendar'],
        () => {
            resolve(require('./jurnal-segmented-calendar'))
        }, 'jurnal-segmented-calendar'
    )
};

const JurnalSubtitleCalendar = resolve => {
    require.ensure(
        ['./jurnal-subtitle-calendar'],
        () => {
            resolve(require('./jurnal-subtitle-calendar'))
        }, 'jurnal-subtitle-calendar'
    )
};

Vue.component('JurnalSegmentedCalendar', JurnalSegmentedCalendar);
Vue.component('JurnalMiniProfile', JurnalMiniProfile);
Vue.component('JurnalSubtitleCalendar', JurnalSubtitleCalendar);

Vue.component('JurnalItemHabit', JurnalItemHabit);
Vue.component('JurnalPopupCalender', JurnalPopupCalender);
Vue.component('JurnalPopupRanking', JurnalPopupRanking);
Vue.component('JurnalPopupCalenderSiswa', JurnalPopupCalenderSiswa);
Vue.component('JurnalPopupRankingSiswa', JurnalPopupRankingSiswa);
Vue.component('JurnalPopupFilter', JurnalPopupFilter);
Vue.component('JurnalPopupFilterSiswa', JurnalPopupFilterSiswa);
