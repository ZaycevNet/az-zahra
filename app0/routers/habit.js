// const { HabitAdabAlat } = require("@/pages")

// const PageHabitAdab = resolve => {
//     require.ensure(
//         ['@/pages/page-habit-adab'],
//         () => {
//             resolve(require('@/pages/page-habit-adab'))
//         }, 'page-habit-adab'
//     )
// }

const ViewHabitAdab = resolve => {
    require.ensure(
        ['@/views/view-habit-adab'],
        () => {
            resolve(require('@/views/view-habit-adab'))
        }, 'view-habit-adab'
    )
}
// const ViewHabitAdab = require('@/views/view-habit-adab');

const ViewHabitNewOrganisasi = resolve => {
    require.ensure(
        ['@/views/view-habit-organisasi-new'],
        () => {
            resolve(require('@/views/view-habit-organisasi-new'))
        }, 'view-habit-organisasi-new'
    )
}
// const ViewHabitNewOrganisasi = require('@/views/view-habit-organisasi-new');

const ViewHabitOrganisasi = resolve => {
    require.ensure(
        ['@/views/view-habit-organisasi'],
        () => {
            resolve(require('@/views/view-habit-organisasi'))
        }, 'view-habit-organisasi'
    )
}
// const ViewHabitOrganisasi = require('@/views/view-habit-organisasi');

module.exports = [
  // {
  //   path: '/habit-adab',
	// 	name: 'habit-adab',
  //   component: PageHabitAdab,
  //   // meta: { auth: true, acl }
  // },
  {
    path: '/habit-adab',
		name: 'habit-adab',
    component: ViewHabitAdab,
    props: (route) => ({
        routeProps: route.query.routeProps,
    }),
    // meta: { auth: true, acl }
  },
  {
    path: '/habit-organisasi-new',
		name: 'habit-organisasi-new',
    component: ViewHabitNewOrganisasi,
    props: (route) => ({
        routeProps: route.query.routeProps,
    }),
    // meta: { auth: true, acl }
  },
  {
    path: '/habit-organisasi',
		name: 'habit-organisasi',
    component: ViewHabitOrganisasi,
    props: (route) => ({
        routeProps: route.query.routeProps,
    }),
    // meta: { auth: true, acl }
  },
]
