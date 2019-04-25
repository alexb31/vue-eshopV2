const state = {
  cartItemList: []
}

const mutations = {
  UPDATE_CART(state, {
    product,
    quantity,
    isAdd
  }) {
    const record = state.cartItemList.find(element => element.id == product.id);
    if (record) {
      if (isAdd) {
        record.quantity += quantity;
      } else {
        record.quantity = quantity;
      }
    } else {
      state.cartItemList.push({
        ...product,
        quantity,
      });
    }
  },
  SET_CART(state, productList) {
    if (productList) {
      state.cartItemList = productList;
    }
  },
  REMOVE_CART_ITEM(state, {
    product
  }) {
    // console.log(state.cartItemList.find(element));
    const record = state.cartItemList.find(element => element.id == product.id);
    console.log("record", record)
    state.cartItemList.splice(state.cartItemList.indexOf(record), 1);
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