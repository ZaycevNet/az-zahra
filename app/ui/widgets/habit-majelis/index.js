import Vue from 'nativescript-vue';

const MajelisItemCheckboxBasic = resolve => {
    require.ensure(
        ['./majelis-item-checkbox-basic'],
        () => {
            resolve(require('./majelis-item-checkbox-basic'))
        }, 'majelis-item-checkbox-basic'
    )
};

const MajelisItemCheckboxReadonly = resolve => {
    require.ensure(
        ['./majelis-item-checkbox-readonly'],
        () => {
            resolve(require('./majelis-item-checkbox-readonly'))
        }, 'majelis-item-checkbox-readonly'
    )
};

const MajelisItemTextbox = resolve => {
    require.ensure(
        ['./majelis-item-textbox'],
        () => {
            resolve(require('./majelis-item-textbox'))
        }, 'majelis-item-textbox'
    )
};

const MajelisNewSubtitle = resolve => {
    require.ensure(
        ['./majelis-new-subtitle'],
        () => {
            resolve(require('./majelis-new-subtitle'))
        }, 'majelis-new-subtitle'
    )
};

const MajelisSubtitle = resolve => {
    require.ensure(
        ['./majelis-subtitle'],
        () => {
            resolve(require('./majelis-subtitle'))
        }, 'majelis-subtitle'
    )
};

const MajelisNewTextfield = resolve => {
    require.ensure(
        ['./majelis-new-textfield'],
        () => {
            resolve(require('./majelis-new-textfield'))
        }, 'majelis-new-textfield'
    )
};

const MajelisNewTextview = resolve => {
    require.ensure(
        ['./majelis-new-textview'],
        () => {
            resolve(require('./majelis-new-textview'))
        }, 'majelis-new-textview'
    )
};


const MajelisNewDropdownFloatLabel = resolve => {
    require.ensure(
        ['./majelis-new-dropdown-float-label'],
        () => {
            resolve(require('./majelis-new-dropdown-float-label'))
        }, 'majelis-new-dropdown-float-label'
    )
};

const MajelisNewTimepicker = resolve => {
    require.ensure(
        ['./majelis-new-timepicker'],
        () => {
            resolve(require('./majelis-new-timepicker'))
        }, 'majelis-new-timepicker'
    )
};

const MajelisNewDatepicker = resolve => {
    require.ensure(
        ['./majelis-new-datepicker'],
        () => {
            resolve(require('./majelis-new-datepicker'))
        }, 'majelis-new-datepicker'
    )
};

const MajelisAccordion = resolve => {
    require.ensure(
        ['./majelis-accordion'],
        () => {
            resolve(require('./majelis-accordion'))
        }, 'majelis-accordion'
    )
};

Vue.component('MajelisAccordion', MajelisAccordion);
Vue.component('MajelisItemCheckboxBasic', MajelisItemCheckboxBasic);
Vue.component('MajelisItemCheckboxReadonly', MajelisItemCheckboxReadonly);
Vue.component('MajelisItemTextbox', MajelisItemTextbox);
Vue.component('MajelisSubtitle', MajelisSubtitle);
Vue.component('MajelisNewSubtitle', MajelisNewSubtitle);
Vue.component('MajelisNewTextfield', MajelisNewTextfield);
Vue.component('MajelisNewTextview', MajelisNewTextview);
Vue.component('MajelisNewDropdownFloatLabel', MajelisNewDropdownFloatLabel);
Vue.component('MajelisNewTimepicker', MajelisNewTimepicker);
Vue.component('MajelisNewDatepicker', MajelisNewDatepicker);
