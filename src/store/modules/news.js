import {
	REFRESH_NEWS_PAGINATION, //刷新新闻列表分页
	REFRESH_NEWS_GRID, //刷新新闻列表表格
	GET_NEWS_DETAIL //获取新闻详情
} from '../mutation-types'

const state = {
	//新闻表格
	newsRows : [], //本页数据

	//分页组件
	page : 1, //当前第几页
	action : "refreshNewsGrid", //刷新表格action
	rows : 0, //当前每页条数
	total : 0, //总条数
	pageNo : 1, //最后一页页数
	start : 0, //该页开始条数
	end : 0, //该页结束条数

	//新闻详情表单
	formData : {}
}

const mutations = {
	[REFRESH_NEWS_PAGINATION] (state, page, rows, res){
		state.page = page;
		state.rows = rows;
		state.total = res.total;
		state.pageNo =  Math.ceil(state.total / state.rows);
		state.start = 1 + ((page - 1) * rows);
    	state.end = (state.start - 1 + state.limit) > state.total ? state.total : page * state.rows;
	},
	[REFRESH_NEWS_GRID] (state, res){
		state.newsRows = res.data;
	},
	[GET_NEWS_DETAIL] (state, res){
		state.formData = res.data;
	}
}

export default {
	state,
	mutations
}