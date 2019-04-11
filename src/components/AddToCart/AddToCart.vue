<template>
  <div>
    <v-btn color="success" @click="addToCart(product.id)">Add To Cart</v-btn>
    <p>{{product.id}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Products from "../Products/Products";

export default {
  data() {
    return {
      product: {}
    };
  },
  computed: {
    ...mapGetters(["products"])
  },
  methods: {
    addToCart(id) {
      let data = {
        id: id,
        status: true
      };
      console.log(data);
      this.$store.commit("addToCart", id);
    }
  }
};
</script>
