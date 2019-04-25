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
    ...mapActions(["listenToProductList", "getShoppingCart"])
  },
  created() {
    let uid = this.$store.getters.currentUser.uid;
    this.listenToProductList();
    this.getShoppingCart({
      uid,
      currentCart: this.$store.getters.cartItemList
    });
  }
};
</script>
