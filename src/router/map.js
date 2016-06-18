/**
 * 导入需要映射的组件
 */

//新闻
import news from '../views/news/news.vue'
import newsList from '../views/news/newsList.vue'
import newsDetail from '../views/news/newsDetail.vue'
//关于
import about from '../views/about/about.vue'

/**
 * 导出路由映射map
 */
export default {
	'/news' : {
		component : news,
		subRoutes : {
			'/newsList' : {
				component : newsList
			},
			'/newsDetail/:id' : {
				component : newsDetail
			}
		}
	},
	'about' : {
		component : about
	}
}