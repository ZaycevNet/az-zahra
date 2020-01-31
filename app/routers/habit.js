// const { HabitAdabAlat } = require("@/pages")

const PageHabitAdab = resolve => {
    require.ensure(
        ['@/pages/page-habit-adab'],
        () => {
            resolve(require('@/pages/page-habit-adab'))
        }, 'page-habit-adab'
    )
}

module.exports = [
  {
    path: '/habit-adab',
		name: 'habit-adab',
    component: PageHabitAdab,
    // meta: { auth: true, acl }
  },
]
