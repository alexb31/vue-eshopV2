<template>
  <v-app id="productDetail">
    <v-container grid-list-md text-xs-center>
      <v-card>
        <v-img :src="product.img" aspect-ratio="2.75"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ product.title }}</h3>
            <div>{{ product.description }}</div>
            <p>Price: {{product.price}}&euro;</p>
          </div>
        </v-card-title>

        <v-btn color="success">Add To Cart</v-btn>
      </v-card>
    </v-container>
  </v-app>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "productDetails",
  data() {
    return {
      product: {},
      card_text: "Description Produit"
    };
  },
  mounted() {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    console.log(this.product);
  }
};
</script>
