<template>
  <v-app id="productList">
    <div class="text-xs-center" v-if="isProductLoading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div v-else>
      <v-container grid-list-md text-xs-center>
        <p>Number of Products : {{total}}</p>
        <v-layout wrap>
          <v-flex v-for="product in products" :key="product.id" xs4>
            <products :product="product"></products>
            <router-link
              :to="{name: 'productDetails', params: {id: product.id, title: product.title,description: product.description,  price: product.price}}"
            ></router-link>
          </v-flex>
        </v-layout>
        <div v-if="products.length === 0">
          <p>{{noProductLabel}}</p>
        </div>
      </v-container>
    </div>
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
      productsFiltered: [],
      noProductLabel: "No product found"
    };
  },
  computed: {
    ...mapGetters({
      products: "products",
      total: "productsNumbers",
      isProductLoading: "isProductLoading"
    })
  }
};
</script>