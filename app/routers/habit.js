import View from "@/views/view";

import ViewHabitAdab from "@/views/habit/view-habit-adab";
import ViewHabitBerpikir from "@/views/habit/view-habit-berpikir";
import ViewHabitSholat from "@/views/habit/view-habit-sholat";

import ViewHabitOrganisasiNew from "@/views/habit/view-habit-organisasi-new";
import ViewHabitOrganisasi from "@/views/habit/view-habit-organisasi";
import ViewHabitMejelis from "@/views/habit/view-habit-majelis";
import ViewHabitMejelisNew from "@/views/habit/view-habit-majelis-new";
import ViewHabitMembaca from "@/views/habit/view-habit-membaca";
import ViewHabitMembacaNew from "@/views/habit/view-habit-membaca-new";
import ViewHabitTadarus from "@/views/habit/view-habit-tadarus";
import ViewHabitTadarusNew from "@/views/habit/view-habit-tadarus-new";

import ViewHabitTadarusModal from "@/views/habit/view-habit-tadarus-modal";

import ViewHabitZis from "@/views/habit/view-habit-zis";
import ViewHabitZisNew from "@/views/habit/view-habit-zis-new";

import ViewHabitPuasa from "@/views/habit/view-habit-puasa";
import ViewHabitPuasaNew from "@/views/habit/view-habit-puasa-new";

export const habit = {
	'/home': {
		component: View,
		meta: { needsAuth: false }
	},
	'/view-habit-adab': {
		component: ViewHabitAdab,
		meta: { needsAuth: true }
	},
	'/view-habit-berpikir': {
		component: ViewHabitBerpikir,
		meta: { needsAuth: true }
	},
	'/view-habit-organisasi-new': {
		component: ViewHabitOrganisasiNew,
		meta: { needsAuth: true }
	},
	'/view-habit-organisasi': {
		component: ViewHabitOrganisasi,
		meta: { needsAuth: true }
	},
	'/view-habit-majelis': {
		component: ViewHabitMejelis,
		meta: { needsAuth: true }
	},
	'/view-habit-majelis-new': {
		component: ViewHabitMejelisNew,
		meta: { needsAuth: true }
	},
	'/view-habit-membaca': {
		component: ViewHabitMembaca,
		meta: { needsAuth: true }
	},
	'/view-habit-membaca-new': {
		component: ViewHabitMembacaNew,
		meta: { needsAuth: true }
	},
	'/view-habit-tadarus': {
		component: ViewHabitTadarus,
		meta: { needsAuth: true }
	},
	'/view-habit-tadarus-new': {
		component: ViewHabitTadarusNew,
		meta: { needsAuth: true }
	},
	'/view-habit-tadarus-modal': {
		component: ViewHabitTadarusModal,
		meta: { needsAuth: true }
	},
	'/view-habit-zis': {
		component: ViewHabitZis,
		meta: { needsAuth: true }
	},
	'/view-habit-zis-new': {
		component: ViewHabitZisNew,
		meta: { needsAuth: true }
	},
	'/view-habit-puasa': {
		component: ViewHabitPuasa,
		meta: { needsAuth: true }
	},
	'/view-habit-puasa-new': {
		component: ViewHabitPuasaNew,
		meta: { needsAuth: true }
	},
	'/view-habit-sholat': {
		component: ViewHabitSholat,
		meta: { needsAuth: true }
	}
}
