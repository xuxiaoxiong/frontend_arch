<template>
    <div class="ball" :style="style" :id="ballId">
        <slot></slot>
    </div>
</template>


<script>
    // 组件的id问题  _uid
    //属性问题  校验 -> 计算属性
    //双向通信 props+emit  /v-model  /.sync
    //数据的绑定问题  $refs 拿到组件内部的方法  来调用组件中的方法
    export default {
        name: "scroll-ball",
        props:{
            color:{
                type:String,
                default:'white'
            },
            value:{
                type:Number,
                default:0
            },
            target:{
                type:Number,
                target:300
            }
        },
        data(){
          return {
              timer:null
            }
        },
        methods:{
            stop(){
                this.$emit('end');
                cancelAnimationFrame(this.timer)
            }
        },
        mounted(){
            //单向数据流  子组件通知父亲 当前自己的位置，父亲更新位置，在传递给子组件
            let ball = document.getElementById(this.ballId);
            // this.timer;
            let fn=()=>{
                let left=this.value;
                if(left>=this.target){
                   return cancelAnimationFrame(this.timer)
                }
                this.$emit('input1',left+2);
                this.$emit('update:value',left+2);
                ball.style.transform=`translate(${this.value}px)`;
                this.timer= requestAnimationFrame(fn)

            }

            // 写一个  滚动事件
            //浏览器内置方法，会根据更新频率移动,这个方法只会执行一次
            this.timer= requestAnimationFrame(fn)

        },
        computed:{
            ballId(){
                //Vue 组件的_uid来唯一标识（每个Vue实例都会有一个递增的id，可以通过this._uid获取
              return `ball`+this._uid
            },
            style(){
                return {background:this.color}
            }
        }
    }
</script>

<style scoped lang="less">
 .ball{
     width:100px;
     height: 100px;
     border-radius: 50%;
     text-align: center;
     line-height: 100px;
     background: red;
 }
</style>