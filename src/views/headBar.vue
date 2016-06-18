<template>
	<div class="head-bar-wrapper">
		vue demo<span class="head-bar-hello">你好, 访问者</span>
	</div>
</template>

<script>
	export default {
		name : "headBar"
	}
</script>

<style lang="stylus">
	@import "../lib/stylus/common"
	
	.head-bar-wrapper
		position: relative
		margin-bottom: 10px
		padding: 10px
		text-align: left
		font-size: font-size-small
		color: font-color-normal
		border()
		.head-bar-hello
			position: absolute
			right: 10px
</style>