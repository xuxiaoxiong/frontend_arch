<template>
    <div>
        <ul>
            <li><router-link to="/user/detail?id=1">用户1</router-link></li>
            <!--在routers.js路由里直接配置参数-->
            <li><router-link to="/user/detail/2">用户2</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "userAdd",
        beforeRouteEnter(){
        //    此方法中不能拿到this，因为还没进来呢
            if(from.name=='userAdd'){
                console.log('是这里过的');
            }
              //当组件都渲染完成之后，才会拿到这个东西，会调用当前beforeRouteEnter
              next(vm=>{
                  //获取实例
                  console.log(vm)
              })
        }
    }
</script>

<style scoped>

</style>