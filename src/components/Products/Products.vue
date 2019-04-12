<template>
  <v-card text-xs-center>
    <router-link :to="'/product/' + product.id">
      <v-img aspect-ratio="1" to="/product" :src="product.img"/>
      <div class="black--text">
        <h2>{{ product.title }}</h2>
        <div>Price: {{ product.price }}&euro;</div>
      </div>
    </router-link>

    <v-select
      @change="onSelectQuantity(product.id)"
      label="Quantity"
      v-model="selected"
      :items="quantityArray"
    ></v-select>

    <v-card-actions class="justify-center">
      <v-btn
        color="success"
        v-if="!product.isAddedToCart"
        @click="addToCart(product.id)"
      >{{ addToCartLabel }}</v-btn>
      <v-btn
        color="error"
        v-if="product.isAddedToCart"
        @click="removeFromCart(product.id, false)"
      >{{removeFromCartLabel}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "products",
  props: ["product"],
  data() {
    return {
      addToCartLabel: "Add to cart",
      removeFromCartLabel: "Remove From cart",
      selected: 1,
      quantityArray: []
    };
  },
  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    console.log(this.$props.product.quantity);

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
      console.log(this.selected);
    }
  },
  methods: {
    addToCart(id) {
      let data = {
        id: id,
        status: true
      };
      console.log(data);
      this.$store.commit("addToCart", id);
      this.$store.commit("setAddedBtn", id);
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", id);
    },
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
    }
  }
};
</script>