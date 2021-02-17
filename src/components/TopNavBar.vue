<template>
  <div class="mobile-toggle">
    <button
      aria-label="Toggle Button for main menu"
      class="mobile-toggle__btn"
      v-on:click="toggleHandler"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
  </div>
  <nav
    class="top-nav-bar"
    v-bind:class="{
      'top-nav-bar--toggled-in': toggle,
      'top-nav-bar--toggled-out': !toggle,
    }"
    v-on:click="closeMenu()"
  >
    <a href="#intro" class="top-nav-bar__link" v-on:click="closeMenu()"
      >Intro</a
    >
    <a href="#about-me" class="top-nav-bar__link" v-on:click="closeMenu()"
      >About me</a
    >
    <a href="#portfolio" class="top-nav-bar__link" v-on:click="closeMenu()"
      >How I code</a
    >
    <a href="#contact" class="top-nav-bar__link" v-on:click="closeMenu()"
      >Contact</a
    >
  </nav>
</template>

<script>
export default {
  name: "TopNavBar",
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleHandler() {
      this.toggle = !this.toggle;
    },
    closeMenu() {
      this.toggle = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../const/colors.scss";

.mobile-toggle {
  display: none;
}

.top-nav-bar {
  z-index: 9000;
  color: $secondary;
  display: flex;
  background-color: $primary;
  height: 45px;
  justify-content: flex-end;
  padding-top: 20px;
  position: fixed;
  min-width: 100%;
}

.top-nav-bar__link {
  color: $secondary;
  text-decoration: none;
  margin-right: 50px;
}

.top-nav-bar__link:hover {
  opacity: 0.8;
}

/*for mobile dispositives */
@media (max-width: 500px) {
  .mobile-toggle {
    display: flex;
    background-color: $primary;
    color: $secondary;
    height: 45px;
    position: fixed;
    z-index: 9001;
    min-width: 100%;
    padding-left: 10px;
  }

  .mobile-toggle__btn {
    background-color: transparent;
    border: none;
    outline: none;
    color: $secondary;
    font-size: 1.3em;
  }

  .top-nav-bar {
    z-index: 9000;
    color: $secondary;
    flex-direction: column;
    display: flex;
    background-color: $secondaryDark;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
    padding-top: 60px;
    position: fixed;
    min-width: 40%;
    padding-left: 5px;
    left: -45%;
  }

  .top-nav-bar__link {
    color: $secondary;
    text-decoration: none;
    margin: 0px;
    margin-bottom: 15px;
  }
  .top-nav-bar__link:hover {
    color: $secondary;
  }

  .top-nav-bar--toggled-in {
    display: flex;
    animation: toggle-in-animation;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
  .top-nav-bar--toggled-in::before {
    height: 100%;
    content: "";
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1 !important;
  }

  .top-nav-bar--toggled-out {
    animation: toggle-out-animation;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }

  @keyframes toggle-in-animation {
    100% {
      left: 0px;
    }
  }
  @keyframes toggle-out-animation {
    0% {
      left: 0px;
    }
    100% {
      left: -45%;
      display: none;
    }
  }
}
</style>
