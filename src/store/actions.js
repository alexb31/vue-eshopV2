import {
  ref,
  firebaseAuth
} from '../firebase';

export const updateCart = ({
  commit
}, {
  product,
  quantity,
  quantityMax,
  isAdd
}) => {
  commit('UPDATE_CART', {
    product,
    quantity,
    quantityMax,
    isAdd
  });

}

export const removeItemInCart = ({
  commit
}, {
  product
}) => {
  commit('REMOVE_CART_ITEM', {
    product
  })
}

export function listenToProductList({
  commit
}) {
  return ref.child("products").on('value', (products) => {
    commit('UPDATE_PRODUCTS_LIST', products.val());
  });
}

export function getShoppingCart({
  commit
}, {
  uid,
  currentCart
}) {
  if (uid) {
    return ref.child("cart/" + uid).once('value').then((cart) => {
      if (cart.val() && (!currentCart || currentCart.length == 0)) {
        commit('SET_CART', cart.val())
      }
    });
  } else {
    console.log("USER HAS NOT LOGGED IN");
  }
}

export const registerWithEmail = (_, {
  email,
  password
}) => {
  return firebaseAuth().createUserWithEmailAndPassword(email, password);
}

export const loginWithEmail = (_, {
  email,
  password
}) => {
  return firebaseAuth().signInWithEmailAndPassword(email, password);
}

export const logout = ({
  commit
}) => {
  return firebaseAuth().signOut()
}

export function saveToTransaction(_, {
  uid,
  cartItemList
}) {
  let newTransactionKey = ref.child("transactions").push().key;
  var newTransaction = {};
  newTransaction[
    "/transactions/" + uid + "/" + newTransactionKey
  ] = cartItemList;
  console.log(newTransaction);
  return ref.update(newTransaction);
}