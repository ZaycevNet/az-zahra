import Vue from 'nativescript-vue'

const PageDashboardQuicknews = resolve => {
    require.ensure(
        ['./page-dashboard-quicknews'],
        () => {
            resolve(require('./page-dashboard-quicknews'))
        }, 'page-dashboard-quicknews'
    )
}

const PageDashboardHabitHarian = resolve => {
    require.ensure(
        ['./page-dashboard-habit-harian'],
        () => {
            resolve(require('./page-dashboard-habit-harian'))
        }, 'page-dashboard-habit-harian'
    )
}

const PageDashboardHabitTentatif = resolve => {
    require.ensure(
        ['./page-dashboard-habit-tentatif'],
        () => {
            resolve(require('./page-dashboard-habit-tentatif'))
        }, 'page-dashboard-habit-tentatif'
    )
}
const PageDashboardActivity = resolve => {
    require.ensure(
        ['./page-dashboard-activity'],
        () => {
            resolve(require('./page-dashboard-activity'))
        }, 'page-dashboard-activity'
    )
}


const PageDashboardNewsDetailAnchor = resolve => {
    require.ensure(
        ['./page-dashboard-news-detail-anchor'],
        () => {
            resolve(require('./page-dashboard-news-detail-anchor'))
        }, 'page-dashboard-news-detail-anchor'
    )
}

const PageDashboardNews = resolve => {
    require.ensure(
        ['./page-dashboard-news'],
        () => {
            resolve(require('./page-dashboard-news'))
        }, 'page-dashboard-news'
    )
}

Vue.component('PageDashboardNews', PageDashboardNews);
Vue.component('PageDashboardNewsDetailAnchor', PageDashboardNewsDetailAnchor);
Vue.component('PageDashboardQuicknews', PageDashboardQuicknews);
Vue.component('PageDashboardHabitHarian', PageDashboardHabitHarian);
Vue.component('PageDashboardHabitTentatif', PageDashboardHabitTentatif);
Vue.component('PageDashboardActivity', PageDashboardActivity);
