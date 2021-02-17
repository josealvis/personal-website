<template>
  <section id="about-me">
    <div class="center-box-container">
      <h1>Who I am?</h1>
      <p data-test="about-text">
        {{ visiterName ? `Hi ${visiterName}.` : null }} let me introduce myself, my name is Jose Alvis I am a fullstack web developer. I have a lot of years working in this career, more than five if I have to tell. Since that I have been developing web applications for different companies, working with Git flow, DevOps in SCRUM, and AGILE methodologies. My main skill set are
        <span class="hightlight">Javascript</span>, <span class="hightlight">ReactJs</span>, <span class="hightlight">C# MVC .net core</span> and
        <span class="hightlight">SQL server</span>, but I also work with other languages and frameworks like
        <span class="hightlight">Vuejs</span>, <span class="hightlight">NodeJs</span>, <span class="hightlight">Python</span>.  Also, I have to mention “I really love to learn new skills”.
      </p>
      <a
        id="about-link"
        class="yellow-link"
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

<style>
#about-me {
  align-items: center;
  background-color: #0a1128;
  color: #fefcfb;
}

#about-link {
  margin-top: 50px;
}

.yellow-link {
  color: #ecac00;
  text-decoration: none;
}

.yellow-link:hover {
  color: #ecac00;
  text-decoration: underline;
}
</style>