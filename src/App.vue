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
html{
   scroll-behavior: smooth;
}

body{
  margin: 0px;
}
h1, h2, h3{
  font-family:'Century Gothic','Times New Roman', Times, serif;
}

h1{
  font-size: 2.5em;
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
