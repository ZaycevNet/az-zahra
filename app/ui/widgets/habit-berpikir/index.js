import Vue from 'nativescript-vue'

const BerpikirAccordion = resolve => {
    require.ensure(
        ['./berpikir-accordion'],
        () => {
            resolve(require('./berpikir-accordion'))
        }, 'berpikir-accordion'
    )
};

const BerpikirHeadline = resolve => {
    require.ensure(
        ['./berpikir-headline'],
        () => {
            resolve(require('./berpikir-headline'))
        }, 'berpikir-headline'
    )
}

const BerpikirItemCheckbox = resolve => {
    require.ensure(
        ['./berpikir-item-checkbox'],
        () => {
            resolve(require('./berpikir-item-checkbox'))
        }, 'berpikir-item-checkbox'
    )
}

const BerpikirItemSubtitle = resolve => {
    require.ensure(
        ['./berpikir-item-subtitle'],
        () => {
            resolve(require('./berpikir-item-subtitle'))
        }, 'berpikir-item-subtitle'
    )
}

Vue.component('BerpikirItemCheckbox', BerpikirItemCheckbox);
Vue.component('BerpikirItemSubtitle', BerpikirItemSubtitle);
Vue.component('BerpikirHeadline', BerpikirHeadline);
Vue.component('BerpikirAccordion', BerpikirAccordion);
