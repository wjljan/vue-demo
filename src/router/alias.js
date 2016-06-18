/**
 * 导出路由别名map
 * @把'/a'取别名为'/a/b/c',当访问'/a'时,地址栏中的URL是'/a',路由匹配却像是在访问'/a/b/c'
 */
export default {
	//新闻
	'/news' : '/news/newsList',
}