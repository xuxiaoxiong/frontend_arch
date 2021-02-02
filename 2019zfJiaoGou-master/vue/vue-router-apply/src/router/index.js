import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'//存放映射表

//第三方插件，引入后，要使用vue.use() =>install

Vue.use(VueRouter);
//install 方法中 注册了俩个全局组件  router-link  router-view
//会在每个组件上定义俩个属性，$router $route this.$router this.$route

//创建了一个vue实例,用export default默认导出去，只有别的地方用到的话，可以import router from './router/index.js'
export default new VueRouter({
    mode:'hash',//这里面有俩种hash/history;不写的话，就是hash，写的话就是history。在访问路径的时候会在后面加上#，
//    映射表
    routes
});




