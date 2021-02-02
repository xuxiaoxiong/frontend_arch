<template>
    <div>
       父组件钱数 :{{mny}}
    </div>
</template>

<script>
    //希望数据被儿子公用， 不希望传递来传递去， react context provider consumer
    //注入数据 可以 随便写 可以把父组件直接注入进去
    //eventBus 定义到了全局上，如果一个人发布一个时间，如果有同名的会全部触发，在大型项目有重名的，不管是儿子还是父亲就会全部触发，所以一般在小型项目上使用
import Son1 from './Son1'
export default {
    data(){
       return {mny : 100} 
    }
}

</script>