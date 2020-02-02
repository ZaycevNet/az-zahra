import Vue from 'nativescript-vue'

const AdabAccordion = resolve => {
    require.ensure(
        ['./adab-accordion'],
        () => {
            resolve(require('./adab-accordion'))
        }, 'adab-accordion'
    )
};

const AdabHeadline = resolve => {
    require.ensure(
        ['./adab-headline'],
        () => {
            resolve(require('./adab-headline'))
        }, 'adab-headline'
    )
}

const AdabItemCheckbox = resolve => {
    require.ensure(
        ['./adab-item-checkbox'],
        () => {
            resolve(require('./adab-item-checkbox'))
        }, 'adab-item-checkbox'
    )
}

const AdabItemSubtitle = resolve => {
    require.ensure(
        ['./adab-item-subtitle'],
        () => {
            resolve(require('./adab-item-subtitle'))
        }, 'adab-item-subtitle'
    )
}

Vue.component('AdabItemCheckbox', AdabItemCheckbox);
Vue.component('AdabItemSubtitle', AdabItemSubtitle);
Vue.component('AdabHeadline', AdabHeadline);
Vue.component('AdabAccordion', AdabAccordion);
