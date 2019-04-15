<template>
  <v-app id="productDetail">
    <v-container grid-list-md text-xs-center>
      <v-img :src="product.img" aspect-ratio="2.75"></v-img>
      <div>
        <h3 class="headline mb-0">{{ product.title }}</h3>
        <div>{{ product.description }}</div>
        <p>Price: {{product.price}}&euro;</p>
        <v-select
          @change="onSelectQuantity(product.id)"
          label="Quantity"
          v-model="selected"
          :items="quantityArray"
        ></v-select>
      </div>
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
      removeFromCartLabel: "Remove From cart",
      selected: 1,
      quantityArray: []
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
    },
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
    }
  },
  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    this.product = this.$store.getters.getProductById(this.$route.params.id);
    console.log(this.product);
  }
};
</script>
