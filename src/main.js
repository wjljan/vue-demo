/**
 * packing的入口
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnimatedList  from 'vue-animated-list'
import App from './App.vue'
import routerMap from './router/map' //router map
import routerAlias from './router/alias' //router alias

Vue.use(VueRouter) //安装路由插件
Vue.use(VueAnimatedList) //安装列表动画插件
Vue.transition('flip', { //注册Animate.css动画
	enterClass : 'flipInY',
	leaveClass : 'flipOutY'
});
//Vue.config.debug = true //开启debug模式

var router = new VueRouter()
router.map(routerMap)
router.alias(routerAlias)
router.beforeEach(function (){
	window.scrollTo(0, 0)
})
router.redirect({
	'*' : '/news'
})

router.start(App, '#app') //启动带路由的应用(创建一个app并挂载到index.html页面的'#app'元素),代替'new Vue()'方式