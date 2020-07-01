<template>
  <div id="app">
    <!--{{msg}}-->
    <data-screen></data-screen>
    <!--<div style="background: red; width: 400px; height:200px">-->
    <!--afsdf-->
    <!--</div>-->
    <!--<div style="background: blue; width: 400px; height:200px">-->
    <!--我是地图-->
    <!--</div>-->
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    // import chartcom from './components/chartcom.vue'
    // 首先，把已经定义好的组件导入进来。
    import DataScreen from "./components/screen/data-screen.vue"

    export default {
        name: 'App',
        components: {
            DataScreen: DataScreen // 挂载组件
            // HelloWorld,
            // chartcom
        }
    }
</script>

<style scoped>
  #app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
</style>
