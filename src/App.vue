<template>
    <TopNavBar/>
    <Home/>
</template>

<script>
import TopNavBar from "./components/TopNavBar";
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    TopNavBar,
    Home,
  }
};
</script>
