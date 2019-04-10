import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        img: "https://picsum.photos/500/300?",
        title: "Product 1",
        price: 90
      },
      {
        id: 2,
        img: "https://picsum.photos/500/300?",
        title: "Product 2",
        price: 45
      },
      {
        id: 3,
        img: "https://picsum.photos/500/300?",
        title: "Product 3",
        price: 670
      }
    ]
  }
});
