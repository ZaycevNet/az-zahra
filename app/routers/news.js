
import ViewNews from "@/views/news/view-news";
import ViewNewsLike from "@/views/news/view-news-like";
import ViewNewsComment from "@/views/news/view-news-comment";
import ViewNewsMark from "@/views/news/view-news-mark";

export const news = {
	'/view-news': {
		component: ViewNews,
		meta: { needsAuth: false }
	},
	'/view-news-like': {
		component: ViewNewsLike,
		meta: { needsAuth: false }
	},
	'/view-news-comment': {
		component: ViewNewsComment,
		meta: { needsAuth: false }
	},
	'/view-news-mark': {
		component: ViewNewsMark,
		meta: { needsAuth: false }
	},
}
