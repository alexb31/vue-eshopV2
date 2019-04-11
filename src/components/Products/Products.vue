<template>
  <v-card dark color="primary">
    <router-link :to="'/product/' + product.id">
      <v-img to="/product" :src="product.img"/>
      <h2 class="white--text">{{ product.title }}</h2>
      <p class="white--text">Price: {{ product.price }}e</p>
    </router-link>
    <p>{{product.isAddedToCart}}</p>
    <v-btn
      color="success"
      v-if="!product.isAddedToCart"
      @click="addToCart(product.id)"
    >{{ addToCartLabel }}</v-btn>
    <v-btn
      color="error"
      v-if="product.isAddedToCart"
      @click="removeFromCart(product.id, false)"
    >{{removeFromCartLabel}}</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "products",
  props: ["product"],
  data() {
    return {
      addToCartLabel: "Add to cart",
      removeFromCartLabel: "Remove From cart"
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
      this.$store.commit("setAddedBtn", id);
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", id);
    }
  }
};
</script>