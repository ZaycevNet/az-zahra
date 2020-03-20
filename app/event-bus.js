import Vue from 'nativescript-vue'
export const EventBus = new Vue();

// Emitter
// @/ui/widgets/habit-tadarus/tadarus-item-checkbox-basic.vue

// Listener
// @/views/habit/view-habit-tadarus-new.vue

// EMITER
/*
const { EventBus } = require('@/event-bus.js');
EventBus.$emit('ViewHabitTadarusModal', true);

*/

// LISTENER
/*
// Import the EventBus we just created.
const { EventBus } = require('@/event-bus.js');

let modal = false
// Listen for the i-got-clicked event and its payload.
EventBus.$on('ViewHabitTadarusModal', data => {
	// console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
	modal = data;
});
*/
