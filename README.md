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
这是对前端时间学习vue的一个梳理，用到的东西有以下：

vue：核心与基础
vue-router：路由
vuex：状态管理、单向数据流
es2015：demo使用es2015语法，不太熟悉的可以先看看

vue-cli：
    vue提供的一个脚手架工具，可以快速创建基于webpack/browserify的项目，本demo使用browserify，
    工具包括：browserify、watchify、vueify、babel等，具体介绍和使用可查看对应文档。
    这套脚手架支持单文件vue组件、热重载、代码检查等
优化：可以加上patition-bundle实现代码分割和按需加载等，提高单页应用初始加载的速度

demo中出现的'/static/vueTest/'为服务端该demmo的静态资源目录，
这个根据自己的情况可以修改(ps.推荐一个node的mvc+orm的框架：thinkjs)
    
