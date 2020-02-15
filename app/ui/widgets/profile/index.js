import Vue from 'nativescript-vue';

const ProfileItemCheckboxBasic = resolve => {
    require.ensure(
        ['./profile-item-checkbox-basic'],
        () => {
            resolve(require('./profile-item-checkbox-basic'))
        }, 'profile-item-checkbox-basic'
    )
};

const ProfileItemCheckboxReadonly = resolve => {
    require.ensure(
        ['./profile-item-checkbox-readonly'],
        () => {
            resolve(require('./profile-item-checkbox-readonly'))
        }, 'profile-item-checkbox-readonly'
    )
};


const ProfileHeadline = resolve => {
    require.ensure(
        ['./profile-headline'],
        () => {
            resolve(require('./profile-headline'))
        }, 'profile-headline'
    )
}

const ProfileItemTextbox = resolve => {
    require.ensure(
        ['./profile-item-textbox'],
        () => {
            resolve(require('./profile-item-textbox'))
        }, 'profile-item-textbox'
    )
};


const ProfileItemHabit = resolve => {
    require.ensure(
        ['./profile-item-habit'],
        () => {
            resolve(require('./profile-item-habit'))
        }, 'profile-item-habit'
    )
};

const ProfileNewSubtitle = resolve => {
    require.ensure(
        ['./profile-new-subtitle'],
        () => {
            resolve(require('./profile-new-subtitle'))
        }, 'profile-new-subtitle'
    )
};

const ProfileSubtitle = resolve => {
    require.ensure(
        ['./profile-subtitle'],
        () => {
            resolve(require('./profile-subtitle'))
        }, 'profile-subtitle'
    )
};

const ProfileNewTextfield = resolve => {
    require.ensure(
        ['./profile-new-textfield'],
        () => {
            resolve(require('./profile-new-textfield'))
        }, 'profile-new-textfield'
    )
};

const ProfileNewTextview = resolve => {
    require.ensure(
        ['./profile-new-textview'],
        () => {
            resolve(require('./profile-new-textview'))
        }, 'profile-new-textview'
    )
};

const ProfileNewDropdownFloatLabel = resolve => {
    require.ensure(
        ['./profile-new-dropdown-float-label'],
        () => {
            resolve(require('./profile-new-dropdown-float-label'))
        }, 'profile-new-dropdown-float-label'
    )
};

const ProfileNewTimepicker = resolve => {
    require.ensure(
        ['./profile-new-timepicker'],
        () => {
            resolve(require('./profile-new-timepicker'))
        }, 'profile-new-timepicker'
    )
};

const ProfileNewDatepicker = resolve => {
    require.ensure(
        ['./profile-new-datepicker'],
        () => {
            resolve(require('./profile-new-datepicker'))
        }, 'profile-new-datepicker'
    )
};

const ProfileNewDatepickerTanggallahir = resolve => {
    require.ensure(
        ['./profile-new-datepicker-tanggallahir'],
        () => {
            resolve(require('./profile-new-datepicker-tanggallahir'))
        }, 'profile-new-datepicker-tanggallahir'
    )
};

const ProfileAccordion = resolve => {
    require.ensure(
        ['./profile-accordion'],
        () => {
            resolve(require('./profile-accordion'))
        }, 'profile-accordion'
    )
};

const ProfileNewRadioGender = resolve => {
    require.ensure(
        ['./profile-new-radio-gender'],
        () => {
            resolve(require('./profile-new-radio-gender'))
        }, 'profile-new-radio-gender'
    )
};

const ProfileNewSegmented = resolve => {
    require.ensure(
        ['./profile-new-segmented'],
        () => {
            resolve(require('./profile-new-segmented'))
        }, 'profile-new-segmented'
    )
};

const ProfileNewStepper = resolve => {
    require.ensure(
        ['./profile-new-stepper'],
        () => {
            resolve(require('./profile-new-stepper'))
        }, 'profile-new-stepper'
    )
};

const ProfileModal = resolve => {
    require.ensure(
        ['./profile-modal'],
        () => {
            resolve(require('./profile-modal'))
        }, 'profile-modal'
    )
};

Vue.component('ProfileModal', ProfileModal);
Vue.component('ProfileNewStepper', ProfileNewStepper);
Vue.component('ProfileNewSegmented', ProfileNewSegmented);
Vue.component('ProfileNewRadioGender', ProfileNewRadioGender);
Vue.component('ProfileAccordion', ProfileAccordion);
Vue.component('ProfileHeadline', ProfileHeadline);
Vue.component('ProfileItemTextbox', ProfileItemTextbox);
Vue.component('ProfileItemHabit', ProfileItemHabit);
Vue.component('ProfileSubtitle', ProfileSubtitle);
Vue.component('ProfileNewSubtitle', ProfileNewSubtitle);
Vue.component('ProfileNewTextfield', ProfileNewTextfield);
Vue.component('ProfileNewTextview', ProfileNewTextview);
Vue.component('ProfileNewDropdownFloatLabel', ProfileNewDropdownFloatLabel);
Vue.component('ProfileNewTimepicker', ProfileNewTimepicker);
Vue.component('ProfileNewDatepicker', ProfileNewDatepicker);
Vue.component('ProfileNewDatepickerTanggallahir', ProfileNewDatepickerTanggallahir);
Vue.component('ProfileItemCheckboxBasic', ProfileItemCheckboxBasic);
Vue.component('ProfileItemCheckboxReadonly', ProfileItemCheckboxReadonly);
