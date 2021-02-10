<template>
  <section id="contact">
    <div class="center-box-container">
      <h1 class="centered">
        {{ visiterName ? `${visiterName}, ` : null }}Let’s work together...
      </h1>
      <span id="contact-subtitle" class="centered">contact me at</span>
      <div id="social-media-bar">
        <a v-bind:href="inAccount"
          title="linkedIn profile"
          target="_blanck"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
        <a
          v-bind:href="githubAccount"
          title="github profile"
          target="_blanck"
          ><font-awesome-icon :icon="['fab', 'github']"
        /></a>
        <a v-bind:href = "`mailto: ${email}`" title="Send me a email"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
      </div>
    </div>
  </section>
</template>

<script>
import { personalInfo } from "../const/config";

export default {
  name: "ContactSection",
  props: {
    visiterName: String,
  },
  data() {
    return {
      inAccount: personalInfo.inAccount,
      githubAccount: personalInfo.gitHubAccount,
      email: personalInfo.email
    };
  },
};
</script>

<style scoped>
/*Overrided */
.center-box-container {
  padding-top: 10vh;
}

#contact {
  background-color: #161616;
  color: #fefcfb;
}

.centered {
  align-self: center;
}

#contact-subtitle {
  color: #308ec5;
  position: relative;
  top: -30px;
}
#social-media-bar {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  font-size: 5em;
}

#social-media-bar a {
  color: #fefcfb;
}

#social-media-bar a:hover {
  animation: fade-animation;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}

@keyframes fade-animation {
  100% {
    color: #308ec5;
  }
}
</style>