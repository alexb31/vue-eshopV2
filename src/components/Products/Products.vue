<template>
  <v-card dark color="primary">
    <router-link :to="'/product'">
      <v-img to="/product" src="https://picsum.photos/500/300?"/>
      <h2 class="white--text">Title</h2>
      <p class="white--text">Price: 100e</p>
    </router-link>
    <v-btn color="success">Add To Cart</v-btn>
  </v-card>
</template>