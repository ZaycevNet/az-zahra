import ViewOnboarding from "@/views/onboarding/view-onboarding";

export const onboarding = {
	'/view-onboarding': {
		component: ViewOnboarding,
		meta: { needsAuth: false }
	},
}
