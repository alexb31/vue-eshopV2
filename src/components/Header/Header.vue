<template>
  <span>
    <v-toolbar app>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-btn flat to="/">{{appTitle}}</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <!-- <search></search> -->
      <v-btn color="success" class="hidden-sm-and-down" to="/cart">Cart({{numProductsAdded}})</v-btn>
      <div v-if="!isLoggedIn">
        <v-btn flat class="hidden-sm-and-down" to="/login">Login</v-btn>
        <v-btn flat class="hidden-sm-and-down" to="/register">Register</v-btn>
      </div>
      <div v-else>
        <v-btn flat class="hidden-sm-and-down" to="/register">
          <a @click="logout">Logout {{ userEmail }}</a>
        </v-btn>
      </div>
    </v-toolbar>
  </span>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Search from "../Search/Search";

export default {
  components: {
    Search
  },
  data() {
    return {
      appTitle: "Vue Shop"
    };
  },
  computed: {
    ...mapGetters(["currentUser", "isLoggedIn", "cartItemList"]),
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
      console.log(this.isLoggedIn);
    },
    numProductsAdded() {
      console.log(this.cartItemList);
      return this.cartItemList.reduce((total, product) => {
        total += product.quantity;
        return total;
      }, 0);
    }
  },
  methods: {
    ...mapActions(["logout"])
  }
  // computed: {
  //   numProductsAdded() {
  //     return this.$store.getters.productsAdded.length;
  //   }
  // }
};
</script>