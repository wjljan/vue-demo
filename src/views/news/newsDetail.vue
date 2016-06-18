<template>
	<div class="news-detail-wrapper animated">
		<k-form v-bind:conf="conf" v-bind:form-data="formData" keep-alive></k-form>
	</div>
</template>

<script>
	import {getNewsDetail} from '../../store/actions'
	import kForm from '../../components/kForm.vue'

	export default {
		name : "newsDetail",
		components : {
			kForm
		},
		data (){
			return {
				conf : {
					title : "新闻详情",
					width : "500px",
					height : "300px",
					store : {module : "news",key : "formData"},
					items : [
						{name : "id",type : "text",labelText : "新闻ID",labelWidth : "60px",labelTextAlign: "right",inputWidth : "200px",readOnly : true},
						{name : "title",type : "text",labelText : "标题",labelWidth : "60px",labelTextAlign: "right",inputWidth : "400px"},
						{name : "author",type : "text",labelText : "作者",labelWidth : "60px",labelTextAlign: "right",inputWidth : "200px"},
						{name : "created_time",type : "text",labelText : "发布时间",labelWidth : "60px",labelTextAlign: "right",inputWidth : "200px",readOnly : true}
					],
					buttons : {
						cancel : {text : "取消",type : "cancel",
							cbFun : ({id}) => {
								this.$router.go('/newsList')
							}
						}
					}
				}
			}
		},
		vuex : {
            actions : {
                getNewsDetail
            }
        },
		route : {
			data ({to : {params : {id}}, next}){
				//在data hook里通过路由传递的新闻id去获取新闻详情数据(注意data和active钩子的区别)
				this.getNewsDetail(id)
				next()
			}
		}
	}
</script>

<style lang="stylus">
	.news-detail-wrapper 
		height: 300px;
</style>