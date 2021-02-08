<template>
  <main>
    <IntroSection :changeNameHandler="changeNameHandler"/>
    <AboutMeSection :visiterName="visiterName"/>
  </main>
</template>

<script>
import IntroSection from "./IntroSection";
import AboutMeSection from "./AboutMeSection"

export default {
  name: "Home",
  data() {
    return {
      visiterName: null,
    };
  },
  methods: {
    changeNameHandler(newName){
        this.visiterName = newName;
    }
  },
  components: {
    IntroSection,
    AboutMeSection
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
main {
  /* padding-top: 60px; */
  display: flex;
  flex-direction: column;
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

.center-box-container {
  display: flex;
  flex-direction: column;
  width: 750px;
  margin-top: 100px;
}
.hightlight {
  color: #ecac00;
}

</style>
