const state = {
  isLoading: true,
  products: []
}

const mutations = {
  'UPDATE_PRODUCTS_LIST'(state, products) {
    state.products = products;
    state.isLoading = false;
  }
}

const getters = {
  products: (state) => {
    return state.products;
  },
  productsNumbers: (state) => {
    return state.products.length;
  },
  isProductLoading: (state) => {
    console.log(state.isLoading);
    return state.isLoading;
  }
}

export default {
  state,
  mutations,
  getters
}