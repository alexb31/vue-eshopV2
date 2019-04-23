<template>
  <span>
    <v-toolbar app>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-btn flat to="/">{{appTitle}}</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <!-- <search></search> -->
      <!-- <v-btn color="success" class="hidden-sm-and-down" to="/cart">Cart({{numProductsAdded}})</v-btn> -->
      <v-btn flat class="hidden-sm-and-down" to="/login">Login</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/register">Register</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
import Search from "../Search/Search";

export default {
  components: {
    Search
  },
  data() {
    return {
      appTitle: "Vue Shop"
    };
  }
  // computed: {
  //   numProductsAdded() {
  //     return this.$store.getters.productsAdded.length;
  //   }
  // }
};
</script>