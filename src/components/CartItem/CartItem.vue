<template>
  <div class="box">
    <router-link :to="'/product/' + product.id">
      <v-img :src="product.img" aspect-ratio="2.75"></v-img>
    </router-link>
    <p>{{product.title}} {{product.quantity > 0 ? ` - Quantity: ${product.quantity}` : ''}}</p>
    <p>{{product.price * product.quantity}}&euro;</p>
    <v-btn @click="removeFromCart" color="error">{{removeProductLabel}}</v-btn>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["product"],
  data() {
    return {
      removeProductLabel: "Remove The Product"
    };
  },
  methods: {
    ...mapActions(["removeItemInCart", "updateCart"]),
    removeFromCart() {
      let vm = this;
      console.log(vm);
      this.removeItemInCart({
        product: vm.product
      });
    },
    updateQuantity(event) {
      let vm = this;
      console.log(this.updateCart());
      this.updateCart({
        product: vm.cartItem,
        quantity: parseInt(event.target.value),
        isAdd: false
      });
    }
  }
};
</script>
