<template>
  <span>
    <app-hero></app-hero>
    <productList></productList>
  </span>
</template>

<script>
import Hero from "../Hero/Hero";
import ProductList from "../ProductList/ProductList";

export default {
  components: {
    appHero: Hero,
    ProductList
  }
};
</script>
