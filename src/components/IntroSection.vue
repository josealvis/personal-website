<template>
  <section id="intro" class="section intro-section" data-test="intro">
    <div class="center-box-container">
      <h1 class="intro-section__title" data-test="title">Jose Alvis Pena</h1>
      <span class="intro-section__subtitle">Fullstack web developer</span>
      <label class="--hidden-accesibility" for="input-name"
        >Type your name and press "ENTER"</label
      >
      <form name="form-vister-name" v-on:submit.prevent>
        <input
          id="input-name"
          class="intro-section__input-name"
          type="text"
          name="name"
          v-model="name"
          placeholder='Type your name and press "ENTER".'
          v-on:keyup.enter="goTo('about-me')"
          autofocus
        />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroSection",
  data() {
    return {
      name: null,
    };
  },
  props: {
    changeNameHandler: Function,
  },
  methods: {
    goTo(section) {
      window.location = "#" + section;
    },
    capitalizeName(fullName) {
      if (!fullName) return fullName;
      let names = fullName.match(/\w+/g);
      return names
        .map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase())
        .join(" ");
    },
  },
  watch: {
    name() {
      this.changeNameHandler(this.capitalizeName(this.name));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../const/colors.scss";

.intro-section {
  &__title {
    margin-top: 20%;
    font-family: "Century Gothic", "Times New Roman", Times, serif;
    font-size: 6em;
    font-weight: bold;
    letter-spacing: 0px;
  }

  &__subtitle {
    align-self: flex-end;
    position: relative;
    top: -95px;
    font-size: 1.5em;
    margin-right: 20px;
    font-weight: bold;
  }
  &__input-name:focus {
    outline: none;
  }
  &__input-name {
    position: relative;
    top: -50px;
    border: none;
    align-self: flex-start;
    padding: 20px;
    min-height: 25px;
    min-width: 400px;
    font-size: 1.2em;
  }
}
/*for mobile dispositives */
@media (max-width: 500px) {
  .intro-section {
    &__title {
      margin-top: 30%;
      font-family: "Century Gothic", "Times New Roman", Times, serif;
      font-size: 3em;
      font-weight: bold;
      letter-spacing: 0px;
    }

    &__input-name {
      position: relative;
      top: -40px;
      border: none;
      align-self: flex-start;
      padding: 20px;
      min-height: 25px;
      min-width: 80%;
      font-size: 1em;
    }

    &__subtitle {
      align-self: flex-end;
      position: relative;
      top: -40px;
      font-size: 1.5em;
      margin-right: 20px;
      font-weight: bold;
    }
  }
}
</style>