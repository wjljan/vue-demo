<template>
	<div class="news-list-wrapper animated">
		<k-grid keep-alive
			v-bind:conf="gridConf"
			v-bind:rows="rows"
			v-bind:total="total"
			v-bind:page-no="pageNo"
			v-bind:start="start"
			v-bind:end="end"
			></k-grid>
	</div>
</template>

<script>
	import {refreshNewsGrid} from '../../store/actions'
	import kGrid from '../../components/kGrid.vue'

	export default {
		name : "newsList",
		components : {
			kGrid
		},
		data (){
			return {
				limit : 5,
				gridConf : {
					store : {disEvent : "pagRefresh",module : "news",key : "newsRows"}, //给公共子组件指明store的信息
					columns : [
						{name : "新闻ID",dataIndex : "id",width : "15%",hidden : false},
						{name : "标题",dataIndex : "title",width : "45%"},
						{name : "作者",dataIndex : "author",width : "10"},
						{name : "发布时间",dataIndex : "created_time",width : "20%"},
						{name : "编辑",dataIndex : "$operate",width : "10%",text : "编辑",param : 'id'}
					],
					title : "新闻列表",
					width : "700px",
					height : "300px"
				}
			}
		},
		vuex : {
		 	getters : {
                rows : ({news}) => news.rows, //每页条数(固定)
                total : ({news}) => news.total, //总条数
                pageNo : ({news}) => news.pageNo, //最后一页页数
                start : ({news}) => news.start, //该页开始条数
                end : ({news}) => news.end //该页结束条数
            },
            actions : {
                refreshNewsGrid
            }
        },
        events : {
        	pagRefresh (curPage){
        		this.refreshNewsGrid(curPage, this.limit);
        	}
        }
	}
</script>

<style lang="stylus">
	.news-list-wrapper 
		height: 300px;
</style>