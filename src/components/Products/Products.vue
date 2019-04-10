<template>
  <v-card dark color="primary">
    <router-link :to="'/product/' + product.id">
      <v-img to="/product" :src="product.img"/>
      <h2 class="white--text">{{ product.title }}</h2>
      <p class="white--text">Price: {{ product.price }}e</p>
    </router-link>
    <v-btn color="success">Add To Cart</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "products",
  props: ["product"]
};
</script>