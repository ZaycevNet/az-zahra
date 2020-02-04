import Vue from 'nativescript-vue';

const OrganisasiItemCheckboxBasic = resolve => {
    require.ensure(
        ['./organisasi-item-checkbox-basic'],
        () => {
            resolve(require('./organisasi-item-checkbox-basic'))
        }, 'organisasi-item-checkbox-basic'
    )
};

const OrganisasiItemCheckboxReadonly = resolve => {
    require.ensure(
        ['./organisasi-item-checkbox-readonly'],
        () => {
            resolve(require('./organisasi-item-checkbox-readonly'))
        }, 'organisasi-item-checkbox-readonly'
    )
};

const OrganisasiItemTextbox = resolve => {
    require.ensure(
        ['./organisasi-item-textbox'],
        () => {
            resolve(require('./organisasi-item-textbox'))
        }, 'organisasi-item-textbox'
    )
};

const OrganisasiNewSubtitle = resolve => {
    require.ensure(
        ['./organisasi-new-subtitle'],
        () => {
            resolve(require('./organisasi-new-subtitle'))
        }, 'organisasi-new-subtitle'
    )
};

const OrganisasiSubtitle = resolve => {
    require.ensure(
        ['./organisasi-subtitle'],
        () => {
            resolve(require('./organisasi-subtitle'))
        }, 'organisasi-subtitle'
    )
};

const OrganisasiNewTextfield = resolve => {
    require.ensure(
        ['./organisasi-new-textfield'],
        () => {
            resolve(require('./organisasi-new-textfield'))
        }, 'organisasi-new-textfield'
    )
};

const OrganisasiNewTextview = resolve => {
    require.ensure(
        ['./organisasi-new-textview'],
        () => {
            resolve(require('./organisasi-new-textview'))
        }, 'organisasi-new-textview'
    )
};

const OrganisasiNewDropdownFloatLabel = resolve => {
    require.ensure(
        ['./organisasi-new-dropdown-float-label'],
        () => {
            resolve(require('./organisasi-new-dropdown-float-label'))
        }, 'organisasi-new-dropdown-float-label'
    )
};

const OrganisasiNewTimepicker = resolve => {
    require.ensure(
        ['./organisasi-new-timepicker'],
        () => {
            resolve(require('./organisasi-new-timepicker'))
        }, 'organisasi-new-timepicker'
    )
};

const OrganisasiNewDatepicker = resolve => {
    require.ensure(
        ['./organisasi-new-datepicker'],
        () => {
            resolve(require('./organisasi-new-datepicker'))
        }, 'organisasi-new-datepicker'
    )
};

const OrganisasiAccordion = resolve => {
    require.ensure(
        ['./organisasi-accordion'],
        () => {
            resolve(require('./organisasi-accordion'))
        }, 'organisasi-accordion'
    )
};

Vue.component('OrganisasiAccordion', OrganisasiAccordion);
Vue.component('OrganisasiItemCheckboxBasic', OrganisasiItemCheckboxBasic);
Vue.component('OrganisasiItemCheckboxReadonly', OrganisasiItemCheckboxReadonly);
Vue.component('OrganisasiItemTextbox', OrganisasiItemTextbox);
Vue.component('OrganisasiSubtitle', OrganisasiSubtitle);
Vue.component('OrganisasiNewSubtitle', OrganisasiNewSubtitle);
Vue.component('OrganisasiNewTextfield', OrganisasiNewTextfield);
Vue.component('OrganisasiNewTextview', OrganisasiNewTextview);
Vue.component('OrganisasiNewDropdownFloatLabel', OrganisasiNewDropdownFloatLabel);
Vue.component('OrganisasiNewTimepicker', OrganisasiNewTimepicker);
Vue.component('OrganisasiNewDatepicker', OrganisasiNewDatepicker);
