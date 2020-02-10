import View from "@/views/view";

import ViewHabitAdab from "@/views/view-habit-adab";
import ViewHabitBerpikir from "@/views/view-habit-berpikir";
import ViewHabitSholat from "@/views/view-habit-sholat";

import ViewHabitOrganisasiNew from "@/views/view-habit-organisasi-new";
import ViewHabitOrganisasi from "@/views/view-habit-organisasi";
import ViewHabitMejelis from "@/views/view-habit-majelis";
import ViewHabitMejelisNew from "@/views/view-habit-majelis-new";
import ViewHabitMembaca from "@/views/view-habit-membaca";
import ViewHabitMembacaNew from "@/views/view-habit-membaca-new";
import ViewHabitTadarus from "@/views/view-habit-tadarus";
import ViewHabitTadarusNew from "@/views/view-habit-tadarus-new";

import ViewHabitTadarusModal from "@/views/view-habit-tadarus-modal";

import ViewHabitZis from "@/views/view-habit-zis";
import ViewHabitZisNew from "@/views/view-habit-zis-new";

import ViewHabitPuasa from "@/views/view-habit-puasa";
import ViewHabitPuasaNew from "@/views/view-habit-puasa-new";

export const routes = {
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
