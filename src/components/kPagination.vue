<template>
	<div class="k-pagination-wrapper">
        <p class="k-pagination-msg">第 <input class="k-pagination-page" type="number"
            min="1" 
            max="{{pageNo}}"
            v-model="cur"
            v-on:keyup.enter="refresh"> 页, 每页 {{limit}} 条, 显示第 {{start}} - {{end}} 条, 总共 {{total}} 条</p>
		<ul class="k-pagination-controll">
			<li v-if="showPre" class="k-pagination-arrow">
                <a v-on:click="jumpFirst(cur)">&lt;&lt;</a>
            </li>
			<li v-if="showPre" class="pagination-arrow">
                <a v-on:click="minus(cur)">&lt;</a>
            </li>
			<template v-for="index in indexs">
				<li class="{{classRenderer(index)}}">
					<a v-on:click="btnClick(index)">{{index}}</a>
				</li>
			</template>
			<li v-if="showMoreTail">..</li>
			<li class="{{classRenderer(pageNo)}}">
				<a v-on:click="btnClick(pageNo)">{{pageNo}}</a>
			</li>
			<li v-if="showTail" class="pagination-arrow">
                <a v-on:click="plus(cur)">&gt;</a>
            </li>
			<li v-if="showTail" class="pagination-arrow">
                <a v-on:click="jumpTail(cur)">&gt;&gt;</a>
            </li>
		</ul>
	</div>
</template>

<script>
    /**
     * 可复用的表格分页组件
     */
	export default {
        props : {
            disEvent : String, //向上组组件派发的事件名
            rows : Number, //每页每次请求的数据条数
            total : Number, //总条数
            pageNo : Number, //当前所在页数
            start : Number, //当前页从x条开始
            end : Number //当前页在x条结束
        },
		data (){
            return {
                cur : 1, //当前页码, 默认从第1页开始
                showPre : true, //显示上一页
                showMorePre : true, //首页
                showTail : true, //显示下一页
                showMoreTail : true //尾页
            }
        },
        methods : {
        	refresh (){ //刷新
                if (this.cur > this.pageNo) this.cur = this.pageNo; //当输入页码大于总页码时重置为总页码
                var page = this.cur,
                    rows = this.limit;
                this.$dispatch(this.disEvent, page)
        	},
            classRenderer (index){ //选中样式判断
                return (index == this.cur) ? "k-crt" : "";
            },
        	jumpFirst (data){ //跳转到第一页
                if (data != 1){
                    this.cur = 1;
                    this.refresh();
                }
            },
            minus (data){ //跳转到上一页
                if (data != 1){
                    data --;
                    this.cur = data;
                    this.refresh();
                }
            },
            plus (data){ //跳转到下一页
                if (data != this.pageNo){
                    data ++;
                    this.cur = data;
                    this.refresh();
                }
            },
            jumpTail (data){ //跳转到最后一页
                if (data != this.pageNo){
                    this.cur = this.pageNo;
                    this.refresh();
                }
            },
            btnClick (data){ //点击页数的跳转
                if (data != this.cur){
                    this.cur = data;
                    this.refresh();
                }
            }
        },
        computed : {
            indexs (){
                //每当cur改变的时候，都重新就算indexs数组的值
                var arr = [];
                if (this.cur > 3){
                    arr.push(this.cur - 3);
                    arr.push(this.cur - 2);
                    arr.push(this.cur - 1);
                } else {
                    for (var i = 1;i < this.cur;i ++) arr.push(i);
                }
                if (this.cur != this.pageNo){
                    arr.push(this.cur);
                }
                if (this.cur < (this.pageNo - 3)){
                    arr.push(this.cur + 1);
                    arr.push(this.cur + 2);
                    arr.push(this.cur + 3);
                    if (this.cur < (this.pageNo - 5)){
                        this.$set("showMoreTail", true);
                    }
                } else {
                    this.$set("showMoreTail", false);
                    for (var i = (this.cur + 1);i < this.pageNo;i ++) arr.push(i);
                }
                return arr;
            }
        },
        ready (){
            this.refresh();
        }
	}
</script>

<style lang="stylus">
    @import "../lib/stylus/common"
    
    .k-pagination-wrapper
        position: absolute
        bottom: 5px
        left: 5px
        right: 5px
        height: 20px
        padding: 3px
        border()
        font-size: font-size-small
    .k-pagination-msg 
        float: left
    .k-pagination-page 
        outline: none
        width: 24px
        text-align: center
    .k-pagination-controll
        float: right
    .k-pagination-controll 
        li 
            list-style: none
            float: left
            margin: 0 3px
            padding: 0 3px
            cursor: pointer
    .k-pagination-controll 
        .k-pagination-arrow 
            font-weight: bold
    .k-crt 
        border( , , #42b983)
</style>