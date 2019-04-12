<template>
  <v-container id="productList">
    <v-container grid-list-md text-xs-center>
      <v-layout>
        <div class="box" v-for="product in products" :key="product.id">
          <v-btn @click="removeFromCart(product.id, false)" color="error">Remove Product</v-btn>
          <p>{{product.title}} {{product.quantity > 0 ? ` - Quantity: ${product.quantity}` : ''}}</p>
        </div>
        <div v-if="products.length === 0">
          <p>{{cartEmptyLabel}}</p>
        </div>
        <strong>Total: {{priceTotal}}&euro;</strong>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cartEmptyLabel: "Your cart is empty"
    };
  },
  computed: {
    products() {
      return this.$store.getters.productsAdded;
    },
    priceTotal() {
      console.log("INIT");
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
