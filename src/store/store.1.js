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
        description: "Description of Product 1",
        price: 90,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1,
        ratings: 2
      },
      {
        id: 2,
        img: "https://picsum.photos/500/300?",
        title: "Product 2",
        description: "Description of Product 2",
        price: 45,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1,
        ratings: 5
      },
      {
        id: 3,
        img: "https://picsum.photos/500/300?",
        title: "Product 3",
        description: "Description of Product 3",
        price: 670,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1,
        ratings: 1
      },
      {
        id: 4,
        img: "https://picsum.photos/500/300?",
        title: "Tour Eiffel",
        description: "Description of Tour Eiffel",
        price: 777,
        isAddedToCart: false,
        isAddedBtn: false,
        quantity: 1,
        ratings: 4
      }
    ],
    hasSearched: false,
    productTitleSearched: ""
  },
  getters: {
    productsAdded: state => {
      return state.products.filter(el => {
        return el.isAddedToCart;
      });
    },
    productsNumbers(state) {
      return state.products.length;
    },
    products(state) {
      return state.products;
    },
    getProductById: state => id => {
      return state.products.find(product => product.id == id);
    },
    quantity: state => {
      return state.products.quantity;
    }
  },
  mutations: {
    addToCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    },
    setAddedBtn: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.isAddedBtn = data.status;
        }
      });
    },
    removeFromCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    },
    setHasUserSearched: (state, hasSearched) => {
      state.hasSearched = hasSearched;
    },
    setProductTitleSearched: (state, titleSearched) => {
      state.productTitleSearched = titleSearched;
    },
    quantity: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.quantity = data.quantity;
        }
      });
    }
  }
});
