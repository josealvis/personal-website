<template>
  <section id="about-me">
    <div class="center-box-container">
      <h1>Who I am?</h1>
      <p>
        {{ visiterName ? `Hi ${visiterName}.` : null }} It is nice to meet you.
        let me introduce myself, my name is Jose Alvis I am a fullstack web
        developer. I have flew years working in this carrer, more than five if I
        have to tell. Since that I have been Developing web applications for
        diferent companies, working with Git flow, DevOps in SCRUM and AGILE
        methodologies. My main skill set are
        <span class="hightlight">Javascript ReactJs</span>, C# MVC .net core and
        SQL server, but I also work with other langujes and frameworks like
        Vuejs, NodeJs, Python. Also I have to mantion “I relly love to learn new
        skills”.
      </p>
      <a
        id="about-link"
        class="yellow-link"
        target="_blank"
        href="http://www.linkedin.com/in/jose-alvis-peña-bonnet-b0194820"
      >
        If you want to know more about my profsional carrear please visit my
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