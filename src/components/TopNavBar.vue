<template>
  <nav id="top-nav-bar">
      <a href="#about-me" >Who I am</a>
      <a href="#about-me" >How I code</a>
      <a href="#contact" >Contact</a>
  </nav>
</template>

<script>
export default {
  name: 'TopNavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #top-nav-bar{
       z-index: 9000;
       color: #EBF5F0;
       display: flex;
       background-color: #ce2751;
       height: 45px;
       justify-content: flex-end;
       padding-top: 20px;
       position: fixed;
       min-width: 100%;
    }
    #top-nav-bar a{
        color:  #EBF5F0;
        text-decoration: none;
        margin-right: 50px;
    }
     #top-nav-bar a:hover{
        color:  #FFF;
    }
</style>
