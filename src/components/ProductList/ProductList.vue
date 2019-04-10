<template>
  <v-app id="productList">
    <v-container grid-list-md text-xs-center>
      <v-layout>
        <v-flex v-for="product in products">
          <products :product="product"></products>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Products from "../Products/Products";

export default {
  name: "productList",
  components: {
    Products
  },
  data() {
    return {
      id: ""
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>