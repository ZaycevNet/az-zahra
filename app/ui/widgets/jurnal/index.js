import Vue from 'nativescript-vue';

const JurnalItemHabit = resolve => {
    require.ensure(
        ['./group-item-habit'],
        () => {
            resolve(require('./group-item-habit'))
        }, 'group-item-habit'
    )
};

const JurnalHeadline = resolve => {
    require.ensure(
        ['./group-headline'],
        () => {
            resolve(require('./group-headline'))
        }, 'group-headline'
    )
}

const JurnalPopupCalender = resolve => {
    require.ensure(
        ['./group-popup-calendar'],
        () => {
            resolve(require('./group-popup-calendar'))
        }, 'group-popup-calendar'
    )
};

const JurnalPopupRanking = resolve => {
    require.ensure(
        ['./group-popup-ranking'],
        () => {
            resolve(require('./group-popup-ranking'))
        }, 'group-popup-ranking'
    )
};

const JurnalPopupFilter = resolve => {
    require.ensure(
        ['./group-popup-filter'],
        () => {
            resolve(require('./group-popup-filter'))
        }, 'group-popup-filter'
    )
};

const JurnalPopupCalenderSiswa = resolve => {
    require.ensure(
        ['./group-popup-calendar-siswa'],
        () => {
            resolve(require('./group-popup-calendar-siswa'))
        }, 'group-popup-calendar-siswa'
    )
};

const JurnalPopupRankingSiswa = resolve => {
    require.ensure(
        ['./group-popup-ranking-siswa'],
        () => {
            resolve(require('./group-popup-ranking-siswa'))
        }, 'group-popup-ranking-siswa'
    )
};

const JurnalPopupFilterSiswa = resolve => {
    require.ensure(
        ['./group-popup-filter-siswa'],
        () => {
            resolve(require('./group-popup-filter-siswa'))
        }, 'group-popup-filter-siswa'
    )
};

const JurnalSegmentedCalendar = resolve => {
    require.ensure(
        ['./group-segmented-calendar'],
        () => {
            resolve(require('./group-segmented-calendar'))
        }, 'group-segmented-calendar'
    )
};

Vue.component('JurnalSegmentedCalendar', JurnalSegmentedCalendar);
Vue.component('JurnalHeadline', JurnalHeadline);

Vue.component('JurnalItemHabit', JurnalItemHabit);
Vue.component('JurnalPopupCalender', JurnalPopupCalender);
Vue.component('JurnalPopupRanking', JurnalPopupRanking);
Vue.component('JurnalPopupCalenderSiswa', JurnalPopupCalenderSiswa);
Vue.component('JurnalPopupRankingSiswa', JurnalPopupRankingSiswa);
Vue.component('JurnalPopupFilter', JurnalPopupFilter);
Vue.component('JurnalPopupFilterSiswa', JurnalPopupFilterSiswa);
