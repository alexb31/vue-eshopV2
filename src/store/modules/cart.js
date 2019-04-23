const state = {
  cartItemList: []
}

const mutations = {
  UPDATE_CART(state, {
    product,
    quantity
  }) {
    state.cartItemList.push({
      ...product,
      quantity
    })
  },
  SET_CART(state, productList) {
    if (productList) {
      state.cartItemList = productList;
    }
  }
}

const actions = {
  clearCart: ({
    commit
  }) => {
    commit("SET_CART");
  }
}

const getters = {
  cartItemList: (state) => {
    return state.cartItemList;
  },
  cartValue: (state) => {
    let res = 0;
    state.cartItemList.map(product => {
      res += product.price * product.quantity;
    });
    return res;
  }
}

export default {
  state,
  mutations,
  getters
}