<template>
  <div>
    <app-hero></app-hero>
    <productList></productList>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Hero from "../Hero/Hero";
import ProductList from "../ProductList/ProductList";

export default {
  components: {
    appHero: Hero,
    ProductList
  },
  methods: {
    ...mapActions(["listenToProductList"])
  },
  created() {
    this.listenToProductList();
  }
};
</script>
