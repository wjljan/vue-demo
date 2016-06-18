<template>
	<div class="app-wrapper">
		<head-bar></head-bar>
		<side-menu></side-menu>
		<div class="app">
			<router-view keep-alive transition="flip" transition-mode="out-in"></router-view>
		</div>
		<foot-bar></foot-bar>
	</div>
</template>

<script>
	import store from './store/index'
	import headBar from './views/headBar.vue'
	import sideMenu from './views/sideMenu.vue'
	import footBar from './views/footBar.vue'

	export default {
		store, //给该实例下的所有子组件注入store
		components : {
			headBar,
			sideMenu,
			footBar
		}
	}
</script>

<style lang="stylus">
	/*公共*/
	@import '/static/vueTest/src/lib/css/common.css'
	/*动画*/
	@import '/static/vueTest/src/lib/css/animate.css'
	
	body 
		font-family: Helvetica, sans-serif;
	.app-wrapper 
		position: relative
		margin: 10px
		width: 825px
	.app 
		float: left
		margin-left: 10px
</style>