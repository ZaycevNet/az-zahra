import Vue from 'nativescript-vue';

const OnboardingTextfield = resolve => {
    require.ensure(
        ['./onboarding-textfield'],
        () => {
            resolve(require('./onboarding-textfield'))
        }, 'onboarding-textfield'
    )
};

const OnboardingTextview = resolve => {
    require.ensure(
        ['./onboarding-textview'],
        () => {
            resolve(require('./onboarding-textview'))
        }, 'onboarding-textview'
    )
};

const OnboardingTron = resolve => {
    require.ensure(
        ['./onboarding-tron'],
        () => {
            resolve(require('./onboarding-tron'))
        }, 'onboarding-tron'
    )
};

Vue.component('OnboardingTextfield', OnboardingTextfield);
Vue.component('OnboardingTron', OnboardingTron);
Vue.component('OnboardingTextview', OnboardingTextview);
