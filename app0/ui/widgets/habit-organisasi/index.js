import Vue from 'nativescript-vue';

// const OrganisasiItemCheckbox = resolve => {
//     require.ensure(
//         ['./organisasi-item-checkbox'],
//         () => {
//             resolve(require('./organisasi-item-checkbox'))
//         }, 'organisasi-item-checkbox'
//     )
// };

// const OrganisasiItemCheckboxBasic = require("./organisasi-item-checkbox-basic")
const OrganisasiItemCheckboxBasic = resolve => {
    require.ensure(
        ['./organisasi-item-checkbox-basic'],
        () => {
            resolve(require('./organisasi-item-checkbox-basic'))
        }, 'organisasi-item-checkbox-basic'
    )
};

// const OrganisasiItemCheckboxReadonly = require("./organisasi-item-checkbox-readonly")
const OrganisasiItemCheckboxReadonly = resolve => {
    require.ensure(
        ['./organisasi-item-checkbox-readonly'],
        () => {
            resolve(require('./organisasi-item-checkbox-readonly'))
        }, 'organisasi-item-checkbox-readonly'
    )
};

// const OrganisasiItemTextbox = require("./organisasi-item-textbox")
const OrganisasiItemTextbox = resolve => {
    require.ensure(
        ['./organisasi-item-textbox'],
        () => {
            resolve(require('./organisasi-item-textbox'))
        }, 'organisasi-item-textbox'
    )
};

// const OrganisasiNewSubtitle = require("./organisasi-new-subtitle")
const OrganisasiNewSubtitle = resolve => {
    require.ensure(
        ['./organisasi-new-subtitle'],
        () => {
            resolve(require('./organisasi-new-subtitle'))
        }, 'organisasi-new-subtitle'
    )
};

// const OrganisasiSubtitle = require("./organisasi-subtitle")
const OrganisasiSubtitle = resolve => {
    require.ensure(
        ['./organisasi-subtitle'],
        () => {
            resolve(require('./organisasi-subtitle'))
        }, 'organisasi-subtitle'
    )
};

// const OrganisasiNewTextfield = require("./organisasi-new-textfield")
const OrganisasiNewTextfield = resolve => {
    require.ensure(
        ['./organisasi-new-textfield'],
        () => {
            resolve(require('./organisasi-new-textfield'))
        }, 'organisasi-new-textfield'
    )
};

// const OrganisasiNewTextview = require("./organisasi-new-textview")
const OrganisasiNewTextview = resolve => {
    require.ensure(
        ['./organisasi-new-textview'],
        () => {
            resolve(require('./organisasi-new-textview'))
        }, 'organisasi-new-textview'
    )
};

// const OrganisasiNewDropdown = require("./organisasi-new-dropdown")
const OrganisasiNewDropdown = resolve => {
    require.ensure(
        ['./organisasi-new-dropdown'],
        () => {
            resolve(require('./organisasi-new-dropdown'))
        }, 'organisasi-new-dropdown'
    )
};

// const OrganisasiNewDropdownFloatLabel = require("./organisasi-new-dropdown-float-label")
const OrganisasiNewDropdownFloatLabel = resolve => {
    require.ensure(
        ['./organisasi-new-dropdown-float-label'],
        () => {
            resolve(require('./organisasi-new-dropdown-float-label'))
        }, 'organisasi-new-dropdown-float-label'
    )
};

// const OrganisasiNewTimepicker = require("./organisasi-new-timepicker")
const OrganisasiNewTimepicker = resolve => {
    require.ensure(
        ['./organisasi-new-timepicker'],
        () => {
            resolve(require('./organisasi-new-timepicker'))
        }, 'organisasi-new-timepicker'
    )
};

// const OrganisasiNewDatepicker = require("./organisasi-new-datepicker")
const OrganisasiNewDatepicker = resolve => {
    require.ensure(
        ['./organisasi-new-datepicker'],
        () => {
            resolve(require('./organisasi-new-datepicker'))
        }, 'organisasi-new-datepicker'
    )
};

// const OrganisasiNewRaddataform = resolve => {
//     require.ensure(
//         ['./organisasi-new-raddataform'],
//         () => {
//             resolve(require('./organisasi-new-raddataform'))
//         }, 'organisasi-new-raddataform'
//     )
// };

// const OrganisasiNewRaddataformDropdown = resolve => {
//     require.ensure(
//         ['./organisasi-new-raddataform-dropdown'],
//         () => {
//             resolve(require('./organisasi-new-raddataform-dropdown'))
//         }, 'organisasi-new-raddataform-dropdown'
//     )
// };

// const OrganisasiAccordion = require("./organisasi-accordion")
const OrganisasiAccordion = resolve => {
    require.ensure(
        ['./organisasi-accordion'],
        () => {
            resolve(require('./organisasi-accordion'))
        }, 'organisasi-accordion'
    )
};

Vue.component('OrganisasiAccordion', OrganisasiAccordion);

// Vue.component('OrganisasiItemCheckbox', OrganisasiItemCheckbox);
Vue.component('OrganisasiItemCheckboxBasic', OrganisasiItemCheckboxBasic);
Vue.component('OrganisasiItemCheckboxReadonly', OrganisasiItemCheckboxReadonly);

Vue.component('OrganisasiItemTextbox', OrganisasiItemTextbox);

Vue.component('OrganisasiSubtitle', OrganisasiSubtitle);


Vue.component('OrganisasiNewSubtitle', OrganisasiNewSubtitle);
Vue.component('OrganisasiNewTextfield', OrganisasiNewTextfield);
Vue.component('OrganisasiNewTextview', OrganisasiNewTextview);
// Vue.component('OrganisasiNewDropdown', OrganisasiNewDropdown);
Vue.component('OrganisasiNewDropdownFloatLabel', OrganisasiNewDropdownFloatLabel);
// Vue.component('OrganisasiNewRaddataform', OrganisasiNewRaddataform);
Vue.component('OrganisasiNewTimepicker', OrganisasiNewTimepicker);
// Vue.component('OrganisasiNewRaddataformDropdown', OrganisasiNewRaddataformDropdown);
Vue.component('OrganisasiNewDatepicker', OrganisasiNewDatepicker);
