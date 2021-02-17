<template>
  <section id="readings" class="section readings-section">
    <div class="center-box-container">
      <h1 class="--centered">What I am reading now</h1>
      <div class="container-books-display">
        <div class="imag-box">
          <a
            href="https://eloquentjavascript.net/"
            alt="EloquentJs webpage"
            target="_black"
          >
            <img
              class="--responsive-img"
              src="https://eloquentjavascript.net/img/cover.jpg"
              alt="art book of EloquentJs"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RecentlyReadingSection",
};
</script>

<style lang="scss">
@import '../const/colors';
.readings-section{
  background-color: $secondaryLight;
}
.container-books-display {
  display: flex;
  justify-content: center;
}
.imag-box {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.imag-box:hover {
  animation: rise-animation;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}

@keyframes rise-animation {
  100% {
    width: 260px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 12px 40px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>