<template>
  <v-app>
    <Menu />
    <v-main>
      <!-- <HelloWorld /> -->
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Footer,
    Menu
  },

  data: () => ({
    //
  }),
};
</script>
