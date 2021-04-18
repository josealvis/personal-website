<template>
  <section id="about-me" class="section about-me-section">
    <div class="center-box-container">
      <h1>Who am I?</h1>
      <p data-test="about-text">
        {{ visiterName ? `Hi ${visiterName}.` : null }} let me introduce myself,
        my name is Jose Alvis I am a fullstack web developer. I have a lot of
        years working in this career, more than five if I have to tell. Since
        that I have been developing web applications for different companies,
        working with Git flow, DevOps in SCRUM, and AGILE methodologies. My main
        skill set are <span class="--hightlight">Javascript</span>,
        <span class="--hightlight">ReactJs</span>,
        <span class="--hightlight">C# MVC .net core</span> and
        <span class="--hightlight">SQL server</span>, but I also work with other
        languages and frameworks like <span class="--hightlight">Vuejs</span>,
        <span class="--hightlight">NodeJs</span>,
        <span class="--hightlight">Python</span>. Also, I have to mention “I
        really love to learn new skills”.
      </p>
      <a
        class="about-me-section__link--yellow"
        target="_blank"
        href="http://www.linkedin.com/in/jose-alvis-peña-bonnet-b0194820"
      >
        If you want to know more about my career please visit my
        <font-awesome-icon :icon="['fab', 'linkedin']" />.
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMeSection",
  props: {
    visiterName: String,
  },
};
</script>

<style lang="scss" >
@import "../const/colors";
.about-me-section {
  align-items: center;
  background-color: $primaryDark;
  color: $secondary;
  &__link {
    margin-top: 50px;
    &--yellow {
      color: $color-yellow;
      text-decoration: none;
    }

    &--yellow:hover {
      text-decoration: underline;
    }
  }
}
</style>