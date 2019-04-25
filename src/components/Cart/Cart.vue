<template>
  <v-container id="productList">
    <v-container grid-list-md text-xs-center>
      <v-layout>
        <app-cart-item v-for="product in cartItemList" :product="product" :key="product.id"></app-cart-item>
        <div v-if="cartItemList.length === 0">
          <p>{{cartEmptyLabel}}</p>
        </div>
        <div v-else>
          <div>Total: {{priceTotal}}&euro;</div>
          <v-btn color="info" to="/checkout">{{checkoutLabel}}</v-btn>
        </div>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CartItem from "../CartItem/CartItem";

export default {
  data() {
    return {
      cartEmptyLabel: "Your cart is empty",
      checkoutLabel: "Checkout"
    };
  },
  components: {
    appCartItem: CartItem
  },
  computed: {
    ...mapGetters(["products", "cartItemList"]),
    // priceTotal() {
    //   let totalProducts = this.products.length;
    //   let productsAdded = this.$store.getters.productsAdded;
    //   let pricesArray = [];
    //   let finalPrice = "";
    //   let quantity = 1;

    //   productsAdded.forEach(product => {
    //     if (product.quantity >= 1) {
    //       quantity = product.quantity;
    //     }
    //     pricesArray.push(product.price * quantity);
    //   });

    //   finalPrice = pricesArray.reduce((a, b) => a + b, 0);
    //   console.log(finalPrice);
    //   return finalPrice;
    // }
    priceTotal() {
      let res = 0;
      this.cartItemList.map(product => {
        res += product.price * product.quantity;
      });
      return res;
    }
  }
};
</script>
