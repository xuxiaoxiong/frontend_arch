import Vue from 'vue'
import App from './App'

//向上通知（实现$emit方法）
Vue.prototype.$dispatch=function (eventName,value) {
    let parent = this.$parent;
    while(parent){
        parent.$emit(eventName,value);
        parent = parent.$parent
    }
};
//向下通知（实现prop方法）
Vue.prototype.$broadcast=function (eventName,value) {
    //获取当前组件下的所有的孩子
    const broadcast = (children) => {
        children.forEach(child => {
            child.$emit(eventName,value);
            if(child.$children){
                broadcast(child.$children);
            }
        })
    }
    broadcast(this.$children)
};




const vm = new Vue({// eslint-disable-line no-unused-vars
    el:'#app',
    render:h=>h(App)
})
//组件间通信
//构建 通信组件