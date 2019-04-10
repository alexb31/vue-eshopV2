<template>
  <v-app id="productList">
    <v-container grid-list-md text-xs-center>
      <v-layout>
        <v-flex v-for="product in products">
          <products></products>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Products from "../Products/Products";

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          img: "https://picsum.photos/500/300?",
          title: "Product 1",
          price: 90
        },
        {
          id: 2,
          img: "https://picsum.photos/500/300?",
          title: "Product 2",
          price: 45
        },
        {
          id: 3,
          img: "https://picsum.photos/500/300?",
          title: "Product 3",
          price: 670
        }
      ]
    };
  },
  components: {
    Products
  }
};
</script>