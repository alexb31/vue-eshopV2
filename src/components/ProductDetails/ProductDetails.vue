<template>
  <v-app id="productDetail">
    <v-container grid-list-md text-xs-center>
      <v-card>
        <v-img :src="product.img" aspect-ratio="2.75"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ product.title }}</h3>
            <div>{{ product.description }}</div>
            <p>Price: {{product.price}}&euro;</p>
          </div>
        </v-card-title>
        <v-btn
          color="success"
          v-if="!product.isAddedToCart"
          @click="addToCart(product.id)"
        >{{ addToCartLabel }}</v-btn>
        <v-btn
          color="error"
          v-if="product.isAddedToCart"
          @click="removeFromCart(product.id, false)"
        >{{ removeFromCartLabel }}</v-btn>
      </v-card>
    </v-container>
  </v-app>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "productDetails",
  data() {
    return {
      product: {},
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
      this.$store.commit("setAddedBtn", data);
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      console.log(data);
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);
    }
  },
  mounted() {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    console.log(this.product);
  }
};
</script>
