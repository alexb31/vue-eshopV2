<template>
  <v-app id="productList">
    <v-container grid-list-md text-xs-center>
      <p>Number of Products : {{total}}</p>
      <v-layout>
        <v-flex v-for="product in products" :key="product.id" xs4>
          <products :product="product"></products>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Products from "../Products/Products";
import { getByTitle } from "@/filters/filters";

export default {
  name: "productList",
  components: {
    Products
  },
  data() {
    return {
      id: "",
      productsFiltered: []
    };
  },
  computed: {
    ...mapGetters({
      total: "productsNumbers"
    }),
    products() {
      if (this.$store.state.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.state.products;
      }
    }
  },
  methods: {
    getProductByTitle() {
      let listOfProducts = this.$store.state.products,
        titleSearched = this.$store.state.productTitleSearched;

      return (this.productsFiltered = getByTitle(
        listOfProducts,
        titleSearched
      ));
    }
  }
};
</script>