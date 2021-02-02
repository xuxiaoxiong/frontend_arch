<template>
    <div>
        userDetail{{this.$route.query}}
        {{this.$route.params.id}}
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        beforeRouteEnter(to,from,next){
            console.log('eee');
            next()
        },
        //方法2
        beforeRouteUpdate(to,form,next){
         alert(1);
         next()
        },
        /*watch:{
          //  方法1.可以监控这个方法，只要这个$route发生变化，实现加载数据
          $route(){
              alert(1)
          }
        },*/
        mounted:{

        }
    }
</script>

<style scoped>

</style>