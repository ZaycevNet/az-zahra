import Vue from 'nativescript-vue'

const PageTimeline = resolve => {
    require.ensure(
        ['./page-timeline'],
        () => {
            resolve(require('./page-timeline'))
        }, 'page-timeline'
    )
}

Vue.component('PageTimeline', PageTimeline);
