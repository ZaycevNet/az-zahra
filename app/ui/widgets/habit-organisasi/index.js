import Vue from 'nativescript-vue';

const OrganisasiItemCheckbox = resolve => {
    require.ensure(
        ['./organisasi-item-checkbox'],
        () => {
            resolve(require('./organisasi-item-checkbox'))
        }, 'organisasi-item-checkbox'
    )
};

const OrganisasiNewSubtitle = resolve => {
    require.ensure(
        ['./organisasi-new-subtitle'],
        () => {
            resolve(require('./organisasi-new-subtitle'))
        }, 'organisasi-new-checkbox'
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

const OrganisasiNewDropdown = resolve => {
    require.ensure(
        ['./organisasi-new-dropdown'],
        () => {
            resolve(require('./organisasi-new-dropdown'))
        }, 'organisasi-new-dropdown'
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

Vue.component('OrganisasiItemCheckbox', OrganisasiItemCheckbox);
Vue.component('OrganisasiNewSubtitle', OrganisasiNewSubtitle);
Vue.component('OrganisasiNewTextfield', OrganisasiNewTextfield);
Vue.component('OrganisasiNewTextview', OrganisasiNewTextview);
Vue.component('OrganisasiNewDropdown', OrganisasiNewDropdown);
Vue.component('OrganisasiNewDropdownFloatLabel', OrganisasiNewDropdownFloatLabel);
