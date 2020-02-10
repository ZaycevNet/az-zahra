import Vue from 'nativescript-vue';

const ZisItemCheckboxBasic = resolve => {
    require.ensure(
        ['./zis-item-checkbox-basic'],
        () => {
            resolve(require('./zis-item-checkbox-basic'))
        }, 'zis-item-checkbox-basic'
    )
};

const ZisItemCheckboxReadonly = resolve => {
    require.ensure(
        ['./zis-item-checkbox-readonly'],
        () => {
            resolve(require('./zis-item-checkbox-readonly'))
        }, 'zis-item-checkbox-readonly'
    )
};


const ZisHeadline = resolve => {
    require.ensure(
        ['./zis-headline'],
        () => {
            resolve(require('./zis-headline'))
        }, 'zis-headline'
    )
}

const ZisItemTextbox = resolve => {
    require.ensure(
        ['./zis-item-textbox'],
        () => {
            resolve(require('./zis-item-textbox'))
        }, 'zis-item-textbox'
    )
};

const ZisNewSubtitle = resolve => {
    require.ensure(
        ['./zis-new-subtitle'],
        () => {
            resolve(require('./zis-new-subtitle'))
        }, 'zis-new-subtitle'
    )
};

const ZisSubtitle = resolve => {
    require.ensure(
        ['./zis-subtitle'],
        () => {
            resolve(require('./zis-subtitle'))
        }, 'zis-subtitle'
    )
};

const ZisNewTextfield = resolve => {
    require.ensure(
        ['./zis-new-textfield'],
        () => {
            resolve(require('./zis-new-textfield'))
        }, 'zis-new-textfield'
    )
};

const ZisNewTextview = resolve => {
    require.ensure(
        ['./zis-new-textview'],
        () => {
            resolve(require('./zis-new-textview'))
        }, 'zis-new-textview'
    )
};

const ZisNewDropdownFloatLabel = resolve => {
    require.ensure(
        ['./zis-new-dropdown-float-label'],
        () => {
            resolve(require('./zis-new-dropdown-float-label'))
        }, 'zis-new-dropdown-float-label'
    )
};

const ZisNewTimepicker = resolve => {
    require.ensure(
        ['./zis-new-timepicker'],
        () => {
            resolve(require('./zis-new-timepicker'))
        }, 'zis-new-timepicker'
    )
};

const ZisNewDatepicker = resolve => {
    require.ensure(
        ['./zis-new-datepicker'],
        () => {
            resolve(require('./zis-new-datepicker'))
        }, 'zis-new-datepicker'
    )
};

const ZisAccordion = resolve => {
    require.ensure(
        ['./zis-accordion'],
        () => {
            resolve(require('./zis-accordion'))
        }, 'zis-accordion'
    )
};

const ZisNewRadio = resolve => {
    require.ensure(
        ['./zis-new-radio'],
        () => {
            resolve(require('./zis-new-radio'))
        }, 'zis-new-radio'
    )
};

const ZisNewSegmented = resolve => {
    require.ensure(
        ['./zis-new-segmented'],
        () => {
            resolve(require('./zis-new-segmented'))
        }, 'zis-new-segmented'
    )
};

const ZisNewSegmentedPerantara = resolve => {
    require.ensure(
        ['./zis-new-segmented-perantara'],
        () => {
            resolve(require('./zis-new-segmented-perantara'))
        }, 'zis-new-segmented-perantara'
    )
};

const ZisNewStepper = resolve => {
    require.ensure(
        ['./zis-new-stepper'],
        () => {
            resolve(require('./zis-new-stepper'))
        }, 'zis-new-stepper'
    )
};

const ZisModal = resolve => {
    require.ensure(
        ['./zis-modal'],
        () => {
            resolve(require('./zis-modal'))
        }, 'zis-modal'
    )
};

Vue.component('ZisModal', ZisModal);
Vue.component('ZisNewStepper', ZisNewStepper);
Vue.component('ZisNewSegmented', ZisNewSegmented);
Vue.component('ZisNewSegmentedPerantara', ZisNewSegmentedPerantara);
Vue.component('ZisNewRadio', ZisNewRadio);
Vue.component('ZisAccordion', ZisAccordion);
Vue.component('ZisHeadline', ZisHeadline);
Vue.component('ZisItemTextbox', ZisItemTextbox);
Vue.component('ZisSubtitle', ZisSubtitle);
Vue.component('ZisNewSubtitle', ZisNewSubtitle);
Vue.component('ZisNewTextfield', ZisNewTextfield);
Vue.component('ZisNewTextview', ZisNewTextview);
Vue.component('ZisNewDropdownFloatLabel', ZisNewDropdownFloatLabel);
Vue.component('ZisNewTimepicker', ZisNewTimepicker);
Vue.component('ZisNewDatepicker', ZisNewDatepicker);
Vue.component('ZisItemCheckboxBasic', ZisItemCheckboxBasic);
Vue.component('ZisItemCheckboxReadonly', ZisItemCheckboxReadonly);
