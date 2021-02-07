<template>
  <main>
    <section id="intro">
        <div id="center-box-container">
         <h1 id="title">Jose Alvis Pena</h1>
         <span id="subtitle">Fullstack web developer</span>
         <input id="input-name" type="text" placeholder='Type your name and press "ENTER".'>
       </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main{
    padding-top: 60px;
    display: flex;
    flex-direction: column;
}
#title {
font-family:'Century Gothic','Times New Roman', Times, serif;
font-size: 6em;
font-weight: bold;
letter-spacing: 0px;
}

#intro{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;

}

#center-box-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 750px;
    margin-top: 100px;
}

#subtitle{
    align-self: flex-end;
    position: relative;
    top: -95px;
    font-size: 1.5em;
    margin-right: 20px;
    font-weight: bold;
}

#input-name{
 position: relative;
 top: -50px;
 border: none;
 align-self: flex-start;
 padding: 20px;
 min-height: 25px;
 min-width: 400px;
 font-size: 1.2em;
}

#input-name:focus{
 border: none !important;
}
</style>
