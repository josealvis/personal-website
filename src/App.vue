<template>
  <TopNavBar></TopNavBar>
  <Home/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TopNavBar from './components/TopNavBar'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
   // HelloWorld
   TopNavBar,
   Home
  }
}
</script>

<style>
body{
  margin: 0px;
}
#app {
  font-family: Consolas, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-color: #FEFCFB;
  /* margin-top: 60px; */
}
</style>
