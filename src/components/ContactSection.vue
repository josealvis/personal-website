<template>
  <section id="contact" class="section contact-section">
    <div class="center-box-container">
      <h1 class="--centered" data-test="contact-title">
        {{ visiterName ? `${visiterName}, ` : null }}Let’s work together...
      </h1>
      <span class="contact-section__subtitle --centered">contact me at</span>
      <div class="social-media-bar">
        <a 
          v-bind:href="inAccount"
          class="social-media-bar__link"
          title="linkedIn profile"
          target="_blanck"
          data-test="in-icon"
          ><font-awesome-icon :icon="['fab', 'linkedin']"
        /></a>
        <a
          v-bind:href="githubAccount"
          class="social-media-bar__link"
          title="github profile"
          target="_blanck"
          data-test="github-icon"
          ><font-awesome-icon :icon="['fab', 'github']"
        /></a>
        <a
          v-bind:href="`mailto: ${email}`"
          class="social-media-bar__link"
          title="Send me a email"
          data-test="email-icon"
          ><font-awesome-icon :icon="['fas', 'envelope']"
        /></a>
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
      email: personalInfo.email,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../const/colors';
/*Overrided */
.center-box-container {
  padding-top: 10vh;
}

.contact-section {
  background-color: $secondaryDark;
  color: $secondary;
  &__subtitle {
    color: $neutral;
    position: relative;
    top: -30px;
  }
}

.social-media-bar {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  font-size: 5em;
  &__link {
    color: $secondary;
  }
  &__link:hover {
    animation: fade-animation;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
}

@keyframes fade-animation {
  100% {
    color: $neutral;
  }
}
</style>