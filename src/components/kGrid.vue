<template>
	<div class="k-grid-wrapper" v-bind:style="{width: width,height: height}">
		<p class="k-grid-title" v-show="title">{{title}}</p>
		<table class="k-grid-table">
			<thead>
				<tr>
					<template v-for="column in columns">
						<template v-if="!column.hidden">
							<th v-bind:style="{width: column.width}">{{column.name}}</th>
						</template>
					</template>
				</tr>
			</thead>
			<tbody>
				<tr v-for="($rowIndex, row) in gridRow" transition="k-row">
					<template v-for="column in columns">
						<template v-if="!column.hidden">
							<td v-if="column.dataIndex != '$operate'">{{row[column.dataIndex]}}</td>
							<td v-else>
								<a class="k-grid-btn" v-link="'/news/newsDetail/' + row[column.param || 'id']" >{{column.text || "操作"}}</a>
							</td>
						</template>
					</template>
				</tr>
			</tbody>
		</table>
		<k-pagination
			v-bind:limit="limit"
			v-bind:url="url"
			v-bind:dis-event="disEvent"
			v-bind:rows="rows"
			v-bind:total="total"
			v-bind:page-no="pageNo"
			v-bind:start="start"
			v-bind:end="end"
			></k-pagination>
	</div>
</template>

<script>
	/**
     * 可复用的表格组件
	 */
	import kPagination from './kPagination.vue';

	export default {
		components : {
			kPagination
		},
		props : {
		    conf : Object, //配置对象
		    rows : Number,
		    total : Number,
		    pageNo : Number,
		    start : Number,
		    end : Number
		},
		computed : {
			width (){
				return this.conf.width || "100%";
			},
			height (){
				return this.conf.height || "100%";
			},
			limit (){
				return this.conf.limit;
			},
			columns (){
				return this.conf.columns;
			},
			title (){
				return this.conf.title;
			},
			disEvent (){
				return this.conf.store.disEvent;
			},
			module (){
				return this.conf.store.module;
			},
			key (){
				return this.conf.store.key;
			},
			gridRow (){
				return this.state[this.module][this.key]
			}
		},
		vuex : {
			getters : {
				state : (state) => state
			}
		}
	}
</script>

<style lang="stylus">
    @import "../lib/stylus/common"
    
    .k-grid-wrapper 
        position: relative
        padding: 5px
        border()
        color: font-color-normal
    .k-grid-title 
        margin-bottom: 5px
        padding-left: 5px
        border-left()
        font-size: 14px
    .k-grid-table 
        width: 100%
        border-spacing: 1px
        background-color: #f5f5f5
    .k-grid-table.top 
        top: 5px
    .k-grid-table.bottom 
        top: 35px
    .k-grid-table th
        background-color: #42b983
        color: #fff
    .k-grid-table tbody 
        background-color: #fff
    .k-grid-table 
    	th
    	td 
	        padding: 10px
	        text-align: center
	        font-size: 12px
	        -webkit-user-select: none
    .k-grid-table tbody tr:hover
        background: #FFFFCC
    .k-grid-btn 
        padding: 5px
        border()
        color: #000000
        text-decoration: none
        background-color: #f8f8f8
    .k-grid-btn:hover 
        color: #fff
        background-color: #33CC66
    /**
     * 列动画,配合vue-animated-list插件
     */
    .k-row 
        box-sizing: border-box
        display: inline-block
        width: 100px
        height: 100px
    .k-row-transition 
        transition(opacity, 1s, ease)
    .k-row-enter 
        opacity: 0
    .k-row-leave 
        opacity: 0
        position: absolute
        bottom: -1000px
    .k-row-move 
        transition(transform, 50s, cubic-bezier(.55, 0, .1, 1))
</style>