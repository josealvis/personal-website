<template>
  <main>
    <section id="intro">
      <div class="center-box-container">
        <h1 id="title">Jose Alvis Pena</h1>
        <span id="subtitle">Fullstack web developer</span>
        <label class="hidden-accesibility" for="input-name"
          >Type your name and press "ENTER"</label
        >
        <input
          id="input-name"
          type="text"
          name="name"
          v-model="visiterName"
          placeholder='Type your name and press "ENTER".'
          v-on:keyup.enter="goTo('about-me')"
          autofocus
        />
      </div>
    </section>
    <section id="about-me">
      <div class="center-box-container">
        <h1>Who I am?</h1>
        <p>
          {{ visiterName ? `Hi ${capitalizeName(visiterName)}.`: null}} It is nice to meet you. let me introduce myself, my name is
          Jose Alvis I am a fullstack web developer. I have flew years working
          in this carrer, more than five if I have to tell. Since that I have
          been Developing web applications for diferent companies, working with
          Git flow, DevOps in SCRUM and AGILE methodologies. My main skill set
          are <span class="hightlight">Javascript ReactJs</span>, C# MVC .net
          core and SQL server, but I also work with other langujes and
          frameworks like Vuejs, NodeJs, Python. Also I have to mantion “I relly
          love to learn new skills”.
        </p>
        <a id="about-link" class="yellow-link" target="_blank" href="http://www.linkedin.com/in/jose-alvis-peña-bonnet-b0194820">
        If you want to know more about my profsional carrear  please visit my 
        <font-awesome-icon :icon="['fab', 'linkedin']" />.
        </a>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: "Home",
  data(){
    return {
      visiterName: null
    }
  },
   methods: {
      capitalizeName(fullName) {
        let names =  fullName.match(/\w+/g)
        return names.map(name=>name[0].toUpperCase() + name.slice(1).toLowerCase()).join(" ");
      },
      goTo(section){
          window.location = '#'+section;
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  /* padding-top: 60px; */
  display: flex;
  flex-direction: column;
}
#title {
  margin-top: 20%;
  font-family: "Century Gothic", "Times New Roman", Times, serif;
  font-size: 6em;
  font-weight: bold;
  letter-spacing: 0px;
}

section {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 500px;
  align-items: center;
}

section h1 {
  align-self: flex-start;
}
#intro {
  align-items: center;
}

.center-box-container {
  display: flex;
  flex-direction: column;
  width: 750px;
  margin-top: 100px;
}

#subtitle {
  align-self: flex-end;
  position: relative;
  top: -95px;
  font-size: 1.5em;
  margin-right: 20px;
  font-weight: bold;
}

#input-name {
  position: relative;
  top: -50px;
  border: none;
  align-self: flex-start;
  padding: 20px;
  min-height: 25px;
  min-width: 400px;
  font-size: 1.2em;
}

#input-name:focus {
  outline: none;
}

#about-me {
  align-items: center;
  background-color: #0a1128;
  color: #fefcfb;
}

.hidden-accesibility {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}

.hightlight {
  color: #ecac00;
}

#about-link{
 margin-top: 50px;
}

.yellow-link{
  color: #ecac00;
  text-decoration: none;
}

.yellow-link:hover{
  color: #ecac00;
  text-decoration: underline;
}
</style>
