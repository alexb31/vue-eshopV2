<template>
  <v-app id="productDetail">
    <div class="text-xs-center" v-if="isProductLoading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div v-else>
      <v-container grid-list-md text-xs-center>
        <v-img :src="product.img" aspect-ratio="2.75"></v-img>
        <div>
          <h3 class="headline mb-0">{{ product.title }}</h3>
          <div>{{ product.description }}</div>
          <p>Price: {{product.price}}&euro;</p>
          <div class="quantity">
            <v-btn @click="increment()">+</v-btn>
            <p>{{selected}}</p>
            <v-btn @click="decrement()">-</v-btn>
          </div>
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
    </div>
  </v-app>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "productDetails",
  data() {
    return {
      addToCartLabel: "Add to cart",
      removeFromCartLabel: "Remove From cart",
      selected: 1
    };
  },
  computed: {
    ...mapGetters(["products", "isProductLoading"]),
    product() {
      let id = this.$route.params.id;
      if (this.products.length >= id) {
        let filterArr = this.products.filter(item => {
          return item.id == id;
        });
        if (filterArr.length > 0) {
          return filterArr[0];
        }
      }
      return {};
    }
  },
  methods: {
    ...mapActions(["updateCart"]),
    addToCart() {
      let data = {
        product: Object.assign({}, this.product),
        isAdd: true,
        quantity: this.selected
      };
      this.updateCart(data);
    },
    increment() {
      console.log(this.product);
      if (this.selected >= this.product.quantityMax) {
        console.log("Can't carry more");
        this.selected = this.product.quantityMax;
      } else {
        return this.selected++;
      }
    },
    decrement() {
      if (this.selected <= 1) {
        this.selected = 1;
      } else {
        return this.selected--;
      }
    }
  }
};
</script>
