import Vue from 'nativescript-vue'

const PageOnboardingLogin = resolve => {
    require.ensure(
        ['./page-onboarding-login'],
        () => {
            resolve(require('./page-onboarding-login'))
        }, 'page-onboarding-login'
    )
}
Vue.component('PageOnboardingLogin', PageOnboardingLogin);
