import Vue from 'nativescript-vue';

const TadarusItemCheckboxBasic = resolve => {
    require.ensure(
        ['./tadarus-item-checkbox-basic'],
        () => {
            resolve(require('./tadarus-item-checkbox-basic'))
        }, 'tadarus-item-checkbox-basic'
    )
};

const TadarusItemCheckboxReadonly = resolve => {
    require.ensure(
        ['./tadarus-item-checkbox-readonly'],
        () => {
            resolve(require('./tadarus-item-checkbox-readonly'))
        }, 'tadarus-item-checkbox-readonly'
    )
};


const TadarusHeadline = resolve => {
    require.ensure(
        ['./tadarus-headline'],
        () => {
            resolve(require('./tadarus-headline'))
        }, 'tadarus-headline'
    )
}

const TadarusItemTextbox = resolve => {
    require.ensure(
        ['./tadarus-item-textbox'],
        () => {
            resolve(require('./tadarus-item-textbox'))
        }, 'tadarus-item-textbox'
    )
};

const TadarusNewSubtitle = resolve => {
    require.ensure(
        ['./tadarus-new-subtitle'],
        () => {
            resolve(require('./tadarus-new-subtitle'))
        }, 'tadarus-new-subtitle'
    )
};

const TadarusSubtitle = resolve => {
    require.ensure(
        ['./tadarus-subtitle'],
        () => {
            resolve(require('./tadarus-subtitle'))
        }, 'tadarus-subtitle'
    )
};

const TadarusNewTextfield = resolve => {
    require.ensure(
        ['./tadarus-new-textfield'],
        () => {
            resolve(require('./tadarus-new-textfield'))
        }, 'tadarus-new-textfield'
    )
};

const TadarusNewTextview = resolve => {
    require.ensure(
        ['./tadarus-new-textview'],
        () => {
            resolve(require('./tadarus-new-textview'))
        }, 'tadarus-new-textview'
    )
};

const TadarusNewDropdownFloatLabelSurat = resolve => {
    require.ensure(
        ['./tadarus-new-dropdown-float-label-surat'],
        () => {
            resolve(require('./tadarus-new-dropdown-float-label-surat'))
        }, 'tadarus-new-dropdown-float-label-surat'
    )
};

const TadarusNewDropdownFloatLabel = resolve => {
    require.ensure(
        ['./tadarus-new-dropdown-float-label'],
        () => {
            resolve(require('./tadarus-new-dropdown-float-label'))
        }, 'tadarus-new-dropdown-float-label'
    )
};

const TadarusNewTimepicker = resolve => {
    require.ensure(
        ['./tadarus-new-timepicker'],
        () => {
            resolve(require('./tadarus-new-timepicker'))
        }, 'tadarus-new-timepicker'
    )
};

const TadarusNewDatepicker = resolve => {
    require.ensure(
        ['./tadarus-new-datepicker'],
        () => {
            resolve(require('./tadarus-new-datepicker'))
        }, 'tadarus-new-datepicker'
    )
};

const TadarusAccordion = resolve => {
    require.ensure(
        ['./tadarus-accordion'],
        () => {
            resolve(require('./tadarus-accordion'))
        }, 'tadarus-accordion'
    )
};

const TadarusNewRadio = resolve => {
    require.ensure(
        ['./tadarus-new-radio'],
        () => {
            resolve(require('./tadarus-new-radio'))
        }, 'tadarus-new-radio'
    )
};

const TadarusNewSegmented = resolve => {
    require.ensure(
        ['./tadarus-new-segmented'],
        () => {
            resolve(require('./tadarus-new-segmented'))
        }, 'tadarus-new-segmented'
    )
};

const TadarusNewStepper = resolve => {
    require.ensure(
        ['./tadarus-new-stepper'],
        () => {
            resolve(require('./tadarus-new-stepper'))
        }, 'tadarus-new-stepper'
    )
};

const TadarusModal = resolve => {
    require.ensure(
        ['./tadarus-modal'],
        () => {
            resolve(require('./tadarus-modal'))
        }, 'tadarus-modal'
    )
};

Vue.component('TadarusModal', TadarusModal);
Vue.component('TadarusNewStepper', TadarusNewStepper);
Vue.component('TadarusNewSegmented', TadarusNewSegmented);
Vue.component('TadarusNewRadio', TadarusNewRadio);
Vue.component('TadarusAccordion', TadarusAccordion);
Vue.component('TadarusHeadline', TadarusHeadline);
Vue.component('TadarusItemTextbox', TadarusItemTextbox);
Vue.component('TadarusSubtitle', TadarusSubtitle);
Vue.component('TadarusNewSubtitle', TadarusNewSubtitle);
Vue.component('TadarusNewTextfield', TadarusNewTextfield);
Vue.component('TadarusNewTextview', TadarusNewTextview);
Vue.component('TadarusNewDropdownFloatLabel', TadarusNewDropdownFloatLabel);
Vue.component('TadarusNewDropdownFloatLabelSurat', TadarusNewDropdownFloatLabelSurat);
Vue.component('TadarusNewTimepicker', TadarusNewTimepicker);
Vue.component('TadarusNewDatepicker', TadarusNewDatepicker);
Vue.component('TadarusItemCheckboxBasic', TadarusItemCheckboxBasic);
Vue.component('TadarusItemCheckboxReadonly', TadarusItemCheckboxReadonly);
