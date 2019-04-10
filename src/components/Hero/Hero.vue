<template>
  <v-container fluid fill-height class="hero" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">SHOPPING CART</div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
.hero {
  background-image: url("http://source.unsplash.com/0BhSKStVtdM");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
