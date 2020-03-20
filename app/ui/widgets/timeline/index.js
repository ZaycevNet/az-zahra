import Vue from 'nativescript-vue';

const TimelineSubtitleCalendar = resolve => {
    require.ensure(
        ['./timeline-subtitle-calendar'],
        () => {
            resolve(require('./timeline-subtitle-calendar'))
        }, 'timeline-subtitle-calendar'
    )
};

Vue.component('TimelineSubtitleCalendar', TimelineSubtitleCalendar);
