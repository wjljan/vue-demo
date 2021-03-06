# vueDemo

> 这是一个vue+vue-router+vuex的demo

## 使用

``` bash
# 安装依赖
npm install 建议使用cnpm安装

# 开发模式
npm run dev

# 生产环境
npm run build

# lint .js和.vue文件
npm run lint

# 单元测试
npm test
```
##说明

``` bash
前段时间学了下vue，这里做个梳理，麻雀虽小五脏俱全=.=
用到的东西有以下：

vue：核心与基础
vue-router：路由
vuex：状态管理、单向数据流(vue里类似于redux的实现)
es2015：demo使用es2015语法，不太熟悉的可以先看看
vue-devtools：chrome扩展插件，方便调试(组件和store)
vue-cli：
    vue提供的一个脚手架工具，可以快速创建基于webpack/browserify的项目，本demo使用browserify，
    工具包括：browserify、watchify、vueify、babel等，具体介绍和使用可查看对应文档。
    这套脚手架支持单文件vue组件、热重载、代码检查等
优化：可以使用patition-bundle进行代码分割和按需加载等，提高单页应用初始加载的速度

demo中出现的'/static/vueTest/'为服务端该demmo的静态资源目录，这个可以自行修改
ps.推荐一个node的mvc+orm的框架：thinkjs
```

##src目录结构说明

``` bash
components：公共可复用的组件
lib：.js、.css
router：路由map和别名map
store：vuex
views：业务组件
App.vue：根组件
main.js：打包入口文件
```


![演示](https://github.com/wjljan/vue-demo/raw/master/img/1.png)

![dev-tools](https://github.com/wjljan/vue-demo/raw/master/img/2.png)

![dev-tools](https://github.com/wjljan/vue-demo/raw/master/img/3.png)
