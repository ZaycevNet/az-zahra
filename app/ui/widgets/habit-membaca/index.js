import Vue from 'nativescript-vue';

const MembacaHeadline = resolve => {
    require.ensure(
        ['./membaca-headline'],
        () => {
            resolve(require('./membaca-headline'))
        }, 'membaca-headline'
    )
}

const MembacaItemTextbox = resolve => {
    require.ensure(
        ['./membaca-item-textbox'],
        () => {
            resolve(require('./membaca-item-textbox'))
        }, 'membaca-item-textbox'
    )
};

const MembacaNewSubtitle = resolve => {
    require.ensure(
        ['./membaca-new-subtitle'],
        () => {
            resolve(require('./membaca-new-subtitle'))
        }, 'membaca-new-subtitle'
    )
};

const MembacaSubtitle = resolve => {
    require.ensure(
        ['./membaca-subtitle'],
        () => {
            resolve(require('./membaca-subtitle'))
        }, 'membaca-subtitle'
    )
};

const MembacaNewTextfield = resolve => {
    require.ensure(
        ['./membaca-new-textfield'],
        () => {
            resolve(require('./membaca-new-textfield'))
        }, 'membaca-new-textfield'
    )
};

const MembacaNewTextview = resolve => {
    require.ensure(
        ['./membaca-new-textview'],
        () => {
            resolve(require('./membaca-new-textview'))
        }, 'membaca-new-textview'
    )
};


const MembacaNewDropdownFloatLabel = resolve => {
    require.ensure(
        ['./membaca-new-dropdown-float-label'],
        () => {
            resolve(require('./membaca-new-dropdown-float-label'))
        }, 'membaca-new-dropdown-float-label'
    )
};

const MembacaNewTimepicker = resolve => {
    require.ensure(
        ['./membaca-new-timepicker'],
        () => {
            resolve(require('./membaca-new-timepicker'))
        }, 'membaca-new-timepicker'
    )
};

const MembacaNewDatepicker = resolve => {
    require.ensure(
        ['./membaca-new-datepicker'],
        () => {
            resolve(require('./membaca-new-datepicker'))
        }, 'membaca-new-datepicker'
    )
};

const MembacaAccordion = resolve => {
    require.ensure(
        ['./membaca-accordion'],
        () => {
            resolve(require('./membaca-accordion'))
        }, 'membaca-accordion'
    )
};

const MembacaNewRadio = resolve => {
    require.ensure(
        ['./membaca-new-radio'],
        () => {
            resolve(require('./membaca-new-radio'))
        }, 'membaca-new-radio'
    )
};

const MembacaNewSegmented = resolve => {
    require.ensure(
        ['./membaca-new-segmented'],
        () => {
            resolve(require('./membaca-new-segmented'))
        }, 'membaca-new-segmented'
    )
};

Vue.component('MembacaNewSegmented', MembacaNewSegmented);
Vue.component('MembacaNewRadio', MembacaNewRadio);
Vue.component('MembacaAccordion', MembacaAccordion);
Vue.component('MembacaHeadline', MembacaHeadline);
Vue.component('MembacaItemTextbox', MembacaItemTextbox);
Vue.component('MembacaSubtitle', MembacaSubtitle);
Vue.component('MembacaNewSubtitle', MembacaNewSubtitle);
Vue.component('MembacaNewTextfield', MembacaNewTextfield);
Vue.component('MembacaNewTextview', MembacaNewTextview);
Vue.component('MembacaNewDropdownFloatLabel', MembacaNewDropdownFloatLabel);
Vue.component('MembacaNewTimepicker', MembacaNewTimepicker);
Vue.component('MembacaNewDatepicker', MembacaNewDatepicker);
