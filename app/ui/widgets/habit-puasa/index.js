import Vue from 'nativescript-vue';

const PuasaItemCheckboxBasic = resolve => {
    require.ensure(
        ['./puasa-item-checkbox-basic'],
        () => {
            resolve(require('./puasa-item-checkbox-basic'))
        }, 'puasa-item-checkbox-basic'
    )
};

const PuasaItemCheckboxReadonly = resolve => {
    require.ensure(
        ['./puasa-item-checkbox-readonly'],
        () => {
            resolve(require('./puasa-item-checkbox-readonly'))
        }, 'puasa-item-checkbox-readonly'
    )
};


const PuasaHeadline = resolve => {
    require.ensure(
        ['./puasa-headline'],
        () => {
            resolve(require('./puasa-headline'))
        }, 'puasa-headline'
    )
}

const PuasaItemTextbox = resolve => {
    require.ensure(
        ['./puasa-item-textbox'],
        () => {
            resolve(require('./puasa-item-textbox'))
        }, 'puasa-item-textbox'
    )
};

const PuasaNewSubtitle = resolve => {
    require.ensure(
        ['./puasa-new-subtitle'],
        () => {
            resolve(require('./puasa-new-subtitle'))
        }, 'puasa-new-subtitle'
    )
};

const PuasaSubtitle = resolve => {
    require.ensure(
        ['./puasa-subtitle'],
        () => {
            resolve(require('./puasa-subtitle'))
        }, 'puasa-subtitle'
    )
};

const PuasaNewTextfield = resolve => {
    require.ensure(
        ['./puasa-new-textfield'],
        () => {
            resolve(require('./puasa-new-textfield'))
        }, 'puasa-new-textfield'
    )
};

const PuasaNewTextview = resolve => {
    require.ensure(
        ['./puasa-new-textview'],
        () => {
            resolve(require('./puasa-new-textview'))
        }, 'puasa-new-textview'
    )
};

const PuasaNewDropdownFloatLabel = resolve => {
    require.ensure(
        ['./puasa-new-dropdown-float-label'],
        () => {
            resolve(require('./puasa-new-dropdown-float-label'))
        }, 'puasa-new-dropdown-float-label'
    )
};

const PuasaNewTimepicker = resolve => {
    require.ensure(
        ['./puasa-new-timepicker'],
        () => {
            resolve(require('./puasa-new-timepicker'))
        }, 'puasa-new-timepicker'
    )
};

const PuasaNewDatepicker = resolve => {
    require.ensure(
        ['./puasa-new-datepicker'],
        () => {
            resolve(require('./puasa-new-datepicker'))
        }, 'puasa-new-datepicker'
    )
};

const PuasaAccordion = resolve => {
    require.ensure(
        ['./puasa-accordion'],
        () => {
            resolve(require('./puasa-accordion'))
        }, 'puasa-accordion'
    )
};

const PuasaNewRadio = resolve => {
    require.ensure(
        ['./puasa-new-radio'],
        () => {
            resolve(require('./puasa-new-radio'))
        }, 'puasa-new-radio'
    )
};

const PuasaNewSegmented = resolve => {
    require.ensure(
        ['./puasa-new-segmented'],
        () => {
            resolve(require('./puasa-new-segmented'))
        }, 'puasa-new-segmented'
    )
};

const PuasaNewStepper = resolve => {
    require.ensure(
        ['./puasa-new-stepper'],
        () => {
            resolve(require('./puasa-new-stepper'))
        }, 'puasa-new-stepper'
    )
};

const PuasaModal = resolve => {
    require.ensure(
        ['./puasa-modal'],
        () => {
            resolve(require('./puasa-modal'))
        }, 'puasa-modal'
    )
};

Vue.component('PuasaModal', PuasaModal);
Vue.component('PuasaNewStepper', PuasaNewStepper);
Vue.component('PuasaNewSegmented', PuasaNewSegmented);
Vue.component('PuasaNewRadio', PuasaNewRadio);
Vue.component('PuasaAccordion', PuasaAccordion);
Vue.component('PuasaHeadline', PuasaHeadline);
Vue.component('PuasaItemTextbox', PuasaItemTextbox);
Vue.component('PuasaSubtitle', PuasaSubtitle);
Vue.component('PuasaNewSubtitle', PuasaNewSubtitle);
Vue.component('PuasaNewTextfield', PuasaNewTextfield);
Vue.component('PuasaNewTextview', PuasaNewTextview);
Vue.component('PuasaNewDropdownFloatLabel', PuasaNewDropdownFloatLabel);
Vue.component('PuasaNewTimepicker', PuasaNewTimepicker);
Vue.component('PuasaNewDatepicker', PuasaNewDatepicker);
Vue.component('PuasaItemCheckboxBasic', PuasaItemCheckboxBasic);
Vue.component('PuasaItemCheckboxReadonly', PuasaItemCheckboxReadonly);
