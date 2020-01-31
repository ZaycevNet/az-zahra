// const { HabitAdabAlat } = require("@/pages")

const HabitAdab = resolve => {
    require.ensure(
        ['@/pages/habit-adab'],
        () => {
            resolve(require('@/pages/habit-adab'))
        }, 'page-habit-adab'
    )
}

module.exports = [
  {
    path: '/habit-adab',
		name: 'habit-adab',
    component: HabitAdab,
    // meta: { auth: true, acl }
  },
]
