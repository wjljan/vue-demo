/**
 *说明:
 * @该demo只把导出state和mutations部分划分了模块,在创建store的时候以modules的方式加载,
 * @如果实际业务的actions太大的话也可进行模块划分,结构更清晰
 */
import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news' //新闻mutation模块

Vue.use(Vuex); //安装store插件

export default new Vuex.Store({
	modules : {
		news
	},
	strict : true //严格的state模式,乱改会有警告
})