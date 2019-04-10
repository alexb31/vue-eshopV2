<template>
  <v-app>
    <Header></Header>
    <v-content transition="slide-x-transition"></v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      //
    };
  }
};
</script>
