<template>
  <div id="app">
    <!--v-model=:value +input-->
    <!--:xxx.sync="xxx" = :xxx =this.$emit('update:xxx')-->
    <!--不同的写法第一个写法就是以下3个第终极写法-->
    <ScrollBall color="red" :target="500" :value.sync="pos4" ref="ball4">红球</ScrollBall>
    <ScrollBall color="red" v-model="pos1" :target="500" @update:value="value=>pos1">红球</ScrollBall>
    <ScrollBall color="red" v-model="pos1" :target="500">红球</ScrollBall>
    <ScrollBall color="red" :value="pos1" :target="500" @input1="input">红球</ScrollBall>
    <ScrollBall color="blue" :value="pos2" :target="500">篮球</ScrollBall>
    <button>获取球1的位置</button>
    <button @click="stop">停</button>
  </div>
</template>

<script>
import ScrollBall from './components/ScrollBall'
export default {
  name: 'AppBall',
    data(){
      return {
          pos1:50,
          pos2:100
      }
    },
    components:{
      ScrollBall
    },
    methods:{
      input(value){
          this.pos1=value
      },
      stop(){
         this.$refs.ball4.stop()
      },
      getPosition(){
         console.log(this.pos1)
      }
    }

}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
