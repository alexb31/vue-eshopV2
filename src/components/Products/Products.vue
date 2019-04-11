<template>
  <v-card dark color="primary">
    <router-link :to="'/product/' + product.id">
      <v-img to="/product" :src="product.img"/>
      <h2 class="white--text">{{ product.title }}</h2>
      <p class="white--text">Price: {{ product.price }}e</p>
    </router-link>
    <p>{{product.isAddedToCart}}</p>
    <v-btn color="success" @click="addToCart(product.id)">{{ addToCartLabel }}</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "products",
  props: ["product"],
  data() {
    return {
      addToCartLabel: "Add to cart"
    };
  },
  methods: {
    addToCart(id) {
      let data = {
        id: id,
        status: true
      };
      console.log(data);
      this.$store.commit("addToCart", id);
    }
  }
};
</script>