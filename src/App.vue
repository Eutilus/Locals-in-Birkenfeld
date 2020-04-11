<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Scroll />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Scroll from "@/components/Scroll";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Scroll
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

.navbar {
  position: fixed !important;
  width: 100%;
}

.footer {
  background: #242f3e;
  color: #fff;
  padding-top: 40px;
  padding-bottom: 40px;
}

.sponsored {
  color: #000;
  padding-top: 40px;
  padding-bottom: 40px;

  h2 {
    padding-bottom: 20px;
  }
}
nav {
  z-index: 1;
}
</style>
