import Vue from 'nativescript-vue'

const SholatAccordion = resolve => {
    require.ensure(
        ['./sholat-accordion'],
        () => {
            resolve(require('./sholat-accordion'))
        }, 'sholat-accordion'
    )
};

const SholatHeadline = resolve => {
    require.ensure(
        ['./sholat-headline'],
        () => {
            resolve(require('./sholat-headline'))
        }, 'sholat-headline'
    )
}

const SholatItemCheckbox = resolve => {
    require.ensure(
        ['./sholat-item-checkbox'],
        () => {
            resolve(require('./sholat-item-checkbox'))
        }, 'sholat-item-checkbox'
    )
}

const SholatItemSubtitle = resolve => {
    require.ensure(
        ['./sholat-item-subtitle'],
        () => {
            resolve(require('./sholat-item-subtitle'))
        }, 'sholat-item-subtitle'
    )
}

Vue.component('SholatItemCheckbox', SholatItemCheckbox);
Vue.component('SholatItemSubtitle', SholatItemSubtitle);
Vue.component('SholatHeadline', SholatHeadline);
Vue.component('SholatAccordion', SholatAccordion);
