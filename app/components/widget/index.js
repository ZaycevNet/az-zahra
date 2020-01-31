import Vue from 'nativescript-vue'

const Accordion = resolve => {
    require.ensure(
        ['./accordion'],
        () => {
            resolve(require('./accordion'))
        }, 'accordion'
    )
}

Vue.component('Accordion', Accordion)
