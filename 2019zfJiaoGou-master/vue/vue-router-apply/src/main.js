import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import 'bootstrap/dis/css/bootstrap.css'
router.beforeEach((to,form,next)=>{
    console.log('全部');
    next()
})
//当前路由解析后会跳转的钩子
router.beforeResolve((to,form,next)=>{
    console.log('解析');
    next()
})
router.afterEach(()=>{
    console.log('afterEach');
    next()
})
new Vue({
  router,//在实例中引入路由
  render: h => h(App),
}).$mount('#app')
