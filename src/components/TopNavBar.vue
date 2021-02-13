<template>
  <div id="mobile-toggle">
    <button
      id="toggle-btn"
      aria-label="oggle Button for main menu"
      class="toggle-btn"
      v-on:click="toggleHandler"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
  </div>
  <nav
    class="top-nav-bar"
    v-bind:class="{ 'toggled-in': toggle, 'toggled-out': !toggle }"
    v-on:click="closeMenu()"
  >
    <a href="#intro" v-on:click="closeMenu()">Intro</a>
    <a href="#about-me" v-on:click="closeMenu()">About me</a>
    <a href="#portfolio" v-on:click="closeMenu()">How I code</a>
    <a href="#contact" v-on:click="closeMenu()">Contact</a>
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
<style scoped>
#mobile-toggle {
  display: none;
}
.top-nav-bar {
  z-index: 9000;
  color: #ebf5f0;
  display: flex;
  background-color: #ce2751;
  height: 45px;
  justify-content: flex-end;
  padding-top: 20px;
  position: fixed;
  min-width: 100%;
}
.top-nav-bar a {
  color: #ebf5f0;
  text-decoration: none;
  margin-right: 50px;
}
.top-nav-bar a:hover {
  color: #fff;
}
/*for mobile dispositives */
@media (max-width: 500px) {
  .toggle-btn {
    background-color: transparent;
    border: none;
    outline: none;
    color: #ebf5f0;
    font-size: 1.3em;
  }

  .top-nav-bar {
    z-index: 9000;
    color: #ebf5f0;
    flex-direction: column;
    display: flex;
    background-color: #0a1128;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
    padding-top: 60px;
    position: fixed;
    min-width: 40%;
    padding-left: 5px;
    left: -45%;
  }

  .top-nav-bar a {
    color: #ebf5f0;
    text-decoration: none;
    margin: 0px;
    margin-bottom: 15px;
  }
  .top-nav-bar a:hover {
    color: #fff;
  }

  #mobile-toggle {
    display: flex;
    background-color: #ce2751;
    color: #ebf5f0;
    height: 45px;
    position: fixed;
    z-index: 9001;
    min-width: 100%;
    padding-left: 10px;
  }

  .toggled-in {
    display: flex;
    animation: toggle-in-animation;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }

.toggled-in::before{
    height: 100%;
    content: "";
    position: absolute;
    width: 100vw;
    top:0;
    left: 0;
    z-index: -1 !important;
  }
  
  .toggled-out {
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
      display:none;
    }
  }
}
</style>
