<template>
  <v-app id="productList">
    <v-container grid-list-md text-xs-center>
      <v-layout>
        <div class="box" v-for="product in products" :key="product.id">
          <p>{{product.title}} {{product.quantity > 0 ? ` - Quantity: ${product.quantity}` : ''}}</p>
        </div>
        <strong>Total: {{priceTotal}}</strong>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
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
  }
};
</script>
