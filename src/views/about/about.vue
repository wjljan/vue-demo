<template>
	<div class="about-wrapper">
		<ul>
			<li>这是一个demo，前段时间学习的梳理：</li>
			<li class="about-indent">vue + vue-router + vuex</li>
			<li class="about-indent">vue-cli：browserify + watchify + browserify-hmr + vueify + babel + es2015</li>
			<li>作者：lxy</li>
			<li>优化方向：partition-bundle</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name : "about"
	}
</script>

<style lang="stylus">
	@import "../../lib/stylus/common"

	.about-wrapper
		width: 700px
		height: 300px
		padding: 5px
		color: font-color-normal
		font-size: font-size-normal
		border()
	.about-wrapper 
		li 
			margin-bottom: 10px
			list-style: none
		.about-indent 
			padding-left: 20px
</style>