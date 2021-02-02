import { initState } from './observer'
import Watcher from './observer/watcher'
import util, { compile } from './util'
import { h, patch, render } from './vdom/index'

//这里使用es5的构造函数 而没有使用es6的类是因为构造函数比较方便拓展，可以吧方法写进多个文件
function Vue(options) {
    this._init(options)//首先初始化
}

//vue初始化
Vue.prototype._init = function (options) {
    let vm = this;
    vm.$options = options;
    //MVVM原理 重新初始化数据（data/computed/watch）
    initState(vm)

    //挂载
    if (vm.$options.el) {
        this.$mount()
    }
}

//挂载
Vue.prototype.$mount = function () {
    let vm = this;
    vm.$el = util.query(vm.$options.el);
    mountComponent(vm, vm.$el)
}

Vue.prototype._render=function(){
    let vm=this;
    return vm.$options.render.call(vm,h)
}

//更新
Vue.prototype._update = function (vNode) {
    let vm=this;
    let oldVNode=vm.oldVNode
    vm.oldVNode=vNode;
    if(oldVNode){
        vm.$el=patch(oldVNode,vNode)
    }else{
        vm.$el=render(vNode,vm.$el)
    }
    
    //创建dom碎片
    // let fragment = document.createDocumentFragment();
    // let first;
    // while (first = el.firstChild) {
    //     fragment.appendChild(first)
    // }
    // //根据vm的数据来编译dom
    // compile(vm, fragment)
    // //插入el
    // el.appendChild(fragment)
}

//原型上的watch
Vue.prototype.$watch = function (key, handel) {
    let vm = this;
    new Watcher(vm, key, handel, { user: true })
}

function mountComponent(vm, el) {
    //更新函数
    let updateComponent = () => {
        vm._update(vm._render(), el)
    }
    //渲染watcher
    new Watcher(vm, updateComponent)
}



export default Vue