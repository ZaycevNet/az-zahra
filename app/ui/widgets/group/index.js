import Vue from 'nativescript-vue';

const GroupItemHabit = resolve => {
    require.ensure(
        ['./group-item-habit'],
        () => {
            resolve(require('./group-item-habit'))
        }, 'group-item-habit'
    )
};

const GroupHeadline = resolve => {
    require.ensure(
        ['./group-headline'],
        () => {
            resolve(require('./group-headline'))
        }, 'group-headline'
    )
}

const GroupHeadlineHasilDetail = resolve => {
    require.ensure(
        ['./group-headline-hasil-detail'],
        () => {
            resolve(require('./group-headline-hasil-detail'))
        }, 'group-headline-hasil-detail'
    )
}

const GroupHeadlineSKM = resolve => {
    require.ensure(
        ['./group-headline-skm'],
        () => {
            resolve(require('./group-headline-skm'))
        }, 'group-headline-skm'
    )
}
const GroupHeadlineHasil = resolve => {
    require.ensure(
        ['./group-headline-hasil'],
        () => {
            resolve(require('./group-headline-hasil'))
        }, 'group-headline-hasil'
    )
}
const GroupHeadlineAnggota = resolve => {
    require.ensure(
        ['./group-headline-anggota'],
        () => {
            resolve(require('./group-headline-anggota'))
        }, 'group-headline-anggota'
    )
}
const GroupItemTextbox = resolve => {
    require.ensure(
        ['./group-item-textbox'],
        () => {
            resolve(require('./group-item-textbox'))
        }, 'group-item-textbox'
    )
};

// const GroupNewSubtitle = resolve => {
//     require.ensure(
//         ['./group-new-subtitle'],
//         () => {
//             resolve(require('./group-new-subtitle'))
//         }, 'group-new-subtitle'
//     )
// };

const GroupSubtitle = resolve => {
    require.ensure(
        ['./group-subtitle'],
        () => {
            resolve(require('./group-subtitle'))
        }, 'group-subtitle'
    )
};

const GroupNewTextfield = resolve => {
    require.ensure(
        ['./group-new-textfield'],
        () => {
            resolve(require('./group-new-textfield'))
        }, 'group-new-textfield'
    )
};

// const GroupNewTextview = resolve => {
//     require.ensure(
//         ['./group-new-textview'],
//         () => {
//             resolve(require('./group-new-textview'))
//         }, 'group-new-textview'
//     )
// };

const GroupNewTextviewSKM = resolve => {
    require.ensure(
        ['./group-new-textview-skm'],
        () => {
            resolve(require('./group-new-textview-skm'))
        }, 'group-new-textview-skm'
    )
};


// const GroupNewDropdownFloatLabel = resolve => {
//     require.ensure(
//         ['./group-new-dropdown-float-label'],
//         () => {
//             resolve(require('./group-new-dropdown-float-label'))
//         }, 'group-new-dropdown-float-label'
//     )
// };


const GroupPopupCalender = resolve => {
    require.ensure(
        ['./group-popup-calendar'],
        () => {
            resolve(require('./group-popup-calendar'))
        }, 'group-popup-calendar'
    )
};

const GroupPopupRanking = resolve => {
    require.ensure(
        ['./group-popup-ranking'],
        () => {
            resolve(require('./group-popup-ranking'))
        }, 'group-popup-ranking'
    )
};

const GroupPopupFilter = resolve => {
    require.ensure(
        ['./group-popup-filter'],
        () => {
            resolve(require('./group-popup-filter'))
        }, 'group-popup-filter'
    )
};

const GroupPopupCalenderDetail = resolve => {
    require.ensure(
        ['./group-popup-calendar-detail'],
        () => {
            resolve(require('./group-popup-calendar-detail'))
        }, 'group-popup-calendar-detail'
    )
};

const GroupPopupRankingDetail = resolve => {
    require.ensure(
        ['./group-popup-ranking-detail'],
        () => {
            resolve(require('./group-popup-ranking-detail'))
        }, 'group-popup-ranking-detail'
    )
};

const GroupPopupFilterDetail = resolve => {
    require.ensure(
        ['./group-popup-filter-detail'],
        () => {
            resolve(require('./group-popup-filter-detail'))
        }, 'group-popup-filter-detail'
    )
};
//
// const GroupNewTimepicker = resolve => {
//     require.ensure(
//         ['./group-new-timepicker'],
//         () => {
//             resolve(require('./group-new-timepicker'))
//         }, 'group-new-timepicker'
//     )
// };

// const GroupNewDatepicker = resolve => {
//     require.ensure(
//         ['./group-new-datepicker'],
//         () => {
//             resolve(require('./group-new-datepicker'))
//         }, 'group-new-datepicker'
//     )
// };

const GroupAccordion = resolve => {
    require.ensure(
        ['./group-accordion'],
        () => {
            resolve(require('./group-accordion'))
        }, 'group-accordion'
    )
};

// const GroupNewRadio = resolve => {
//     require.ensure(
//         ['./group-new-radio'],
//         () => {
//             resolve(require('./group-new-radio'))
//         }, 'group-new-radio'
//     )
// };

const GroupSegmentedCalendar = resolve => {
    require.ensure(
        ['./group-segmented-calendar'],
        () => {
            resolve(require('./group-segmented-calendar'))
        }, 'group-segmented-calendar'
    )
};

const GroupButtonConfirm = resolve => {
    require.ensure(
        ['./group-button-confirm'],
        () => {
            resolve(require('./group-button-confirm'))
        }, 'group-button-confirm'
    )
};

const GroupMiniProfile = resolve => {
    require.ensure(
        ['./group-mini-profile'],
        () => {
            resolve(require('./group-mini-profile'))
        }, 'group-mini-profile'
    )
}

Vue.component('GroupButtonConfirm', GroupButtonConfirm);
Vue.component('GroupSegmentedCalendar', GroupSegmentedCalendar);
Vue.component('GroupMiniProfile', GroupMiniProfile);
Vue.component('GroupAccordion', GroupAccordion);
Vue.component('GroupHeadline', GroupHeadline);
Vue.component('GroupHeadlineHasilDetail', GroupHeadlineHasilDetail);
Vue.component('GroupHeadlineSKM', GroupHeadlineSKM);
Vue.component('GroupHeadlineHasil', GroupHeadlineHasil);
Vue.component('GroupHeadlineAnggota', GroupHeadlineAnggota);
Vue.component('GroupItemTextbox', GroupItemTextbox);
Vue.component('GroupItemHabit', GroupItemHabit);
Vue.component('GroupSubtitle', GroupSubtitle);
// Vue.component('GroupNewSubtitle', GroupNewSubtitle);
Vue.component('GroupNewTextfield', GroupNewTextfield);
// Vue.component('GroupNewTextview', GroupNewTextview);
Vue.component('GroupNewTextviewSKM', GroupNewTextviewSKM);
// Vue.component('GroupNewDropdownFloatLabel', GroupNewDropdownFloatLabel);
Vue.component('GroupPopupCalender', GroupPopupCalender);
Vue.component('GroupPopupRanking', GroupPopupRanking);
Vue.component('GroupPopupCalenderDetail', GroupPopupCalenderDetail);
Vue.component('GroupPopupRankingDetail', GroupPopupRankingDetail);
Vue.component('GroupPopupFilter', GroupPopupFilter);
Vue.component('GroupPopupFilterDetail', GroupPopupFilterDetail);
// Vue.component('GroupNewTimepicker', GroupNewTimepicker);
// Vue.component('GroupNewDatepicker', GroupNewDatepicker);
