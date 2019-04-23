<template>
  <v-container id="productList">
    <v-container grid-list-md text-xs-center>
      <v-layout>
        <div class="box" v-for="product in products" :key="product.id">
          <router-link :to="'/product/' + product.id">
            <v-img :src="product.img" aspect-ratio="2.75"></v-img>
          </router-link>
          <p>{{product.title}} {{product.quantity > 0 ? ` - Quantity: ${product.quantity}` : ''}}</p>
          <p>{{product.price * product.quantity}}&euro;</p>
          <v-btn @click="removeFromCart(product.id, false)" color="error">{{removeProductLabel}}</v-btn>
        </div>
        <div v-if="products.length === 0">
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
export default {
  data() {
    return {
      cartEmptyLabel: "Your cart is empty",
      removeProductLabel: "Remove The Product",
      checkoutLabel: "Checkout"
    };
  },
  computed: {
    products() {
      return this.$store.getters.productsAdded;
    },
    priceTotal() {
      let totalProducts = this.products.length;
      let productsAdded = this.$store.getters.productsAdded;
      let pricesArray = [];
      let finalPrice = "";
      let quantity = 1;

      productsAdded.forEach(product => {
        if (product.quantity >= 1) {
          quantity = product.quantity;
        }
        pricesArray.push(product.price * quantity);
      });

      finalPrice = pricesArray.reduce((a, b) => a + b, 0);
      console.log(finalPrice);
      return finalPrice;
    }
  },
  methods: {
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      console.log(data);
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);
    }
  }
};
</script>
