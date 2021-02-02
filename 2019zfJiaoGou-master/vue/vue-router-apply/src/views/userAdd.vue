<template>
    <div>
        <input type="text" v-model="username">
        <button @click="toList">去列表页面</button>
    </div>
</template>

<script>
    export default {
        methods:{
            toList(){//vue.use(VueRouter) $router存的方法，$route存的属性
              this.$router.push('/user/list');

            }
        },
        name: "userAdd",
        //路由的钩子函数
        beforeRouteLeave(to,from,next){
            if(this.username){
                let confim=window.confim('你需要切换吗');
                if(confim){
                    next()
                }
            }else{
                next()
            }

        },
        data(){
            return {username:''}
        }
    }
</script>

<style scoped>

</style>