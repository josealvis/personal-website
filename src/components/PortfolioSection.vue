<template>
  <section id="portfolio" class="section portfolio-section">
    <h1 class="--centered" data-test="test-title">
      {{ visiterName ? `${visiterName}, ` : null }}Here are some projects and
      programming problems I have done
    </h1>
    <span id="portfolio-section__subtitle"
      >Just to have an idea of how I code.</span
    >
    <div class="container-portfolio-display">
      <a
        href="https://github.com/josealvis/personal-website"
        alt="repo of this website"
        class="project-box"
        target="_blanck"
      >
        <img
          class="--responsive-img"
          alt="repo programming challenges"
          src="../assets/pwsc.png"
        />
        <div >
          <span class="project-box__label"
            >&lt; This Page Code /></span
          >
        </div>
      </a>
      <a
        href="https://github.com/josealvis/MayleetCodeChallenge"
        alt="repo programming challenges"
        class="project-box"
        target="_blanck"
      >
        <img
          class="--responsive-img"
          alt="repo programming challenges"
          src="../assets/progammingChallenges.png"
        />
        <div>
          <span class="project-box__label"
            >&lt; Progamming Problems /></span
          >
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "portfolioSection",
  props: {
    visiterName: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../const/colors';
.portfolio-section {
  padding-top: 90px;
  padding-left: 20px;
  padding-right: 20px;

  &__subtitle {
    opacity: 0.8;
    position: relative;
    top: -20px;
  }
}
.container-portfolio-display {
  display: flex;
  justify-content: space-around;
  padding-top: 70px;
  width: 60%;
}
.project-box {
  width: 300px;
  height: 200px;
  background-color: $primaryDark;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  
  &__label {
  display: block;
  color: $secondary;
  padding-top: 20px;
}
}
.project-box:hover {
  animation: rise-animation;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}

@keyframes rise-animation {
  100% {
    width: 320px;
    height: 210px;
    font-size: 17px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 12px 40px 0 rgba(0, 0, 0, 0.19);
  }
}

@media (max-width: 500px) {
  .container-portfolio-display {
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
  }
  .project-box {
    width: 300px;
    height: 200px;
    margin-bottom: 20px;
  }
}
</style>