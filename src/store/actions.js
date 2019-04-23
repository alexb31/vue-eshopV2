import {
  ref,
  firebaseAuth
} from '../firebase';

export function listenToProductList({
  commit
}) {
  return ref.child("products").on('value', (products) => {
    commit('UPDATE_PRODUCTS_LIST', products.val());
  });
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