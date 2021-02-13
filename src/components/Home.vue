<template>
  <main>
    <KCode />
    <IntroSection :changeNameHandler="changeNameHandler"/>
    <AboutMeSection :visiterName="visiterName"/>
    <PortfolioSection :visiterName="visiterName"/>
    <RecentlyReadingSection/>
    <ContactSection :visiterName="visiterName"/>
    <footer>
        <p>© 2021 Jose Alvis Pena.  Made with <a class="footer-link" href="https://vuejs.org/" >Vue.js</a> + CSS</p>
    </footer>
  </main>
</template>

<script>
import IntroSection from "./IntroSection"
import AboutMeSection from "./AboutMeSection"
import ContactSection from "./ContactSection"
import RecentlyReadingSection from "./RecentlyReadingSection"
import PortfolioSection from "./PortfolioSection"
import KCode from "./KCode"

export default {
  name: "Home",
  data() {
    return {
      visiterName: null
    };
  },
  methods: {
    changeNameHandler(newName){
        this.visiterName = newName;
    }
  },
  components: {
    IntroSection,
    AboutMeSection,
    ContactSection,
    RecentlyReadingSection,
    PortfolioSection,
    KCode
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
main {
  display: flex;
  flex-direction: column;
  min-width: 100vw;
}

section {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 500px;
  align-items: center;

}
@media (max-width: 500px) {
  section {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
}


}

section h1 {
  align-self: flex-start;
}

.center-box-container {
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: 20px;
  margin-top: 100px;
}

.hightlight {
  color: #ecac00;
}
footer{
    background-color: #1e1b18;
    color: #fefcfb;
    display: flex;
    justify-content: center;
    padding: 10px;
}
.footer-link{
  text-decoration: none;
  color:#fefcfb;
  font-weight: bold;
}
.footer-link:hover{
  text-decoration: none;
  color:#3e92cc;
}
</style>
