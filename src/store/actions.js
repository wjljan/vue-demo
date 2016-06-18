import {ajax} from '../lib/js/k'
import * as types from './mutation-types'

//错误的回调
const errCb = errmsg => {
	console.info(errmsg);
	alert(errmsg);
}

/**
 * 刷新新闻列表
 * @param store{Object}
 * @param page{Number} 页数
 * @param rows{Number} 条数
 * 数据返回json格式：
	{
		"errno":0,
		"errmsg":"xxx",
		"data":[
			{"id":"123","title":"xxx","url":"xxx","pic":"xxx","created_time":"xxx"} ...
		],
		"total":20,
		"limit":5,
		"currentPage":1,
		"totalPages":4
	}
 */
export const refreshNewsGrid = ({dispatch}, page, rows) => {
	ajax('/news/getnewslist', {
        page : page,
        rows : rows
    }).then((res) => {
    	dispatch(types.REFRESH_NEWS_PAGINATION, page, rows, res); //分页组件数据
    	dispatch(types.REFRESH_NEWS_GRID, res); //列表数据
	}, errCb);
}

/**
 * 获取新闻详情
 * @param store{Object}
 * @param id{Number} 新闻id
 * 数据返回json格式：
	{
		"errno":0,
		"errmsg":"xxx",
		"data":{"id":"123","title":"xxx","url":"xxx","pic":"xxx","created_time":"xxx"}
	}
 */
export const getNewsDetail = ({dispatch}, id) => {
	ajax('/news/getnewsdetail', {
		id : id
	}).then((res) => {
		dispatch(types.GET_NEWS_DETAIL, res); //详情数据
	}, errCb)
}