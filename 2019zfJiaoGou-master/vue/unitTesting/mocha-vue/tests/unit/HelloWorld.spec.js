import HelloWorld from '@/components/HelloWorld';
import {expect} from 'chai'
import Vue from 'vue';
import {mount} from '@vue/test-utils'//第三方插件测试

// describe('Hello World .vue',()=>{
//     it('传递属性后能否正常显示结果',()=>{//测试组件的ui效果，是否与预期一致
//         //原生自己测试vue
//         //extent方法可以根据实例创建一个类
//         let Constructor = Vue.extend(HelloWorld)
//         //把组件进行挂载
//         //vm.$el获取当前组件挂载的元素
//         //mocha 测试的时候，集成了 jsdom
//         let vm=new Constructor({
//             propsData:{msg:'hello'}
//         }).$mount()
//
//         expect(vm.$el.querySelector('h1').innerHTML).to.be.contain('hello')
//     })
// })

// 用插件写测试vue
describe('Hello World .vue',()=>{
    it('测试 hell world',()=>{
        let wrapper = mount(HelloWorld,{
             propsData:{msg:'hello'}
         })
        // 上面的方法如果觉得麻烦，可以写成下面的
       /* let wrapper = mount(HelloWorld);
        wrapper.setProps({msg:'hello'});*/
        expect(wrapper.find('h1').text()).to.be.contain('hello')

    })

})
