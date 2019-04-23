<template>
  <v-app>
    <Header></Header>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
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
  },
  methods: {
    ...mapActions(["listenToProductList"])
  },
  created() {
    this.listenToProductList();
  }
};
</script>
