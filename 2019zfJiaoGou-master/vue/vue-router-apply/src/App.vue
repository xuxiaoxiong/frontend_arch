<template>
  <div id="app">
    <div class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand">
            <a>管理</a>
          </div>
        </div>
        <ul class="navbar-nav nav">
          <li><router-link tag="span" :to="{name:'home'}">首页</router-link></li>
          <li><router-link :to="{name:'profile'}">个人中心</router-link></li>
          <li><router-link :to="{path:'/user'}">用户</router-link></li>
          <li><router-link :to="{name:'login'}">登录</router-link></li>
        </ul>
      </div>
      <div class="container">
        <router-view></router-view>
        <router-view name="name"></router-view>
        <router-view name="version"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollBall from './components/ScrollBall'
export default {
  name: 'App',


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
