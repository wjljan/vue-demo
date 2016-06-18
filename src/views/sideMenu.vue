<template>
	<div class="side-menu-wrapper">
		<template v-for="($menuIndex, menu) in menus">
			<a class="{{menu.class}}" v-link="{path : menu.toPath,activeClass : 'active'}">{{menu.text}}</a>
		</template>
	</div>
</template>

<script>
	export default {
		name : "sideMenu",
		data (){
			return {
				menus : [
					{text : "新闻",toPath : "/news",class : "side-menu active"},
					{text : "说明",toPath : "/about",class : "side-menu"}
				]
			}
		}
	}
</script>

<style lang="stylus">
	@import "../lib/stylus/common"
	
	.side-menu-wrapper 
		min-width: 80px
		height: 335px
		float: left
		margin-right: 20px
		border()
	.side-menu 
		display: block
		font-size: font-size-normal
		text-align: center
		padding: 5px 10px
		border-bottom()
	.side-menu:hover 
		cursor: pointer
	.side-menu:hover,
	.side-menu.active 
		background-color: #FFF3EB
		border-bottom( , , #FFD4B8)
		border-left(3px)
</style>