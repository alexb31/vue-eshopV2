<template>
  <v-card text-xs-center>
    <router-link :to="'/product/' + product.id">
      <v-img aspect-ratio="1" to="/product" :src="product.img"/>
      <div class="black--text">
        <h2>{{ product.title }}</h2>
        <div>Price: {{ product.price }}&euro;</div>
      </div>
    </router-link>

    <div class="ratings">
      <font-awesome-icon v-if="product.ratings === 1" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 2" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 2" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 3" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 3" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 3" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 4" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 4" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 4" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 4" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 5" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 5" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 5" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 5" icon="star" class="icon alt"/>
      <font-awesome-icon v-if="product.ratings === 5" icon="star" class="icon alt"/>
    </div>

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
import { mapActions, mapGetters } from "vuex";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

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
    ...mapActions(["updateCart"]),
    addToCart() {
      let data = {
        product: Object.assign({}, this.product),
        isAdd: true,
        quantity: 1
      };
      console.log(data);
      this.updateCart(data);
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
        quantity: 1
      };
      this.$store.commit("quantity", data);
    }
  }
};
</script>