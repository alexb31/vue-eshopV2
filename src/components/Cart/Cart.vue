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
          <v-btn color="info" @click="checkout">{{checkoutLabel}}</v-btn>
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
  methods: {
    ...mapActions(["saveToTransaction"]),
    checkValidCart(itemList, prodList) {
      let isValid = true;
      return isValid;
    },
    checkout() {
      if (this.isLoggedIn) {
        if (!this.cartItemList || this.cartItemList.length == 0) {
          alert("Cart Empty");
        }
        const isValid = this.checkValidCart(this.cartItemList, this.products);
        if (isValid) {
          this.saveToTransaction({
            cartItemList: this.cartItemList,
            uid: this.currentUser.uid
          }).then(() => {
            this.$router.push("/checkout");
          });
        }
      } else {
        alert("You must be connected");
      }
    }
  },
  computed: {
    ...mapGetters(["products", "cartItemList", "isLoggedIn", "currentUser"]),
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
