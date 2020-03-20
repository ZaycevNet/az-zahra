import Vue from 'nativescript-vue';

const DashboardQuicknewsCardHadits = resolve => {
    require.ensure(
        ['./dashboard-quicknews-card-hadits'],
        () => {
            resolve(require('./dashboard-quicknews-card-hadits'))
        }, 'dashboard-quicknews-card-hadits'
    )
};

const DashboardQuicknewsCardDoa = resolve => {
    require.ensure(
        ['./dashboard-quicknews-card-doa'],
        () => {
            resolve(require('./dashboard-quicknews-card-doa'))
        }, 'dashboard-quicknews-card-doa'
    )
};

const DashboardQuicknewsCardSurat = resolve => {
    require.ensure(
        ['./dashboard-quicknews-card-surat'],
        () => {
            resolve(require('./dashboard-quicknews-card-surat'))
        }, 'dashboard-quicknews-card-surat'
    )
};

const DashboardHabitHarian = resolve => {
    require.ensure(
        ['./dashboard-habit-harian'],
        () => {
            resolve(require('./dashboard-habit-harian'))
        }, 'dashboard-habit-harian'
    )
};

const DashboardHabitTentatif = resolve => {
    require.ensure(
        ['./dashboard-habit-tentatif'],
        () => {
            resolve(require('./dashboard-habit-tentatif'))
        }, 'dashboard-habit-tentatif'
    )
};


const DashboardActivity = resolve => {
    require.ensure(
        ['./dashboard-activity'],
        () => {
            resolve(require('./dashboard-activity'))
        }, 'dashboard-activity'
    )
};


const DashboardMiniProfileNews = resolve => {
    require.ensure(
        ['./dashboard-mini-profile-news'],
        () => {
            resolve(require('./dashboard-mini-profile-news'))
        }, 'dashboard-mini-profile-news'
    )
}

const DashboardMiniProfileNewsDetail = resolve => {
    require.ensure(
        ['./dashboard-mini-profile-news-detail'],
        () => {
            resolve(require('./dashboard-mini-profile-news-detail'))
        }, 'dashboard-mini-profile-news-detail'
    )
}

const DashboardNewsCard = resolve => {
    require.ensure(
        ['./dashboard-news-card'],
        () => {
            resolve(require('./dashboard-news-card'))
        }, 'dashboard-news-card'
    )
}

const DashboardNewsCardDetail = resolve => {
    require.ensure(
        ['./dashboard-news-card-detail'],
        () => {
            resolve(require('./dashboard-news-card-detail'))
        }, 'dashboard-news-card-detail'
    )
}

const DashboardNewsCardDetailCommentToolbar = resolve => {
    require.ensure(
        ['./dashboard-news-card-detail-comment-toolbar'],
        () => {
            resolve(require('./dashboard-news-card-detail-comment-toolbar'))
        }, 'dashboard-news-card-detail-comment-toolbar'
    )
}


const DashboardNewsCardDetailComments = resolve => {
    require.ensure(
        ['./dashboard-news-card-detail-comments'],
        () => {
            resolve(require('./dashboard-news-card-detail-comments'))
        }, 'dashboard-news-card-detail-comments'
    )
}

const DashboardNewTextView = resolve => {
    require.ensure(
        ['./dashboard-new-textview'],
        () => {
            resolve(require('./dashboard-new-textview'))
        }, 'dashboard-new-textview'
    )
}

const DashboardButtonRippleDetail = resolve => {
    require.ensure(
        ['./dashboard-button-ripple-detail'],
        () => {
            resolve(require('./dashboard-button-ripple-detail'))
        }, 'dashboard-button-ripple-detail'
    )
}

Vue.component('DashboardButtonRippleDetail', DashboardButtonRippleDetail);
Vue.component('DashboardNewTextView', DashboardNewTextView);
Vue.component('DashboardNewsCardDetailComments', DashboardNewsCardDetailComments);
Vue.component('DashboardNewsCardDetailCommentToolbar', DashboardNewsCardDetailCommentToolbar);
Vue.component('DashboardNewsCardDetail', DashboardNewsCardDetail);
Vue.component('DashboardNewsCard', DashboardNewsCard);
Vue.component('DashboardMiniProfileNews', DashboardMiniProfileNews)
Vue.component('DashboardMiniProfileNewsDetail', DashboardMiniProfileNewsDetail)
Vue.component('DashboardQuicknewsCardHadits', DashboardQuicknewsCardHadits);
Vue.component('DashboardQuicknewsCardDoa', DashboardQuicknewsCardDoa);
Vue.component('DashboardQuicknewsCardSurat', DashboardQuicknewsCardSurat);
Vue.component('DashboardHabitHarian', DashboardHabitHarian);
Vue.component('DashboardHabitTentatif', DashboardHabitTentatif);
Vue.component('DashboardActivity', DashboardActivity);
