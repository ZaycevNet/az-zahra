require("./habit-content-item")

import Vue from 'nativescript-vue'

const HabitHeadline = resolve => {
    require.ensure(
        ['./habit-headline'],
        () => {
            resolve(require('./habit-headline'))
        }, 'habit-headline'
    )
}

// const HabitContent = resolve => {
//     require.ensure(
//         ['./habit-content'],
//         () => {
//             resolve(require('./habit-content'))
//         }, 'habit-content'
//     )
// }

Vue.component('HabitHeadline', HabitHeadline)
// Vue.component('HabitContent', HabitContent)
