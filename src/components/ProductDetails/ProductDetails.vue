<template>
  <v-app id="productDetail">
    <v-container grid-list-md text-xs-center>
      <v-card>
        <v-img :src="`https://picsum.photos/500/300?`" aspect-ratio="2.75"></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Nom Produit</h3>
            <div>{{ card_text }}</div>
          </div>
        </v-card-title>

        <v-btn color="success">Add To Cart</v-btn>
      </v-card>
    </v-container>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      card_text: "Description Produit"
    };
  }
};
</script>
